export const blogPosts = [
    {
        id: 1,
        title: "Building Scalable React Applications with TypeScript",
        excerpt: "Learn how to leverage TypeScript's type system to build maintainable and scalable React applications that grow with your team.",
        category: "React",
        date: "2026-01-10",
        readTime: "8 min read",
        views: 1240,
        likes: 89,
        comments: 23,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        featured: true,
        tags: ["React", "TypeScript", "Best Practices"]
    },
    {
        id: 2,
        title: "Mastering Next.js 14: App Router Deep Dive",
        excerpt: "Explore the new App Router in Next.js 14 and discover how server components revolutionize React development.",
        category: "Next.js",
        date: "2026-01-08",
        readTime: "12 min read",
        views: 2150,
        likes: 156,
        comments: 45,
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop",
        featured: true,
        tags: ["Next.js", "Server Components", "React"]
    },
    {
        id: 3,
        title: "Node.js Performance Optimization Techniques",
        excerpt: "Discover advanced techniques to optimize your Node.js applications for maximum performance and scalability.",
        category: "Backend",
        date: "2026-01-05",
        readTime: "10 min read",
        views: 980,
        likes: 67,
        comments: 18,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        featured: false,
        tags: ["Node.js", "Performance", "Backend"]
    },
    {
        id: 4,
        title: "Tailwind CSS: From Zero to Production",
        excerpt: "A comprehensive guide to mastering Tailwind CSS and building beautiful, responsive interfaces faster than ever.",
        category: "CSS",
        date: "2026-01-03",
        readTime: "6 min read",
        views: 1560,
        likes: 112,
        comments: 34,
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
        featured: false,
        tags: ["Tailwind", "CSS", "Design"]
    },
    {
        id: 5,
        title: "PostgreSQL vs MongoDB: Choosing the Right Database",
        excerpt: "An in-depth comparison of PostgreSQL and MongoDB to help you make informed decisions for your next project.",
        category: "Database",
        date: "2025-12-28",
        readTime: "15 min read",
        views: 2340,
        likes: 189,
        comments: 67,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
        featured: true,
        tags: ["PostgreSQL", "MongoDB", "Database"]
    },
    {
        id: 6,
        title: "Building RESTful APIs with Express and Prisma",
        excerpt: "Learn how to build robust, type-safe REST APIs using Express.js and Prisma ORM with best practices.",
        category: "Backend",
        date: "2025-12-25",
        readTime: "11 min read",
        views: 1780,
        likes: 134,
        comments: 41,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
        featured: false,
        tags: ["Express", "Prisma", "API"]
    },
    {
        id: 7,
        title: "React Hooks: Advanced Patterns and Best Practices",
        excerpt: "Master advanced React Hooks patterns including custom hooks, performance optimization, and common pitfalls to avoid.",
        category: "React",
        date: "2025-12-20",
        readTime: "9 min read",
        views: 1920,
        likes: 145,
        comments: 52,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        featured: false,
        tags: ["React", "Hooks", "JavaScript"]
    },
    {
        id: 8,
        title: "Deploying Full-Stack Apps on Vercel and Railway",
        excerpt: "A complete guide to deploying your full-stack applications using modern platforms like Vercel and Railway.",
        category: "DevOps",
        date: "2025-12-15",
        readTime: "7 min read",
        views: 1450,
        likes: 98,
        comments: 29,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        featured: false,
        tags: ["Deployment", "Vercel", "DevOps"]
    }
];

export const projectData = {
    "categories": [
        {
            "name": "Backend Engineering",
            "projects": [
                {
                    "id": "nestjs-music",
                    "title": "NestJS Music Player – Audio Streaming Server",
                    "description": "A robust backend for an audio streaming application built with NestJS, featuring module-based architecture, secure streaming endpoints, and metadata management.",
                    "features": [
                        "Module-based architecture (Songs, Users, Auth)",
                        "Secure audio streaming endpoints",
                        "JWT Authentication & Role-based Guards",
                        "DTOS and Type-Safe validation"
                    ],
                    "techStack": ["NestJS", "TypeScript", "PostgreSQL", "TypeORM"],
                    "links": {
                        "repo": "https://github.com/nomayen31/NestJS-Music-Player"
                    }
                },
                {
                    "id": "vehicle-rental",
                    "title": "Vehicle Rental System",
                    "description": "A comprehensive backend system for managing vehicle rentals, booking schedules, and fleet availability.",
                    "features": [
                        "Booking management system",
                        "Fleet tracking and status updates",
                        "Complex data modeling with Prisma",
                        "RESTful API design standards"
                    ],
                    "techStack": ["Node.js", "Express.js", "Prisma", "PostgreSQL"],
                    "links": {
                        "repo": "https://github.com/nomayen31/Vehicle-Rental"
                    }
                },
                {
                    "id": "blog-app-server",
                    "title": "Advanced Blog Server",
                    "description": "A scalable blog application backend featuring rich content management, comment merging, and social features.",
                    "features": [
                        "Advanced CRUD operations",
                        "Relational data modeling",
                        "Secure API endpoints",
                        "Performance optimized queries"
                    ],
                    "techStack": ["Node.js", "Express", "Mongoose", "Redis"],
                    "links": {
                        "repo": "https://github.com/nomayen31/Blog-Application-Server"
                    }
                }
            ]
        },
        {
            "name": "MERN Stack",
            "projects": [
                {
                    "id": "autobid",
                    "title": "AutoBid – Online Car Auction Platform",
                    "description": "AutoBid is a full-stack web application that provides a secure and interactive online car auction experience. Users can list cars, place bids, and connect with sellers through protected routes.",
                    "features": [
                        "Car listing with title, category, deadline, and starting bid",
                        "Full CRUD operations for posted auctions",
                        "Protected routes for Add Car, Car Details, and My Posted Cars",
                        "Secure bidding and seller-buyer interaction"
                    ],
                    "techStack": ["MongoDB", "Express.js", "React", "Node.js", "Firebase"],
                    "links": {
                        "client": "https://agrotrade-a35fe.web.app/",
                        "backend": "https://autobid-server-eosin.vercel.app/",
                        "repo": "https://github.com/nomayen31/AutoBid"
                    }
                },
                {
                    "id": "cluster-connect",
                    "title": "Cluster-Connect – Freelancer Marketplace",
                    "description": "Cluster-Connect is a web platform that allows users to discover freelancers, explore services, and directly hire or purchase services through an intuitive interface.",
                    "features": [
                        "Freelancer discovery and service listings",
                        "Direct service purchase and booking",
                        "Scalable server-side architecture",
                        "Fast and intuitive user experience"
                    ],
                    "techStack": ["MongoDB", "Express.js", "React", "Node.js"],
                    "links": {
                        "client": "https://cluster-connect-b1c65.web.app/",
                        "clientRepo": "https://github.com/nomayen31/Cluster-Connect",
                        "serverRepo": "https://github.com/nomayen31/Cluster-Connect_Server"
                    }
                },
                {
                    "id": "firmfusion",
                    "title": "FirmFusion – Job & Career Platform",
                    "description": "FirmFusion is a modern job-finding platform that connects candidates with companies through job listings, company profiles, blogs, and case studies.",
                    "features": [
                        "User authentication system",
                        "Job listings and company profiles",
                        "Blog and case study modules",
                        "Responsive and modern UI"
                    ],
                    "techStack": ["MongoDB", "Express.js", "React", "Node.js"],
                    "links": {
                        "live": "https://firmfusion-98a55.web.app/",
                        "repo": "https://github.com/nomayen31/FirmFusion"
                    }
                }
            ]
        },
        {
            "name": "Full Stack",
            "projects": [
                {
                    "id": "parcelx",
                    "title": "ParcelX – Smart Parcel Delivery Platform",
                    "description": "ParcelX is a door-to-door parcel delivery system featuring real-time tracking, automated workflows, and secure online payments.",
                    "features": [
                        "Real-time parcel tracking",
                        "Automated delivery workflow",
                        "Dynamic pricing and secure payments",
                        "Rider assignment and performance tracking",
                        "Customer feedback and review system"
                    ],
                    "techStack": ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Stripe"],
                    "links": {
                        "client": "https://parcelx-client.vercel.app/",
                        "server": "https://parcelx-auth-server.vercel.app/",
                        "clientRepo": "https://github.com/nomayen31/Parcelx-client-",
                        "serverRepo": "https://github.com/nomayen31/Parcelx-auth-server.git"
                    }
                }
            ]
        },
        {
            "name": "Frontend",
            "projects": [
                {
                    "id": "khan-it",
                    "title": "Khan IT – Digital Marketing Agency Landing Page",
                    "description": "A high-performance, modern landing page for a leading digital marketing agency featuring blogs, service showcases, case studies, and interactive UI.",
                    "features": [
                        "Dynamic blog routing",
                        "Modern UI with smooth transitions",
                        "SEO, Ads, Web Design, and Branding sections",
                        "Interactive process flow",
                        "Fully responsive design"
                    ],
                    "techStack": ["React", "Tailwind CSS", "Vite"],
                    "links": {
                        "live": "https://deluxe-sundae-08e368.netlify.app/",
                        "repo": "https://github.com/nomayen31/khan-it-landing-page-"
                    }
                },
                {
                    "id": "daily-sun",
                    "title": "The Daily Sun – News Portal",
                    "description": "A dynamic newspaper website with category-based articles and modern news layout.",
                    "features": [
                        "News categories and filtering",
                        "Dynamic content loading",
                        "Responsive design",
                        "Clean and readable UI"
                    ],
                    "techStack": ["React", "Firebase", "Tailwind CSS"],
                    "links": {
                        "live": "https://dragon-news-53ef8.web.app/category/01",
                        "repo": "https://github.com/nomayen31/the_sun_news"
                    }
                },
                {
                    "id": "portfolio",
                    "title": "Personal Portfolio",
                    "description": "A personal frontend portfolio showcasing projects, skills, and experience with a modern UI.",
                    "features": [
                        "Project showcase",
                        "Responsive design",
                        "Clean and minimal UI"
                    ],
                    "techStack": ["HTML", "CSS", "JavaScript"],
                    "links": {
                        "live": "https://nomayen31.github.io/Font-end-Project02/"
                    }
                }
            ]
        }
    ]
};

export const pageLinks = [
    { name: 'Home', path: '/', type: 'Page' },
    { name: 'Blogs', path: '/blogs', type: 'Page' },
    { name: 'Hire Me', path: '/hire-me', type: 'Page' },
    { name: 'Contact', path: '/contact-with-me', type: 'Page' }
];
