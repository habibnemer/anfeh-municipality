// ─── Municipality Types ───────────────────────────────────────────────────────

export type ReportStatus = 'new' | 'review' | 'progress' | 'resolved'
export type ProjectStatus = 'planning' | 'in-progress' | 'completed'
export type EventCategory = 'community' | 'culture' | 'sports' | 'religious' | 'family' | 'municipality'
export type ServiceType = 'request' | 'report' | 'documents' | 'permits' | 'complaint' | 'suggestion' | 'contact'
export type NewsCategory = 'municipality' | 'community' | 'projects' | 'announcements'
export type DiscoverCategory = 'history' | 'heritage' | 'coastline' | 'churches' | 'salt-pans' | 'beaches' | 'food' | 'stay' | 'activities'
export type MapCategory = 'eat' | 'stay' | 'explore' | 'services' | 'heritage' | 'beaches'

export interface Report {
  id: string
  reference: string
  category: string
  description: string
  location: string
  name: string
  phone: string
  status: ReportStatus
  submittedAt: string
  updatedAt: string
  photoUrl?: string
}

export interface MunicipalProject {
  id: string
  name: string
  description: string
  status: ProjectStatus
  location: string
  startDate: string
  endDate?: string
  progress: number
  budget?: string
  image?: string
  tags: string[]
}

export interface CouncilMember {
  id: string
  name: string
  role: string
  since: string
  bio?: string
  image?: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  date: string
  category: string
  important: boolean
}

export interface MunicipalEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  endTime?: string
  location: string
  category: EventCategory
  image?: string
  organizer?: string
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: NewsCategory
  author: string
  image?: string
  featured: boolean
}

export interface Service {
  id: string
  type: ServiceType
  title: string
  description: string
  icon: string
  href: string
  color: string
}

export interface DiscoverItem {
  id: string
  title: string
  description: string
  category: DiscoverCategory
  image?: string
  tags: string[]
}

export interface MapLocation {
  id: string
  name: string
  category: MapCategory
  description: string
  address: string
  lat?: number
  lng?: number
  phone?: string
  hours?: string
  image?: string
}

export interface CommunityOrg {
  id: string
  name: string
  description: string
  type: string
  contact?: string
}

export interface ServiceRequest {
  fullName: string
  phone: string
  email: string
  requestType: string
  message: string
  attachment?: File
}

export interface IssueReport {
  category: string
  description: string
  location: string
  name: string
  phone: string
  photo?: File
}
