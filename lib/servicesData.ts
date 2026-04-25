export type DocGroup = {
  groupTitle: string;
  items: string[];
};

export type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  shortDesc: string;
  overview: string;
  quote: string;
  documentsIntro?: string;
  documents?: { name: string; desc: string }[];

  // Rich structured sections (used by Title Search & new-style services)
  sections?: { heading: string; items: string[] }[];

  // "When it becomes essential" list (Title Search only)
  whenEssential?: string[];

  // Closing note (Title Search only)
  closingNote?: string;

  whatWeDo: string[];
  process: { step: string; title: string; desc: string }[];
  timeline: string;

  // Old flat list  OR  new grouped list — page supports both
  docsRequired?: string[];
  docsGroups?: DocGroup[];

  // Italic note shown below the docs section
  docsNote?: string;
};

export const services: ServiceDetail[] = [
  // ─── 1. TITLE SEARCH & DUE DILIGENCE ──────────────────────────────────────
  {
    slug: "title-search-due-diligence",
    title: "Title Search & Due Diligence",
    subtitle:
      "Ownership Verification · Encumbrance Search · Legal Opinion · Pre-Purchase Advisory",
    icon: "🔍",
    shortDesc:
      "Thorough title search reports and property due diligence — including scrutiny of ownership chain, encumbrance verification, stamp duty guidance, and pre-execution legal opinion to prevent disputes.",

    overview:
      "A property may appear flawless in location, structure, or market value — yet without a legally sound title, even the most attractive transaction can become the subject of prolonged litigation.\n\nTitle due diligence is a critical legal exercise undertaken prior to any property transaction. It addresses the fundamental question: whether the seller possesses a clear, marketable, and transferable title.\n\nWith over 24 years of practice in property law, Advocate Anirudh Kamble provides structured and detailed title verification, enabling clients to make informed and legally secure decisions.",

    quote:
      "Let the buyer beware — but let the buyer also be advised. A clear title verified today is the strongest safeguard for tomorrow.",

    // Rich sections replacing the old whatWeDo / docsRequired flat lists
    sections: [
      {
        heading: "Scope of Title Due Diligence",
        items: [
          "Examination of title chain for a minimum period of 30 years, including root of title",
          "Verification of registered documents such as Sale Deeds, Gift Deeds, Partition Deeds, and Release Deeds",
          "Scrutiny of encumbrances, including mortgages, charges, and third-party rights",
          "Verification of 7/12 Extract, Property Card, and mutation entries for consistency",
          "Review of Power of Attorney and development agreements, where applicable",
          "Verification of RERA compliance in under-construction projects",
          "Examination of land use, zoning, and acquisition reservations, if any",
          "Cross-checking revenue records and Sub-Registrar records",
        ],
      },
      {
        heading: "Risk Identification & Legal Assessment",
        items: [
          "Breaks or inconsistencies in the title chain",
          "Unregistered or inadequately stamped documents",
          "Pending litigation, disputes, or injunction orders",
          "Claims of legal heirs or inheritance-related issues",
          "Transactions executed under invalid or defective authority",
          "Any factor affecting the marketability or transferability of title",
        ],
      },
      {
        heading: "Deliverables",
        items: [
          "Chronological analysis of title",
          "Clear legal opinion on title status (Marketable / Subject to Conditions / Defective)",
          "Identification of risks and their legal consequences",
          "Practical recommendations prior to transaction",
          "Suggested corrective steps, wherever required",
        ],
      },
    ],

    whenEssential: [
      "Purchase of resale property",
      "Investment in under-construction projects",
      "Entry into development or joint venture agreements",
      "Acceptance of property as financial security",
      "Transactions involving inherited or ancestral property",
      "High-value property transactions",
    ],

    closingNote:
      "A title once examined with clarity avoids years of uncertainty. Legal due diligence is not merely a formality — it is a safeguard.",

    whatWeDo: [], // kept for type compatibility; rendered via sections above

    process: [
      {
        step: "01",
        title: "Review of Documents Provided",
        desc: "We collect and review all documents provided by the client — title deeds, prior agreements, revenue records, and any other relevant material.",
      },
      {
        step: "02",
        title: "Independent Verification of Records",
        desc: "We independently verify records from the Sub-Registrar Office, Revenue authorities, and other relevant sources to supplement the client-provided documents.",
      },
      {
        step: "03",
        title: "Legal Scrutiny of Title & Supporting Documents",
        desc: "A thorough legal analysis of the title chain, encumbrances, and supporting documents is conducted to identify any defects or risks.",
      },
      {
        step: "04",
        title: "Identification of Risks & Legal Implications",
        desc: "All identified risks and their potential legal consequences are assessed and recorded, with particular attention to factors that may affect marketability or transferability.",
      },
      {
        step: "05",
        title: "Preparation of Title Search Report",
        desc: "A comprehensive written report is prepared — setting out the title history, legal opinion on title status, identified risks, and practical recommendations before the transaction proceeds.",
      },
    ],

    timeline:
      "Standard Title Search Report: 5–10 working days. Complex or rural properties with longer title chains may require additional time.",

    docsGroups: [
      {
        groupTitle: "Core Title Documents",
        items: [
          "All available title deeds (Sale Deeds, Gift Deeds, Partition Deeds, Release Deeds)",
          "Chain documents covering as many past transactions as available",
          "Agreement for Sale / Allotment Letter (if applicable)",
          "Copy of registered Development Agreement / Joint Development Agreement, if any",
        ],
      },
      {
        groupTitle: "Property Identification & Revenue Records",
        items: [
          "7/12 Extract / Property Card / City Survey Extract",
          "Mutation entries (Ferfar) with supporting documents",
          "Survey Plan / Layout Plan / CTS Plan",
          "NA Order (Non-Agricultural permission), if applicable",
        ],
      },
      {
        groupTitle: "Encumbrance & Financial Records",
        items: [
          "Encumbrance Certificate (EC), if available",
          "Details of any existing loan / mortgage / bank NOC",
          "Society dues clearance / maintenance receipts (for flats)",
        ],
      },
      {
        groupTitle: "Construction & Regulatory Documents (If Applicable)",
        items: [
          "Approved Building Plan / Sanction Plan",
          "Commencement Certificate (CC)",
          "Completion Certificate (if completed project)",
          "Occupation Certificate (OC)",
          "RERA Registration details and documents",
        ],
      },
      {
        groupTitle: "Authority & Identity Documents",
        items: [
          "Power of Attorney (if transaction through POA)",
          "Identity proof of seller(s)",
          "Death certificates & legal heir documents (in inherited properties)",
          "Succession Certificate / Probate / Will (if applicable)",
        ],
      },
      {
        groupTitle: "Possession & Supporting Documents",
        items: [
          "Possession Letter",
          "Latest Property Tax Receipts",
          "Electricity / Water Bills (for possession verification)",
        ],
      },
    ],

    docsNote:
      "Even if certain documents are unavailable, the verification process can proceed based on available records and independent searches from Sub-Registrar and Revenue authorities. In many cases, crucial defects are discovered not from the main documents, but from missing or inconsistent supporting records.",
  },

  // ─── 2. PROPERTY DOCUMENTATION & REGISTRATION ─────────────────────────────
  {
    slug: "property-documentation-registration",
    title: "Property Documentation & Registration",
    subtitle:
      "Agreement to Sale · Sale Deed · Gift Deed · Lease Deed · Leave & License · Power of Attorney · Apartment Deed · Deed of Declaration · Deemed Conveyance · Title Search",
    icon: "📄",
    shortDesc:
      "Agreement to Sale, Sale Deed, Gift Deed, Lease Deed, Leave & License Agreements, Power of Attorney, Apartment Deed — all drafted with legal precision and registered before the Sub-Registrar Office.",
    overview:
      "Property documentation is the legal backbone of any real estate transaction. Whether you are purchasing a flat in a housing society, gifting a plot to a family member, or entering into a leave and license arrangement for a commercial space, the documents that govern these transactions must be drafted with absolute legal precision.\n\nIn Maharashtra, property documents must comply with the Registration Act, 1908, the Maharashtra Stamp Act, and various state-specific regulations. A document that is improperly drafted — even by a small margin — can result in disputes, financial loss, or challenges to your ownership years after the transaction is complete.\n\nWith over 24 years of dedicated practice, Advocate Anirudh Kamble offers comprehensive, end-to-end legal assistance covering the preparation, vetting, and registration of all property documents before the Sub-Registrar Office in Pune and Pimpri Chinchwad.",
    quote:
      "In property law, the strength of your documentation is the strength of your ownership. We ensure yours is unassailable.",
    documentsIntro:
      "Every property transaction and personal asset decision carries long-term consequences. We ensure each document is carefully drafted, legally compliant, and tailored to your exact situation — so you avoid disputes, delays, and costly mistakes later. Our approach is simple: clarity today, security for the future.",
    documents: [
      {
        name: "Memorandum of Understanding (MOU)",
        desc: "An MOU lays the foundation for future transactions. We draft clear and structured MOUs that capture the intent, expectations, and preliminary commitments of all parties. This helps prevent misunderstandings, builds trust, and creates a strong framework before entering into legally binding agreements.",
      },
      {
        name: "Agreement to Sale",
        desc: "The foundation of every property transaction. This document records the full understanding between buyer and seller — covering price, payment structure, timelines, and key conditions. We draft Agreements that secure your advance payment, eliminate ambiguity, and protect you from last-minute changes or disputes, ensuring a smooth path to final ownership.",
      },
      {
        name: "Sale Deed",
        desc: "The most critical ownership document — this is what legally transfers the property into your name. A poorly drafted Sale Deed can create serious legal complications years later. We ensure precise title verification, correct stamp duty calculation, accurate property description, and full legal compliance, so your ownership is clear, valid, and future-proof.",
      },
      {
        name: "Gift Deed",
        desc: "Transferring property to family members requires more than just intent — it must be legally structured. We handle end-to-end drafting, stamp duty guidance (including concessional benefits), and registration, ensuring the transfer is legally valid, tax-aware, and dispute-free.",
      },
      {
        name: "Lease Deed",
        desc: "For long-term rental arrangements, a properly drafted Lease Deed is essential. We create agreements that clearly define rent terms, lock-in periods, maintenance responsibilities, renewal clauses, and exit conditions — protecting both parties and preventing future disagreements.",
      },
      {
        name: "Leave & License Agreement",
        desc: "The most preferred rental structure in Maharashtra due to its flexibility and legal clarity. We draft agreements that safeguard the property owner's rights while maintaining compliance with local laws, and handle complete online registration through the government iSarita system, making the process seamless and hassle-free.",
      },
      {
        name: "Power of Attorney (POA)",
        desc: "When you cannot be physically present, a properly drafted POA becomes critical. We prepare clear, tightly defined General and Special POAs that grant only the required authority — minimising risk of misuse while ensuring smooth execution of your property matters, especially for NRIs and senior citizens.",
      },
      {
        name: "Apartment Deed & Deed of Declaration",
        desc: "These documents establish legal ownership structure within apartment projects. We ensure that your Apartment Deed clearly reflects your unit ownership and proportionate share in common areas, while the Deed of Declaration is accurate, compliant, and aligned with MOFA requirements — avoiding complications in future resale or society matters.",
      },
      {
        name: "Deemed Conveyance",
        desc: "A major issue for many housing societies — where the builder has not transferred land ownership. We assist societies through the entire Deemed Conveyance process, from documentation, application, hearings, to final registration, enabling you to secure legal ownership of your land and building — even without builder cooperation.",
      },
      {
        name: "Will Drafting (Last Will & Testament)",
        desc: "One of the most important yet often overlooked legal documents. A properly drafted Will ensures that your assets are distributed exactly as per your wishes, without confusion, delay, or family disputes. We create clear, legally valid, and well-structured Wills, tailored to your family situation and asset profile — covering property, bank assets, nominations, and guardianship (where applicable).",
      },
    ],
    whatWeDo: [
      "Drafting and vetting of all property documents",
      "Accurate stamp duty calculation and payment guidance",
      "Title search and encumbrance verification",
      "End-to-end registration at Sub-Registrar Office",
      "Guidance on RERA compliance for under-construction projects",
      "Assistance with 7/12 Extract, Property Card, and mutation",
    ],
    process: [
      {
        step: "01",
        title: "Initial Consultation & Document Review",
        desc: "We begin by understanding the nature of your transaction and reviewing existing title documents, prior agreements, and property records. This helps identify any issues that need resolution before documentation proceeds.",
      },
      {
        step: "02",
        title: "Title Search & Due Diligence",
        desc: "We conduct a thorough search of the title chain to verify ownership, check for encumbrances, mortgages, or litigation, and confirm that the seller has clear and marketable title to transfer.",
      },
      {
        step: "03",
        title: "Stamp Duty Assessment & Guidance",
        desc: "We calculate the applicable stamp duty under the Maharashtra Stamp Act, advise on any exemptions available, and ensure the document is properly e-stamped before execution.",
      },
      {
        step: "04",
        title: "Drafting of the Document",
        desc: "The document is drafted with meticulous attention to legal requirements, the specific terms agreed between the parties, and provisions that protect your long-term interests.",
      },
      {
        step: "05",
        title: "Client Review & Finalisation",
        desc: "The draft is shared with you for review. We explain every clause in plain language, accommodate your questions, and make any agreed revisions before finalisation.",
      },
      {
        step: "06",
        title: "Registration at Sub-Registrar Office",
        desc: "We accompany you to the Sub-Registrar Office, ensure all formalities are completed, and facilitate the registration of the document — returning you a certified copy for your records.",
      },
    ],
    timeline:
      "Typically 3–7 working days for standard documents. Deemed Conveyance proceedings may take 3–6 months depending on the Competent Authority's schedule.",
    docsGroups: [
      {
        groupTitle: "Property & Title Related",
        items: [
          "Latest Index II / Registered Agreement Copy (for resale transactions)",
          "Mutation Entries (Ferfar) / Property Card history",
          "Approved Building Plan & Layout Plan",
          "Completion Certificate (CC) / Occupancy Certificate (OC)",
          "NA Order (Non-Agricultural Permission) – for converted lands",
          "Latest Property Tax Receipt (Paid)",
          "Electricity Bill (for address and possession verification)",
        ],
      },
      {
        groupTitle: "Society / Apartment Related (If Applicable)",
        items: [
          "Share Certificate of the Society",
          "Society Maintenance Dues Clearance Certificate",
          "No Objection Certificate (NOC) from Society",
          "Society Registration Certificate / Bye-laws (if required for verification)",
        ],
      },
      {
        groupTitle: "Financial & Compliance Documents",
        items: [
          "Home Loan Sanction Letter (if loan involved)",
          "Bank Disbursement Letter / Payment Receipts",
          "NOC from Bank / Financial Institution (if property is mortgaged)",
          "CERSAI Search Report (for charge verification, if available)",
          "Stamp Duty Payment Receipt / Challan (if pre-paid cases)",
        ],
      },
      {
        groupTitle: "For Special Situations",
        items: [
          "Death Certificate (in case of inherited property)",
          "Legal Heirship Certificate / Succession Certificate / Probate (if applicable)",
          "Release Deed / Partition Deed (if property was divided earlier)",
          "Development Agreement / Power of Attorney (in builder or redevelopment cases)",
        ],
      },
      {
        groupTitle: "For NRI / Representation Cases",
        items: [
          "Valid Power of Attorney (duly notarised / apostilled)",
          "Passport & Visa copies (for NRI parties)",
        ],
      },
    ],
    docsNote:
      "Depending on the nature of the transaction and property history, additional documents may be required to ensure legal completeness and avoid future disputes.",
  },

  // ─── 3. CONTRACT & COMMERCIAL DRAFTING ────────────────────────────────────
  {
    slug: "contract-commercial-drafting",
    title: "Contract & Commercial Drafting",
    subtitle:
      "Development Agreements · Joint Ventures · Service Agreements · MOU · NDA · Loan & Mortgage · Partnership · Employment",
    icon: "✍️",
    shortDesc:
      "Professionally drafted contracts for individuals, businesses, and developers. MOU, Deed of Assignment, and tailored commercial agreements ensuring enforceability and protection of interests.",
    overview:
      "A contract is only as strong as the words it contains. Vague language, missing clauses, or legally unenforceable terms can turn a routine business arrangement into a costly dispute.\n\nWith over 24 years of legal practice, Advocate Anirudh Kamble provides meticulous contract drafting and MOU preparation — ensuring your agreements are precise, compliant with applicable law, and enforceable in court. We draft contracts for individuals, businesses, developers, and institutions across a wide range of commercial and property-related transactions.",
    quote:
      "A contract drafted with care is a dispute prevented. Every clause we write is a safeguard we build into your business relationship.",
    documentsIntro:
      "Every document is carefully structured around your specific transaction, relationship dynamics, and legal objectives. We focus on clarity, enforceability, and risk mitigation so that your interests remain fully protected at every stage.",
    documents: [
      {
        name: "Development Agreement",
        desc: "A well-drafted development agreement is the backbone of any real estate project. We structure agreements that clearly define the rights and obligations of both landowners and developers — including development rights, revenue or area sharing models, approvals, timelines, compliance responsibilities, and exit clauses. Our approach ensures transparency, reduces disputes, and safeguards your long-term financial interests.",
      },
      {
        name: "Joint Venture Agreement",
        desc: "Joint ventures demand precision and foresight. We create robust agreements that outline capital contributions, profit-sharing mechanisms, governance structure, decision-making authority, and dispute resolution processes. We also build in protective clauses for contingencies, deadlock situations, and exit strategies — ensuring your partnership remains stable and legally secure.",
      },
      {
        name: "Service & Vendor Agreements",
        desc: "Whether you are engaging contractors, consultants, or vendors, we draft agreements that eliminate ambiguity. From defining scope of work and service levels to payment milestones, penalties, confidentiality, and termination rights — we ensure that your operational relationships are smooth, accountable, and legally protected.",
      },
      {
        name: "Non-Disclosure Agreements (NDA)",
        desc: "Your confidential information is one of your most valuable assets. We design tailored NDAs — both unilateral and mutual — that protect business strategies, trade secrets, financial data, and intellectual property. Our agreements are crafted to be practical, enforceable, and aligned with your specific industry risks.",
      },
      {
        name: "Memorandum of Understanding (MOU)",
        desc: "An MOU lays the foundation for future transactions. We draft clear and structured MOUs that capture the intent, expectations, and preliminary commitments of all parties. This helps prevent misunderstandings, builds trust, and creates a strong framework before entering into legally binding agreements.",
      },
      {
        name: "Loan & Mortgage Agreements",
        desc: "Private lending requires careful documentation to avoid future disputes. We prepare comprehensive loan agreements detailing principal amount, interest terms, repayment schedules, default provisions, and security structures. We also draft mortgage, hypothecation, or pledge documents to ensure your financial interests are fully secured.",
      },
      {
        name: "Partnership & Business Agreements",
        desc: "Strong businesses are built on clear agreements. We draft partnership and business agreements that define roles, capital contributions, profit and loss sharing, management authority, dispute resolution, and exit or dissolution mechanisms. Our goal is to eliminate uncertainty and protect the longevity of your business relationships.",
      },
      {
        name: "Employment & Consultancy Agreements",
        desc: "We help you formalize professional relationships with precision. Our agreements clearly set out compensation structures, roles and responsibilities, confidentiality obligations, intellectual property ownership, non-compete and non-solicitation clauses, and termination conditions — ensuring both parties are protected from the outset.",
      },
    ],
    whatWeDo: [
      "Drafting of all commercial and business contracts",
      "Review and vetting of contracts prepared by other parties",
      "MOU preparation for property and commercial transactions",
      "Joint venture and partnership deed drafting",
      "NDA and confidentiality agreement preparation",
      "Contract negotiation support and advisory",
    ],
    process: [
      {
        step: "01",
        title: "Understanding Your Transaction",
        desc: "We begin with a thorough discussion of your business arrangement, relationship with the other party, and the specific outcomes you want the contract to achieve and protect.",
      },
      {
        step: "02",
        title: "Legal Framework Assessment",
        desc: "We identify the applicable laws, regulatory requirements, and standard industry practices relevant to your contract — ensuring the document is compliant and enforceable.",
      },
      {
        step: "03",
        title: "First Draft",
        desc: "A comprehensive first draft is prepared, covering all essential terms, conditions, representations, warranties, remedies, and dispute resolution mechanisms.",
      },
      {
        step: "04",
        title: "Review & Negotiation Support",
        desc: "We walk you through every clause, explain the implications in plain language, and if required, assist in negotiations with the other party or their legal counsel.",
      },
      {
        step: "05",
        title: "Finalisation & Execution",
        desc: "Once all terms are agreed, we finalise the document, advise on stamp duty implications, and assist with proper execution and, where applicable, registration.",
      },
    ],
    timeline:
      "Simple agreements: 2–4 working days. Complex multi-party contracts or development agreements: 5–10 working days depending on negotiations.",
    docsRequired: [
      "Identity documents of all contracting parties",
      "Details of the transaction / business arrangement",
      "Any prior correspondence, term sheets, or LOIs",
      "Company incorporation documents (for entities)",
      "Relevant property documents (for property-related contracts)",
      "Any existing agreements being novated or amended",
    ],
  },

  // ─── 4. PCMC / PCNTDA / PMRDA TRANSFERS ────────────────────────────────────
  {
    slug: "pcntda-pmrda-transfers",
    title: "PCMC / PCNTDA / PMRDA Property Transfers",
    subtitle:
      "Pimpri Chinchwad Municipal Corporation · Pimpri Chinchwad New Town Development Authority · Pune Metropolitan Region Development Authority",
    icon: "🏘️",
    shortDesc:
      "End-to-end assistance with property transfer matters under PCMC, PCNTDA and PMRDA jurisdictions — ensuring compliance with the specific regulatory requirements of each authority.",
    overview:
      "Transfers within Pimpri Chinchwad New Town Development Authority and Pune Metropolitan Region Development Authority jurisdictions are governed by authority-specific regulations, allotment conditions, and transfer permissions.\n\nThese are not conventional property transactions.\n\nThe validity of a transfer depends not merely on registered documents, but on strict compliance with development authority requirements.",
    quote:
      "Navigating PCMC, PCNTDA and PMRDA transfers requires jurisdiction-specific expertise. We ensure your transaction proceeds smoothly and in full compliance.",
    whatWeDo: [
      "Structuring and reviewing PCMC / PCNTDA / PMRDA property transfers",
      "Drafting Agreement to Sale and Sale Deed aligned with authority conditions",
      "End-to-end NOC and transfer permission assistance",
      "Verification of allotment terms, lease conditions, and compliance requirements",
      "Liaison with authority offices for approvals and processing",
      "Stamp duty and registration guidance specific to authority-controlled properties",
    ],
    process: [
      {
        step: "01",
        title: "Jurisdiction & Authority Verification",
        desc: "Identification of the governing authority, applicable regulations, and transfer conditions.",
      },
      {
        step: "02",
        title: "Document & Compliance Review",
        desc: "Examination of allotment records, prior permissions, and compliance with authority requirements.",
      },
      {
        step: "03",
        title: "NOC & Permission Facilitation",
        desc: "Preparation and submission of transfer applications, with coordinated follow-up at authority level.",
      },
      {
        step: "04",
        title: "Drafting & Registration",
        desc: "Preparation of transaction documents, ensuring alignment with authority approvals prior to registration.",
      },
    ],
    timeline:
      "NOC processing time varies — typically 15–45 working days depending on the authority and completeness of documentation. Total transfer process: 4–10 weeks.",
    docsGroups: [
      {
        groupTitle: "Core Documents",
        items: [
          "Original Allotment Letter issued by the Development Authority",
          "Possession Letter and Authority Payment Receipts",
          "Prior Transfer Documents / Sale Deed (if any)",
          "Identity Proof of Transferor and Transferee",
          "Latest No-Dues Certificate / Authority Ledger Extract",
          "Approved Building Plan and Occupancy Certificate (if applicable)",
          "Property Tax Receipts",
        ],
      },
      {
        groupTitle: "Authority-Specific Documents",
        items: [
          "Copies of all prior Transfer Permissions / NOCs issued by PCNTDA / PMRDA",
          "Proof of payment of transfer charges and authority dues",
          "Lease Deed / Sub-Lease Deed (where applicable)",
          "Compliance with original allotment conditions",
          "Authority-approved layout / plot identification records",
        ],
      },
      {
        groupTitle: "Where Applicable",
        items: [
          "Society NOC (if society is formed)",
          "Bank NOC and loan-related documents (if mortgaged)",
          "Power of Attorney (if any party is represented)",
        ],
      },
    ],
    docsNote:
      "In PCMC / PCNTDA and PMRDA properties, title and transfer validity are determined primarily by authority records and permissions. Documentation requirements may vary depending on the property's history and compliance status. These are verified in advance to ensure a smooth and compliant transfer process.",
  },

  // ─── 5. DEEMED CONVEYANCE ─────────────────────────────────────────────────
  {
    slug: "deemed-conveyance",
    title: "Deemed Conveyance",
    subtitle: "For Cooperative Housing Societies in Pune & Pimpri Chinchwad",
    icon: "🏢",
    shortDesc:
      "Expert handling of deemed conveyance proceedings for housing societies — ensuring clear and legally sound transfer of land and building rights from developers to cooperative housing societies.",
    overview:
      "Thousands of cooperative housing societies in Pune and Pimpri Chinchwad have not received the conveyance of their land and building from the original developer — meaning the society does not legally own the plot on which its building stands.\n\nUnder the Maharashtra Cooperative Societies Act and the Maharashtra Ownership of Flats Act (MOFA), housing societies can apply to the Competent Authority (District Deputy Registrar) for Deemed Conveyance — obtaining legal title even without the developer's cooperation.\n\nThis is a complex, multi-stage legal process that requires precise documentation, knowledge of the applicable procedure, and effective liaison with the Competent Authority. Advocate Anirudh Kamble has extensive experience guiding housing societies through this process from start to finish.",
    quote:
      "Every housing society deserves legal title to the land it stands on. We ensure your society secures that right.",
    documentsIntro:
      "Deemed Conveyance involves a precise sequence of legal documents — each one critical to securing the society's title. We prepare every document with meticulous attention to the procedural requirements of the Competent Authority.",
    whatWeDo: [
      "Assessment of society's eligibility for Deemed Conveyance",
      "Preparation and filing of application to Competent Authority",
      "Compilation of all required documentation",
      "Representation before the Competent Authority",
      "Coordination with society members and managing committee",
      "Registration of the final Conveyance Deed",
    ],
    process: [
      {
        step: "01",
        title: "Eligibility Assessment",
        desc: "We assess the society's documents, building records, and existing agreements to confirm eligibility and identify any issues that may need resolution before filing.",
      },
      {
        step: "02",
        title: "Document Compilation",
        desc: "We compile all required documents — society registration, member list, building approvals, title documents, and prior agreements — into a complete application file.",
      },
      {
        step: "03",
        title: "Application to Competent Authority",
        desc: "The application for Deemed Conveyance is drafted and filed before the District Deputy Registrar (Competent Authority), along with all supporting documentation.",
      },
      {
        step: "04",
        title: "Hearings & Representations",
        desc: "We represent the society through all hearings before the Competent Authority, respond to any objections, and ensure the proceedings move forward efficiently.",
      },
      {
        step: "05",
        title: "Order & Registration",
        desc: "On receipt of the Deemed Conveyance order, we prepare and register the final Conveyance Deed before the Sub-Registrar Office — completing the legal title transfer to the society.",
      },
    ],
    timeline:
      "Typically 3–9 months from filing to final registration, depending on the Competent Authority's schedule and any objections raised by the developer.",
    docsRequired: [
      "Society registration certificate",
      "List of members with their agreement copies",
      "Original sale agreements of all flat owners",
      "Approved building plans and commencement certificate",
      "Occupation certificate",
      "7/12 Extract or Property Card in developer's name",
      "Society's share certificates",
      "Correspondence with the developer regarding conveyance",
    ],
  },

  // ─── 6. LITIGATION ────────────────────────────────────────────────────────
  {
    slug: "litigation-support",
    title: "Property & Contract Litigation",
    subtitle:
      "Title Disputes · Specific Performance · Injunctions · Breach of Contract · Recovery & Damages · Heirship Matters",
    icon: "🏛️",
    shortDesc:
      "Legal representation and advisory in property and contractual disputes before courts. Continuity of legal support from documentation to dispute resolution, safeguarding client interests at every stage.",
    overview:
      "Property and contract disputes can arise even from carefully structured transactions. When they do, effective representation requires not only courtroom skill, but a deep understanding of documentation, title structures, financial claims, and succession-related issues.\n\nAdvocate Anirudh Kamble represents clients in property and contract litigation before courts and tribunals in Pune and Pimpri Chinchwad, including matters relating to title disputes, specific performance, injunctions, breach of contract, recovery of money, damages claims, and heirship proceedings.\n\nA practice grounded in documentation and transaction structuring provides a clear factual and legal perspective from the outset of any dispute.",
    quote:
      "Strong documentation today is the best protection against disputes tomorrow. When disputes arise, the focus shifts to protecting that foundation with precision and strategy.",
    whatWeDo: [
      "Representation in property title disputes and ownership conflicts",
      "Specific performance suits arising from Agreements to Sale",
      "Temporary and permanent injunction applications",
      "Breach of contract claims, recovery suits, and damages claims",
      "Heirship matters, succession disputes, and related court proceedings",
      "Pre-litigation advisory, notices, and settlement strategy",
    ],
    process: [
      {
        step: "01",
        title: "Case Assessment & Legal Opinion",
        desc: "A detailed review of documents, facts, and legal issues to provide a clear, realistic assessment of the case.",
      },
      {
        step: "02",
        title: "Pre-Litigation Strategy",
        desc: "Evaluation of settlement, negotiation, or notice-based resolution where appropriate.",
      },
      {
        step: "03",
        title: "Filing & Proceedings",
        desc: "Preparation and filing of pleadings, applications, and supporting material, followed by structured representation before the court.",
      },
      {
        step: "04",
        title: "Evidence & Arguments",
        desc: "Compilation of documentary evidence, witness preparation, and presentation of focused legal arguments.",
      },
      {
        step: "05",
        title: "Judgment & Execution",
        desc: "Assistance with execution of decrees, enforcement, and appellate proceedings where required.",
      },
    ],
    timeline:
      "Injunction applications may be considered within days to weeks. Civil suits, recovery matters, and heirship proceedings may extend over a longer duration depending on evidence and court schedules.",
    docsRequired: [
      "All title documents, agreements, and transaction records",
      "Correspondence, notices, and communications between parties",
      "Copies of any prior court proceedings or orders",
      "Payment records, bank statements, or financial documents",
      "Details of legal heirs, family tree, and supporting heirship documents",
      "Valuation reports or expert opinions (if available)",
    ],
  },
];

export const serviceGroups = [
  {
    title: "Property Documentation",
    desc: "70% of practice",
    items: [
      "property-documentation-registration",
      "deemed-conveyance",
      "title-search-due-diligence",
      "pcntda-pmrda-transfers",
    ],
  },
  {
    title: "Commercial Contracts",
    desc: "20% of practice",
    items: ["contract-commercial-drafting"],
  },
  {
    title: "Notary & Consultation",
    desc: "10% of practice",
    items: ["litigation-support"],
  },
];
