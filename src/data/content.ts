/**
 * All site content lives here — static, hardcoded, no backend.
 *
 * NOTE: A previous session's build was lost to a container reset, so a few
 * pieces below were reconstructed from the surviving brief. Sections marked
 * with `// RECONSTRUCTED` should be re-verified against the original source.
 */

export const profile = {
  name: "Muhammad Ali Raza",
  role: "Finance Student · Equity Research · CFA Level 1 Candidate",
  location: "Karachi, Pakistan",
  phone: "+92-311-7023800",
  phoneHref: "tel:+923117023800",
  email: "maliraza7023@gmail.com",
  linkedinHref: "https://www.linkedin.com/in/alirazaasif/",
  resumeHref: "/resume.pdf",
  resumeFileName: "Muhammad-Ali-Raza-Resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const education = {
  school: "Institute of Business Administration (IBA Karachi)",
  degree: "B.S. Accounting & Finance",
  designation: "CFA Level 1 Candidate",
  period: "Aug 2023 – May 2027",
  graduation: "Expected graduation · Feb 2027",
  coursework: [
    "Financial Modelling",
    "Mergers & Acquisitions",
    "Security Analysis",
    "Financial Management",
    "Auditing",
    "Financial Reporting",
    "Regulations & Financial Markets",
    "Taxation",
  ],
  activities: [
    "Director Finance & Registrations — IBA Accounting Club",
    "Management Team — IBA Alumni & Placement Society",
  ],
};

/** Key-number counters animated on scroll into view. */
export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export const stats: Stat[] = [
  { value: 4, suffix: "x", label: "Valuation Methods" },
  { value: 30, suffix: "+", label: "Page Research Reports" },
  { value: 5, label: "M&A Scenarios Built" },
  { value: 29, label: "ESG Indicators Scored" },
  { value: 600, suffix: "+", label: "Event Attendees Managed" },
];

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  company?: string;
  tag: string;
  grade?: string;
  summary: string;
  bullets?: string[];
  metrics?: Metric[];
  href: string;
}

export const projects: Project[] = [
  {
    title: "Pakistan Oilfields Limited (POL)",
    tag: "Equity Research",
    summary:
      "Institutional-grade initiation report covering industry structure, regulatory environment, and an 8-year forward outlook FY2020–FY2027E. Four valuation methodologies triangulated to a price target with +1.5% upside.",
    metrics: [
      { value: "~30pp", label: "Report Length" },
      { value: "50+", label: "Forecast Line Items" },
      { value: "FY27E", label: "Horizon" },
    ],
    href: "https://drive.google.com/drive/folders/1PCNOdsxWuQKOHDT9phgoYFesfL5zqB_a?usp=sharing",
  },
  {
    title: "Fatima Fertilizers Limited",
    tag: "Equity Research",
    summary:
      "Engineered a dynamic 3-statement financial model projecting 3-year performance, utilizing granular product-wise revenue build-ups (NP, CAN, DAP) and historical cost analysis to forecast margins.",
    metrics: [
      { value: "~25pp", label: "Report Length" },
      { value: "5+", label: "Forecasted Years" },
      { value: "3+", label: "Statements" },
    ],
    href: "https://drive.google.com/drive/folders/1D0WQ9NBAqLFPvOFN965Llc5MlAPZVppX?usp=sharing",
  },
  {
    title: "Abbott Laboratories",
    tag: "Capital Budgeting Analysis",
    summary:
      "Analysed Abbott Labs Ltd's financials, calculating a WACC of 8% and a beta of 1.1 to assess investment risk and stability, providing insights into the company's financial stability and shareholder value.",
    metrics: [
      { value: "8%", label: "WACC" },
      { value: "0.5x", label: "Debt-to-Equity" },
      { value: "~22pp", label: "Report Length" },
    ],
    href: "https://drive.google.com/drive/folders/1mx_pkI4rVFLhF6aW45oaI2KIRcIWHpxp?usp=drive_link",
  },
  {
    title: "FFBL / FFC Merger Analysis",
    tag: "M&A Modeling",
    summary:
      "Five-scenario DCF for the proposed FFBL–FFC merger. Implied enterprise value PKR 66.5Bn, target price PKR 48, with granular NWC modeling and a PKR 118Bn terminal value at 4x EV/EBITDA exit multiple.",
    metrics: [
      { value: "66.5Bn", label: "EV (PKR)" },
      { value: "20.4%", label: "WACC" },
      { value: "5", label: "Scenarios" },
    ],
    href: "https://drive.google.com/drive/folders/1ZgLNj6bPkvVONYCg3JQ6tasOzsdK9NkT?usp=sharing",
  },
  {
    title: "Tesla ESG Scoring Framework",
    tag: "ESG & Quantitative",
    summary:
      "Proprietary 29-indicator ESG framework across 3 pillars benchmarking 5 global automakers via min-max normalization. OLS regression on ~25 firm-year observations quantified ESG–financial performance correlations.",
    metrics: [
      { value: "29", label: "Indicators" },
      { value: "5", label: "Automakers" },
      { value: "~15pp", label: "Write-up" },
    ],
    href: "https://drive.google.com/drive/folders/1O80TEa15TjkNx_hgt_dmi8UxC8t-VNBE?usp=sharing",
  },
  {
    title: "Diwali Dataset Dashboard",
    tag: "Power BI Dashboard",
    summary:
      "Developed an interactive dashboard featuring charts and diagrams, after cleaning and analysing the Diwali dataset, enabling data-driven decision-making.",
    metrics: [
      { value: "7+", label: "Visualizations" },
      { value: "5000+", label: "Rows" },
      { value: "12+", label: "Variables" },
    ],
    href: "https://drive.google.com/drive/folders/11oWVRjdRPQhDypa8QGAvSKzjd8bBdSYR?usp=sharing",
  },
];

export const experience = [
  {
    role: "Freelance Product Analyst",
    org: "FullGripEcom · Karachi, Pakistan",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Researched and identified 12+ profitable product opportunities across 3 e-commerce niches (including leather jackets and overcoats) by analyzing competitor pricing, customer demand trends, and sell-through data prior to listing.",
      "All identified products generated active revenue for the client following listing.",
    ],
  },
  {
    role: "Director, Finance & Registrations",
    org: "IBA Accounting Club · Karachi, Pakistan",
    period: "Sept 2024 – May 2025",
    bullets: [
      "Managed end-to-end financial operations for The Vista Summit — IBA's flagship annual finance conference — overseeing a PKR 740,000 budget across vendor negotiations, cost controls, and disbursements for 600+ attendees including senior diplomats, politicians, and C-suite executives.",
      "Designed and executed a full guest registration system for 600+ attendees from scratch, streamlining credential management, RSVP tracking, and on-ground logistics across all conference touchpoints.",
    ],
  },
  {
    role: "Student Fellow",
    org: "Millennium Campus Network (MCN) · Remote, Global",
    period: "Jun 2024 – Aug 2025",
    bullets: [
      "Selected to represent Pakistan in a 100+ member global cohort spanning 30+ countries, leading data collection, team coordination, and stakeholder presentations for Project QALAM — an initiative on the transformative power of education.",
      "Delivered 3 written project briefs covering education access, poverty alleviation, and environmental sustainability.",
    ],
  },
  {
    role: "Trainee Data Analyst",
    org: "Fudge Consulting · Remote, Pakistan",
    period: "Jun 2022 – Aug 2024",
    bullets: [
      "Automated data cleaning and processing for 5 recurring client reports in the education sector using Python (pandas) and Excel, cutting turnaround time by 25% from 8 to 6 hours per cycle and removing recurring data quality errors.",
      "Built 3 Tableau KPI dashboards tracking revenue and sales performance for 5 clients across 3 sectors.",
    ],
  },
];

export const skillGroups = [
  {
    group: "Finance & Valuation",
    skills: [
      "DCF / DDM / EV·EBITDA / P/E",
      "3-Statement Financial Modeling",
      "M&A Valuation & NWC Modeling",
      "Comparable & Precedent Analysis",
      "Sensitivity & Scenario Analysis",
      "ESG Frameworks",
      "Capital Markets & Investment Banking",
      "Portfolio Management",
    ],
  },
  {
    group: "Data & Technical",
    skills: [
      "Python — Pandas, NumPy, Matplotlib",
      "SQL",
      "Tableau",
      "Power BI",
      "Advanced Excel",
      "Jupyter Notebook",
      "N8n (Workflow Automation)",
      "Supabase",
    ],
  },
  {
    group: "Research & Analysis",
    skills: [
      "Equity Research & Fundamental Analysis",
      "Financial Statement Analysis",
      "ESG Scoring & OLS Regression",
      "Sector & Industry Research",
      "Bloomberg Terminal",
      "PSX Portfolio Management",
      "Long-Form Report Authorship",
    ],
  },
  {
    group: "Certifications",
    skills: [
      "JP Morgan IB Job Simulation",
      "WSO Excel DCF & Financial Modeling",
      "WSO Excel Financial Modeling",
      "Google Data Analytics",
      "Google Business Intelligence",
      "Tableau BI Analyst",
      "Accenture Data Analytics",
    ],
  },
];
