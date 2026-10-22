# Kodely: Project Specification

**Project status:** Planning  
**Version:** 0.1  
**Primary market:** Kenya  
**Coverage:** Africa-wide  
**Document purpose:** Define the product's goals, users, features, and requirements before implementation.

## 1. Project Overview

Kodely is an Africa-focused technology opportunity discovery platform. It helps people find hackathons, coding competitions, technology events, startup challenges, innovation programmes, and related opportunities through a searchable, organized directory.

Kenya is the initial priority market. Users should be able to discover opportunities by country across Africa and filter Kenyan opportunities by county.

Kodely will collect opportunity information from multiple sources, validate and deduplicate listings, create original promotional graphics, and direct users to the original organizer's website for complete details and registration.

## 2. Problem Statement

Technology opportunities are announced across many websites, event platforms, community pages, and organizer channels. Discovering relevant opportunities can require searching many separate sources, while important information such as deadlines, eligibility, location, and entry fees may be scattered or unclear.

Kodely aims to make discovery easier by bringing verified opportunity information into one searchable directory.

## 3. Project Objectives

1. Build a centralized directory of technology opportunities across Africa.
2. Prioritize useful coverage of Kenya, including all 47 counties.
3. Collect listings through modular integrations with multiple sources.
4. Normalize, validate, deduplicate, and expire listings appropriately.
5. Generate original, consistent promotional graphics for published opportunities.
6. Link each listing to its original source and registration page when available.
7. Automate publication of sufficiently complete, trustworthy records.
8. Route uncertain or incomplete records to an administrative review queue.
9. Build a maintainable application that can be deployed and expanded incrementally.

## 4. Intended Users

- **Students and learners:** Find hackathons, coding challenges, workshops, and learning opportunities.
- **Developers and technical professionals:** Discover competitions, conferences, meetups, and innovation programmes.
- **Founders and startup teams:** Find startup competitions, accelerators, grants, and related programmes.
- **Designers and product builders:** Discover design challenges, product events, and interdisciplinary competitions.
- **Technology communities and organizers:** Help relevant audiences discover legitimate opportunities.
- **Administrators and editors:** Review listings, correct data, manage sources, and oversee publishing quality.

These are intended audiences; detailed personas will be refined during UI/UX design.

## 5. Opportunity Categories

The initial category system should support:

- Hackathons
- Coding and programming competitions
- Technology conferences
- Meetups and community events
- Workshops and training
- Startup competitions and pitch events
- Grants and funding opportunities
- Accelerators and incubators
- Innovation challenges
- Internships and technology programmes
- Other relevant technology opportunities

Categories should be configurable so new types can be added without redesigning the database.

## 6. Geographic Coverage and Participation Modes

### 6.1 Geographic filters

- Africa-wide discovery
- Country-level filtering across African countries
- County-level filtering for Kenya's 47 counties
- City or locality information where available
- Online opportunities that are open to participants across multiple locations

The system must distinguish an opportunity's physical location from the locations or countries whose residents are eligible to participate.

### 6.2 Participation modes

Each listing should support:

- Online
- In-person
- Hybrid

For online opportunities, eligibility and geographic restrictions must be displayed separately from the event's delivery mode.

## 7. Listing Information

A listing may contain the following fields, depending on what its source provides:

- Opportunity title
- Category
- Short summary
- Organizer
- Country
- Kenyan county, where applicable
- City or locality
- Participation mode
- Eligibility requirements and eligible locations
- Start date and end date
- Application or registration deadline
- Prize pool or reward details
- Entry fee or application fee
- Original announcement URL
- Registration URL
- Source name and source URL
- Date discovered and last verified
- Publication status
- Generated poster reference

**Data integrity rule:** Missing information must remain unknown rather than being invented. Optional poster fields should be omitted when the source does not provide reliable information.

Dates, eligibility, prize values, and fees must retain enough context to avoid misleading users. For example, a prize pool should not be presented as an individual cash prize if it is a total team prize.

## 8. Core Product Features

### 8.1 Public directory

- Browse opportunity listings.
- Search by keywords.
- Filter by category, country, Kenyan county, participation mode, and relevant dates.
- View deadlines, location, eligibility, fees, and rewards when known.
- Open original announcement and registration pages.
- Identify expired or closed opportunities appropriately.

### 8.2 Original promotional graphics

Kodely should generate original, branded graphics using reusable templates.

Graphics should prioritize:
- Kodely branding and visual identity
- Opportunity title
- Category
- Deadline or event dates
- Location or participation mode
- Prize pool, where confirmed
- Entry fee, where confirmed
- Organizer, where available

The design should be minimalist, readable, and suitable for sharing on social platforms. Missing details should be omitted rather than guessed. The poster should direct users to the Kodely listing or appropriate source link, while the listing provides full details and registration links.

Kodely should not simply copy an organizer's existing poster. It should use original layouts and only use third-party logos or assets when their use is permitted.

### 8.3 Source collection

- Support multiple independent source integrations.
- Keep source-specific collection logic modular.
- Prefer official APIs, feeds, and permitted structured data where available.
- Use HTML parsing or browser automation only when appropriate and permitted.
- Track collection failures and last successful runs.
- Respect access rules, rate limits, and applicable content rights.

### 8.4 Data quality and deduplication

- Normalize dates, locations, categories, URLs, and other fields.
- Detect duplicate listings collected from different sources.
- Identify missing or contradictory critical fields.
- Track when listings were last verified.
- Expire or flag listings whose deadlines have passed.
- Preserve source references for auditing and correction.

### 8.5 Publishing workflow

Use a hybrid publication model:

- **Automatic publication:** Records that meet configured completeness, validation, and source-trust criteria.
- **Manual review:** Records with uncertainty, conflicts, missing critical information, or questionable source quality.
- **Unpublished or rejected:** Records that are invalid, duplicated, irrelevant, or insufficiently trustworthy.

Automatic publication must be conservative. A record should not be treated as trustworthy merely because a scraper successfully collected it.

### 8.6 Administration

Administrators should eventually be able to:

- Review and edit listings.
- Approve, reject, publish, or unpublish records.
- Inspect source provenance and validation warnings.
- Manage source integrations and collection status.
- Resolve duplicates and correct inaccurate details.
- Regenerate posters when listing data changes.

## 9. Proposed Technology Stack

| Component | Proposed technology |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Backend API | Python, FastAPI |
| Database | PostgreSQL |
| ORM and migrations | SQLAlchemy, Alembic |
| Collection | Requests, BeautifulSoup, Scrapy, Playwright where needed |
| Poster generation | Python with SVG or HTML/CSS templates |
| Testing | Pytest and suitable frontend testing tools |
| Version control | Git and GitHub |
| Deployment | Docker-compatible configuration and a suitable hosting environment |

These choices are the planned baseline and may be refined when implementation requirements become clearer.

## 10. Non-Functional Requirements

- **Accuracy:** Do not invent missing facts or silently resolve conflicting values.
- **Maintainability:** Keep source integrations and application modules independent where practical.
- **Reliability:** Log failures and expose health checks for deployed services.
- **Security:** Keep secrets outside version control and protect administrative functions.
- **Performance:** Support efficient filtering, pagination, and database queries.
- **Scalability:** Allow additional sources, countries, categories, and opportunity types.
- **Accessibility:** Build readable, responsive interfaces with sensible keyboard and contrast support.
- **Traceability:** Preserve source references and record important administrative changes.
- **Deployment readiness:** Provide configuration, migrations, setup instructions, and operational documentation.
- **Respectful collection:** Follow source access rules, rate limits, and applicable legal and content-rights requirements.

## 11. Data and Content Principles

1. The original organizer or authoritative source is the preferred reference for opportunity details.
2. Each listing should retain its source URL and registration URL when available.
3. Unknown values must not be fabricated.
4. Conflicting information should be flagged for review.
5. Generated graphics should use Kodely's original templates.
6. Collection methods must be appropriate for the source and its access restrictions.
7. Expired listings should not be presented as currently open opportunities.
8. Source integrations should record enough provenance to support verification and correction.

## 12. Deployment and Operations

The application should be designed for deployment from the beginning rather than treated as a final afterthought.

Planned operational requirements include:

- Environment-based configuration and a documented example environment file.
- PostgreSQL migrations.
- Persistent storage for generated posters and other required files.
- Scheduled collection and maintenance jobs.
- Logging and error reporting.
- Health checks.
- Automated tests for important data and publishing rules.
- Backup and recovery guidance for persistent data.
- Clear local development and production deployment instructions.

The specific hosting provider and production topology remain to be selected.

## 13. Initial Scope and Future Expansion

### Initial scope

- Africa-focused opportunity directory with Kenya prioritized.
- Kenya's 47 county filters and country-level filters across Africa.
- Online, in-person, and hybrid modes.
- Modular source collection.
- Validation, deduplication, expiry handling, and source provenance.
- Original poster generation.
- Automatic publishing for sufficiently trustworthy records.
- Administrative review for uncertain records.
- Deployment-ready application structure and documentation.

### Potential future enhancements

- User accounts and saved opportunities.
- Personalized recommendations and alerts.
- Email or other notification channels.
- Organizer submission forms.
- Community reporting and corrections.
- Analytics on source quality and opportunity coverage.
- Additional languages and broader regional discovery features.

These enhancements are not commitments for the initial release.

## 14. Success Criteria

The project will be evaluated against measurable criteria, including:

- Number and diversity of functioning source integrations.
- Accuracy and completeness of published listings.
- Duplicate and expired-listing detection quality.
- Correct representation of eligibility, deadlines, fees, and prizes.
- Usability of search and geographic filters.
- Reliability of poster generation.
- Proportion of records correctly routed to automatic publishing versus review.
- Deployment reproducibility, test coverage of critical rules, and operational visibility.

Numeric targets should be established after baseline measurements and early testing.

## 15. Current Status

Kodely is in Stage 1: planning and specification.

The next activities are to complete the supporting architecture, roadmap, and data-source documentation, review the specification, and then proceed to Stage 2: UI/UX design.
