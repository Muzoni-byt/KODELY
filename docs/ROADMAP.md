# Kodely Development Roadmap

**Current stage:** Stage 1, Project Planning and Specification  
**Estimated duration:** 4–6 weeks at approximately 3–4 hours per day  
**Estimate type:** Initial planning estimate, subject to change

## Stage 1: Project Planning and Specification
**Status:** In progress

- [x] Initialize the local Git repository.
- [x] Configure the GitHub SSH remote.
- [x] Verify GitHub SSH authentication.
- [x] Create the documentation directory.
- [x] Draft the project specification.
- [ ] Complete the architecture document.
- [ ] Complete the data sources document.
- [ ] Complete this roadmap.
- [ ] Review the documentation for consistency.
- [ ] Commit the initial project documentation to Git.

**Completion criteria:** The project goals, initial scope, system architecture, source strategy, and implementation sequence are documented.

## Stage 2: UI/UX Design
**Status:** Not started

- [ ] Define the visual identity, typography, colors, spacing, and component styles.
- [ ] Design the public home and discovery pages.
- [ ] Design search, category filters, country filters, and Kenya county filters.
- [ ] Design opportunity cards and detail pages.
- [ ] Design online, in-person, and hybrid indicators.
- [ ] Design empty, loading, error, and expired-listing states.
- [ ] Design responsive desktop and mobile layouts.
- [ ] Design the administrative review interface.
- [ ] Review the designs before implementation.

**Completion criteria:** The main user journeys and key screen layouts are agreed upon.

## Stage 3: Project Setup and Development Environment
**Status:** Not started

- [ ] Establish the repository structure.
- [ ] Configure the Python development environment.
- [ ] Initialize the React, Vite, and Tailwind frontend.
- [ ] Configure formatting, linting, and testing tools.
- [ ] Add environment configuration and an example environment file.
- [ ] Establish development and production configuration conventions.
- [ ] Prepare Docker configuration where appropriate.
- [ ] Document local setup instructions.

**Completion criteria:** A developer can reproduce the local environment using documented instructions.

## Stage 4: PostgreSQL Schema and Data Layer
**Status:** Not started

- [ ] Design the database entities and relationships.
- [ ] Model opportunities, sources, categories, locations, and publication status.
- [ ] Represent event location separately from participant eligibility.
- [ ] Support Kenya's 47 counties and country-level geographic filtering.
- [ ] Track source provenance and verification timestamps.
- [ ] Configure SQLAlchemy.
- [ ] Create Alembic migrations.
- [ ] Add indexes and database constraints.
- [ ] Test core database operations.

**Completion criteria:** The database can store, retrieve, update, and validate opportunity records through repeatable migrations.

## Stage 5: Scraper Framework and Source Integrations
**Status:** Not started

- [ ] Build a shared interface for source integrations.
- [ ] Define source configuration and collection schedules.
- [ ] Implement a small number of initial sources.
- [ ] Prefer official APIs and feeds where available.
- [ ] Use HTML parsing or browser automation only where appropriate and permitted.
- [ ] Implement timeouts, retry policies, and rate limits.
- [ ] Record collection outcomes and errors.
- [ ] Add tests and fixtures for each integration.
- [ ] Expand the source list incrementally.

**Completion criteria:** Initial integrations collect structured records reliably and preserve source references.

## Stage 6: Cleaning, Validation, Deduplication, and Expiry
**Status:** Not started

- [ ] Normalize URLs, text, dates, and locations.
- [ ] Normalize categories and participation modes.
- [ ] Preserve uncertainty in fees, prizes, and eligibility.
- [ ] Detect duplicates across sources.
- [ ] Flag missing or contradictory critical fields.
- [ ] Implement conservative publishing eligibility rules.
- [ ] Detect expired deadlines and closed opportunities.
- [ ] Track verification timestamps.
- [ ] Test validation and deduplication behavior.

**Completion criteria:** Collected records pass through a repeatable quality-control pipeline before publication.

## Stage 7: Original Poster Generator
**Status:** Not started

- [ ] Define reusable Kodely poster templates.
- [ ] Establish typography, color, spacing, and layout rules.
- [ ] Support optional opportunity fields.
- [ ] Generate graphics using SVG or HTML/CSS-based templates.
- [ ] Test long titles and varying amounts of information.
- [ ] Ensure readable output at target sharing sizes.
- [ ] Store generated assets persistently.
- [ ] Regenerate posters when relevant listing data changes.

**Completion criteria:** Valid opportunity records can produce consistent, original promotional graphics without inventing missing facts.

## Stage 8: FastAPI Backend
**Status:** Not started

- [ ] Establish API routing and application configuration.
- [ ] Implement opportunity listing and detail endpoints.
- [ ] Add search, filtering, and pagination.
- [ ] Add category and geographic lookup endpoints as needed.
- [ ] Connect API operations to the database.
- [ ] Add validation and consistent error responses.
- [ ] Protect administrative endpoints.
- [ ] Add logging and health checks.
- [ ] Test important API behavior.

**Completion criteria:** The backend serves validated opportunity data through documented endpoints.

## Stage 9: React Frontend
**Status:** Not started

- [ ] Build shared layout and navigation components.
- [ ] Implement opportunity cards and detail pages.
- [ ] Implement search and filtering interfaces.
- [ ] Support country and Kenya county filters.
- [ ] Display participation mode, eligibility, and deadlines clearly.
- [ ] Link to original announcements and registration pages.
- [ ] Integrate the frontend with the API.
- [ ] Implement responsive and accessible interface behavior.
- [ ] Test loading, empty, and error states.

**Completion criteria:** Users can discover opportunities and access their original sources through the interface.

## Stage 10: Administration and Automation
**Status:** Not started

- [ ] Implement an administrative listing review queue.
- [ ] Support editing, approval, rejection, and publication controls.
- [ ] Display source provenance and validation warnings.
- [ ] Implement conservative automatic publication rules.
- [ ] Schedule source collection jobs.
- [ ] Schedule expiry checks and other maintenance jobs.
- [ ] Record job outcomes and failures.
- [ ] Provide a way to retry failed work safely.

**Completion criteria:** Routine collection and maintenance can run automatically while uncertain listings remain reviewable.

## Stage 11: Testing, Security, and Reliability
**Status:** Not started

- [ ] Add tests for critical business rules.
- [ ] Test API and database integration.
- [ ] Test duplicate detection and expiry behavior.
- [ ] Test poster generation with incomplete and unusually long records.
- [ ] Review administrative access controls.
- [ ] Verify secrets are not committed.
- [ ] Test failure handling, retries, and scheduled jobs.
- [ ] Review logging and health checks.
- [ ] Document backups and recovery procedures.
- [ ] Fix critical defects before production deployment.

**Completion criteria:** Critical user journeys and operational workflows pass defined checks.

## Stage 12: Deployment and Production Verification
**Status:** Not started

- [ ] Select the hosting environment.
- [ ] Configure production environment variables and secrets.
- [ ] Provision PostgreSQL and persistent asset storage.
- [ ] Run database migrations.
- [ ] Deploy the frontend, API, and background jobs.
- [ ] Configure HTTPS and domain settings where applicable.
- [ ] Verify scheduled tasks and logs.
- [ ] Test health checks and error handling.
- [ ] Verify backup and recovery procedures.
- [ ] Run production smoke tests.
- [ ] Document deployment and rollback procedures.

**Completion criteria:** The deployed application works reliably, and its essential operational procedures are documented.

## Progress Tracking

Update the checklist as work is completed. A checked item means the work has been completed and verified, not merely planned.

The duration estimates are provisional. Source availability, design decisions, deployment constraints, and debugging may change the schedule.