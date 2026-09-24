# Awesome Microsandbox [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of SDKs, integrations, tools, and resources for microsandbox — easy, fast, local microVMs for untrusted workloads.

microsandbox runs AI agents, user code, plugins, CI jobs, and dev environments inside hardware-isolated microVMs from OCI images. It supports Linux with KVM, macOS on Apple Silicon, and Windows with WHP enabled.

This is a community-maintained list and is not affiliated with [superradcompany](https://github.com/superradcompany). For the official community showcase, see the [upstream README](https://github.com/superradcompany/microsandbox#community-showcase).

Last reviewed: 2026-09-24. Descriptions and maintenance status were checked against upstream sources, not runtime-tested. Check each project's supported microsandbox version; recent activity does not guarantee compatibility with the latest release.

## Contents

- [Official](#official)
- [SDKs](#sdks)
- [Agent Framework Integrations](#agent-framework-integrations)
- [Coding Agents in Sandboxes](#coding-agents-in-sandboxes)
- [Orchestration and Hosting](#orchestration-and-hosting)
- [Images and Build Tools](#images-and-build-tools)
- [Packaging and Nix](#packaging-and-nix)
- [Tools and UIs](#tools-and-uis)
- [Testing and Benchmarks](#testing-and-benchmarks)
- [Products Built on microsandbox](#products-built-on-microsandbox)
- [Resources](#resources)
- [Related Projects](#related-projects)

## Official

- [microsandbox](https://github.com/superradcompany/microsandbox) - Core runtime, CLI (`msb`), and SDKs.
- [Documentation](https://docs.microsandbox.dev) - Guides, SDK and CLI reference, examples.
- [microsandbox-mcp](https://github.com/superradcompany/microsandbox-mcp) - MCP server that lets any AI agent create and drive sandboxes.
- [skills](https://github.com/superradcompany/skills) - Agent Skills for Claude Code, Codex, and other agents to use microsandbox.
- [microsandbox-k8s](https://github.com/superradcompany/microsandbox-k8s) - Running microsandbox on Kubernetes.
- [guest-images](https://github.com/superradcompany/guest-images) - Base images that bundle an init system for use inside sandboxes.
- [images](https://github.com/superradcompany/images) - Collection of OCI image Dockerfiles.
- [homebrew-tap](https://github.com/superradcompany/homebrew-tap) - Homebrew formula for the `msb` CLI.
- [Discord](https://discord.gg/T95Y3XnEAK) - Official community chat.

## SDKs

### Official

- [Rust](https://crates.io/crates/microsandbox) - `cargo add microsandbox`.
- [TypeScript / Node.js](https://www.npmjs.com/package/microsandbox) - `npm i microsandbox`.
- [Python](https://pypi.org/project/microsandbox/) - `uv add microsandbox`.
- [Go](https://pkg.go.dev/github.com/superradcompany/microsandbox/sdk/go) - Module `github.com/superradcompany/microsandbox/sdk/go`.
- [@microsandbox/agent-client](https://www.npmjs.com/package/@microsandbox/agent-client) - Low-level TypeScript client for the agent protocol.
- [microsandbox-agent-client](https://crates.io/crates/microsandbox-agent-client) - Transport-agnostic Rust client for the agent protocol.
- [Ruby](https://github.com/superradcompany/microsandbox/tree/main/sdk/ruby) - Native bindings for local and cloud sandboxes; requires Ruby 3.1+.

### Community

- [microsandbox-rb](https://github.com/ya-luotao/microsandbox-rb) - Ruby bindings via native extension, with prebuilt runtime binaries.
- [microsandbox-dotnet](https://github.com/aicd-dev/microsandbox-dotnet) - .NET SDK.
- [sbox](https://github.com/sohcah/sbox) - Small TypeScript library and CLI over microsandbox.

## Agent Framework Integrations

- [Eve by Vercel](https://eve.dev/docs/sandbox#microsandbox) - Sandbox backend for Eve agents.
- [ai-sdk-microsandbox](https://github.com/DaniAkash/agent-toolkit/tree/main/packages/ai-sdk-microsandbox) - Microsandbox provider for the Vercel AI SDK v7 harness.
- [deepagents-microsandbox](https://github.com/shkarupa-alex/deepagents-microsandbox) - Legacy DeepAgents backend using the server-based Python SDK (`PythonSandbox`).
- [langchain-microsandbox](https://github.com/kenwoodjw/langchain-microsandbox) - Deep Agents backend requiring microsandbox >=0.6.8,<0.7.0.
- [pydantic-ai-microsandbox](https://github.com/mokronos/pydantic-ai-microsandbox) - Example Pydantic AI agent with a microsandbox command tool.
- [ComputeSDK](https://github.com/computesdk/computesdk) - Provider with local and cloud microsandbox backends.
- [effect-uai](https://github.com/betalyra/effect-uai) - Sandbox provider for Effect-based agents.
- [@smthrs/microsandbox](https://www.npmjs.com/package/@smthrs/microsandbox) - Provider for the Smithers workflow orchestrator.
- [model-sandbox-tools](https://github.com/iyifr/model-sandbox-tools) - Sandbox plugin for TypeScript agent frameworks.
- [agentscope-go](https://github.com/agentic-spring-ai/agentscope-go/tree/main/pkg/workspace/microsandbox) - Workspace backend for AgentScope Go.
- [glovebox-mcp](https://github.com/maxvandenhoven/glovebox-mcp) - MCP server exposing foundational agent tools inside a hardware-isolated sandbox.
- [sandboxed-lit by LlamaIndex](https://github.com/run-llama/sandboxed-lit) - CLI agent that uses LiteParse and shell tools inside microsandbox.

## Coding Agents in Sandboxes

- [agents-sandbox](https://github.com/inoio/agents-sandbox) - Runner for OpenCode, Claude Code, and Pi inside microsandbox VMs.
- [agent-sandbox](https://github.com/butterflyskies/agent-sandbox) - OCI image for running Claude Code, Codex, Gemini, and OpenCode in microsandbox.
- [agent-vm by Wiren Board](https://github.com/wirenboard/agent-vm) - Per-project coding-agent VMs using a patched microsandbox build.
- [micro-pi](https://github.com/asyrjasalo/micro-pi) - Run the Pi coding agent inside a microsandbox VM.
- [pi-backend](https://github.com/msdavid/pi-backend) - Self-deployable service giving Pi remote sessions, crons, and microVM execution.
- [reve](https://github.com/tobi/reve) - Durable Ruby coding agents in mandatory microsandbox microVMs.
- [devbox](https://github.com/HellButcher/devbox) - Sandboxed Linux development environment powered by microsandbox.
- [opencode-image](https://github.com/ctxinf/opencode-image) - OpenCode image for Docker and microsandbox.
- [boxme](https://github.com/kauffinger/boxme) - Run your package manager inside microsandbox.
- [GSA TTS Agentic Coding Quickstart](https://github.com/GSA-TTS/agentic-coding-quickstart) - USAi coding-agent quickstart using microsandbox isolation.
- [wrap](https://github.com/tobi/wrap) - Run coding agents and project commands in isolated Arch Linux microVMs.
- [reef](https://github.com/skalenetwork/microsandbox-reef) - Run agents in microVMs with TOML roles, domain allowlists, and host-bound secrets.
- [pi-microsandbox](https://github.com/hcohe/pi-microsandbox) - Pi extension that runs file and shell tools inside microsandbox microVMs.

## Orchestration and Hosting

- [msbd](https://github.com/mark3labs/msbd) - REST host exposing hardware-isolated microVMs over HTTP (Go).
- [mc2](https://github.com/l3wi/mc2) - Compose-shaped orchestrator for microsandbox microVMs (Rust).
- [Microsandbox Cloud](https://github.com/venbrinoDev/microsanbox-cloud) - Single-host control plane and signed proxy for remote microsandbox VMs.
- [nomad-driver-microsandbox](https://github.com/jamescorbett/nomad-driver-microsandbox) - HashiCorp Nomad task driver.
- [msb-operator](https://github.com/TheRealSibasishBehera/msb-operator) - Kubernetes operator for microsandbox sandboxes.
- [operator by Devic](https://github.com/devicai/operator) - Sandbox orchestration layer with microsandbox/Docker runtimes, TTL lifecycle, and snapshots.
- [lilbox](https://github.com/lilco-dev/lilbox) - Self-hosted exe.dev-style microVMs published to your Tailscale tailnet.
- [shoes-microsandbox](https://github.com/whywaita/shoes-microsandbox) - Provider for myshoes for ephemeral GitHub Actions self-hosted runners.
- [@axiom-lattice/microsandbox-service](https://www.npmjs.com/package/@axiom-lattice/microsandbox-service) - HTTP service for managing sandboxes.
- [agent-compose by Chaitin](https://github.com/chaitin/agent-compose) - Compose-style definitions for agent environments.
- [Devsy](https://github.com/devsy-org/devsy) - Development environments with a microsandbox driver.
- [Condukt by Tuist](https://github.com/tuist/condukt) - Elixir agentic engine with a native microsandbox execution backend.
- [Once by Tuist](https://github.com/tuist/once) - Remote task runner with microsandbox compute support.
- [Cellar](https://github.com/prodioslabs/cellar) - Self-hosted microVM clusters with a gateway for the official microsandbox SDKs.
- [mezha](https://github.com/odzhu/mezha) - Declarative microsandbox environments with devenv provisioning and Git synchronization.
- [microkitchen](https://github.com/timjb/microkitchen) - Pre-release mise-based VM launcher with Docker and interactive network approvals.

## Images and Build Tools

- [beambox](https://github.com/beamhop/beambox) - Build OCI images for microsandbox without Docker, with a Dockerfile front-end (TypeScript).
- [docker-in-microsandbox](https://github.com/rhoboro/docker-in-microsandbox) - Running Docker inside a sandbox.

## Packaging and Nix

- [nix-msb](https://github.com/conao3/nix-msb) - Nix tooling for running OCI images inside microsandbox microVMs.
- [microsandbox-cli.nix](https://github.com/renato-zannon/microsandbox-cli.nix) - Unofficial Nix flake for the `msb` CLI.
- [microsandbox-flake](https://github.com/kasuboski/microsandbox-flake) - Nix flake pinned to microsandbox v0.4.6.
- [nix-dev-microsandbox](https://github.com/voidiz/nix-dev-microsandbox) - Nix development shell inside microsandbox.
- [Workestrate](https://github.com/rybskiworks/workestrate) - Nix/TOML-defined agent VMs with SOPS secrets and a Rust control CLI.

## Tools and UIs

- [msb-admin](https://github.com/topabomb/msb-admin) - Admin UI with FastAPI, HTMX, and xterm.js.
- [microsandbox-tui](https://github.com/cfranzen/microsandbox-tui) - Terminal UI for managing sandboxes.
- [hoosegow](https://github.com/billroy/hoosegow) - PTY-first terminal manager for coding agents.
- [omarchy-microsandbox](https://github.com/ya-luotao/omarchy-microsandbox) - Omarchy shell plugin for managing microVMs from the bar.
- [msb-omarchy](https://github.com/ya-luotao/msb-omarchy) - Omarchy desktop in an Apple Silicon microVM, displayed in a macOS window or over VNC.
- [vivarium-cli](https://github.com/assaf-benjosef/vivarium-cli) - CLI for managing Vivarium sandboxes via microsandbox.
- [Silo](https://github.com/0xpolarzero/silo) - macOS and Linux desktop app for managing local and remote microsandbox VMs.

## Testing and Benchmarks

- [rightsize](https://github.com/ngriaznov/rightsize-rust) - Testcontainers-style integration testing on microVMs (Rust and TypeScript).
- [sandbox-bench](https://github.com/superradcompany/sandbox-bench) - Official reproducible cross-runtime sandbox benchmarks.

## Products Built on microsandbox

- [Smithers](https://github.com/smithersai/smithers) - Workflow orchestrator with a microsandbox provider.
- [h5i](https://github.com/h5i-dev/h5i) - Agent-native red-teaming workspace with an optional microsandbox backend.
- [Agentic Usability by PSPDFKit Labs](https://github.com/PSPDFKit-labs/agentic-usability) - CLI measuring how effectively coding agents can use SDKs in sandboxes.
- [agent-sandbox by HatriGt](https://github.com/HatriGt/agent-sandbox) - Cloud sandbox for coding agents on your own server, streaming back live.
- [microsandbox-executor](https://github.com/Hari31416/microsandbox-executor) - TypeScript service for isolated Python/Bash execution with persistent workspaces.
- [deepagents-microsandbox by Hari31416](https://github.com/Hari31416/deepagents-microsandbox) - Agentic data analysis platform combining LLM reasoning with isolated execution.
- [AgentConnect](https://github.com/agentconnect-md/agentconnect) - Team agents for chats, issues, and pull requests, with a microsandbox execution backend.
- [OpenWork microsandbox example](https://github.com/different-ai/openwork/tree/dev/examples/microsandbox-openwork-rust) - Rust launcher for the OpenWork server with persistent workspace mounts.

## Resources

- [Examples](https://docs.microsandbox.dev/examples/overview) - Official examples: agents, browser automation, CI runners, Docker-in-sandbox, warm workers.
- [Changelog](https://github.com/superradcompany/microsandbox/tree/main/docs/changelog) - Product changelog and update notes.
- [Security](https://docs.microsandbox.dev/security/overview) - Isolation model and secrets handling.
- [Troubleshooting](https://docs.microsandbox.dev/troubleshooting/linux) - Platform-specific guides for Linux, macOS, and Windows.
- [Mario Never Dies](https://github.com/superradcompany/mario-never-dies) - Official Python demo of VM checkpoints and branching with a Jev-controlled Mario agent.
- [Multiverse of Madness](https://github.com/superradcompany/multiverse-of-madness) - Official TypeScript gameplay harness with microsandbox execution and Doom/chess examples.

## Related Projects

- [libkrun](https://github.com/libkrun/libkrun) - The microVM library microsandbox is built on.
- [smoltcp](https://github.com/smoltcp-rs/smoltcp) - Userspace TCP/IP stack used for sandbox networking.
- [msbnet](https://github.com/superradcompany/msbnet) - Networking backend for VMs.

## Contributing

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.
