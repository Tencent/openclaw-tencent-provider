# Tencent Cloud OpenClaw provider

Official OpenClaw provider plugin for Tencent Cloud. It registers the
`tencent-tokenhub` provider and its models (e.g. `tencent-tokenhub/hy3`)
through the public OpenClaw plugin SDK, using plugin runtime id `tencent`.

## Install

```sh
openclaw plugins install clawhub:openclaw-tencent-provider
```

## Configuration

Set the Tencent TokenHub API key before use:

```sh
export TOKENHUB_API_KEY=<your-key>
```

Or provide it during onboarding with `--tokenhub-api-key <key>`.

## Providers and models

- Provider id: `tencent-tokenhub`
  - Base URL: `https://tokenhub.tencentmaas.com/v1`
  - API: `openai-completions`
- Model: `tencent-tokenhub/hy3` (256K context window, reasoning enabled)

## Release

Release settings live in `.env`; use `.env.example` for the expected variable
names. The release script is dry-run by default:

```sh
scripts/publish.sh --target clawhub
scripts/publish.sh --target clawhub --publish
scripts/publish.sh --target npm --publish
```

Run dependency installation in Docker or CI before publishing. The script does
not run `npm ci` automatically because the build dependencies include OpenClaw.

## Docs

See `docs/providers/tencent.md` in the OpenClaw repository, or the published docs
at `https://docs.openclaw.ai/providers/tencent`.
