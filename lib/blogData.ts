export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  sections: BlogSection[];
  conclusion: string;
};

export type BlogSection = {
  heading: string;
  content: BlogContent[];
};

export type BlogContent =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "redflag"; items: string[] };

export const blogPosts: BlogPost[] = [
  {
    slug: "common-mistakes-property-registration-maharashtra",
    title: "Most Common Mistakes in Property Registration in Maharashtra",
    excerpt:
      "Buying property in Maharashtra is one of the biggest financial decisions of your life — yet many buyers make costly, avoidable mistakes. From skipping title verification to ignoring RERA compliance, learn the critical errors and how to protect yourself.",
    date: "April 14, 2026",
    readTime: "9 min read",
    category: "Property Registration",
    sections: [
      {
        heading: "1. Not Verifying the Property Title Thoroughly",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Many buyers rely solely on the seller's word or a broker's assurance. They fail to conduct a proper title verification. This can lead to buying property that is under litigation, mortgaged, or not owned by the seller at all.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Obtain a 7/12 Extract (Saat-Baara Utara) in rural areas or a Property Card (Malmatta Patrak) in urban areas.",
              "Check the Encumbrance Certificate (EC) for at least 30 years to ensure there are no loans, charges, or legal disputes.",
              "Hire a property lawyer to issue a Title Certificate / Legal Opinion confirming clear ownership.",
            ],
          },
        ],
      },
      {
        heading: "2. Ignoring MahaRERA Registration & Approvals",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "In Maharashtra, especially in cities like Mumbai and Pune, thousands of under-construction flats are sold without proper approvals or RERA registration. Buyers often trust flashy brochures instead of checking compliance.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Check if the project is listed on the MahaRERA Portal (maharera.mahaonline.gov.in).",
              "Verify whether the builder has obtained a Commencement Certificate (CC) and Approved Building Plans.",
              "For completed projects, insist on a Completion Certificate (CC) and Occupancy Certificate (OC).",
              "Under RERA, the builder must disclose details of the project timeline, layout, and financial compliance.",
            ],
          },
        ],
      },
      {
        heading: "3. Errors in Sale Deed Drafting",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Sale deeds often contain critical errors that can invalidate ownership or create future disputes.",
          },
          {
            type: "list",
            items: [
              "Wrong CTS/Survey number",
              "Inaccurate boundaries",
              "Carpet area not mentioned (as mandated by RERA)",
              "Parking area not mentioned properly",
              "Missing clauses about possession and penalty for delay",
            ],
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Cross-check all property details with the 7/12 Extract, Property Card, and approved plans.",
              "Ensure the carpet area (not super built-up area) is mentioned clearly.",
              "If parking is allotted or purchased from the builder, ensure clear mention of parking area and number.",
              "Have the Sale Deed drafted/reviewed by an independent advocate, not the builder's lawyer.",
            ],
          },
        ],
      },
      {
        heading: "4. Underpayment of Stamp Duty & Registration Charges",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Some buyers understate the property value to save on stamp duty, or fail to calculate additional levies like metro cess in Mumbai, Thane, Pune, and Nagpur. This can attract penalties and make the deed legally questionable.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Always calculate stamp duty using the Ready Reckoner Rate published annually by the Maharashtra Government.",
              "Pay stamp duty and registration charges online through the official IGR Maharashtra GRAS Portal.",
              "As of 2025: Stamp Duty is 5% in urban areas, 4% in rural areas + 1% metro cess in major cities.",
              "Registration Fees: 1% of property value (capped at ₹30,000 in certain cases).",
            ],
          },
        ],
      },
      {
        heading: "5. Skipping Mutation Entry (Ferfar) After Registration",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Many buyers believe registration is the last step. They forget mutation (Ferfar), which means updating their name in the government's land/property records if you are purchasing residential land, agricultural/farm land. This leaves ownership records in the seller's name, creating problems in resale, loans, or inheritance.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "After registration, file a Mutation Application at the local Talathi Office (rural) or City Survey Office (urban).",
              "Submit the registered Sale Deed, application form, and required fees.",
              "Ensure your name is updated in the 7/12 Extract or Property Card.",
            ],
          },
        ],
      },
      {
        heading: "6. Relying on Invalid Power of Attorney (POA) Transactions",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Fraudulent sales through unregistered or expired POAs are common, especially in redevelopment projects.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Verify whether the POA is legally registered, stamped, and valid.",
              "Prefer dealing only with the actual owner.",
              "For inherited properties, demand a Legal Heirship Certificate.",
            ],
          },
        ],
      },
      {
        heading: "7. Not Checking Pending Dues & Liabilities",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Buyers often overlook hidden dues when purchasing resale property, such as unpaid property tax, water/electricity bills, society maintenance charges, or loan arrears.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Obtain a No Dues Certificate from the builder or housing society.",
              "Cross-check with the municipal corporation for property tax receipts.",
              "For resale flats, verify society records and obtain a Society NOC.",
            ],
          },
        ],
      },
      {
        heading: "8. Signing Builder's Draft Agreements Blindly",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Many buyers simply sign builder-drafted Sale Agreements without legal review. These often contain one-sided clauses protecting the builder.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Get the agreement vetted by an independent lawyer.",
              "Ensure clauses on possession date, penalty for delay, refund policy, and amenities are clearly mentioned.",
            ],
          },
        ],
      },
      {
        heading: "9. Buying Agricultural Land Without Conversion",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "In Maharashtra, agricultural land cannot be used for residential/commercial purposes unless converted into Non-Agricultural (NA) land. Many buyers ignore this and later face demolition or non-approval of construction.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Verify whether the land has an NA Order issued by the Collector.",
              "For farmhouses, ensure compliance with Green Zone regulations.",
            ],
          },
        ],
      },
      {
        heading: "10. Not Consulting a Property Lawyer",
        content: [
          {
            type: "subheading",
            text: "The Mistake",
          },
          {
            type: "paragraph",
            text: "Perhaps the biggest mistake is treating property registration as a do-it-yourself task. Many people rely on brokers or builders instead of qualified lawyers, risking huge financial loss.",
          },
          {
            type: "subheading",
            text: "How to Avoid",
          },
          {
            type: "list",
            items: [
              "Always consult a real estate lawyer before finalizing property transactions.",
              "Lawyers can help with title search, deed drafting, stamp duty calculation, and mutation process.",
            ],
          },
        ],
      },
      {
        heading: "Key Documents Required for Property Registration in Maharashtra",
        content: [
          {
            type: "list",
            items: [
              "Duly executed and registered Agreement to Sale, Sale Deed, Deed of Apartment, or Assignment Deed",
              "Identity proof (Aadhaar, PAN, Passport, Driving License)",
              "Photographs of buyer, seller, and witnesses",
              "7/12 Extract or Property Card",
              "Encumbrance Certificate",
              "Society NOC (for resale flats)",
              "RERA Certificate (for under-construction projects)",
              "TDS receipt (Form 26QB) if property value > ₹50 lakhs",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Property registration in Maharashtra is not just about signing a document — it is a complex legal process involving title verification, RERA compliance, stamp duty payment, and post-registration mutation. A single mistake can cost you lakhs, or even your ownership rights. By avoiding the common errors listed above and taking the help of an experienced property lawyer, you can secure a safe and legally valid transaction. Remember: in real estate, prevention is always cheaper than litigation.",
  },
  {
    slug: "due-diligence-property-title",
    title: "Due Diligence of Property Title: The Legal Foundation of a Secure Investment",
    excerpt:
      "A property may appear flawless in location, structure, or market value — yet without a legally sound title, even the most attractive deal can collapse under litigation. Understand the complete due diligence process and why it is the single most critical step before any property investment.",
    date: "April 14, 2026",
    readTime: "10 min read",
    category: "Due Diligence",
    sections: [
      {
        heading: "What Is 'Due Diligence' in Property Law?",
        content: [
          {
            type: "paragraph",
            text: "Due diligence is a systematic legal verification process conducted by an advocate or legal consultant to examine the ownership history, validity, and compliance of a property before it changes hands.",
          },
          {
            type: "paragraph",
            text: "It involves investigating the title chain (past and present owners), checking encumbrances (mortgages, claims, or litigation), verifying statutory approvals and compliance, and ensuring lawful possession and transferability.",
          },
          {
            type: "highlight",
            text: "In simple terms, it answers the question: \"Does the seller truly own what they are selling — and can they legally transfer it to me?\"",
          },
        ],
      },
      {
        heading: "Why Title Due Diligence Is Crucial",
        content: [
          {
            type: "paragraph",
            text: "In India, property disputes constitute a major portion of civil litigation — often arising from unclear ownership, fraudulent documents, or defective titles. Globally too, real estate frauds and overlapping ownership claims remain a serious concern.",
          },
          {
            type: "paragraph",
            text: "Performing thorough title due diligence protects a buyer or investor from:",
          },
          {
            type: "list",
            items: [
              "Fraudulent transactions and fake ownership claims",
              "Hidden mortgages or charges registered against the land",
              "Pending litigation or court injunctions",
              "Invalid or incomplete transfer documents",
              "Regulatory violations under laws like RERA, MOFA, or zoning acts",
            ],
          },
          {
            type: "highlight",
            text: "Skipping due diligence may save time, but it can cost years of litigation later.",
          },
        ],
      },
      {
        heading: "Core Components of Property Title Due Diligence",
        content: [
          {
            type: "paragraph",
            text: "A complete due diligence exercise generally involves ten key steps:",
          },
          {
            type: "subheading",
            text: "1. Title Chain Examination",
          },
          {
            type: "list",
            items: [
              "Review all title documents for at least the past 30 years (as per Indian practice).",
              "Confirm that each transfer was lawful, properly stamped, and registered.",
              "Identify gaps or breaks in the ownership chain.",
            ],
          },
          {
            type: "subheading",
            text: "2. Verification of Ownership & Possession",
          },
          {
            type: "list",
            items: [
              "Check the latest 7/12 Extract, Property Card, or Revenue Record.",
              "Ensure the seller's name is reflected correctly and mutation entries are updated.",
            ],
          },
          {
            type: "subheading",
            text: "3. Encumbrance & Mortgage Search",
          },
          {
            type: "list",
            items: [
              "Conduct an Encumbrance Certificate (EC) search at the Sub-Registrar's office.",
              "Identify any loan, lien, or government attachment.",
            ],
          },
          {
            type: "subheading",
            text: "4. Land Use and Zoning Compliance",
          },
          {
            type: "list",
            items: [
              "Verify that the land use matches its intended purpose — residential, commercial, industrial, or agricultural.",
              "Confirm NA Order (Non-Agricultural Conversion) and Town Planning compliance.",
            ],
          },
          {
            type: "subheading",
            text: "5. Building Approvals & Permissions",
          },
          {
            type: "list",
            items: [
              "Scrutinize sanctioned layout plans, commencement certificates (CC), occupation certificates (OC), and environmental clearances.",
            ],
          },
          {
            type: "subheading",
            text: "6. Stamp Duty & Registration Compliance",
          },
          {
            type: "list",
            items: [
              "Check that all transactions were adequately stamped and registered as per the Indian Stamp Act and Registration Act.",
              "Under-stamped deeds can lead to heavy penalties and litigation.",
            ],
          },
          {
            type: "subheading",
            text: "7. Litigation Search",
          },
          {
            type: "list",
            items: [
              "Conduct court and tribunal record searches to ensure there are no pending suits or stay orders against the property or seller.",
            ],
          },
          {
            type: "subheading",
            text: "8. Verification under RERA (for Projects)",
          },
          {
            type: "list",
            items: [
              "Confirm project registration with the Real Estate Regulatory Authority (RERA).",
              "Verify that the developer is compliant with disclosure and progress norms.",
            ],
          },
          {
            type: "subheading",
            text: "9. Tax & Dues Clearance",
          },
          {
            type: "list",
            items: [
              "Obtain a Tax Clearance Certificate and ensure no arrears with municipal or revenue authorities.",
            ],
          },
          {
            type: "subheading",
            text: "10. Physical Inspection (Optional but Advisable)",
          },
          {
            type: "list",
            items: [
              "Match the actual site boundaries with the survey map or property card.",
              "Confirm that there are no encroachments or unauthorized structures.",
            ],
          },
        ],
      },
      {
        heading: "The Advocate's Role in Due Diligence",
        content: [
          {
            type: "paragraph",
            text: "A qualified advocate plays a dual role: Legal Investigator — scrutinizing every document, transaction, and statutory compliance; and Risk Advisor — interpreting findings and recommending corrective actions.",
          },
          {
            type: "paragraph",
            text: "After review, the advocate issues a Due Diligence Report or Title Certificate — categorizing the property as:",
          },
          {
            type: "list",
            items: [
              "Marketable (Safe for Purchase)",
              "Conditionally Marketable (Subject to Rectification)",
              "Not Marketable (Legally Unsafe)",
            ],
          },
          {
            type: "paragraph",
            text: "This written legal opinion becomes a critical safeguard for both the buyer and any financing institution.",
          },
        ],
      },
      {
        heading: "Key Deliverable: The Due Diligence Report",
        content: [
          {
            type: "paragraph",
            text: "A well-drafted report provides:",
          },
          {
            type: "list",
            items: [
              "Summary of documents examined",
              "Observations and risk assessment",
              "Specific recommendations (e.g., rectification deed, mutation update, or clearance certificate)",
              "Conclusion on title status",
            ],
          },
          {
            type: "paragraph",
            text: "For property developers, banks, or NRI investors, this report forms the core legal basis for releasing funds or finalizing a deal.",
          },
        ],
      },
      {
        heading: "Global Perspective: Due Diligence Beyond Borders",
        content: [
          {
            type: "paragraph",
            text: "Though due diligence standards vary by jurisdiction, the principle remains universal — ownership must be verified before value is transacted.",
          },
          {
            type: "list",
            items: [
              "In the U.S. and U.K., title insurance companies conduct due diligence and guarantee ownership.",
              "In India, Singapore, and UAE, advocates and solicitors perform this function, issuing legal opinions and reports.",
              "In Europe, notaries public have statutory responsibility to ensure clear title before registration.",
            ],
          },
          {
            type: "paragraph",
            text: "In every country, the buyer's legal protection ultimately depends on documentary transparency and professional verification.",
          },
        ],
      },
      {
        heading: "Common Red Flags in Title Due Diligence",
        content: [
          {
            type: "redflag",
            items: [
              "Missing or forged title deeds",
              "Non-mutated property records",
              "Joint ownership without consent",
              "Ongoing legal disputes or government acquisition",
              "Encroachments or violations of building norms",
              "Power of Attorney misuse or expired authorizations",
            ],
          },
          {
            type: "paragraph",
            text: "Early detection of these issues through due diligence can save years of litigation.",
          },
        ],
      },
    ],
    conclusion:
      "In real estate, prevention is protection. A well-conducted property due diligence ensures not only the security of ownership but also the peace of mind that comes from a legally solid investment. As the old legal maxim says: 'Let the buyer beware — but let the buyer also be advised.' Before you sign, build, or invest — verify. Because every successful property transaction begins with one essential step: a clean title confirmed through professional legal due diligence.",
  },
];