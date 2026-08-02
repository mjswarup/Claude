# Infrastructure

This directory contains infrastructure planning artifacts for CareerForge AI.

## Purpose
- Maintain infrastructure-as-code readiness
- Document Kubernetes deployment patterns
- Prepare CI/CD pipeline structure

## Directories
- `terraform/`: define cloud resources and managed services
- `k8s/`: container deployment manifests and service definitions
- `ci/`: GitHub Actions or pipeline templates for build/test/deploy

## Next steps
1. Add Terraform modules for VPC, database, Redis, storage, and Kubernetes cluster.
2. Add Kubernetes manifests for frontend, backend, and supporting services.
3. Add CI pipeline definitions for linting, unit tests, integration tests, and deployment.
