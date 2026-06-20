export interface College {
  id: number
  name: string
  stream: 'Science' | 'Technology' | 'Engineering' | 'Mathematics'
  location: string
  city: string
  state: string
  fees: {
    annual: number
    total: number
    duration: string
  }
  rating: number
  ranking: number
  courses: string[]
  facilities: string[]
  imageUrl: string
  established: number
  type: 'Government' | 'Private' | 'Deemed'
  accreditation: string
  description: string
}

export const colleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology, Delhi",
    stream: "Engineering",
    location: "Hauz Khas, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    fees: { annual: 220000, total: 880000, duration: "4 Years" },
    rating: 4.8,
    ranking: 2,
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Research Labs", "Library", "Sports Complex", "Hostel", "Placement Cell"],
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    established: 1961,
    type: "Government",
    accreditation: "NAAC A++",
    description: "One of India's premier engineering institutions, known for world-class research and innovation."
  },
  {
    id: 2,
    name: "Indian Institute of Science",
    stream: "Science",
    location: "CV Raman Road, Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    fees: { annual: 35000, total: 140000, duration: "4 Years" },
    rating: 4.9,
    ranking: 1,
    courses: ["Physics", "Chemistry", "Biology", "Materials Science", "Nanoscience"],
    facilities: ["Advanced Research Centers", "Central Library", "Hostel", "Healthcare Center", "Gym"],
    imageUrl: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80",
    established: 1909,
    type: "Government",
    accreditation: "NAAC A++",
    description: "India's top-ranked university for scientific research and academic excellence."
  },
  {
    id: 3,
    name: "MIT World Peace University",
    stream: "Technology",
    location: "Kothrud, Pune",
    city: "Pune",
    state: "Maharashtra",
    fees: { annual: 350000, total: 1400000, duration: "4 Years" },
    rating: 4.5,
    ranking: 15,
    courses: ["Information Technology", "Data Science", "AI & Machine Learning", "Cybersecurity", "Cloud Computing"],
    facilities: ["Innovation Hub", "Tech Labs", "Incubation Center", "Cafeteria", "Hostel"],
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    established: 1983,
    type: "Private",
    accreditation: "NAAC A",
    description: "A leading technology university focused on innovation and entrepreneurship."
  },
  {
    id: 4,
    name: "Indian Statistical Institute",
    stream: "Mathematics",
    location: "Baranagar, Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    fees: { annual: 15000, total: 60000, duration: "4 Years" },
    rating: 4.7,
    ranking: 3,
    courses: ["Statistics", "Mathematics", "Quantitative Economics", "Computer Science", "Quality Management"],
    facilities: ["Computing Center", "Library", "Guest House", "Auditorium", "Sports Ground"],
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    established: 1931,
    type: "Government",
    accreditation: "Institution of National Importance",
    description: "World-renowned institute for statistics and mathematical research."
  },
  {
    id: 5,
    name: "IIT Bombay",
    stream: "Engineering",
    location: "Powai, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    fees: { annual: 220000, total: 880000, duration: "4 Years" },
    rating: 4.8,
    ranking: 3,
    courses: ["Aerospace Engineering", "Computer Science", "Metallurgical Engineering", "Energy Science", "Environmental Engineering"],
    facilities: ["Techfest", "Entrepreneurship Cell", "Sports Facilities", "Research Parks", "Industry Tie-ups"],
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    established: 1958,
    type: "Government",
    accreditation: "NAAC A++",
    description: "One of India's most prestigious engineering institutes with strong industry connections."
  },
  {
    id: 6,
    name: "BITS Pilani",
    stream: "Technology",
    location: "Vidya Vihar, Pilani",
    city: "Pilani",
    state: "Rajasthan",
    fees: { annual: 450000, total: 1800000, duration: "4 Years" },
    rating: 4.6,
    ranking: 8,
    courses: ["Computer Science", "Electronics", "Biotechnology", "Pharmacy", "Economics"],
    facilities: ["BITSAT Center", "Practice School", "Sports Complex", "Cultural Fest", "Startup Incubator"],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    established: 1964,
    type: "Deemed",
    accreditation: "NAAC A",
    description: "Premier private institution known for flexible learning and industry practice."
  },
  {
    id: 7,
    name: "St. Xavier's College",
    stream: "Science",
    location: "Park Street, Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    fees: { annual: 45000, total: 135000, duration: "3 Years" },
    rating: 4.4,
    ranking: 12,
    courses: ["Physics", "Chemistry", "Mathematics", "Microbiology", "Biotechnology"],
    facilities: ["Science Labs", "Library", "Chapel", "Auditorium", "Computer Center"],
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    established: 1860,
    type: "Private",
    accreditation: "NAAC A++",
    description: "Historic Jesuit institution with a strong tradition in science education."
  },
  {
    id: 8,
    name: "Chennai Mathematical Institute",
    stream: "Mathematics",
    location: "Siruseri, Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    fees: { annual: 50000, total: 150000, duration: "3 Years" },
    rating: 4.8,
    ranking: 5,
    courses: ["Mathematics", "Computer Science", "Data Science", "Physics", "Applied Mathematics"],
    facilities: ["Research Centers", "Computing Lab", "Library", "Guest House", "Cafeteria"],
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    established: 1989,
    type: "Private",
    accreditation: "NAAC A",
    description: "Elite institute focused on mathematical sciences and theoretical computer science."
  },
  {
    id: 9,
    name: "VIT University",
    stream: "Engineering",
    location: "Katpadi, Vellore",
    city: "Vellore",
    state: "Tamil Nadu",
    fees: { annual: 180000, total: 720000, duration: "4 Years" },
    rating: 4.3,
    ranking: 18,
    courses: ["Computer Science", "Mechanical Engineering", "Electronics", "Biomedical Engineering", "Architecture"],
    facilities: ["Technology Tower", "Research Park", "International Relations", "Sports Academy", "Startup Hub"],
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    established: 1984,
    type: "Deemed",
    accreditation: "NAAC A++",
    description: "Large private university known for diverse programs and global partnerships."
  },
  {
    id: 10,
    name: "IIIT Hyderabad",
    stream: "Technology",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    fees: { annual: 250000, total: 1000000, duration: "4 Years" },
    rating: 4.7,
    ranking: 6,
    courses: ["Computer Science", "Electronics", "Computational Linguistics", "Bioinformatics", "Building Science"],
    facilities: ["Research Centers", "Innovation Labs", "Entrepreneurship Cell", "Sports Facilities", "Hostel"],
    imageUrl: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    established: 1998,
    type: "Deemed",
    accreditation: "NAAC A",
    description: "Leading IT institute with strong focus on research and innovation."
  },
  {
    id: 11,
    name: "Fergusson College",
    stream: "Science",
    location: "Shivajinagar, Pune",
    city: "Pune",
    state: "Maharashtra",
    fees: { annual: 25000, total: 75000, duration: "3 Years" },
    rating: 4.2,
    ranking: 20,
    courses: ["Physics", "Chemistry", "Botany", "Zoology", "Geology"],
    facilities: ["Botanical Garden", "Science Labs", "Library", "Amphitheatre", "Sports Ground"],
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80",
    established: 1885,
    type: "Government",
    accreditation: "NAAC A",
    description: "Historic institution with rich heritage in science education."
  },
  {
    id: 12,
    name: "TIFR - Tata Institute of Fundamental Research",
    stream: "Mathematics",
    location: "Colaba, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    fees: { annual: 10000, total: 50000, duration: "5 Years" },
    rating: 4.9,
    ranking: 2,
    courses: ["Mathematics", "Theoretical Physics", "Computer Science", "Astronomy", "Nuclear Physics"],
    facilities: ["Advanced Labs", "Supercomputers", "Observation Facilities", "Library", "Guest House"],
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    established: 1945,
    type: "Government",
    accreditation: "Deemed University",
    description: "India's premier research institute for fundamental sciences."
  }
]

export const streams = ['All', 'Science', 'Technology', 'Engineering', 'Mathematics'] as const
export type StreamFilter = typeof streams[number]
