# Contribution Guidelines

Thanks for helping keep this list useful.

## Inclusion criteria

A project qualifies if it:

- Uses, extends, wraps, packages, or integrates with [microsandbox](https://github.com/superradcompany/microsandbox) (the microVM runtime by superradcompany), and
- Is publicly available with a README that explains what it does, and
- Works with a supported microsandbox release, or is marked *Experimental* (see below).

Not accepted:

- Plain forks or mirrors of the upstream repository or SDKs.
- Bug reproduction repos.
- Unrelated projects that happen to share the name.
- Placeholder or name-squatting repos and packages, including repos with an empty README.
- Projects that only target removed microsandbox APIs, such as the legacy `PythonSandbox` server/JSON-RPC API.
- A second entry for code already listed elsewhere, such as a vendored subdirectory.

## Format

- One entry per line: `- [Name](link) - Description ending with a period.`
- Write the description as a noun phrase that says what the project is and how it uses microsandbox. Aim for under 80 characters; 100 is the hard limit.
- Don't repeat "microsandbox" or "microVM" when the section already implies it. Skip marketing language, star counts, and badges.
- Don't mention version pins or supported version ranges; they go stale. The project README is the source of truth.
- Add `by <owner>` to the name only to tell apart projects with the same name (apply it to both), or for a well-known organization.
- Append ` *Experimental.*` when the project describes itself as alpha, pre-release, or experimental.
- Prefer the GitHub repository link; use the package registry link only when there is no repo.
- Keep entries in alphabetical order within each section, ignoring case and leading symbols such as `@`. The `Official` sections keep a curated order.

## Sections

Put each project in the most specific section:

- **SDKs and Clients > Community** - Language bindings and client libraries maintained outside superradcompany.
- **Agent Frameworks** - Providers and backends that plug microsandbox into an agent framework or SDK.
- **Coding Agent Runners** - Tools and images for running coding agents such as Claude Code, Codex, or Pi in a sandbox.
- **Dev Environments** - Sandboxed development shells and workspaces for people.
- **Orchestration and Hosting** - Servers, control planes, schedulers, and CI runners that manage sandboxes for others.
- **Images, Packaging, and Nix** - Image builders, OS packages, and Nix flakes.
- **Tools and UIs** - Desktop apps, TUIs, admin panels, and testing libraries.
- **Built with microsandbox** - End-user applications that use microsandbox as their execution backend.
- **Learn** - Tutorials, blog posts, talks, videos, and demos. Community write-ups are welcome here.

If nothing fits, propose a new section in the PR. A new section needs at least three entries.

## Checks

Run both before opening a PR:

```sh
npx awesome-lint
node scripts/check-list.mjs
```

A weekly workflow opens an issue for listed repositories that are missing, renamed, archived, or have gone six months without a push. Those entries get updated, marked, or removed.

## Pull requests

- One project per PR (or one logical change).
- Title: `Add <project name>`.
- Explain in the PR body why the project belongs in this list.
