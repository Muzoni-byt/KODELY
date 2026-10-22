# Kodely Data Sources and Collection Strategy

**Document version:** 0.1  
**Status:** Initial source strategy  
**Coverage priority:** Kenya first, then Africa-wide expansion

## 1. Purpose

This document defines how Kodely will identify, evaluate, integrate, and monitor external sources of technology opportunities.

Kodely should collect information from a diverse set of sources, including official organizer websites, event platforms, university innovation hubs, developer communities, startup support organizations, and relevant public-sector programmes.

The goal is useful, verified coverage rather than collecting the largest possible volume of unverified listings.

A source is a candidate until its relevance, reliability, technical accessibility, and collection permissions have been assessed.

## 2. Source Selection Principles

Sources should be assessed using the following principles:

1. **Relevance:** Does the source regularly announce opportunities that fit Kodely's categories?
2. **Authority:** Is it an original organizer, official programme, recognized host, or credible aggregator?
3. **Geographic value:** Does it cover Kenya, other African countries, or eligible online participation?
4. **Freshness:** Are deadlines and event details updated reliably?
5. **Completeness:** Does it provide useful details such as dates, eligibility, location, and registration links?
6. **Technical accessibility:** Can the information be obtained reliably through an available and permitted method?
7. **Collection permissions:** Do the site's terms, access controls, and applicable laws permit the proposed method?
8. **Maintenance cost:** Can the integration be maintained without excessive breakage or manual intervention?

Sources should be prioritized based on their expected value and the effort required to maintain them.

## 3. Source Categories

### 3.1 Official event and competition organizers

Examples include organizer websites for hackathons, coding competitions, innovation challenges, conferences, and technology workshops.

Potential value:
- First-party dates and deadlines.
- Official eligibility rules.
- Confirmed rewards and fees.
- Original registration links.

Preferred approach: use official APIs, feeds, structured data, or permitted page parsing where available.

### 3.2 Event discovery platforms

Event platforms may list hackathons, meetups, workshops, conferences, and community events.

Potential value:
- Broad event discovery.
- Searchable listings.
- Location and date information.
- Links to organizers or registration pages.

Assessment requirements:
- Confirm whether an official API or feed exists.
- Review current access conditions.
- Check whether automated collection is permitted.
- Avoid treating a platform's listing as authoritative when an official organizer source is available.

### 3.3 Developer and technology communities

Potential sources include public announcements from developer communities, technology hubs, programming groups, and professional networks.

Potential value:
- Local meetups and workshops.
- Community hackathons.
- Calls for participation.
- Opportunities that may be missed by large event platforms.

Collection should use approved APIs, public feeds, official announcement pages, or other permitted access methods. Private groups and restricted member content should not be treated as freely accessible sources.

### 3.4 Universities and educational institutions

Potential sources include university innovation centres, computer science departments, entrepreneurship programmes, research hubs, and student technology organizations.

Potential value:
- Student hackathons.
- Research and innovation challenges.
- Workshops and training.
- Startup incubator programmes.
- Campus technology events.

Country, city, eligibility, and institution-specific restrictions should be captured when provided.

### 3.5 Startup ecosystems and innovation organizations

Potential sources include incubators, accelerators, startup hubs, venture-building programmes, and entrepreneurship organizations.

Potential value:
- Startup competitions.
- Pitch events.
- Accelerator applications.
- Grants and innovation programmes.
- Founder training and mentorship opportunities.

Funding amounts and rewards should retain their context. A programme's investment offer must not automatically be presented as a cash prize.

### 3.6 Government and public-sector programmes

Potential sources include official government innovation initiatives, public-sector technology challenges, research programmes, and relevant agency announcements.

Potential value:
- Innovation calls.
- Public technology challenges.
- Research opportunities.
- Funding programmes.

Official government or programme pages should be preferred for eligibility, deadlines, and application requirements.

### 3.7 Open opportunity directories and feeds

Public directories and feeds can help discover opportunities across multiple countries.

They may be useful for coverage, but their records should be checked for duplication, freshness, completeness, and source quality.

Whenever practical, Kodely should retain a link to the original organizer's announcement in addition to the discovery source.

## 4. Geographic Source Strategy

### Phase A: Kenya

Prioritize sources that announce opportunities in Kenya, including:

- National technology and innovation programmes.
- Universities and university innovation centres.
- Technology hubs and developer communities.
- Local hackathon and competition organizers.
- Startup accelerators and entrepreneurship programmes.
- Local technology event organizers.

Kenyan county information should be normalized to the official set of 47 counties when it can be established reliably.

Do not infer a physical county from an organizer's address if the event is online or takes place elsewhere.

### Phase B: Wider African coverage

Expand source integrations to other African countries using the same evaluation framework.

Record the country associated with the opportunity separately from:
- The organizer's headquarters.
- The event's physical location.
- The participant's country of residence or eligibility.

An online opportunity may be open to multiple African countries or worldwide. Its eligibility should reflect the source's stated rules rather than the source organization's location.

### Phase C: Cross-border and online opportunities

Include relevant online programmes, regional competitions, remote hackathons, and Africa-wide initiatives.

Record geographic restrictions explicitly when known. If eligibility is unclear, mark it as unknown or send it for review rather than assuming the opportunity is open to everyone.

## 5. Source Discovery and Assessment Workflow

Every candidate source should follow a repeatable process.

### Step 1: Discover

Identify the source through research, official organization websites, trusted directories, community announcements, or links from known sources.

### Step 2: Verify identity and relevance

Record the source's name, canonical URL, organization where known, geographic coverage, and likely opportunity categories.

### Step 3: Check access conditions

Review relevant terms, API documentation, robots directives where applicable, rate limits, authentication requirements, and other access restrictions.

Robots directives are an important signal for crawler behavior, but they do not by themselves settle every legal or contractual question.

### Step 4: Select a collection method

Choose the least fragile appropriate method:

1. Official API.
2. Official feed.
3. Permitted structured-data extraction.
4. Permitted HTML parsing.
5. Browser automation when necessary and permitted.
6. Manual submission or review when automated access is unsuitable.

### Step 5: Build a small integration

Implement a source-specific adapter that returns a common candidate-record format.

### Step 6: Test data quality

Check extracted fields against known examples and, where possible, compare them with the organizer's original announcement.

### Step 7: Enable controlled collection

Configure timeouts, rate limits, retries, logging, and a suitable collection schedule.

### Step 8: Monitor

Track success rates, extraction failures, field completeness, duplicate rates, and whether the source continues to provide useful opportunities.

### Step 9: Review or disable when necessary

Update broken integrations and pause collection if permissions change, access becomes inappropriate, or the source becomes unreliable.

## 6. Common Candidate Record

Source adapters should produce a consistent internal representation.

Proposed fields include:

| Field | Purpose |
|---|---|
| `source_name` | Human-readable source name |
| `source_url` | URL of the page or record from which information was obtained |
| `canonical_url` | Normalized source record URL, when available |
| `title` | Opportunity title |
| `description` | Extracted summary or description |
| `organizer` | Organizer name, when known |
| `category` | Proposed opportunity category |
| `country` | Country associated with the opportunity |
| `county` | Kenyan county, when applicable |
| `city` | City or locality, when known |
| `participation_mode` | Online, in-person, or hybrid |
| `eligibility` | Stated participation requirements |
| `start_date` | Start date or timestamp, when known |
| `end_date` | End date or timestamp, when known |
| `deadline` | Application or registration deadline, when known |
| `prize_details` | Reward or prize information, with context |
| `fee_details` | Entry or application fee information |
| `registration_url` | Application or registration link, when available |
| `collected_at` | Time the record was collected |
| `last_verified_at` | Most recent successful verification time |
| `validation_warnings` | Issues that require attention |

This is a proposed interchange format, not the final database schema. Field names and types will be finalized during database design.

Missing values should be represented consistently as unknown or null. They must not be replaced with guessed information.

## 7. Source Registry

Kodely should maintain a registry of integrated and candidate sources.

Proposed registry information:

- Source identifier and name.
- Canonical website URL.
- Organization, where known.
- Countries and categories covered.
- Collection method.
- Relevant access and usage notes.
- Integration status.
- Configured collection frequency.
- Last successful run.
- Last failure and error summary.
- Data-quality indicators.
- Maintenance notes.

Suggested integration statuses:

- **Candidate:** Identified but not yet assessed.
- **Under assessment:** Access conditions and data quality are being checked.
- **In development:** An adapter is being implemented.
- **Active:** Collection is operating as expected.
- **Paused:** Collection is temporarily disabled.
- **Retired:** The integration is no longer maintained.

## 8. Source Prioritization

Each candidate source can be assessed using a simple scoring model.

Suggested dimensions, scored from 1 to 5:

- Relevance to Kodely's audience.
- Authority and reliability.
- Geographic coverage value.
- Freshness and completeness.
- Technical maintainability.

Collection permission and access suitability should be treated as a prerequisite, not simply as a low score that can be outweighed by popularity.

A source with high potential value but unsuitable access conditions should not be scraped. Consider an official API, a permitted feed, direct organizer submission, or another suitable alternative.

Initial implementation should favor a manageable number of high-value sources, then expand as the pipeline becomes reliable.

## 9. Collection and Operational Rules

Each integration should follow these rules:

- Use explicit connection and read timeouts.
- Apply bounded retries for temporary failures.
- Respect rate limits and applicable access requirements.
- Avoid unnecessary repeated downloads.
- Do not attempt to bypass authentication, access controls, or anti-bot protections.
- Log failures without exposing credentials or unnecessary personal data.
- Make collection runs safe to retry where possible.
- Record enough provenance to trace published facts to their source.
- Keep one source's failure from stopping unrelated integrations.
- Review extraction changes when source layouts change.

Collection schedules should reflect the source's update frequency, published deadlines, access constraints, and operational cost.

## 10. Data Verification and Publication

Source reliability and record quality should be evaluated separately.

A reliable source can still publish incomplete or outdated information. A single record should not be automatically published just because it came from a familiar website.

Before automatic publication, configured rules should check appropriate fields and conditions, including:

- A meaningful title.
- A usable source reference.
- Sufficient evidence that the listing is relevant.
- Date and deadline consistency when dates are supplied.
- Location and participation-mode consistency.
- Eligibility and fee information where relevant.
- Duplicate detection results.
- Whether critical fields conflict across sources.
- Whether the opportunity appears to have expired.

The exact requirements will depend on the category. For example, an evergreen programme may not have a fixed event date, while a time-limited hackathon normally should have a deadline or event dates when these are available from the organizer.

Uncertain records should enter the administrative review queue.

## 11. Duplicate Detection

A single opportunity may appear on an organizer's website, an event platform, and a community announcement.

Duplicate detection should consider:

- Normalized title.
- Canonical URL.
- Organizer.
- Event dates or application deadline.
- Location.
- Similarity of descriptions.
- Shared registration URL.

Exact URL matches can be strong evidence of duplication, but different URLs may describe the same event. Similar titles alone should not trigger automatic merging.

Where appropriate, preserve multiple source references for a single opportunity. Conflicting records should be reviewed instead of silently overwriting trusted information.

## 12. Expiry and Reverification

Listings should be checked for changing deadlines, cancellations, and closure.

The system should distinguish:
- Upcoming opportunities.
- Currently open applications.
- Events in progress.
- Completed events.
- Closed applications.
- Cancelled opportunities.
- Opportunities whose current status cannot be verified.

A passed deadline does not necessarily mean an event itself has ended. Application status and event status should be handled separately where the source provides enough information.

Reverification schedules should be configurable. Sources that frequently change dates or application status may need more frequent checks than stable evergreen programme pages.

## 13. Source and Content Rights

Kodely must assess the rules applicable to each source and collection method.

- Prefer official APIs and permitted feeds.
- Respect relevant terms, access restrictions, and rate limits.
- Do not bypass login requirements or technical access controls.
- Retain source attribution and links where appropriate.
- Avoid copying complete descriptions or third-party promotional artwork unnecessarily.
- Generate original Kodely-branded graphics from validated facts.
- Use third-party logos and assets only where their use is permitted.
- Collect only the data needed for the directory's purpose.
- Reassess integrations if a source changes its access conditions.

Publicly viewable information is not automatically free of all contractual, copyright, or database-right restrictions.

## 14. Source Quality Metrics

Useful monitoring measures include:

- Collection success rate.
- Number of new candidate records.
- Number of records successfully normalized.
- Percentage of records with usable source links.
- Percentage of records with relevant dates when expected.
- Duplicate rate.
- Percentage of records sent for manual review.
- Percentage of published records later found to be inaccurate.
- Number of expired or stale listings detected.
- Average time since last successful source verification.

These measures will help Kodely prioritize source maintenance and improve publishing rules.

## 15. Initial Source Registry Template

The following template can be used when evaluating sources. It does not claim that any source has already been tested or approved.

| Source name | Website | Geographic coverage | Candidate categories | Access method | Status |
|---|---|---|---|---|---|
| To be assessed | To be verified | To be verified | To be verified | To be assessed | Candidate |

Populate the registry with verified source details as each integration is researched and implemented.

## 16. Initial Implementation Plan

1. Define the common candidate-record structure.
2. Establish the source registry and integration interface.
3. Identify a small set of relevant Kenyan sources.
4. Assess their access conditions and data quality.
5. Implement and test the first integrations.
6. Run collection through the shared validation pipeline.
7. Review duplicate detection and publication decisions.
8. Add sources incrementally.
9. Expand to other African countries and regional online opportunities.
10. Use operational metrics to prioritize future integrations.

## 17. Acceptance Criteria

The source strategy is ready to guide implementation when:

- Source categories and geographic priorities are defined.
- A consistent candidate-record format is documented.
- Source assessment and integration statuses are established.
- Access and content-right considerations are included.
- Validation, deduplication, and expiry policies are documented.
- The initial implementation sequence is clear.
- Unverified sources are not represented as already integrated.

**Next step:** Review all four Stage 1 documents, resolve any inconsistencies, and prepare the initial documentation commit before beginning Stage 2.