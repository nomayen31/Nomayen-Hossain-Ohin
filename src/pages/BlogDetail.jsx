import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, Heart, MessageCircle, Share2, Tag, User, Bookmark } from 'lucide-react';

const blogArticles = {
    1: {
        title: "Building Scalable React Applications with TypeScript",
        category: "React",
        date: "2026-01-10",
        readTime: "8 min read",
        views: 1240,
        likes: 89,
        comments: 23,
        author: "Nomayen Hossain",
        authorRole: "Full-Stack Developer",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
        tags: ["React", "TypeScript", "Best Practices"],
        content: `
# Introduction

TypeScript has become an essential tool for building large-scale React applications. In this comprehensive guide, we'll explore how to leverage TypeScript's powerful type system to create maintainable, scalable applications.

## Why TypeScript with React?

TypeScript brings several key advantages to React development:

- **Type Safety**: Catch errors at compile-time rather than runtime
- **Better IDE Support**: Enhanced autocomplete and IntelliSense
- **Improved Refactoring**: Confidently rename and restructure code
- **Self-Documenting Code**: Types serve as inline documentation

## Setting Up Your Project

First, let's create a new React project with TypeScript:

\`\`\`bash
npx create-react-app my-app --template typescript
# or with Vite
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Component Typing Best Practices

### Functional Components

Always type your component props explicitly:

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {label}
    </button>
  );
};
\`\`\`

### Hooks with TypeScript

Type your useState and useEffect hooks properly:

\`\`\`typescript
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);

useEffect(() => {
  const fetchUser = async () => {
    setLoading(true);
    const data = await api.getUser();
    setUser(data);
    setLoading(false);
  };
  
  fetchUser();
}, []);
\`\`\`

## Advanced Patterns

### Generic Components

Create reusable components with generics:

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Context API with TypeScript

Type your context properly:

\`\`\`typescript
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
\`\`\`

## Performance Optimization

Use TypeScript to ensure proper memoization:

\`\`\`typescript
const MemoizedComponent = React.memo<ComponentProps>(
  ({ data }) => {
    return <div>{data.name}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.data.id === nextProps.data.id;
  }
);
\`\`\`

## Conclusion

TypeScript transforms React development by providing type safety, better tooling, and improved code quality. Start small, gradually add types to your existing projects, and watch your productivity soar.

Remember: TypeScript is a tool to help you write better code, not a burden. Use it wisely, and your future self will thank you!
        `
    },
    2: {
        title: "Mastering Next.js 14: App Router Deep Dive",
        category: "Next.js",
        date: "2026-01-08",
        readTime: "12 min read",
        views: 2150,
        likes: 156,
        comments: 45,
        author: "Nomayen Hossain",
        authorRole: "Full-Stack Developer",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1200&h=600&fit=crop",
        tags: ["Next.js", "Server Components", "React"],
        content: `
# Next.js 14 App Router: A Complete Guide

Next.js 14 introduces revolutionary changes with the App Router, bringing server components and a new mental model for building React applications.

## Understanding the App Router

The App Router is built on React Server Components and introduces a new file-system based routing approach.

### File Structure

\`\`\`
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── about/
│   └── page.tsx       # About page
└── blog/
    ├── layout.tsx     # Blog layout
    ├── page.tsx       # Blog list
    └── [slug]/
        └── page.tsx   # Individual blog post
\`\`\`

## Server Components vs Client Components

### Server Components (Default)

Server Components run on the server and can directly access backend resources:

\`\`\`typescript
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'no-store' // Dynamic data
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

### Client Components

Use 'use client' directive for interactive components:

\`\`\`typescript
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## Data Fetching Strategies

### Static Generation

\`\`\`typescript
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
\`\`\`

### Incremental Static Regeneration

\`\`\`typescript
export const revalidate = 3600; // Revalidate every hour

async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 }
  });
  return res.json();
}
\`\`\`

## Layouts and Templates

### Root Layout

\`\`\`typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
\`\`\`

### Nested Layouts

\`\`\`typescript
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="blog-container">
      <Sidebar />
      <article>{children}</article>
    </div>
  );
}
\`\`\`

## Loading and Error States

### Loading UI

\`\`\`typescript
// app/posts/loading.tsx
export default function Loading() {
  return <div>Loading posts...</div>;
}
\`\`\`

### Error Handling

\`\`\`typescript
// app/posts/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
\`\`\`

## Metadata API

\`\`\`typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A blog about web development',
  openGraph: {
    title: 'My Blog',
    description: 'A blog about web development',
    images: ['/og-image.jpg'],
  },
};
\`\`\`

## Conclusion

Next.js 14's App Router represents the future of React development. By embracing server components and the new routing paradigm, you can build faster, more efficient applications.

Start migrating your projects today and experience the benefits of this powerful new architecture!
        `
    },
    3: {
        title: "Node.js Performance Optimization Techniques",
        category: "Backend",
        date: "2026-01-05",
        readTime: "10 min read",
        views: 980,
        likes: 67,
        comments: 18,
        author: "Nomayen Hossain",
        authorRole: "Full-Stack Developer",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
        tags: ["Node.js", "Performance", "Backend"],
        content: `
# Node.js Performance Optimization: A Practical Guide

Performance is crucial for any Node.js application. Let's explore proven techniques to make your applications faster and more efficient.

## Understanding the Event Loop

Node.js uses a single-threaded event loop. Understanding it is key to optimization:

\`\`\`javascript
// Bad: Blocking the event loop
const result = heavyComputation(); // Blocks everything

// Good: Non-blocking approach
setImmediate(() => {
  const result = heavyComputation();
  processResult(result);
});
\`\`\`

## Database Query Optimization

### Use Connection Pooling

\`\`\`javascript
const { Pool } = require('pg');

const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Reuse connections
async function getUser(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}
\`\`\`

### Implement Caching

\`\`\`javascript
const Redis = require('redis');
const client = Redis.createClient();

async function getCachedUser(id) {
  const cached = await client.get(\`user:\${id}\`);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  const user = await db.getUser(id);
  await client.setEx(\`user:\${id}\`, 3600, JSON.stringify(user));
  
  return user;
}
\`\`\`

## Clustering for Multi-Core Systems

\`\`\`javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork();
  });
} else {
  require('./server');
}
\`\`\`

## Stream Processing for Large Data

\`\`\`javascript
const fs = require('fs');

// Bad: Loading entire file into memory
const data = fs.readFileSync('large-file.txt');
processData(data);

// Good: Using streams
const readStream = fs.createReadStream('large-file.txt');
readStream.on('data', (chunk) => {
  processChunk(chunk);
});
\`\`\`

## Async/Await Best Practices

\`\`\`javascript
// Bad: Sequential execution
async function processUsers() {
  const user1 = await getUser(1);
  const user2 = await getUser(2);
  const user3 = await getUser(3);
}

// Good: Parallel execution
async function processUsers() {
  const [user1, user2, user3] = await Promise.all([
    getUser(1),
    getUser(2),
    getUser(3)
  ]);
}
\`\`\`

## Memory Management

### Avoid Memory Leaks

\`\`\`javascript
// Bad: Global variables accumulate
let cache = {};

function addToCache(key, value) {
  cache[key] = value; // Never cleaned up
}

// Good: Use Map with size limits
const cache = new Map();
const MAX_CACHE_SIZE = 1000;

function addToCache(key, value) {
  if (cache.size >= MAX_CACHE_SIZE) {
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey);
  }
  cache.set(key, value);
}
\`\`\`

## Monitoring and Profiling

\`\`\`javascript
const { performance } = require('perf_hooks');

function measurePerformance(fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(\`Execution time: \${end - start}ms\`);
}
\`\`\`

## Conclusion

Performance optimization is an ongoing process. Monitor your application, identify bottlenecks, and apply these techniques strategically. Remember: premature optimization is the root of all evil - optimize based on real metrics!
        `
    }
};

const BlogDetail = () => {
    const { id } = useParams();
    const article = blogArticles[parseInt(id)];

    if (!article) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link to="/blogs" className="text-blue-400 hover:text-blue-300">
                        ← Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="relative bg-black min-h-screen py-20 px-4 md:px-10 overflow-hidden font-sans">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Back Button */}
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Blogs
                </Link>

                {/* Category Badge */}
                <div className="mb-6">
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-bold">
                        {article.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-white text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                    {article.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
                    <div className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        <div>
                            <div className="text-white font-semibold">{article.author}</div>
                            <div className="text-xs">{article.authorRole}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                    </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Eye className="w-5 h-5" />
                        <span className="font-semibold">{article.views}</span>
                    </div>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="font-semibold">{article.likes}</span>
                    </button>
                    <div className="flex items-center gap-2 text-gray-400">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">{article.comments}</span>
                    </div>
                    <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                        <Share2 className="w-4 h-4" />
                        Share
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                        <Bookmark className="w-4 h-4" />
                        Save
                    </button>
                </div>

                {/* Featured Image */}
                <div className="relative rounded-3xl overflow-hidden mb-12 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-[400px] object-cover relative z-10"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-lg max-w-none mb-12">
                    <div
                        className="text-gray-300 leading-relaxed space-y-6"
                        dangerouslySetInnerHTML={{
                            __html: article.content
                                .split('\n')
                                .map(line => {
                                    if (line.startsWith('# ')) return `<h1 class="text-4xl font-bold text-white mt-12 mb-6">${line.slice(2)}</h1>`;
                                    if (line.startsWith('## ')) return `<h2 class="text-3xl font-bold text-white mt-10 mb-4">${line.slice(3)}</h2>`;
                                    if (line.startsWith('### ')) return `<h3 class="text-2xl font-bold text-white mt-8 mb-3">${line.slice(4)}</h3>`;
                                    if (line.startsWith('- ')) return `<li class="ml-6 mb-2">${line.slice(2)}</li>`;
                                    if (line.startsWith('```')) {
                                        const lang = line.slice(3);
                                        return `<pre class="bg-zinc-900 border border-white/10 rounded-2xl p-6 overflow-x-auto my-6"><code class="text-sm text-gray-300">`;
                                    }
                                    if (line === '```') return `</code></pre>`;
                                    if (line.trim() === '') return '<br/>';
                                    return `<p class="mb-4">${line}</p>`;
                                })
                                .join('')
                        }}
                    />
                </div>

                {/* Tags */}
                <div className="flex items-center gap-3 mb-12 pb-12 border-b border-white/10">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm font-semibold hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-400 transition-all cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Author Card */}
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                            {article.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-white text-xl font-bold mb-1">{article.author}</h3>
                            <p className="text-gray-400 mb-3">{article.authorRole}</p>
                            <p className="text-gray-400 text-sm">
                                Passionate about building scalable web applications and sharing knowledge with the developer community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
