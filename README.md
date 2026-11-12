# 🎯 Jobmate - AI Career Coach

Jobmate is a comprehensive AI-powered career development platform built with **Next.js 15**, **Prisma**, and **Clerk** authentication. It helps job seekers advance their careers with personalized guidance, interview preparation, resume optimization, and industry insights - all powered by Google's Gemini AI.

## ✨ Features

### 🤖 **AI-Powered Career Guidance**
- Personalized career advice and insights
- Industry-specific recommendations
- Smart skill development suggestions

### 📝 **Resume Builder & Optimization**
- ATS-optimized resume generation
- AI-powered content suggestions
- Real-time feedback and scoring
- Professional formatting with markdown support

### 💼 **AI Cover Letter Generator**
- Tailored cover letters for specific job applications
- Company and role-specific customization
- Professional business letter formatting

### 🎤 **Interview Preparation**
- Industry-specific mock interviews
- Technical and behavioral questions
- Instant AI feedback and improvement tips
- Performance tracking and analytics

### 📊 **Industry Insights Dashboard**
- Real-time salary data and market trends
- Growth rate analysis by industry
- In-demand skills tracking
- Market outlook predictions

### 🎯 **Smart Onboarding**
- Skill assessment and profiling
- Industry selection and expertise mapping
- Personalized career path recommendations

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** with Turbopack for lightning-fast development
- **React 19** with modern hooks and concurrent features
- **Tailwind CSS** for responsive styling
- **shadcn/ui** components with Radix UI primitives
- **Lucide React** icons
- **React Hook Form** with Zod validation

### **Backend & Database**
- **Prisma ORM** with PostgreSQL
- **Clerk Authentication** with social logins
- **Google Gemini AI** for content generation
- **Inngest** for background job processing

### **Additional Tools**
- **html2pdf.js** for PDF generation
- **React Markdown** for content rendering
- **Recharts** for analytics visualization
- **Date-fns** for date manipulation
- **Sonner** for beautiful notifications

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Google Gemini API key
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Antrikshgwal/Jobmate.git
   cd Jobmate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/jobmate

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key

   # Inngest (optional for local development; required for a hosted Inngest app)
   # INNGEST_EVENT_KEY=your_inngest_event_key
   # INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

   You can copy [`.env.example`](./.env.example) to `.env.local` and replace
   the placeholders with your own values. Never commit `.env.local` or API keys.

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Application Structure

### **Core Pages**
- **Landing Page** (`/`) - Marketing site with features and testimonials
- **Dashboard** (`/dashboard`) - Main user hub with industry insights
- **Onboarding** (`/onboarding`) - User profile setup and skill assessment
- **Resume Builder** (`/resume`) - AI-powered resume creation and optimization
- **Cover Letter Generator** (`/ai-cover-letter`) - Personalized cover letter creation
- **Interview Prep** (`/interview`) - Mock interviews and performance tracking

### **Database Schema**
- **Users** - Profile, skills, experience, and industry data
- **Resumes** - Content, ATS scores, and feedback
- **Cover Letters** - Job-specific applications and templates
- **Assessments** - Interview performance and improvement tracking
- **Industry Insights** - Market data, trends, and salary information

## 🔄 Background Jobs

The application uses **Inngest** for automated background processing:

- **Industry Insights Generation** - Weekly updates of market trends and salary data
- **AI Content Processing** - Asynchronous resume and cover letter generation
- **Performance Analytics** - Interview score calculations and insights

## 🎨 UI Components

Built with **shadcn/ui** for consistent, accessible design:

- Form components with validation
- Data visualization charts
- Interactive dialogs and modals
- Progress indicators and loading states
- Responsive navigation and layouts

## 📊 Key Features Detail

### **AI Resume Builder**
- Markdown-based content editing
- ATS optimization scoring
- Industry-specific templates
- Real-time feedback and suggestions

### **Interview Simulator**
- Role-specific question generation
- Multiple choice and behavioral questions
- Performance tracking with charts
- Improvement recommendations

### **Industry Dashboard**
- Salary range analysis
- Growth rate projections
- Top skills identification
- Market outlook predictions

## 🚀 Deployment

### **Environment Setup**
1. Set up a PostgreSQL database (Neon, Supabase, or similar)
2. Configure Clerk for production authentication
3. Obtain Google Gemini API access
4. Set up Inngest for background jobs

### **Build and Deploy**
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Antriksh Gwal**
- GitHub: [@Antrikshgwal](https://github.com/Antrikshgwal)

## 🙏 Acknowledgments

- **Google Gemini AI** for powerful content generation
- **Clerk** for seamless authentication
- **Vercel** for excellent Next.js hosting
- **shadcn** for beautiful UI components

---

*Transform your career journey with AI-powered insights and personalized guidance. Start building your professional future today!* 🚀
