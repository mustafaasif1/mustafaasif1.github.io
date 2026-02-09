export const article1markdown = `
---
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  <img src="/assets/images/articles/kapraEid/DonorHomepage.png" alt="Donor Homepage" />
  <img src="/assets/images/articles/kapraEid/OrganizationHomepage.png" alt="Organization Homepage" />
  <img src="/assets/images/articles/kapraEid/DonationDrive.png" alt="Donation Drive" />
  <img src="/assets/images/articles/kapraEid/DonorHistory.png" alt="Donor History" />
</div>

Pakistan wastes over 60 million kilograms of fabric every year. It's also a dumping ground for post-consumer textiles from the EU. When we dug into the numbers, we found that only 9.2% of people donate clothes to charities. Why? Mostly limited awareness and access. Everyone else was either throwing clothes away or passing them to friends and family.

> #### KapraEid is our answer: a platform that connects organizations and donors and helps rebuild trust in how donations actually get used.

## Brainstorming Phase
We ran brainstorming sessions on Zoom and Mural to nail down what the app had to do.

### Requirements

Talking to donors and organizations gave us a clear picture. We needed:

- **A simple interface** so that donating doesn't feel like filling out a form for the tax office
- **A short tutorial** so people know what to expect
- **As few questions as possible** (photos, short descriptions, categories)
- **Speed** so donors aren't stuck for 20 minutes
- **Transparency** so people can see where their stuff went and leave or read reviews
- **Visibility for organizations** so donors can browse and pick causes they care about

### Key Features

From that we landed on these:  

- ***Donation drives with progress tracking:*** Organizations create targeted drives with descriptions and deadlines. Donors see active drives on their home screen with real-time progress indicators (items collected vs. target, donor count) and can view detailed drive pages before contributing.

- ***Organization discovery:*** A searchable organizations section displays organization cards with ratings, allowing donors to browse and filter to find causes that align with their values. Each organization can showcase their mission and impact.

- ***Transparent donation history:*** Donors can track all their contributions through a tabbed interface (Pending, Approved, Successful) showing item counts, pickup schedules, payment methods, and images of donated items for full transparency.

- ***Organization dashboard:*** Organizations have access to comprehensive statistics including all-time and monthly donation counts, ratings, reviews, and request management (pending vs. accepted), all visible on the home screen.

- ***Success stories:*** Both donors and organizations can view and share success stories showcasing the real-world impact of donations, building trust and motivation.

- ***Streamlined donation flow:*** A prominent floating action button provides quick access to donation, minimizing steps and respecting donors' limited time.

- ***Messaging & communication:*** Direct messaging channels enable donors and organizations to communicate about queries, pickup coordination, and support.

We then prioritized by what we could actually build and what would move the needle most.

## Design Phase
We went through Lo-fi and Hi-fi stages, fixing issues as we learned from user research.

### Lo-fi Design

We built the first prototype in Balsamiq for Android (356x700), with two separate but linked flows: one for donors, one for organizations.

**Donor side:** Home screen had donation drives at the top (with progress), then a searchable list of organizations with ratings, then success stories. We added a dedicated page for each drive and a tabbed history (Pending, Approved, Successful) so donors could see where their stuff was. A big floating “donate” button stayed in the nav so giving was always one tap away.

**Organization side:** We put a stats dashboard front and center so they could see donations, ratings, and requests at a glance. Posting stories and managing drives lived right on the main screen so they didn’t have to dig. The idea was: minimal learning curve, more time on their actual mission.

### Hi-fi Design
We tested the lo-fi, took feedback, and tightened everything up. The final version is cleaner and keeps the two experiences clearly distinct.

**Donor interface:** The homepage shows active drives with live progress (e.g. “121 clothes out of 400 collected”) and donor counts. Below that, donors can search and filter organizations; each card shows ratings. Success stories sit at the bottom so impact is visible. The nav has a clear yellow “+ DONATE NOW” so starting a donation is obvious.

Drive pages show who’s running it, the timeline, progress, and a short description. One main button: “SUPPORT THIS CAUSE.” History is three tabs (Pending, Approved, Successful). For completed donations we show org name, when they gave, how many items, pickup details, payment method, and a “VIEW IMAGE” link so nothing feels hidden.

**Organization interface:** The homepage is a stats dashboard: all-time and monthly donations, rating, review count, pending vs accepted requests. They can post and manage success stories from the same screen. “+ UPLOAD POST” in the nav keeps content creation one click away.

Visually we kept it simple: white background, blue accents, yellow for primary actions. No clutter.
`;
