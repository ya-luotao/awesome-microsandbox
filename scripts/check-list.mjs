#!/usr/bin/env node
// Checks README.md entries against the rules in CONTRIBUTING.md:
// entry format, duplicate links and names, alphabetical order, description length, and version pins.

import {readFileSync} from 'node:fs';

const MAX_DESCRIPTION = 100;
// Sections kept in curated order instead of alphabetical.
const UNSORTED_SECTIONS = new Set(['Contents', 'Official', 'SDKs and Clients > Official']);
const VERSION_PIN = /[<>]=?\s*v?\d|\bv?\d+\.\d+\.\d+\b|\bpinned\b/i;
const ENTRY = /^- \[(?<name>[^\]]+)\]\((?<url>[^)]+)\) - (?<description>.+)$/;

const lines = readFileSync(new URL('../README.md', import.meta.url), 'utf8').split('\n');
const errors = [];
const seenUrls = new Map();
const seenNames = new Map();
let h2 = '';
let section = '';
let previous = null;

const sortKey = name => name.toLowerCase().replace(/^[^a-z0-9]+/, '');
const normalizeUrl = url => url.toLowerCase().replace(/\/+$/, '').replace(/#.*$/, '');

lines.forEach((line, index) => {
	const lineNumber = index + 1;
	const report = message => errors.push(`README.md:${lineNumber}: ${message}`);

	const heading = line.match(/^(#{2,3}) (.+)$/);
	if (heading) {
		if (heading[1] === '##') {
			h2 = heading[2];
			section = h2;
		} else {
			section = `${h2} > ${heading[2]}`;
		}

		previous = null;
		return;
	}

	if (!line.startsWith('- ') || section === 'Contents') {
		return;
	}

	const match = line.match(ENTRY);
	if (!match) {
		report('entry must look like `- [Name](link) - Description.`');
		return;
	}

	const {name, url, description} = match.groups;

	const urlKey = normalizeUrl(url);
	if (seenUrls.has(urlKey)) {
		report(`duplicate link, already listed on line ${seenUrls.get(urlKey)}`);
	} else {
		seenUrls.set(urlKey, lineNumber);
	}

	const nameKey = name.toLowerCase();
	if (seenNames.has(nameKey)) {
		report(`duplicate name "${name}" (line ${seenNames.get(nameKey)}); disambiguate both with "by <owner>"`);
	} else {
		seenNames.set(nameKey, lineNumber);
	}

	if (description.length > MAX_DESCRIPTION) {
		report(`description is ${description.length} characters; keep it under ${MAX_DESCRIPTION}`);
	}

	if (VERSION_PIN.test(description)) {
		report('description mentions a version pin; these go stale, leave them to the project README');
	}

	if (!UNSORTED_SECTIONS.has(section) && previous && sortKey(name) < sortKey(previous)) {
		report(`"${name}" should come before "${previous}" (alphabetical within "${section}")`);
	}

	previous = name;
});

if (errors.length > 0) {
	console.error(errors.join('\n'));
	console.error(`\n${errors.length} problem(s) found.`);
	process.exit(1);
}

console.log(`${seenUrls.size} entries OK.`);
