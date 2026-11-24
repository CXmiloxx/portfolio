import type { WorkCopy } from "@/types/dictionary"

export const work: WorkCopy = {
  eyebrow: "Projects",
  title: "Systems I built that real companies use today.",
  intro:
    "Each project reads two ways: first, what it is for, in plain words; then, how it is built, for anyone who wants the technical detail.",
  privacy: "Client names are omitted for confidentiality. The code belongs to each company.",
  labels: {
    plain: "In plain words",
    details: "Technical details",
    built: "What I built",
    architecture: "How it is built",
    layers: "Layers I worked on",
    diagram: "System map",
  },
  layerLegend: { ui: "interface", api: "logic", data: "data", infra: "deployment" },
  nodeLegend: {
    client: "Screens",
    service: "Services",
    data: "Data",
    external: "External systems",
    queue: "Automatic jobs",
  },
  status: { live: "In production", done: "Completed", building: "In progress" },
  cases: {
    micupoya: {
      title: "Mi Cupo Ya",
      kicker: "Credit sales · WhatsApp and web",
      plain:
        "A store sells phones on credit over WhatsApp and on its website. The customer picks a phone, the system looks the person up with CONSULTAR, works out how much it can lend and builds the installment plan. Once the down payment is paid and the sign-up is complete, the loan is approved by itself, with no manual review.",
      built: [
        "8 services: rules-and-money core, payments, gateway for external systems, background jobs, admin panel, customer portal and website",
        "Credit limit from a configurable policy, French-amortization payment plans, late fees and cascading payments with receipts",
        "Integration with the WhatsApp bot, the payment gateway and the platform that locks overdue phones",
      ],
      architecture:
        "Independent NestJS services on a single MySQL database, hexagonal architecture, HMAC-signed webhooks with retries, trigger-based auditing, RS256 JWT and Next.js panels with shadcn/ui. Everything runs in Docker.",
    },
    lending: {
      title: "Lending platform",
      kicker: "Financial sector · loans through retail partners",
      plain:
        "The system a company uses to lend money through retail partners. A partner registers the customer, the system profiles them with CONSULTAR, checks their credit history with DataCrédito and decides whether to approve the loan; then it calculates the installments, receives payments and reports the portfolio to the credit bureau every month.",
      built: [
        "13 services by area: loans, payments, decision engine, partners, users, metrics, messaging (SMS and email), gateway to other systems and background jobs",
        "Integration with DataCrédito (Experian HDC+) for credit history, and the monthly portfolio report delivered to the bureau",
        "Upfront profiling with CONSULTAR on a job queue, plus an MCP server so other systems can query it as tools",
      ],
      architecture:
        "Orchestrator repository with git submodules, a shared Prisma schema, hexagonal architecture in every API, BullMQ queues on Redis for heavy work, the DataCrédito provider behind a port (real or simulated) and a deploy script that checks everything before touching production.",
    },
    insyte: {
      title: "INSYTE",
      kicker: "Business service · finding and locating people",
      plain:
        "With a person's basic details, INSYTE searches every public entity that can be queried —health, pensions, occupational risk, the civil registry, vehicle registry, police, inspector general, courts and more— to help locate them, and returns everything it finds in a single profile.",
      built: [
        "39 public sources connected, queried in parallel by a background process that retries when a source fails",
        "A consolidated profile that shows which entity each piece of data came from",
        "Access from a web dashboard or via API, billed monthly by usage",
      ],
      architecture:
        "NestJS API owns the data schema; an isolated worker talks to it only through Redis and BullMQ, with one adapter per source. RS256 JWT authentication and a Next.js dashboard.",
    },
    hr: {
      title: "Gestión Social",
      kicker: "Human resources · many companies on one platform",
      plain:
        "An HR program used by several companies at once, each one seeing only its own information: employees, payroll, vacations and leave.",
      built: [
        "Automatic calculation of Colombian statutory bonuses, severance and benefits",
        "Per-company roles and permissions, vacations, suspensions and warnings",
        "Incident reporting with a QR code, no login required",
      ],
      architecture: "Multi-tenant: each company is isolated in the data layer. NestJS API, Next.js frontend and Prisma on MySQL.",
    },
    legal: {
      title: "Court case tracking",
      kicker: "Public sector · automation",
      plain:
        "A government agency's lawyers checked their cases one by one, every day, on the judicial branch website. Now the system does that check by itself and keeps every case file up to date, documents included.",
      built: [
        "Automatic sync of case activity from Colombia's judicial branch",
        "Automatic document downloads from SAMAI",
        "Deployed for a government agency and adapted for a public utility company",
      ],
      architecture: "Express API with scheduled scrapers, Prisma on MySQL and a Next.js frontend.",
    },
  },
  moreTitle: "Other projects",
  more: {
    boletazo: {
      title: "Boletazo",
      plain: "A SaaS product that lets any organizer run their whole ticket-sales process in one place: online and in-person sales, installments, sellers, prizes, the draw with the official lottery, and accounting.",
    },
    documents: {
      title: "Document storage service",
      plain: "A central service where several apps store files, images and videos; it optimizes them automatically so they load fast.",
    },
    budget: {
      title: "School budget management",
      plain: "Budget control for a school: purchases, approvals, inventory and petty cash, with Microsoft 365 sign-in.",
    },
    medical: {
      title: "Medical appointments & emergencies",
      plain: "A call center coordinated appointments and emergencies over WhatsApp and lost information. Now every case is recorded and tracked.",
    },
  },
}
