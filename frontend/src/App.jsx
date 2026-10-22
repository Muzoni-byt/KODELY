
import { useMemo, useState } from "react";

const categories = [
  {
    icon: "⌘",
    title: "Hackathons",
    description: "Build, experiment, and solve real problems.",
  },
  {
    icon: "◈",
    title: "Tech events",
    description: "Meet people, learn, and grow your network.",
  },
  {
    icon: "↗",
    title: "Startup competitions",
    description: "Pitch your ideas and discover funding opportunities.",
  },
  {
    icon: "</>",
    title: "Coding challenges",
    description: "Test your skills and take on something new.",
  },
];

const opportunities = [
  {
    id: 1,
    category: "HACKATHON",
    title: "Build for a Better Africa",
    description:
      "Bring your ideas to life and explore technology solutions for real-world challenges.",
    location: "Online",
    country: "Kenya",
    format: "Online",
    deadline: "Demo opportunity",
    prize: "Prize not announced",
    color: "blue",
    label: "Explore",
  },
  {
    id: 2,
    category: "STARTUP COMPETITION",
    title: "The Next Big Idea",
    description:
      "Explore the startup journey, develop your idea, and prepare to pitch your vision.",
    location: "Nairobi, Kenya",
    country: "Kenya",
    format: "In-person",
    deadline: "Demo opportunity",
    prize: "Prize not announced",
    color: "violet",
    label: "Explore",
  },
  {
    id: 3,
    category: "TECH COMMUNITY",
    title: "Connect Through Tech",
    description:
      "Discover spaces to learn, collaborate, share knowledge, and meet fellow innovators.",
    location: "Across Africa",
    country: "Africa-wide",
    format: "Hybrid",
    deadline: "Explore events",
    prize: null,
    color: "teal",
    label: "Explore",
  },
];

const countries = [
  "All Africa",
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Nigeria",
  "South Africa",
  "Ghana",
  "Ethiopia",
  "Online",
];

function BrandLogo() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3157c9] text-xl font-black text-white">
        K
      </span>
      <span className="text-2xl font-extrabold tracking-tight text-white">
        kode<span className="text-[#7895e8]">ly</span>
      </span>
    </a>
  );
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function OpportunityCard({ opportunity }) {
  const bannerColors = {
    blue: "bg-[#263b70]",
    violet: "bg-[#403254]",
    teal: "bg-[#25434a]",
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#363c47] bg-[#20242c] transition duration-200 hover:-translate-y-1 hover:border-[#52617c]">
      <div
        className={`relative flex min-h-44 flex-col justify-between overflow-hidden p-6 ${
          bannerColors[opportunity.color] || bannerColors.blue
        }`}
      >
        <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-white/10" />
        <div className="absolute -right-1 -top-3 h-28 w-28 rounded-full border border-white/10" />
        <div className="absolute -bottom-16 left-20 h-36 w-36 rounded-full border border-white/10" />

        <div className="relative flex items-center justify-between gap-3">
          <span className="rounded-md border border-white/15 bg-black/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white/90">
            {opportunity.category}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
            {opportunity.format}
          </span>
        </div>

        <div className="relative mt-8">
          <p className="text-xs font-medium text-white/65">DISCOVER WHAT'S NEXT</p>
          <h3 className="mt-2 max-w-xs text-2xl font-bold leading-tight text-white">
            {opportunity.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="min-h-[4.5rem] text-sm leading-6 text-[#a1a8b3]">
          {opportunity.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm text-[#c4c9d2]">
          <MapPinIcon />
          <span>{opportunity.location}</span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#363c47] pt-4">
          <div>
            <p className="text-xs text-[#858d9a]">
              {opportunity.prize ? "Prize" : "Discover"}
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {opportunity.prize || "Tech communities"}
            </p>
          </div>

          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-lg border border-[#46516a] px-3 py-2 text-sm font-semibold text-white transition hover:border-[#7895e8] hover:bg-[#252f46]"
            aria-label={`Learn more about ${opportunity.title}`}
          >
            {opportunity.label}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7895e8]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-[#a1a8b3]">{description}</p>
      )}
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Africa");
  const [selectedFormat, setSelectedFormat] = useState("All formats");

  const filteredOpportunities = useMemo(() => {
    const term = search.trim().toLowerCase();

    return opportunities.filter((opportunity) => {
      const matchesSearch =
        !term ||
        [
          opportunity.title,
          opportunity.category,
          opportunity.description,
          opportunity.location,
          opportunity.country,
        ]
          .join(" ")
          .toLowerCase()
          .includes(term);

      const matchesCountry =
        selectedCountry === "All Africa" ||
        selectedCountry === "Online" && opportunity.format === "Online" ||
        opportunity.country === selectedCountry ||
        opportunity.country === "Africa-wide";

      const matchesFormat =
        selectedFormat === "All formats" ||
        opportunity.format === selectedFormat;

      return matchesSearch && matchesCountry && matchesFormat;
    });
  }, [search, selectedCountry, selectedFormat]);

  return (
    <div className="min-h-screen bg-[#17191f] text-[#f3f4f6]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#30343d] bg-[#17191f]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <BrandLogo />

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#explore"
              className="text-sm font-medium text-[#c4c9d2] transition hover:text-white"
            >
              Explore
            </a>
            <a
              href="#categories"
              className="text-sm font-medium text-[#c4c9d2] transition hover:text-white"
            >
              Categories
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#c4c9d2] transition hover:text-white"
            >
              About Kodely
            </a>
          </nav>

          <a
            href="#explore"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3157c9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2647a8]"
          >
            Explore opportunities
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute right-0 top-0 -z-0 h-[28rem] w-[28rem] rounded-full bg-[#202b45] opacity-40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-32">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#363c47] bg-[#252a33] px-3.5 py-2 text-xs font-semibold text-[#c7d2f3]">
                <span className="h-2 w-2 rounded-full bg-[#7895e8]" />
                YOUR OPPORTUNITY STARTS HERE
              </div>

              <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Find your next
                <span className="mt-2 block text-[#7895e8]">
                  big opportunity.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#a1a8b3] sm:text-lg">
                Hackathons, tech events, startup competitions, and coding
                challenges. Discover what's happening across Kenya and Africa,
                all in one place.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#explore"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#3157c9] px-6 py-3.5 font-semibold text-white transition hover:bg-[#2647a8]"
                >
                  Explore opportunities
                  <ArrowIcon />
                </a>
                <a
                  href="#categories"
                  className="rounded-xl border border-[#424854] bg-[#20242c] px-6 py-3.5 font-semibold text-white transition hover:border-[#657087]"
                >
                  Browse categories
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#a1a8b3]">
                <span className="flex items-center gap-2">
                  <span className="text-[#7895e8]">✓</span>
                  Kenya and Africa-wide
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#7895e8]">✓</span>
                  Online and in-person
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#7895e8]">✓</span>
                  One place to discover
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl border border-[#343c4c]" />

              <div className="relative overflow-hidden rounded-3xl border border-[#363c47] bg-[#20242c] p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-[#363c47] pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f98a8]">
                      THE KODELY RADAR
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-white">
                      Find your next move.
                    </h2>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3157c9] text-xl font-bold text-white">
                    ↗
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      icon: "⌘",
                      title: "Hackathons",
                      detail: "Build something meaningful",
                      color: "bg-[#263b70]",
                    },
                    {
                      icon: "◈",
                      title: "Startup competitions",
                      detail: "Take your idea further",
                      color: "bg-[#403254]",
                    },
                    {
                      icon: "</>",
                      title: "Coding challenges",
                      detail: "Show what you can do",
                      color: "bg-[#25434a]",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-xl border border-[#363c47] bg-[#252a33] p-4"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${item.color}`}
                      >
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-[#969eab]">
                          {item.detail}
                        </p>
                      </div>
                      <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-[#8f98a8]" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-[#363c47] bg-[#1b2028] p-4">
                  <p className="text-sm font-semibold text-white">
                    Opportunities without the endless searching.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#969eab]">
                    Discover. Prepare. Apply. Build something great.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-xl border border-[#424854] bg-[#252a33] px-4 py-3 shadow-xl sm:-left-8">
                <p className="text-xs text-[#a1a8b3]">Your next move</p>
                <p className="mt-1 text-sm font-bold text-white">
                  Starts with discovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="border-y border-[#30343d] bg-[#1b1e25]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <SectionHeading
              eyebrow="Explore by interest"
              title="Find the right kind of opportunity."
              description="Whether you're building your first project, growing a startup, or looking to meet the tech community, start with what interests you."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <a
                  key={category.title}
                  href="#explore"
                  onClick={() => {
                    setSearch(
                      index === 0
                        ? "hackathon"
                        : index === 1
                          ? "tech"
                          : index === 2
                            ? "startup"
                            : "coding"
                    );
                  }}
                  className="group rounded-2xl border border-[#363c47] bg-[#252a33] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#52617c] hover:bg-[#292f39]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3157c9] text-lg font-bold text-white transition group-hover:bg-[#2647a8]">
                    {category.icon}
                  </span>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#a1a8b3]">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9bb0f4]">
                    Explore category
                    <ArrowIcon className="transition group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Explore opportunities */}
        <section id="explore" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="The opportunity board"
              title="Discover what's out there."
              description="Explore the kinds of opportunities Kodely is being built to bring together."
            />

            <p className="max-w-sm text-sm leading-6 text-[#858d9a]">
              These are sample preview cards for the design. They are not
              verified, live opportunities.
            </p>
          </div>

          {/* Search and filters */}
          <div className="mt-9 rounded-2xl border border-[#363c47] bg-[#20242c] p-4 sm:p-5">
            <form
              className="flex flex-col gap-3 lg:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="relative min-w-0 flex-1">
                <span className="sr-only">Search opportunities</span>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#858d9a]">
                  <SearchIcon />
                </span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search hackathons, events, startups..."
                  className="w-full rounded-xl border border-[#363c47] bg-[#17191f] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-[#747d8b] focus:border-[#6684e0]"
                />
              </label>

              <label>
                <span className="sr-only">Filter by country</span>
                <select
                  value={selectedCountry}
                  onChange={(event) => setSelectedCountry(event.target.value)}
                  className="w-full rounded-xl border border-[#363c47] bg-[#252a33] px-4 py-3.5 text-sm text-white outline-none focus:border-[#6684e0] sm:min-w-44"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="sr-only">Filter by format</span>
                <select
                  value={selectedFormat}
                  onChange={(event) => setSelectedFormat(event.target.value)}
                  className="w-full rounded-xl border border-[#363c47] bg-[#252a33] px-4 py-3.5 text-sm text-white outline-none focus:border-[#6684e0] sm:min-w-40"
                >
                  {["All formats", "Online", "In-person", "Hybrid"].map(
                    (format) => (
                      <option key={format} value={format}>
                        {format}
                      </option>
                    )
                  )}
                </select>
              </label>
            </form>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-[#858d9a]">
                Showing {filteredOpportunities.length} sample{" "}
                {filteredOpportunities.length === 1
                  ? "preview"
                  : "previews"}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCountry("All Africa");
                  setSelectedFormat("All formats");
                }}
                className="text-xs font-semibold text-[#9bb0f4] transition hover:text-white"
              >
                Clear filters
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="mt-7 rounded-2xl border border-[#363c47] bg-[#20242c] px-6 py-12 text-center">
              <p className="text-lg font-bold text-white">
                No matching previews found.
              </p>
              <p className="mt-2 text-sm text-[#a1a8b3]">
                Try a different search or clear your filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCountry("All Africa");
                  setSelectedFormat("All formats");
                }}
                className="mt-5 rounded-lg bg-[#3157c9] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2647a8]"
              >
                Reset search
              </button>
            </div>
          )}
        </section>

        {/* About */}
        <section id="how-it-works" className="border-t border-[#30343d] bg-[#1b1e25]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Why Kodely?"
                  title="Opportunity should be easier to find."
                  description="Great opportunities can be hard to discover when they're scattered across event pages, social media posts, community groups, and different websites."
                />

                <p className="mt-5 leading-7 text-[#a1a8b3]">
                  Kodely is being built to bring those opportunities into one
                  organized place, so African developers, students, founders,
                  and tech enthusiasts can spend less time searching and more
                  time creating.
                </p>

                <a
                  href="#explore"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#9bb0f4] hover:text-white"
                >
                  Start exploring
                  <ArrowIcon />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Discover",
                    text: "Find events and challenges that match your interests.",
                  },
                  {
                    number: "02",
                    title: "Filter",
                    text: "Narrow your search by location and participation format.",
                  },
                  {
                    number: "03",
                    title: "Get the details",
                    text: "Find deadlines, eligibility, prizes, and organizer information when available.",
                  },
                  {
                    number: "04",
                    title: "Take action",
                    text: "Follow the organizer's official link to learn more and apply.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-[#363c47] bg-[#252a33] p-6"
                  >
                    <p className="text-sm font-bold tracking-widest text-[#7895e8]">
                      {step.number}
                    </p>
                    <h3 className="mt-4 text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#a1a8b3]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-[#363c47] bg-[#252a33] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#586b9c]/30" />
            <div className="absolute -right-5 -top-8 h-44 w-44 rounded-full border border-[#586b9c]/30" />

            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9bb0f4]">
                YOUR NEXT CHAPTER
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your next big opportunity starts here.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#b1b7c2]">
                From your first hackathon to your next startup milestone,
                make Kodely the place you check for what's possible.
              </p>

              <a
                href="#explore"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#3157c9] px-6 py-3.5 font-semibold text-white transition hover:bg-[#2647a8]"
              >
                Explore Kodely
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30343d] bg-[#17191f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <BrandLogo />
            <p className="mt-3 text-sm text-[#858d9a]">
              Discover opportunities. Build what's next.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#a1a8b3]">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
            <a href="#categories" className="transition hover:text-white">
              Categories
            </a>
            <a href="#explore" className="transition hover:text-white">
              Explore
            </a>
          </div>

          <p className="text-xs text-[#747d8b]">
            © {new Date().getFullYear()} Kodely. Built for Africa's tech
            community.
          </p>
        </div>
      </footer>
    </div>
  );
}
