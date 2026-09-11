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
export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Coastal Promenade Works — Temporary Access Restrictions',
    content: 'As part of the ongoing coastal promenade restoration project, sections of the seafront road will be partially closed to vehicles on weekday mornings from 7:00 AM to 1:00 PM. Pedestrian access remains open at all times. We apologise for any inconvenience.',
    date: '2026-09-10',
    category: 'Roads',
    important: true,
  },
  {
    id: '2',
    title: 'New Digital Services Platform Launched',
    content: 'Anfeh Municipality has launched its new digital platform. Residents can now submit service requests, report issues and access municipal information directly from their phones. The platform is available 24 hours a day.',
    date: '2026-09-05',
    category: 'Municipality',
    important: false,
  },
  {
    id: '3',
    title: 'Municipal Office — Autumn Hours',
    content: 'From 1 October 2026, the municipal office will operate Monday to Friday, 8:00 AM – 2:30 PM. For urgent matters outside office hours, residents may use the online reporting system or call the emergency line.',
    date: '2026-09-01',
    category: 'Administration',
    important: false,
  },
]

// ─── EVENTS ───────────────────────────────────────────────────────────────────
export const events: MunicipalEvent[] = [
  {
    id: '1',
    title: 'Feast of Saint Catherine — Anfeh',
    description: 'The annual feast of the patron saint of Anfeh, celebrated at the historic Church of Saint Catherine. The celebration includes a solemn mass, cultural programme and community gathering on the seafront.',
    date: '2026-11-25',
    time: '10:00',
    endTime: '22:00',
    location: 'Church of Saint Catherine, Anfeh',
    category: 'religious',
    organizer: 'Parish of Saint Catherine',
  },
  {
    id: '2',
    title: 'Anfeh Coastal Cleanup Day',
    description: 'Join residents and the municipal team for a community cleanup of the Anfeh coastline and salt pans. All equipment provided. A chance to care for our natural heritage together.',
    date: '2026-10-18',
    time: '08:00',
    endTime: '12:00',
    location: 'Anfeh Salt Pans & Waterfront',
    category: 'community',
    organizer: 'Anfeh Municipality',
  },
  {
    id: '3',
    title: 'Heritage Evening — The Salt Pans of Anfeh',
    description: 'A cultural evening celebrating the ancient salt pans of Anfeh, one of the last functioning Phoenician salt production sites in the Mediterranean. Guided tour, documentary screening and local food.',
    date: '2026-10-03',
    time: '17:00',
    endTime: '21:00',
    location: 'Anfeh Waterfront Promenade',
    category: 'culture',
    organizer: 'Anfeh Municipality & Cultural Committee',
  },
  {
    id: '4',
    title: 'Municipal Council — Open Public Session',
    description: 'The monthly municipal council session is open to all residents of Anfeh. The agenda includes updates on the coastal promenade project, road works and the 2027 municipal budget.',
    date: '2026-10-15',
    time: '17:00',
    endTime: '19:30',
    location: 'Municipal Office, Anfeh',
    category: 'municipality',
    organizer: 'Anfeh Municipality',
  },
  {
    id: '5',
    title: 'Youth Football Tournament — Anfeh',
    description: 'The annual inter-village youth football tournament hosted by Anfeh Municipality. Teams from across Koura District are invited to participate. Open to ages 12–18.',
    date: '2026-10-24',
    time: '09:00',
    endTime: '17:00',
    location: 'Anfeh Sports Ground',
    category: 'sports',
    organizer: 'Anfeh Municipal Sports Committee',
  },
]

// ─── NEWS ────────────────────────────────────────────────────────────────────
// Demo data — clearly marked as placeholder
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'coastal-promenade-update',
    title: 'Coastal Promenade Restoration: Progress Update',
    excerpt: 'Work on the Anfeh seafront promenade continues ahead of schedule. The municipality provides a full update on Phase 1.',
    content: 'Anfeh Municipality is pleased to report that the coastal promenade restoration project is progressing well, with Phase 1 now 65% complete — ahead of the original schedule.\n\nPhase 1 covers the northern section of the waterfront, from the port entrance to the salt pans viewpoint. Works include new stone paving, heritage-style lighting columns, seating areas with views over the Mediterranean, and improved drainage infrastructure.\n\nThe northern promenade is expected to open fully to residents and visitors by November 2026. Pedestrian access to the salt pans area has been maintained throughout the works.\n\nPhase 2, which will extend the promenade southward towards the fishing harbour, is scheduled to begin in early 2027. The municipality thanks residents for their patience during the construction period.',
    date: '2026-09-08',
    category: 'projects',
    author: 'Anfeh Municipality',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Enfeh_Liban-Nord.JPG',
    featured: true,
  },
  {
    id: '2',
    slug: 'municipal-services-portal',
    title: 'New Digital Services Portal Now Live',
    excerpt: 'Anfeh Municipality launches its new digital platform, allowing residents to submit requests, report issues and access services from any device.',
    content: 'Anfeh Municipality has officially launched its new digital services platform, making it easier than ever for residents to connect with their local government.\n\nThe platform allows residents to submit service requests, report issues such as road damage or lighting faults, send messages to the municipal office, and access public information — all from a phone, tablet or computer, available 24 hours a day.\n\nAll reports submitted through the platform are received directly by the municipal team and assigned a unique reference number for follow-up. Residents may report issues completely anonymously — no personal details are required.\n\nThe municipality is committed to improving communication with residents and making public services more accessible to everyone in Anfeh.',
    date: '2026-09-05',
    category: 'municipality',
    author: 'Anfeh Municipality',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Fishermen_village_-_panoramio.jpg',
    featured: false,
  },
  {
    id: '3',
    slug: 'heritage-documentation',
    title: 'Heritage Documentation Project Begins in Anfeh',
    excerpt: 'The municipality partners with cultural organisations to document and preserve Anfeh\'s unique Phoenician and Byzantine heritage.',
    content: 'Anfeh Municipality has launched a new Heritage Documentation Project in partnership with Lebanese cultural preservation organisations.\n\nThe project aims to create a comprehensive record of Anfeh\'s architectural and cultural heritage — including the ancient Phoenician salt pans, the Byzantine church ruins of Notre-Dame des Vents, the Church of Saint Catherine, and the historic fishing village.\n\nThe salt pans of Anfeh are among the oldest continuously operating salt production sites in the Mediterranean world, with origins dating back to the Phoenician era. The documentation project will produce a full architectural survey, photographic archive and historical record to support future preservation efforts.\n\nResidents with historical photographs, documents or knowledge of local history are invited to contact the municipal office to contribute to the project.',
    date: '2026-09-01',
    category: 'community',
    author: 'Anfeh Municipality',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Notre-Dame_des_Vents_%C3%A0_Enfeh_Liban.JPG',
    featured: false,
  },
  {
    id: '4',
    slug: 'street-lighting-completed',
    title: 'Street Lighting Upgrade Completed Across Anfeh',
    excerpt: 'The LED street lighting upgrade has been successfully completed, improving safety across all main roads and public areas.',
    content: 'Anfeh Municipality has successfully completed the installation of energy-efficient LED street lighting across all main roads and public areas within the municipality.\n\nThe project, which began in June 2024, replaced aging sodium street lights with modern LED fixtures that provide significantly better visibility at night while reducing energy consumption by approximately 60%.\n\nAll residential streets, the seafront road, the town centre square and the road connecting Anfeh to the main coastal highway have been equipped with the new lighting. The project was completed on schedule and within budget.\n\nThe improved street lighting is expected to enhance safety for pedestrians and drivers, particularly along the coastal road, and will reduce the municipality\'s electricity costs over the coming years.',
    date: '2026-08-28',
    category: 'projects',
    author: 'Anfeh Municipality',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Vieux_marais_salants_%C3%A0_Enfeh_pr%C3%A8s_de_Tripoli_au_Liban-Nord.JPG',
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
  { id: 'road', label: 'Road Damage', icon: 'Construction', description: 'Potholes, cracked surfaces, damaged infrastructure' },
  { id: 'lighting', label: 'Street Lighting', icon: 'Lightbulb', description: 'Broken or missing street lights' },
  { id: 'waste', label: 'Waste & Cleanliness', icon: 'Trash2', description: 'Illegal dumping, overflowing bins, cleaning issues' },
  { id: 'water', label: 'Water & Sewage', icon: 'Droplets', description: 'Water supply issues, leaks, drainage problems' },
  { id: 'infrastructure', label: 'Infrastructure', icon: 'Zap', description: 'Electrical, communications, public utilities' },
  { id: 'parks', label: 'Public Spaces', icon: 'Trees', description: 'Parks, squares, public gardens, playgrounds' },
  { id: 'traffic', label: 'Traffic & Safety', icon: 'TriangleAlert', description: 'Traffic signs, road markings, safety hazards' },
  { id: 'other', label: 'Other', icon: 'MoreHorizontal', description: 'Any other public concern not listed above' },
]
