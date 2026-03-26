# SDD Migration Training App

This repo contains the Vite-based frontend for the SDD migration training experience.

## Local Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Create a production build locally with:

```bash
npm run build
```

## Azure Deployment

This app deploys to an existing Azure Static Web App.

- Subscription: `MCAPS-Hybrid-REQ-50408-2023-kkabza`
- Subscription ID: `83bc8111-12e4-4fcb-b778-7d684f1c520a`
- Resource Group: `SDD-Training`
- Static Web App: `sdd-migration-training`
- Production URL: `https://calm-cliff-045bf570f.6.azurestaticapps.net`

The Azure resource was created outside GitHub integration, so deployment is handled by GitHub Actions using a Static Web Apps deployment token.

## GitHub Actions Deployment

The workflow lives at `.github/workflows/azure-static-web-apps-sdd-migration-training.yml` and runs on:

- pushes to `main`
- pull requests targeting `main`

The workflow uses these build settings:

- App location: `/`
- API location: empty
- Output location: `dist`
- Build command: `npm run build`

## Required GitHub Secret

The repository must contain this Actions secret:

- `AZURE_STATIC_WEB_APPS_API_TOKEN_CALM_CLIFF_045BF570F`

To refresh or set it manually:

```bash
az account set --subscription "MCAPS-Hybrid-REQ-50408-2023-kkabza"
az staticwebapp secrets list \
  --name sdd-migration-training \
  --resource-group SDD-Training \
  --query properties.apiKey \
  -o tsv
```

Then store it in GitHub:

```bash
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN_CALM_CLIFF_045BF570F \
  --repo kkabza/sdd-migration-training
```

## Manual Deployment Fallback

If GitHub Actions is unavailable, deploy from the local repo with the Static Web Apps CLI:

```bash
npm run build
npx swa deploy ./dist --env production --deployment-token "<token>"
```

## Notes

- `staticwebapp.config.json` is already present at the repo root and is included in deployment.
- The production branch is `main`.
- GitHub authentication is configured to use the `kkabza` account for this repo.