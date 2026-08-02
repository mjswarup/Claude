# CareerForge AI

CareerForge AI is a production-ready SaaS platform for AI-assisted resume optimization, cover letter generation, and talent matching. This repository contains a full-stack MVP scaffold with frontend, backend, infrastructure, and documentation designed to showcase a scalable product architecture.

## Project Overview
CareerForge AI helps candidates and employers accelerate hiring with AI-powered content workflows, resume intelligence, and SaaS-grade product architecture.

### Repository structure
- `frontend/`: React + TypeScript SPA for candidate and employer experiences
- `backend/`: Node.js + Express + TypeScript API service
- `infrastructure/`: placeholders for Terraform, Kubernetes, and CI
- `README.md`: project overview, architecture, and usage guide

## What this scaffold demonstrates
- Modular full-stack architecture for a SaaS product
- Production-oriented folder structure and startup conventions
- API-first backend design with authentication and resume workflows
- AI orchestration readiness for OpenAI or equivalent LLM providers
- Documentation suitable for pitching and showcasing technical skills

## Getting started
### Prerequisites
- Node.js 20+ and npm
- Git
- Docker (optional)

### Run frontend
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:4173`

### Run backend
```bash
cd backend
npm install
npm run dev
```
Open `http://localhost:4000/api/health`

## Architecture summary
### Frontend
- React + Vite for fast development
- `react-router-dom` for client routing
- Service layer for API calls in `frontend/src/services`
- UI scaffold for landing, dashboard, and auth flows

### Backend
- Express API server with security middleware
- Auth and resume route structure
- Placeholder endpoints ready for PostgreSQL, Stripe, Redis, and AI integration
- TypeScript models and service abstractions ready for expansion

### Infrastructure readiness
The `infrastructure/` folder is prepared for future expansion with:
- `terraform/` for infrastructure as code
- `k8s/` for container orchestration manifests
- `ci/` for continuous integration workflows

## Folder structure
```text
/
  frontend/
    src/
      components/
      pages/
      services/
      hooks/
      styles/
    package.json
    vite.config.ts
  backend/
    src/
      controllers/
      routes/
      services/
      models/
      middlewares/
      utils/
    package.json
    tsconfig.json
  infrastructure/
    terraform/
    k8s/
    ci/
  README.md
  tsconfig.json
  .gitignore
```

## How to present this project
1. **Problem statement**: Hiring and career development are noisy and inefficient. CareerForge AI uses generative AI to turn raw candidate data into tailored resumes and cover letters.
2. **Architecture**: Emphasize separation of concerns between frontend, backend, and infrastructure. The platform is designed for cloud deployment and scale.
3. **Tech stack**: React, TypeScript, Express, PostgreSQL-ready API design, Redis-ready caching, AI provider integration, Stripe-compatible billing.
4. **Scalability**: Mention IaC, Kubernetes, monitoring, and SaaS operations readiness even though the repository is an MVP scaffold.
5. **Security**: Cite Helmet middleware, CORS policy, future JWT auth, password hashing, RBAC, and secure prompt handling.
6. **Expansion roadmap**: Describe future features such as employer analytics, job matching, interview coaching, mobile PWA, and enterprise plans.

## Next steps for CareerForge AI
- Add PostgreSQL schemas and ORM models
- Implement JWT authentication and user roles
- Integrate Stripe for subscription plans
- Implement AI orchestration for resume and cover letter generation
- Add search, candidate matching, and employer workflows
- Build Kubernetes deployment manifests and CI/CD pipelines
- Add monitoring and observability with Prometheus/Grafana

## Notes
This scaffold is intentionally production-minded and suitable for demonstrating startup product architecture and execution capability.
