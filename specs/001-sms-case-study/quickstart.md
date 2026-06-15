# Quickstart Guide: School Management System Case Study Documentation

**Feature Branch**: `001-sms-case-study` | **Date**: 2026-06-15 | **Spec**: [specs/001-sms-case-study/spec.md](specs/001-sms-case-study/spec.md)

## Overview

This quickstart guide provides instructions on how to set up, build, and deploy the Docusaurus-based documentation for the conceptual School Management System (SMS) case study. Follow these steps to get a local development environment running and to prepare the documentation for deployment.

## Prerequisites

Ensure you have the following installed:

*   **Node.js**: Version 18.0 or later.
*   **npm** (Node Package Manager): Usually comes with Node.js.

## Local Development Setup

1.  **Clone the Repository**:
    ```bash
    git clone [repository-url]
    cd school-management-system
    ```
    (Replace `[repository-url]` with the actual URL of your GitHub repository.)

2.  **Navigate to the Documentation Directory**:
    The Docusaurus project is located in the `docs/` directory.
    ```bash
    cd docs
    ```

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

4.  **Start Local Development Server**:
    This command starts a local development server and opens a new browser window. Any changes you make to the documentation files will automatically be reflected.
    ```bash
    npm run start
    ```
    The documentation will typically be accessible at `http://localhost:3000`.

## Building the Documentation

To generate a static build of the documentation (for deployment), run:

```bash
npm run build
```

This command generates static content into the `build/` directory of the Docusaurus project.

## Deployment

The generated static content in the `docs/build/` directory can be deployed to any static hosting service (e.g., GitHub Pages, Vercel, Netlify).

### Deploying to GitHub Pages

If your repository is hosted on GitHub, you can configure GitHub Pages to serve the `docs/build/` directory.

1.  **Configure `docusaurus.config.js`**:
    Ensure your `docusaurus.config.js` has the correct `baseUrl` and `projectName` settings.
    ```javascript
    const config = {
      // ...
      baseUrl: '/school-management-system/', // Replace with your repository name if not using a custom domain
      projectName: 'school-management-system', // Usually your repo name.
      // ...
    };
    ```

2.  **GitHub Pages Setup**:
    In your GitHub repository settings, navigate to "Pages" and select the `gh-pages` branch (or `main`/`master` branch with `/docs/build` folder) as the source for GitHub Pages.

## Contributing

For contributions, ensure all documentation adheres to the Markdown (.md / .mdx) format, maintains academic English, and follows the modular structure outlined in the specification.
