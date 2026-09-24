#!/usr/bin/env node
// Prints a Markdown report of listed GitHub repositories that are missing, renamed, archived, or stale.
// Prints nothing when every repository is healthy. Set GITHUB_TOKEN to avoid API rate limits.

import {readFileSync} from 'node:fs';

const STALE_DAYS = 180;
const token = process.env.GITHUB_TOKEN;
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

const repos = [...new Set(
	[...readme.matchAll(/\]\(https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)/g)]
		.map(([, owner, repo]) => `${owner}/${repo}`),
)];

const headers = {accept: 'application/vnd.github+json', 'user-agent': 'awesome-microsandbox-health'};
if (token) {
	headers.authorization = `Bearer ${token}`;
}

const problems = {missing: [], renamed: [], archived: [], stale: []};
const now = Date.now();

for (const slug of repos) {
	const response = await fetch(`https://api.github.com/repos/${slug}`, {headers});

	if (response.status === 404) {
		problems.missing.push(`- \`${slug}\``);
		continue;
	}

	if (!response.ok) {
		throw new Error(`GitHub API returned ${response.status} for ${slug}`);
	}

	const data = await response.json();

	if (data.full_name.toLowerCase() !== slug.toLowerCase()) {
		problems.renamed.push(`- \`${slug}\` → [${data.full_name}](${data.html_url})`);
	}

	if (data.archived) {
		problems.archived.push(`- [${slug}](${data.html_url})`);
		continue;
	}

	const idleDays = Math.floor((now - Date.parse(data.pushed_at)) / 86_400_000);
	if (idleDays > STALE_DAYS) {
		problems.stale.push(`- [${slug}](${data.html_url}) - last push ${data.pushed_at.slice(0, 10)} (${idleDays} days)`);
	}
}

const sections = [
	['Missing (404)', problems.missing],
	['Renamed or transferred', problems.renamed],
	['Archived', problems.archived],
	[`No push in ${STALE_DAYS}+ days`, problems.stale],
].filter(([, items]) => items.length > 0);

if (sections.length > 0) {
	console.log(`Checked ${repos.length} GitHub repositories listed in README.md.\n`);
	for (const [title, items] of sections) {
		console.log(`### ${title}\n\n${items.join('\n')}\n`);
	}

	console.log('Review each entry against the inclusion criteria in CONTRIBUTING.md: update the link, mark it *Experimental.*, or remove it.');
}
