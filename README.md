🎭 Playwright E2E & API Automation Framework
Author: Diego Grael

Tech Stack: Playwright, TypeScript, GitHub Actions, Allure/HTML Reports

🚀 Key Features
- Page Object Model (POM): Scalable and maintainable architecture.
- Hybrid Testing: Combines API requests with UI testing for faster state setup (e.g., bypassing login UI via API).
- Parallel Execution: Configured for optimized test runs to reduce CI bottleneck.
- Multi-Browser Support: Validated across Chromium, Firefox, and WebKit.

⚙️ CI/CD Integration (GitHub Actions)
- This project features a robust CI pipeline that ensures code quality before merging:
- Automated Triggers: Runs on every push to main and all Pull Requests.
- Artifact Management: Automatically saves Playwright Traces and HTML reports on failure for easy debugging.
- Headless Execution: Optimized for Linux-based CI runners.

📦 Getting Started
npm install
npx playwright install
npx playwright test
