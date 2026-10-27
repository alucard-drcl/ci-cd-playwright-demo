# CI/CD Demo - Playwright + GitHub Actions + Allure

This demo shows a simple pipeline:
1. A push or pull request starts GitHub Actions.
2. GitHub Actions installs dependencies and runs a Playwright test.
3. The run creates an Allure report and saves it as an artifact.
4. If tests pass on `main`, GitHub Actions publishes `public/` to GitHub Pages.

## Run locally

Install Node.js 22, then run these commands in this folder:

```bash
npm install
npx playwright install chromium
npm test
npx allure generate allure-results --clean
npx allure open allure-report
```

Commit `package-lock.json` created by `npm install` so that `npm ci` works in GitHub Actions.

## GitHub setup

1. Create a new **public** GitHub repository with the default branch named `main`.
2. Push all project files, including `package-lock.json`.
3. Open **Settings → Pages** and set the source to **GitHub Actions**.
4. Open **Actions** to see the test and deploy jobs.
5. After a successful push to `main`, open the deploy job to find the published page URL.

To demonstrate a failure safely, temporarily change the expected heading in `tests/home.spec.js`, push it, and show that the test job fails and the deploy job does not run. Restore the correct heading and push again; the pipeline should pass and deploy.
