# Practice 2 — CI/CD Notifications (Microsoft Teams)

## Completed
- Extended existing GitHub Actions workflow `.github/workflows/playwright-tests.yml`
- Added failure notification step for Microsoft Teams
- Configured notification to trigger only on workflow failure (`if: failure()`)
- Included dynamic data in notification:
  - Pull request title
  - PR author
  - Branch name
  - Link to failed workflow run
- Used GitHub Secrets (`TEAMS_WEBHOOK_URL`) for secure webhook handling
- Ensured notification step runs at the end of the job

## Implementation Details
- Notification is sent using a `curl` POST request
- Payload is formatted as JSON compatible with Microsoft Teams Incoming Webhook
- Workflow remains unchanged except for the additional notification step
- Added guard condition to avoid execution if webhook secret is missing

## Limitations
- Microsoft Teams webhook was not configured due to restricted permissions in the corporate Teams workspace
- Real notification delivery was not fully validated

## Notes
- Workflow is fully prepared for Teams integration once webhook access is available
- Notification step will automatically activate after adding `TEAMS_WEBHOOK_URL` to GitHub Secrets

## Result
- CI/CD pipeline enhanced with failure notification capability
- Workflow remains stable and continues to pass successfully
- Project is ready for real-time team alerts integration in the future
