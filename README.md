## CI/CD

This project uses GitHub Actions to automatically run Playwright end-to-end tests.

- Tests run on every pull request
- Tests also run on pushes to the `main` branch
- CI pipeline installs dependencies, browsers, and executes the test suite

This setup provides fast feedback and helps catch UI regressions early.
