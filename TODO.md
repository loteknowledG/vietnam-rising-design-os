# Project TODO

- [ ] Confirm GCP project & billing — Ensure Google Cloud project exists and billing is enabled. Provide project ID to use for deployment.
- [x] Verify gcloud SDK — Check that `gcloud` is installed and user is authenticated (`gcloud auth login`).
- [-] Prepare container image — Build a container image for the app (Cloud Build or Docker) and tag it for Container Registry or Artifact Registry.
- [ ] Push image to registry — Push the built image to `gcr.io/<PROJECT>/<IMAGE>` or Artifact Registry.
- [ ] Deploy to Cloud Run — Run `gcloud run deploy` with region, image, platform managed, and `--allow-unauthenticated` if public.
- [ ] Verify deployment — Check the Cloud Run service URL, test endpoints, and view logs via `gcloud logs` or Cloud Console.
- [ ] Optional: Add CI/CD — Add a GitHub Action or Cloud Build trigger for automated builds and deploys on commit.
- [x] Add Browserless proxy service — (removed) Create an Express proxy that forwards requests to Browserless and returns screenshots. Config via `BROWSERLESS_TOKEN`.
- [x] Add Puppeteer feed generator & workflow — (removed) Add `scripts/generate-rss.js`, `scripts/targets.json`, and a GitHub Action to run it and commit `feed.xml`.
- [x] Cleanup: remove puppeteer/browserless files — Removed previously added Puppeteer, Browserless, and workflow files from the repo.

Notes:
- This TODO was exported from the agent task state. It is intended as a lightweight project checklist; update statuses as you make changes.
