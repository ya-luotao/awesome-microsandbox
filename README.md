# Awesome Microsandbox [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Lint](https://github.com/ya-luotao/awesome-microsandbox/actions/workflows/lint.yml/badge.svg)](https://github.com/ya-luotao/awesome-microsandbox/actions/workflows/lint.yml)

> A curated list of SDKs, integrations, tools, and projects built on microsandbox — easy, fast, local microVMs for untrusted workloads.

microsandbox runs AI agents, user code, plugins, CI jobs, and dev environments in hardware-isolated microVMs booted from OCI images, on Linux (KVM), macOS (Apple Silicon), and Windows (WHP). This community list is not affiliated with [superradcompany](https://github.com/superradcompany); see also the [official showcase](https://github.com/superradcompany/microsandbox#community-showcase).

Entries marked *Experimental* are described by their authors as alpha, pre-release, or experimental.

## Contents

- [Official](#official)
- [SDKs and Clients](#sdks-and-clients)
- [Agent Frameworks](#agent-frameworks)
- [Coding Agent Runners](#coding-agent-runners)
- [Dev Environments](#dev-environments)
- [Orchestration and Hosting](#orchestration-and-hosting)
- [Images, Packaging, and Nix](#images-packaging-and-nix)
- [Tools and UIs](#tools-and-uis)
- [Built with microsandbox](#built-with-microsandbox)
- [Learn](#learn)
- [Under the Hood](#under-the-hood)

## Official

- [microsandbox](https://github.com/superradcompany/microsandbox) - Core runtime, `msb` CLI, and SDKs.
- [Documentation](https://docs.microsandbox.dev) - Guides, SDK and CLI reference, and examples.
- [Discord](https://discord.gg/T95Y3XnEAK) - Official community chat.
- [guest-images](https://github.com/superradcompany/guest-images) - Base images that bundle an init system for use inside sandboxes.
- [homebrew-tap](https://github.com/superradcompany/homebrew-tap) - Homebrew formula for the `msb` CLI.
- [images](https://github.com/superradcompany/images) - Collection of OCI image Dockerfiles.
- [microsandbox-k8s](https://github.com/superradcompany/microsandbox-k8s) - Running microsandbox on Kubernetes.
- [microsandbox-mcp](https://github.com/superradcompany/microsandbox-mcp) - MCP server that lets any AI agent create and drive sandboxes.
- [sandbox-bench](https://github.com/superradcompany/sandbox-bench) - Reproducible cross-runtime sandbox benchmarks.
- [skills](https://github.com/superradcompany/skills) - Agent Skills that teach Claude Code, Codex, and other agents to use microsandbox.

## SDKs and Clients

### Official

- [Go](https://pkg.go.dev/github.com/superradcompany/microsandbox/sdk/go) - Module `github.com/superradcompany/microsandbox/sdk/go`.
- [Python](https://pypi.org/project/microsandbox/) - `microsandbox` package on PyPI.
- [Ruby](https://github.com/superradcompany/microsandbox/tree/main/sdk/ruby) - Bindings for local and cloud sandboxes; requires Ruby 3.1+.
- [Rust](https://crates.io/crates/microsandbox) - `microsandbox` crate on crates.io.
- [TypeScript / Node.js](https://www.npmjs.com/package/microsandbox) - `microsandbox` package on npm.
- [@microsandbox/agent-client](https://www.npmjs.com/package/@microsandbox/agent-client) - Low-level TypeScript client for the agent protocol.
- [microsandbox-agent-client](https://crates.io/crates/microsandbox-agent-client) - Transport-agnostic Rust client for the agent protocol.

### Community

- [microsandbox-dotnet](https://github.com/aicd-dev/microsandbox-dotnet) - .NET SDK.
- [microsandbox-rb](https://github.com/ya-luotao/microsandbox-rb) - Ruby bindings adding streaming, SSH/SFTP, and network policy builders.
- [sbox](https://github.com/sohcah/sbox) - Small TypeScript library and CLI.

## Agent Frameworks

- [ai-sdk-harness](https://github.com/fpasquet/ai-sdk-harness) - Vercel AI SDK harness for Claude Code and Codex with a microVM sandbox package.
- [ai-sdk-microsandbox](https://github.com/DaniAkash/agent-toolkit/tree/main/packages/ai-sdk-microsandbox) - Sandbox provider for the Vercel AI SDK v7 harness. *Experimental.*
- [Catamorphic](https://github.com/opencx-labs/catamorphic) - Framework and Work desktop app for agent workspaces with a local sandbox provider. *Experimental.*
- [ComputeSDK](https://github.com/computesdk/computesdk) - Multi-provider sandbox SDK with local and cloud microsandbox backends.
- [Condukt by Tuist](https://github.com/tuist/condukt) - Elixir agentic engine with a native microsandbox execution backend.
- [effect-uai](https://github.com/betalyra/effect-uai) - Sandbox provider for Effect-based agents. *Experimental.*
- [exxec](https://github.com/phil65/exxec) - Python code and process execution environments with a microVM provider.
- [langchain-microsandbox](https://github.com/kenwoodjw/langchain-microsandbox) - Sandbox backend for LangChain Deep Agents.
- [Omnigent](https://github.com/omnigent-ai/omnigent) - Meta-harness for Claude Code, Codex, Pi, and custom agents with a sandbox provider. *Experimental.*
- [openai-agents-microsandbox](https://github.com/iyifr/openai-agents-microsandbox) - TypeScript and Python sandbox tools and runners for the OpenAI Agents SDK.
- [pydantic-ai-microsandbox](https://github.com/mokronos/pydantic-ai-microsandbox) - Minimal Pydantic AI agent with a sandboxed command tool.
- [sandbox-sdk](https://github.com/opencoredev/sandbox-sdk) - One TypeScript API across sandbox providers, including microsandbox.
- [Smithers](https://github.com/smithersai/smithers) - Agent workflow orchestrator with a microsandbox provider (`@smthrs/microsandbox`).

## Coding Agent Runners

- [agent-bootstrap](https://github.com/hisamekms/agent-bootstrap) - Planner, executor, and reviewer agents in VMs with a durable host audit. *Experimental.*
- [agent-sandbox by butterflyskies](https://github.com/butterflyskies/agent-sandbox) - OCI image for running Claude Code, Codex, Gemini, and OpenCode.
- [agent-sandbox by HatriGt](https://github.com/HatriGt/agent-sandbox) - Self-hosted cloud sandbox for coding agents with live output streaming.
- [agent-vm by Wiren Board](https://github.com/wirenboard/agent-vm) - Per-project coding-agent VMs on a patched microsandbox build.
- [agents-sandbox](https://github.com/inoio/agents-sandbox) - Runner for OpenCode, Claude Code, and Pi.
- [altitude](https://github.com/GitSquared/altitude) - Task-focused agent manager with microVM isolation and remote runs.
- [claude-msb](https://github.com/foo-coders/msb-claude) - Per-project Claude Code sandboxes with a host-scoped auth token.
- [Cloudy Cloud](https://github.com/dennisonbertram/cloudycloud) - A machine and branch for each coding subagent, with a local microVM provider.
- [codebox](https://github.com/etalab-ia/codebox) - OpenCode in a microVM using French government Albert API models.
- [Construct CLI](https://github.com/EstebanForge/construct-cli) - Single-binary sandbox preloaded with AI agents, using microVMs by default.
- [GSA TTS Agentic Coding Quickstart](https://github.com/GSA-TTS/agentic-coding-quickstart) - USAi coding-agent quickstart with sandbox isolation.
- [llmman](https://github.com/llmmanorg/llmman) - Runs coding agents on any model, with an optional microVM sandbox.
- [mbx](https://github.com/nao23/mbx) - Disposable Claude Code VMs with domain allowlists and host-side secrets.
- [microsandbox-ai](https://github.com/ssadedin/microsandbox-ai) - Claude Code and Pi launchers with host-side credential substitution.
- [msb-manager](https://github.com/runoverlabs/sandbox-manager) - Per-project agent VMs with host-side secrets and egress policies.
- [opencode-image](https://github.com/ctxinf/opencode-image) - OpenCode image for Docker and microsandbox.
- [pi-backend](https://github.com/msdavid/pi-backend) - Self-deployable Pi service with remote sessions, crons, and microVM execution.
- [pi-microsandbox](https://github.com/hcohe/pi-microsandbox) - Pi extension that runs file and shell tools in microVMs.
- [reef](https://github.com/skalenetwork/microsandbox-reef) - Agent runner with TOML roles, domain allowlists, and host-bound secrets.
- [reve](https://github.com/tobi/reve) - Durable Ruby coding agents that always run in microVMs.
- [Sandbox Studio](https://github.com/lukaskoebe/sandbox-studio) - Early-stage coding-agent workspaces with host-side approvals and secrets.
- [Workestrate](https://github.com/rybskiworks/workestrate) - Nix/TOML-defined agent VMs with SOPS secrets and a Rust control CLI.
- [wrap](https://github.com/tobi/wrap) - Isolated Arch Linux microVMs for coding agents and project commands.

## Dev Environments

- [agentbay](https://github.com/sisimomo/agentbay) - Customizable macOS agent environment with Docker and shared MCP services.
- [boxme](https://github.com/kauffinger/boxme) - Package installs in a microVM, with file and network changes shown for approval.
- [devbox](https://github.com/HellButcher/devbox) - Sandboxed Linux development environment.
- [Devsy](https://github.com/devsy-org/devsy-provider-microsandbox) - External workspace provider for Devsy using the CLI and Go SDK.
- [lilbox](https://github.com/lilco-dev/lilbox) - Self-hosted exe.dev-style microVMs published to your Tailscale tailnet.
- [mezha](https://github.com/odzhu/mezha) - Declarative environments with devenv provisioning and Git synchronization.
- [microkitchen](https://github.com/timjb/microkitchen) - Mise-based VM launcher with Docker and interactive network approvals. *Experimental.*
- [nix-dev-microsandbox](https://github.com/voidiz/nix-dev-microsandbox) - Nix development shell inside a sandbox.
- [Puddle](https://github.com/PuddleHQ/puddle) - Devcontainer workspaces in microVMs with an approve/deny egress proxy, on a patched build.
- [stackbox](https://github.com/preinpost/stackbox) - OpenStack test labs installed with Kolla across linked VMs, on a patched build.
- [svamm](https://github.com/intfish/svamm) - Ergonomic wrapper for per-project sandboxes with a local image registry.

## Orchestration and Hosting

- [agent-compose by Chaitin](https://github.com/chaitin/agent-compose) - Compose-style definitions for agent environments.
- [@axiom-lattice/microsandbox-service](https://www.npmjs.com/package/@axiom-lattice/microsandbox-service) - HTTP service for managing sandboxes.
- [Cellar](https://github.com/prodioslabs/cellar) - Self-hosted microVM clusters with a gateway for the official SDKs.
- [lettabox](https://github.com/kaaloo/lettabox) - Letta remote environment that isolates each conversation in a local or cloud VM.
- [mc2](https://github.com/l3wi/mc2) - Compose-style orchestrator for microVMs.
- [Microsandbox Cloud](https://github.com/venbrinoDev/microsanbox-cloud) - Single-host control plane and signed proxy for remote VMs.
- [msbd](https://github.com/mark3labs/msbd) - REST server for creating and driving microVMs over HTTP.
- [nomad-driver-microsandbox](https://github.com/jamescorbett/nomad-driver-microsandbox) - HashiCorp Nomad task driver.
- [operator by Devic](https://github.com/devicai/operator) - Sandbox orchestration with microsandbox and Docker runtimes, TTLs, and snapshots.
- [shoes-microsandbox](https://github.com/whywaita/shoes-microsandbox) - Provider for myshoes for ephemeral GitHub Actions self-hosted runners.
- [Struo by Tuist](https://github.com/tuist/struo) - Build system with caching and remote execution in microVMs, formerly Once.
- [willet](https://github.com/gerritlansing/willet) - GitHub Actions runner scale-set daemon with a fresh VM for each job.

## Images, Packaging, and Nix

- [beambox](https://github.com/beamhop/beambox-old) - Dockerless OCI image builder with a Dockerfile front-end.
- [dev-image](https://github.com/kaplan-michael/dev-image) - Fedora image with coding agents and language toolchains for amd64 and arm64.
- [docker-in-microsandbox](https://github.com/rhoboro/docker-in-microsandbox) - Running Docker inside a sandbox.
- [microsandbox-cli.nix](https://github.com/renato-zannon/microsandbox-cli.nix) - Nix flake for the `msb` CLI.
- [microsandbox-flake](https://github.com/kasuboski/microsandbox-flake) - Alternative Nix flake for the `msb` CLI.
- [Monkeybox](https://github.com/vbuterin/monkeybox) - Nix-packaged environments with explicit access grants; license undecided. *Experimental.*
- [nix-msb](https://github.com/conao3/nix-msb) - Nix tooling for running OCI images in microVMs.

## Tools and UIs

- [hoosegow](https://github.com/billroy/hoosegow) - PTY-first terminal app for running coding agents in sandboxes.
- [microsandbox-dashboard](https://github.com/tardigrada07/microsandbox-dashboard) - Local web dashboard with live metrics and resource resizing.
- [microsandbox-studio](https://github.com/bnjgl/microsandbox-studio) - Simple desktop app for macOS, Linux, and Windows with SSH to every sandbox.
- [microsandbox-tui by cfranzen](https://github.com/cfranzen/microsandbox-tui) - Terminal UI for managing sandboxes.
- [microsandbox-tui by Freudenjunge](https://github.com/Freudenjunge/microsandbox-tui) - Rust SDK terminal dashboard with templates, metrics, and snapshots.
- [msb-admin](https://github.com/topabomb/msb-admin) - Web admin UI built with FastAPI, HTMX, and xterm.js.
- [msb-omarchy](https://github.com/ya-luotao/msb-omarchy) - Omarchy desktop in an Apple Silicon microVM, shown in a macOS window or over VNC. *Experimental.*
- [omarchy-microsandbox](https://github.com/ya-luotao/omarchy-microsandbox) - Omarchy bar plugin for managing microVMs.
- [rightsize](https://github.com/ngriaznov/rightsize-rust) - Testcontainers-style integration testing on microVMs for Rust and TypeScript.
- [Silo](https://github.com/amontlabs/silo) - Apple Silicon macOS desktop app for managing local and remote Linux VMs.
- [vivarium-cli](https://github.com/assaf-benjosef/vivarium-cli) - CLI for managing Vivarium agent sandboxes.

## Built with microsandbox

Applications that use microsandbox as their execution backend.

- [AgentConnect](https://github.com/agentconnect-md/agentconnect) - Team agents for chats, issues, and pull requests.
- [Agentic Usability by PSPDFKit Labs](https://github.com/PSPDFKit-labs/agentic-usability) - CLI measuring how well coding agents use SDKs, run in sandboxes.
- [Codemini CLI](https://github.com/havingautism/Codemini-CLI) - Terminal AI workspace that runs its command sandbox in a microVM when available.
- [gbot](https://github.com/ganeshdipdumbare/gbot) - Local-first AI teammates with an optional microVM desktop computer.
- [GuildBotics](https://github.com/GuildBotics/GuildBotics) - AI agents that join a dev team on GitHub and Slack, isolated in VMs. *Experimental.*
- [h5i](https://github.com/h5i-dev/h5i) - Agent-native red-teaming workspace with an optional microsandbox backend.
- [Household](https://github.com/underwear/household) - Claude Code and Codex bots in sandboxes that you chat with over messengers.
- [kali-mcp-sandbox](https://github.com/B1a0k/kali-mcp-sandbox) - Kali Linux MCP tools in persistent VMs on Windows.
- [Metis](https://github.com/chagel/metis) - Self-hostable Pi agent platform with a microVM runtime.
- [OpenWork microsandbox example](https://github.com/different-ai/openwork/tree/dev/examples/microsandbox-openwork-rust) - Rust launcher for the OpenWork server with persistent workspace mounts.
- [sandboxed-lit by LlamaIndex](https://github.com/run-llama/sandboxed-lit) - CLI agent that runs LiteParse and shell tools in a sandbox.

## Learn

- [Changelog](https://github.com/superradcompany/microsandbox/tree/main/docs/changelog) - Product changelog and update notes.
- [How-to guides](https://docs.microsandbox.dev/how-to/overview) - Official guides for agents, browser automation, CI runners, and Docker.
- [Mario Never Dies](https://github.com/superradcompany/mario-never-dies) - Official Python demo of VM checkpoints and branching with a Mario-playing agent.
- [msb-in-90s](https://github.com/superradcompany/msb-in-90s) - Official short feature walkthroughs with runnable SDK examples and benchmarks.
- [Multiverse of Madness](https://github.com/superradcompany/multiverse-of-madness) - Official TypeScript gameplay harness with Doom and chess examples.
- [Security](https://docs.microsandbox.dev/security/overview) - Isolation model and secrets handling.
- [Troubleshooting](https://docs.microsandbox.dev/troubleshooting/linux) - Platform guides for Linux, macOS, and Windows.

## Under the Hood

- [libkrun](https://github.com/libkrun/libkrun) - The microVM library microsandbox is built on.
- [smoltcp](https://github.com/smoltcp-rs/smoltcp) - Userspace TCP/IP stack used for sandbox networking.

## Contributing

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.

Last health check 2026-11-26: links and repository status checked; changed entries reviewed against upstream sources, not runtime-tested. Check each project's supported microsandbox version; recent activity does not guarantee compatibility with the latest release.
