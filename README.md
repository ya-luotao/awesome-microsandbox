# Awesome Microsandbox [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of SDKs, integrations, tools, and resources for microsandbox — easy, fast, local microVMs for untrusted workloads.

microsandbox runs AI agents, user code, plugins, CI jobs, and dev environments inside hardware-isolated microVMs that boot in under 100 ms, on Linux, macOS, and Windows, from any OCI image.

This is a community-maintained list and is not affiliated with [superradcompany](https://github.com/superradcompany). For the official "projects using microsandbox" showcase, see the [upstream README](https://github.com/superradcompany/microsandbox#projects-using-microsandbox).

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

### Community

- [microsandbox-rb](https://github.com/ya-luotao/microsandbox-rb) - Ruby bindings via native extension, with prebuilt runtime binaries.
- [microsandbox-dotnet](https://github.com/aicd-dev/microsandbox-dotnet) - .NET SDK.
- [sbox](https://github.com/sohcah/sbox) - Small TypeScript library and CLI over microsandbox.

## Agent Framework Integrations

- [Eve by Vercel](https://eve.dev/docs/sandbox#microsandbox) - Sandbox backend for Eve agents.
- [ai-sdk-microsandbox](https://github.com/DaniAkash/acpx/tree/main/packages/ai-sdk-microsandbox) - Sandbox provider for the Vercel AI SDK harness.
- [deepagents-microsandbox](https://github.com/shkarupa-alex/deepagents-microsandbox) - Backend for LangChain DeepAgents (Python).
- [langchain-microsandbox](https://github.com/kenwoodjw/langchain-microsandbox) - Integration for LangChain Deep Agents.
- [pydantic-ai-microsandbox](https://github.com/mokronos/pydantic-ai-microsandbox) - Code execution for Pydantic AI agents.
- [ComputeSDK](https://github.com/computesdk/computesdk) - Provider with local and cloud microsandbox backends.
- [effect-uai](https://github.com/betalyra/effect-uai) - Sandbox provider for Effect-based agents.
- [@smthrs/microsandbox](https://www.npmjs.com/package/@smthrs/microsandbox) - Provider for the Smithers workflow orchestrator.
- [model-sandbox-tools](https://github.com/iyifr/model-sandbox-tools) - Sandbox plugin for TypeScript agent frameworks.
- [agentscope-go](https://pkg.go.dev/github.com/yuluo-yx/agentscope-go/pkg/workspace/microsandbox) - Workspace backend for AgentScope Go.
- [glovebox-mcp](https://github.com/maxvandenhoven/glovebox-mcp) - MCP server exposing foundational agent tools inside a hardware-isolated sandbox.
- [sandboxed-lit by LlamaIndex](https://github.com/run-llama/sandboxed-lit) - Sandboxed execution for LlamaIndex workflows.

## Coding Agents in Sandboxes

- [agents-sandbox](https://github.com/inoio/agents-sandbox) - Secure runner for coding agents (opencode, claude, pi) in a VM, optimized for dev/user experience.
- [agent-sandbox](https://github.com/butterflyskies/agent-sandbox) - OCI image for running Claude Code, Codex, Gemini, and OpenCode in microsandbox.
- [agent-vm by Wiren Board](https://github.com/wirenboard/agent-vm) - Sandboxed VMs for AI coding agents (Claude Code, Codex CLI, OpenCode).
- [micro-pi](https://github.com/asyrjasalo/micro-pi) - Run the Pi coding agent inside a microsandbox VM.
- [pi-backend](https://github.com/msdavid/pi-backend) - Self-deployable service giving Pi remote sessions, crons, and microVM execution.
- [reve](https://github.com/tobi/reve) - Durable Ruby coding agents in mandatory microsandbox microVMs.
- [devbox](https://github.com/HellButcher/devbox) - Sandboxed Linux development environment powered by microsandbox.
- [opencode-image](https://github.com/ctxinf/opencode-image) - OpenCode image for Docker and microsandbox.
- [boxme](https://github.com/kauffinger/boxme) - Run your package manager inside microsandbox.
- [GSA TTS Agentic Coding Quickstart](https://github.com/GSA-TTS/agentic-coding-quickstart) - Government quickstart for agentic coding with sandboxed execution.

## Orchestration and Hosting

- [msbd](https://github.com/mark3labs/msbd) - REST host exposing hardware-isolated microVMs over HTTP (Go).
- [mc2](https://github.com/l3wi/mc2) - Compose-shaped orchestrator for microsandbox microVMs (Rust).
- [microsanbox-cloud](https://github.com/venbrinoDev/microsanbox-cloud) - Spin up microsandbox VMs on a remote machine with APIs and proxy support.
- [nomad-driver-microsandbox](https://github.com/jamescorbett/nomad-driver-microsandbox) - HashiCorp Nomad task driver.
- [msb-operator](https://github.com/TheRealSibasishBehera/msb-operator) - Kubernetes operator for microsandbox sandboxes.
- [operator by Devic](https://github.com/devicai/operator) - Sandbox orchestration layer with microsandbox/Docker runtimes, TTL lifecycle, and snapshots.
- [lilbox](https://github.com/lilco-dev/lilbox) - Self-hosted exe.dev-style microVMs published to your Tailscale tailnet.
- [shoes-microsandbox](https://github.com/whywaita/shoes-microsandbox) - Provider for myshoes for ephemeral GitHub Actions self-hosted runners.
- [@axiom-lattice/microsandbox-service](https://www.npmjs.com/package/@axiom-lattice/microsandbox-service) - HTTP service for managing sandboxes.
- [agent-compose by Chaitin](https://github.com/chaitin/agent-compose) - Compose-style definitions for agent environments.
- [Devsy](https://github.com/devsy-org/devsy) - Development environments with a microsandbox driver.
- [Condukt](https://github.com/tuist/condukt) and [Once](https://github.com/tuist/once) by Tuist - CI and task execution on microsandbox.

## Images and Build Tools

- [beambox](https://github.com/beamhop/beambox) - Build OCI images for microsandbox without Docker, with a Dockerfile front-end (TypeScript).
- [docker-in-microsandbox](https://github.com/rhoboro/docker-in-microsandbox) - Running Docker inside a sandbox.

## Packaging and Nix

- [nix-msb](https://github.com/conao3/nix-msb) - Nix tooling for running OCI images inside microsandbox microVMs.
- [microsandbox-cli.nix](https://github.com/renato-zannon/microsandbox-cli.nix) - Unofficial Nix flake for the `msb` CLI.
- [microsandbox-flake](https://github.com/kasuboski/microsandbox-flake) - Nix flake.
- [nix-dev-microsandbox](https://github.com/voidiz/nix-dev-microsandbox) - Nix development shell inside microsandbox.

## Tools and UIs

- [msb-admin](https://github.com/topabomb/msb-admin) - Admin UI with FastAPI, HTMX, and xterm.js.
- [microsandbox-tui](https://github.com/cfranzen/microsandbox-tui) - Terminal UI for managing sandboxes.
- [hoosegow](https://github.com/billroy/hoosegow) - PTY-first terminal manager for coding agents.
- [omarchy-microsandbox](https://github.com/ya-luotao/omarchy-microsandbox) - Omarchy shell plugin for managing microVMs from the bar.
- [msb-omarchy](https://github.com/ya-luotao/msb-omarchy) - The Omarchy desktop (Hyprland + Quickshell) running inside a microsandbox microVM on Apple Silicon, in a native macOS window or over VNC.
- [vivarium-cli](https://github.com/assaf-benjosef/vivarium-cli) - CLI for managing Vivarium sandboxes via microsandbox.

## Testing and Benchmarks

- [rightsize](https://github.com/ngriaznov/rightsize-rust) - Testcontainers-style integration testing on microVMs (Rust and TypeScript).
- [sandbox-bench](https://github.com/superradcompany/sandbox-bench) - Official reproducible cross-runtime sandbox benchmarks.
- [mcpruntime](https://github.com/TJKlein/mcpruntime) - Benchmarked agent execution runtime comparing Docker, microVM, and in-process backends.

## Products Built on microsandbox

- [Smithers](https://github.com/smithersai/smithers) - Workflow orchestrator with a microsandbox provider.
- [h5i](https://github.com/h5i-dev/h5i) - Agent platform with sandboxed execution.
- [Agentic Usability by PSPDFKit Labs](https://github.com/PSPDFKit-labs/agentic-usability) - Usability testing with agents in sandboxes.
- [agent-sandbox by HatriGt](https://github.com/HatriGt/agent-sandbox) - Cloud sandbox for coding agents on your own server, streaming back live.
- [microsandbox-executor](https://github.com/Hari31416/microsandbox-executor) - Python sandbox service for agent-generated code with workspaces.
- [deepagents-microsandbox by Hari31416](https://github.com/Hari31416/deepagents-microsandbox) - Agentic data analysis platform combining LLM reasoning with isolated execution.

## Resources

- [Examples](https://docs.microsandbox.dev/examples/overview) - Official examples: agents, browser automation, CI runners, Docker-in-sandbox, warm workers.
- [Changelog](https://github.com/superradcompany/microsandbox/tree/main/docs/changelog) - Release notes.
- [Security](https://docs.microsandbox.dev/security) - Isolation model and secrets handling.
- [Troubleshooting](https://docs.microsandbox.dev/troubleshooting/linux) - Platform-specific guides for Linux, macOS, and Windows.

## Related Projects

- [libkrun](https://github.com/containers/libkrun) - The microVM library microsandbox is built on.
- [smoltcp](https://github.com/smoltcp-rs/smoltcp) - Userspace TCP/IP stack used for sandbox networking.
- [msbnet](https://github.com/superradcompany/msbnet) - Networking backend for VMs.

## Contributing

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.
