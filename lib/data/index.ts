import type {
  MunicipalProject, CouncilMember, Announcement,
  MunicipalEvent, NewsArticle, Service,
  DiscoverItem, MapLocation, CommunityOrg
} from '@/lib/types'

// ─── COUNCIL MEMBERS ──────────────────────────────────────────────────────────
// Replace with verified official information
export const councilMembers: CouncilMember[] = [
  { id: '1', name: '[Mayor Name]', role: 'Mayor', since: '[Year]', bio: '[Official biography to be added]' },
  { id: '2', name: '[Vice Mayor Name]', role: 'Vice Mayor', since: '[Year]', bio: '[Official biography to be added]' },
  { id: '3', name: '[Member Name]', role: 'Council Member', since: '[Year]', bio: '[Official biography to be added]' },
  { id: '4', name: '[Member Name]', role: 'Council Member', since: '[Year]', bio: '[Official biography to be added]' },
  { id: '5', name: '[Member Name]', role: 'Council Member', since: '[Year]', bio: '[Official biography to be added]' },
  { id: '6', name: '[Member Name]', role: 'Council Member', since: '[Year]', bio: '[Official biography to be added]' },
]

// ─── MUNICIPAL PROJECTS ───────────────────────────────────────────────────────
// Demo data — replace with verified project information
export const projects: MunicipalProject[] = [
  {
    id: '1',
    name: 'Coastal Promenade Restoration',
    description: 'Restoration and enhancement of the seafront promenade, including new lighting, seating areas, and landscaping to improve public access to the coastline.',
    status: 'in-progress',
    location: 'Anfeh Waterfront',
    startDate: '2025-03',
    progress: 65,
    budget: '[To be confirmed]',
    tags: ['Infrastructure', 'Tourism', 'Public Space'],
  },
  {
    id: '2',
    name: 'Road Network Improvement — Phase 1',
    description: 'Resurfacing and upgrading of key residential and commercial roads within the municipality, including drainage improvements and road markings.',
    status: 'in-progress',
    location: 'Various — Anfeh',
    startDate: '2025-01',
    progress: 80,
    tags: ['Roads', 'Infrastructure'],
  },
  {
    id: '3',
    name: 'Public Garden — Anfeh Center',
    description: 'Creation of a new public green space in the town center, featuring native Mediterranean planting, seating, and a small children\'s play area.',
    status: 'planning',
    location: 'Town Center',
    startDate: '2026-06',
    progress: 15,
    tags: ['Public Space', 'Green', 'Community'],
  },
  {
    id: '4',
    name: 'Street Lighting Upgrade',
    description: 'Replacement of aging street lighting with energy-efficient LED fixtures across all main roads and public areas.',
    status: 'completed',
    location: 'Municipality-wide',
    startDate: '2024-06',
    endDate: '2024-12',
    progress: 100,
    tags: ['Infrastructure', 'Energy', 'Safety'],
  },
  {
    id: '5',
    name: 'Heritage Documentation Project',
    description: 'A collaborative project to document and preserve the architectural and cultural heritage of Anfeh, including the ancient salt pans and historic churches.',
    status: 'in-progress',
    location: 'Anfeh',
    startDate: '2025-09',
    progress: 30,
    tags: ['Heritage', 'Culture', 'Documentation'],
  },
]

// ─── ANNOUNCEMENTS ────────────────────────────────────────────────────────────
// Demo data — replace with official announcements
export const announcements: Announcement[] = [
  {
    id: '1',
    title: '[Official Municipal Announcement]',
    content: 'This section will display official announcements from Anfeh Municipality. Replace with verified content from the municipal administration.',
    date: '2026-09-10',
    category: 'General',
    important: false,
  },
  {
    id: '2',
    title: '[Road Maintenance Notice]',
    content: 'Planned road maintenance work will take place on [date] between [hours]. Residents in [area] may experience temporary access restrictions.',
    date: '2026-09-08',
    category: 'Roads',
    important: true,
  },
  {
    id: '3',
    title: '[Municipal Office Hours]',
    content: 'The municipal office will operate on [updated schedule] during [period]. For urgent matters please contact [official contact].',
    date: '2026-09-05',
    category: 'Administration',
    important: false,
  },
]

// ─── EVENTS ───────────────────────────────────────────────────────────────────
// Demo data — clearly marked as placeholder
export const events: MunicipalEvent[] = [
  {
    id: '1',
    title: '[Community Event — Demo]',
    description: 'Replace with verified community events from the municipality. This is placeholder content for demonstration purposes.',
    date: '2026-09-20',
    time: '18:00',
    endTime: '21:00',
    location: 'Anfeh Town Center',
    category: 'community',
    organizer: 'Anfeh Municipality',
  },
  {
    id: '2',
    title: '[Cultural Evening — Demo]',
    description: 'Placeholder for cultural events organized by or in partnership with Anfeh Municipality.',
    date: '2026-09-25',
    time: '19:00',
    location: '[Venue Name]',
    category: 'culture',
  },
  {
    id: '3',
    title: '[Religious Occasion — Demo]',
    description: 'Placeholder for religious and community gatherings. Replace with official event information.',
    date: '2026-10-01',
    time: '10:00',
    location: '[Church / Location]',
    category: 'religious',
  },
  {
    id: '4',
    title: '[Youth Sports Day — Demo]',
    description: 'Annual youth sports day organized by the municipality for residents of all ages.',
    date: '2026-10-10',
    time: '09:00',
    endTime: '16:00',
    location: '[Sports Ground]',
    category: 'sports',
  },
  {
    id: '5',
    title: '[Municipal Council Meeting — Demo]',
    description: 'Regular public municipal council meeting. All residents are welcome to attend.',
    date: '2026-10-15',
    time: '17:00',
    location: 'Municipal Office',
    category: 'municipality',
  },
]

// ─── NEWS ────────────────────────────────────────────────────────────────────
// Demo data — clearly marked as placeholder
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'coastal-promenade-update',
    title: 'Coastal Promenade Restoration: Progress Update',
    excerpt: 'Work on the seafront promenade continues ahead of schedule. The municipality provides an update on Phase 1 completion.',
    content: 'This is placeholder content for a municipal news article. Replace with verified, officially approved content from the Anfeh Municipality communications team.\n\nThe coastal promenade restoration project continues to progress. Phase 1, which covers the northern section of the waterfront, is now 65% complete.\n\nResidents can expect the northern promenade to open by [date]. Phase 2 will begin shortly after.',
    date: '2026-09-08',
    category: 'projects',
    author: 'Anfeh Municipality',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Enfeh_Liban-Nord.JPG',
    featured: true,
  },
  {
    id: '2',
    slug: 'municipal-services-portal',
    title: 'New Digital Services Portal Now Available',
    excerpt: 'Anfeh Municipality launches its new digital platform, allowing residents to submit requests, report issues and access services online.',
    content: 'Placeholder content for municipal news article. Replace with official, verified content.\n\nAnfeh Municipality has launched its new digital services platform, providing residents with easier access to municipal services from any device.',
    date: '2026-09-05',
    category: 'municipality',
    author: 'Anfeh Municipality',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    featured: false,
  },
  {
    id: '3',
    slug: 'heritage-documentation',
    title: 'Heritage Documentation Project Begins',
    excerpt: 'The municipality partners with cultural organizations to document and preserve Anfeh\'s unique heritage.',
    content: 'Placeholder content. Replace with verified official content. The heritage documentation project has officially begun, with teams working to record the architectural and cultural heritage of Anfeh.',
    date: '2026-09-01',
    category: 'community',
    author: 'Anfeh Municipality',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Old_ruins_-_panoramio_%281%29.jpg',
    featured: false,
  },
  {
    id: '4',
    slug: 'street-lighting-completed',
    title: 'Street Lighting Upgrade Completed Across Municipality',
    excerpt: 'The LED street lighting upgrade project has been successfully completed, improving safety and reducing energy consumption.',
    content: 'Placeholder content. Replace with verified official content. The municipality has completed the installation of energy-efficient LED street lighting across all main roads and public areas.',
    date: '2026-08-28',
    category: 'projects',
    author: 'Anfeh Municipality',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    featured: false,
  },
]

// ─── SERVICES ────────────────────────────────────────────────────────────────
export const services: Service[] = [
  { id: '1', type: 'request', title: 'Submit a Request', description: 'Submit a formal request to the municipality for services, permits, or information.', icon: 'FileText', href: '/services/request', color: 'navy' },
  { id: '2', type: 'report', title: 'Report an Issue', description: 'Report road damage, lighting problems, waste issues or any public concern.', icon: 'AlertTriangle', href: '/report', color: 'terracotta' },
  { id: '3', type: 'documents', title: 'Municipal Documents', description: 'Access official municipal documents, bylaws, plans and public records.', icon: 'Archive', href: '/services/documents', color: 'blue' },
  { id: '4', type: 'permits', title: 'Permits', description: 'Apply for construction, event or business permits from the municipality.', icon: 'Stamp', href: '/services/permits', color: 'olive' },
  { id: '5', type: 'complaint', title: 'File a Complaint', description: 'Formally submit a complaint regarding municipal services or public matters.', icon: 'MessageSquare', href: '/services/complaint', color: 'navy' },
  { id: '6', type: 'suggestion', title: 'Suggestions', description: 'Share your ideas and suggestions to help improve our town.', icon: 'Lightbulb', href: '/services/suggestion', color: 'blue' },
  { id: '7', type: 'contact', title: 'Contact Municipality', description: 'Get in touch with the municipal office directly for assistance.', icon: 'Phone', href: '/contact', color: 'navy' },
]

// ─── DISCOVER ────────────────────────────────────────────────────────────────
export const discoverItems: DiscoverItem[] = [
  {
    id: '1',
    title: 'The Ancient Salt Pans',
    description: 'Among the oldest continuously operating salt pans in Lebanon, the Anfeh salt pans are a rare living heritage site and an extraordinary natural landmark.',
    category: 'salt-pans',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Vieux_marais_salants_%C3%A0_Enfeh_pr%C3%A8s_de_Tripoli_au_Liban-Nord.JPG',
    tags: ['Heritage', 'Nature', 'Unique'],
  },
  {
    id: '2',
    title: 'The Byzantine Coastline',
    description: 'Anfeh\'s coastline holds remarkable Byzantine-era ruins and ancient rock-cut tombs, offering a window into millennia of Levantine history.',
    category: 'history',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Notre-Dame_des_Vents_%C3%A0_Enfeh_Liban.JPG',
    tags: ['History', 'Byzantine', 'Archaeology'],
  },
  {
    id: '3',
    title: 'The Churches of Anfeh',
    description: 'Home to several historic churches, Anfeh\'s religious architecture spans centuries and reflects the town\'s deep-rooted Christian heritage and community life.',
    category: 'churches',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Enfeh_vue_g%C3%A9n%C3%A9rale_de_l%27%C3%A9glise_Sainte-Catherine.JPG',
    tags: ['Heritage', 'Architecture', 'Religion'],
  },
  {
    id: '4',
    title: 'The Beaches',
    description: 'Anfeh is known for its clear Mediterranean waters and natural rocky coastline, offering some of the most pristine swimming and snorkeling in North Lebanon.',
    category: 'beaches',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Fishermen_village_-_panoramio.jpg',
    tags: ['Beach', 'Swimming', 'Nature'],
  },
  {
    id: '5',
    title: 'Local Cuisine',
    description: 'Fresh seafood, traditional Lebanese mezze and local specialities define the food culture of Anfeh — shaped by the sea and by generations of coastal living.',
    category: 'food',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Lebanese_Dinner.jpg',
    tags: ['Food', 'Seafood', 'Culture'],
  },
  {
    id: '6',
    title: 'Where to Stay',
    description: 'From family guesthouses to boutique accommodation overlooking the sea, Anfeh offers a relaxed and authentic alternative to more crowded tourist destinations.',
    category: 'stay',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Enfeh_Liban-Nord.JPG',
    tags: ['Accommodation', 'Travel'],
  },
]

// ─── MAP LOCATIONS ────────────────────────────────────────────────────────────
// Placeholder — replace with verified, real locations only
export const mapLocations: MapLocation[] = [
  { id: '1', name: '[Restaurant Name — Placeholder]', category: 'eat', description: 'Seafood restaurant on the waterfront. Replace with verified business information.', address: '[Verified address]' },
  { id: '2', name: '[Guesthouse Name — Placeholder]', category: 'stay', description: 'Family guesthouse near the seafront. Replace with verified information.', address: '[Verified address]' },
  { id: '3', name: 'Anfeh Salt Pans', category: 'heritage', description: 'Ancient salt pans — one of the oldest in Lebanon. A unique heritage site.', address: 'Anfeh, Koura' },
  { id: '4', name: '[Church Name — Placeholder]', category: 'heritage', description: 'Historic church. Replace with verified name and details.', address: '[Verified address]' },
  { id: '5', name: '[Beach Name — Placeholder]', category: 'beaches', description: 'Natural rocky beach with clear Mediterranean water.', address: 'Anfeh coastline' },
  { id: '6', name: 'Municipal Office', category: 'services', description: 'Anfeh Municipality office. [Verify address and opening hours]', address: '[Official verified address]' },
]

// ─── COMMUNITY ────────────────────────────────────────────────────────────────
export const communityOrgs: CommunityOrg[] = [
  { id: '1', name: '[Cultural Association — Placeholder]', description: 'Local cultural organization. Replace with verified information about Anfeh\'s community groups.', type: 'Culture' },
  { id: '2', name: '[Sports Club — Placeholder]', description: 'Local sports club. Replace with verified information.', type: 'Sports' },
  { id: '3', name: '[Youth Organization — Placeholder]', description: 'Youth group active in community and civic life. Replace with verified information.', type: 'Youth' },
  { id: '4', name: '[Environmental Group — Placeholder]', description: 'Community group focused on environmental awareness. Replace with verified information.', type: 'Environment' },
]

// ─── REPORT CATEGORIES ───────────────────────────────────────────────────────
export const reportCategories = [
  { id: 'road', label: 'Road Damage', emoji: '🛣', description: 'Potholes, cracked surfaces, damaged infrastructure' },
  { id: 'lighting', label: 'Street Lighting', emoji: '💡', description: 'Broken or missing street lights' },
  { id: 'waste', label: 'Waste & Cleanliness', emoji: '🗑', description: 'Illegal dumping, overflowing bins, cleaning issues' },
  { id: 'water', label: 'Water & Sewage', emoji: '💧', description: 'Water supply issues, leaks, drainage problems' },
  { id: 'infrastructure', label: 'Infrastructure', emoji: '⚡', description: 'Electrical, communications, public utilities' },
  { id: 'parks', label: 'Public Spaces', emoji: '🌳', description: 'Parks, squares, public gardens, playgrounds' },
  { id: 'traffic', label: 'Traffic & Safety', emoji: '🚧', description: 'Traffic signs, road markings, safety hazards' },
  { id: 'other', label: 'Other', emoji: '📍', description: 'Any other public concern not listed above' },
]
