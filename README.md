# Kodely

Kodely is an Africa-focused directory for discovering hackathons, technology events, coding challenges, startup competitions, and other technology opportunities.

Kenya is a priority market, with country-level discovery across Africa and county-level filtering for Kenya's 47 counties.

## Project Goals

- Help users discover relevant technology opportunities.
- Collect listings from multiple sources using modular Python scrapers.
- Validate and deduplicate collected opportunities.
- Generate original, minimalist promotional graphics.
- Link users to the original opportunity and registration pages.
- Support automated publishing for trusted listings and manual review for uncertain listings.

## Technology Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Python, FastAPI
- **Database:** PostgreSQL
- **Scraping:** Scrapy, Requests, BeautifulSoup, and Playwright where appropriate
- **Poster generation:** Python with SVG or HTML/CSS templates
- **Version control:** Git and GitHub

The final technology choices may be refined during implementation.

## Development Status

Kodely is currently in Stage 1: project planning and specification.

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for the development checklist.

## Project Documentation

- [Project Specification](docs/PROJECT_SPECIFICATION.md)
- [Development Roadmap](docs/ROADMAP.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Data Sources](docs/DATA_SOURCES.md)

## Development Principles

- Verify data before publishing it.
- Respect source websites' access rules and applicable content rights.
- Keep credentials and secrets out of version control.
- Document setup and operational changes as the project evolves.
- Test each major component before integrating it into the application.
