# 🚀 AskDegree - Portfolio Security & Compliance Platform

**Venture Studio & Fund Security Operations Platform** | CCO/CISO-as-a-Service

![AskDegree Logo](public/logo.svg)

AskDegree is a comprehensive security and compliance management platform designed specifically for venture studios and funds. We centralize security operations across entire portfolios, enabling every portfolio company to meet enterprise and regulatory requirements without the overhead of individual hires or vendor sprawl.

## 🎯 Project Status: MVP Ready

### ✅ Current MVP Features

#### 🏠 Landing Page Components
- **Hero Section**: Compelling value proposition with animated elements and KPI metrics
- **Problem Statement**: Clear articulation of portfolio security challenges
- **Solution Overview**: Four core service offerings with visual cards
- **Why It Wins**: Competitive advantages and ROI metrics
- **Outcomes Section**: Measurable results and deliverables
- **90-Day Pilot**: Detailed scope of work with timeline and pricing
- **FAQ Section**: Comprehensive Q&A with white background for readability
- **Next Steps**: Clear call-to-action and implementation path

#### 🎨 Design & UX
- **Modern Dark Theme**: Professional gradient backgrounds with high contrast
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion powered micro-interactions and scroll reveals
- **Consistent Branding**: Unified color palette (#0032eb primary) across all components
- **Interactive Elements**: Hover states, transitions, and engaging UI components

#### 🔧 Technical Implementation
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **shadcn/ui**: Premium component library with accessibility
- **Framer Motion**: Production-ready animations and interactions
- **Calendly Integration**: Seamless scheduling across all CTAs

#### 📱 User Experience
- **Navigation**: Sticky header with smooth scroll navigation
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Loading**: Optimized performance and bundle size
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Ready**: Meta tags and structured data

### 🚀 Production Features

#### 🎯 Core Functionality
- **Portfolio-Wide Coverage**: Centralized security management across multiple companies
- **Fractional Officers**: On-demand CCO, AML Officer, CISO + support staff
- **Compliance Frameworks**: SOC 2, HIPAA, PCI, AML, and investor DDQ support
- **Penetration Testing**: Programmatic security assessments and vulnerability management
- **Standardized Playbooks**: Unified controls, policies, and procedures

#### 💼 Business Value
- **Cost Efficiency**: 30-60% savings vs. ad-hoc vendor engagements
- **Time-to-Revenue**: Pull forward enterprise deals by 1-2 quarters
- **Risk Visibility**: Single dashboard for portfolio-wide security posture
- **Audit Readiness**: Streamlined evidence collection and auditor coordination

## 🛠️ Technology Stack

### 🎯 Core Framework
- **⚡ Next.js 15** - React framework with App Router
- **📘 TypeScript 5** - Type-safe development
- **🎨 Tailwind CSS 4** - Utility-first CSS framework

### 🎨 UI & Animation
- **🧩 shadcn/ui** - High-quality accessible components
- **🎯 Lucide React** - Beautiful icon library
- **🌈 Framer Motion** - Production-ready animations
- **🎨 Radix UI** - Headless UI primitives

### 📊 Data & State
- **🐻 Zustand** - Lightweight state management
- **🔄 TanStack Query** - Server state management
- **✅ Zod** - TypeScript-first validation

### 🗄️ Backend & Database
- **🗄️ Prisma** - Next-generation ORM
- **🔐 NextAuth.js** - Authentication solution
- **🌐 Socket.io** - Real-time communication

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/archdtech/vsfs.git
cd vsfs

# Install dependencies
npm install

# Set up database
npm run db:push

# Start development server
npm run dev
```

### Available Scripts
```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:reset     # Reset database

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── api/               # API routes
├── components/             # React components
│   ├── landing/           # Landing page components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── WhyItWins.tsx
│   │   ├── Outcomes.tsx
│   │   ├── PilotSOW.tsx
│   │   ├── FAQ.tsx
│   │   ├── NextSteps.tsx
│   │   └── Footer.tsx
│   └── ui/                # shadcn/ui components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
│   ├── db.ts              # Database client
│   ├── utils.ts           # Helper functions
│   └── socket.ts          # Socket.io configuration
└── public/                 # Static assets
    ├── images/            # Cover images
    ├── logo.svg           # Company logo
    └── favicon.ico        # Favicon
```

## 🎨 Design System

### Color Palette
- **Primary**: #0032eb ( vibrant blue)
- **Accent**: #0052ff (brighter blue)
- **Dark Background**: #070A16 (near black)
- **Light Background**: #ffffff (white for FAQ section)
- **Text**: 
  - Primary: #ffffff (white on dark)
  - Secondary: #0f172a (dark gray on white)

### Typography
- **Headings**: Inter, font-black, responsive sizes
- **Body**: Inter, regular/medium, optimized readability
- **Accent**: Gradient text effects for key messages

### Components
- **Buttons**: Gradient backgrounds with hover animations
- **Cards**: Subtle borders with backdrop blur effects
- **Navigation**: Sticky header with smooth scroll
- **Forms**: shadcn/ui components with validation

## 🌐 Live Demo

View the live application: [https://archdtech.github.io/vsfs](https://archdtech.github.io/vsfs)

## 🚀 Deployment

### GitHub Pages
This project is configured for automatic deployment to GitHub Pages:

1. **Build Process**: 
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   - Built files are automatically deployed to the `gh-pages` branch
   - Custom domain configuration available
   - HTTPS enabled by default

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

### Phase 1: MVP Enhancement (Current)
- [x] Complete landing page with all sections
- [x] Responsive design optimization
- [x] Calendly integration
- [x] GitHub Pages deployment
- [ ] Performance optimization
- [ ] SEO improvements

### Phase 2: Backend Integration
- [ ] User authentication system
- [ ] Dashboard development
- [ ] Portfolio management features
- [ ] Real-time analytics
- [ ] API integrations

### Phase 3: Advanced Features
- [ ] Automated compliance scanning
- [ ] Integration with security tools
- [ ] Advanced reporting features
- [ ] Mobile app development
- [ ] Enterprise features

## 📞 Contact

**AskDegree Team**
- 📧 hello@askdegree.com
- 🌐 [https://askdegree.com](https://askdegree.com)
- 📅 [Schedule a Consultation](https://calendly.com/d/crjf-kqg-sp2/discovery-call)

---

Built with ❤️ for venture studios and funds. Supercharged by modern web technology 🚀