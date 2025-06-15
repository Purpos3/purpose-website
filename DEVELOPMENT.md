# Development Guide

This guide helps prevent deployment issues and ensures a smooth development experience.

## Prerequisites

- Node.js 18.18.0 (use `nvm use` to switch to the correct version)
- Yarn package manager

## Local Development Setup

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Generate Next.js types (important!):**
   ```bash
   yarn dev
   # This creates next-env.d.ts and other necessary files
   # Let it run for a few seconds, then you can stop it
   ```

3. **Run linting checks:**
   ```bash
   yarn lint        # ESLint
   yarn format      # Prettier check
   ```

4. **Test the build locally:**
   ```bash
   yarn build       # This should match the GitHub Actions build
   ```

## Common Issues and Solutions

### TypeScript Errors
- **Problem:** `Cannot find module 'next/image'` or similar
- **Solution:** Run `yarn dev` once to generate `next-env.d.ts`

### Build Failures
- **Problem:** Build works locally but fails in CI
- **Solution:** Test with `yarn build` locally first

### Linting Failures
- **Problem:** Formatting or lint errors
- **Solution:** Run `yarn format-fix` and `yarn lint --fix`

## Pre-commit Checklist

Before pushing to main:
- [ ] `yarn lint` passes
- [ ] `yarn format` passes  
- [ ] `yarn build` succeeds
- [ ] Test the site locally with `yarn dev`

## CI/CD Pipeline

Our deployment pipeline:
1. **Lint & Build** - Combined job that runs linting and builds the site
2. **Deploy** - Deploys to GitHub Pages

The pipeline is designed to be resilient - linting warnings won't block deployment. 