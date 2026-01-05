export const article1markdown = `
---
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  <img src="/assets/images/articles/kapraEid/DonorHomepage.png" alt="Donor Homepage" />
  <img src="/assets/images/articles/kapraEid/OrganizationHomepage.png" alt="Organization Homepage" />
  <img src="/assets/images/articles/kapraEid/DonationDrive.png" alt="Donation Drive" />
  <img src="/assets/images/articles/kapraEid/DonorHistory.png" alt="Donor History" />
</div>

More than 60 million kilograms of fabric are wasted in Pakistan every year, with the country also serving as a dumping ground for post-consumer textiles from the EU. Through user research, we found that only 9.2% of people donate clothes to charitable organizations, primarily due to limited awareness and access. Most individuals either throw clothes away or give them directly to acquaintances.

> #### KapraEid bridges this gap by developing a platform that provides efficient communication between organizations and donors, helping boost people's confidence in these organizations.

## Brainstorming Phase
We conducted brainstorming sessions over Zoom and Mural to define requirements and key features for the application.

### Requirements

Based on user research with donors and organizations, we identified core requirements:  

- **User-friendly interface** that makes the donation process convenient for a wide variety of audiences
- **Tutorial/demo** to guide users through the donation process
- **Minimal questions** during donation (only essential details like photos, descriptions, and categories)
- **Quick process** that respects donors' limited time
- **Transparency and trust-building** through feedback, reviews, and clear communication channels
- **Organization visibility** so donors can learn about different organizations and their initiatives

### Key Features

We identified the following essential features:  

- ***Donation drives with progress tracking:*** Organizations create targeted drives with descriptions and deadlines. Donors see active drives on their home screen with real-time progress indicators (items collected vs. target, donor count) and can view detailed drive pages before contributing.

- ***Organization discovery:*** A searchable organizations section displays organization cards with ratings, allowing donors to browse and filter to find causes that align with their values. Each organization can showcase their mission and impact.

- ***Transparent donation history:*** Donors can track all their contributions through a tabbed interface (Pending, Approved, Successful) showing item counts, pickup schedules, payment methods, and images of donated items for full transparency.

- ***Organization dashboard:*** Organizations have access to comprehensive statistics including all-time and monthly donation counts, ratings, reviews, and request management (pending vs. accepted), all visible on the home screen.

- ***Success stories:*** Both donors and organizations can view and share success stories showcasing the real-world impact of donations, building trust and motivation.

- ***Streamlined donation flow:*** A prominent floating action button provides quick access to donation, minimizing steps and respecting donors' limited time.

- ***Messaging & communication:*** Direct messaging channels enable donors and organizations to communicate about queries, pickup coordination, and support.

After identifying these features, we prioritized them by feasibility and importance to reach our final design.

## Design Phase
The design phase consisted of Lo-fi and Hi-fi prototypes, incorporating solutions to problems identified during user research.

### Lo-fi Design

We built our prototype on Balsamiq for Android (356x700 dimensions), focusing on creating separate but complementary experiences for donors and organizations.

**Donor prototype:** The home screen was organized into clear sections: donation drives at the top showing progress metrics, followed by a searchable organizations section with rating displays, and success stories at the bottom. We designed a dedicated donation drive detail page with comprehensive information and a clear call-to-action button. The donations history page used a tabbed interface (Pending, Approved, Successful) to help users track their contributions. A prominent floating action button in the navigation bar provided quick access to the donation flow.

**Organization prototype:** The organizational interface prioritized a statistics dashboard on the home screen, giving representatives immediate visibility into their performance metrics. We simplified content creation with direct access to posting stories and managing donation drives from the main screen, ensuring a low learning curve so organizations could focus on their core mission.

### Hi-fi Design
After testing the lo-fi prototype, we refined the interface based on user feedback. The final design features a clean, intuitive interface with distinct experiences for donors and organizations.

**Donor Interface:**
The donor homepage prominently displays active donation drives with real-time progress indicators (e.g., "121 clothes out of 400 collected") and donor counts. Below this, a searchable organizations section allows donors to browse and filter organizations by name, with each card showing ratings to help build trust. Success stories are featured to showcase the impact of donations. The navigation bar includes a prominent yellow "+ DONATE NOW" button for quick access to the donation flow.

The donation drive detail page provides comprehensive information including the organizing foundation, drive timeline, current progress, and a detailed description of the cause. A prominent "SUPPORT THIS CAUSE" button guides users to contribute.

The donations history page organizes contributions into three tabs: Pending, Approved, and Successful. Each successful donation card displays organization name, donation timestamp, item count, pickup date and time, payment method, and a "VIEW IMAGE" button for transparency.

**Organization Interface:**
The organizational homepage features a statistics dashboard showing key metrics: all-time donations, monthly donations, current rating, total reviews, pending requests, and accepted requests. This gives organizations immediate insight into their performance. Success stories can be posted and managed directly from the home screen, and the navigation includes a "+ UPLOAD POST" button for easy content creation.

Throughout both interfaces, we maintained a clean white background with blue accents and yellow for primary actions, ensuring visual consistency and reducing cognitive load.
`;
