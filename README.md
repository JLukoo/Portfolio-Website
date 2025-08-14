# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and TailwindCSS. Features a clean design, dark/light mode toggle, and detailed project showcases.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and TailwindCSS
- **Responsive Design**: Fully mobile-responsive with beautiful UI
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Smooth Navigation**: Sticky header with smooth scrolling navigation
- **Project Showcases**: Detailed project pages with comprehensive information
- **Contact Form**: EmailJS integration for contact form functionality
- **SEO Optimized**: Meta tags and proper semantic HTML structure

## 📁 Project Structure

```
Portfolio-Website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and TailwindCSS
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── projects/          # Dynamic project pages
│       └── [slug]/
│           └── page.tsx   # Individual project page
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── project/          # Project-specific components
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects grid
│   ├── contact.tsx       # Contact form
│   └── footer.tsx        # Footer
├── data/                 # Data files
│   └── projects.ts       # Project data and types
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── public/               # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn/UI + Radix UI
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Email**: EmailJS (optional)
- **Containerization**: Docker + Docker Compose
- **Deployment**: Ready for cloud platforms (AWS, GCP, Azure, etc.)

## 🚀 Getting Started

### Option 1: Docker (Recommended)

#### Prerequisites
- **Docker Desktop** installed on your machine
  - Download from: https://www.docker.com/products/docker-desktop/

#### Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio-Website
   ```

2. **Build and run with Docker**
   ```bash
   docker-compose up --build
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

#### Development Mode (with hot reloading)
   ```bash
   docker-compose --profile dev up --build
   ```
   Then open [http://localhost:3001](http://localhost:3001)

### Option 2: Local Development

#### Prerequisites
- Node.js 18+ 
- npm or yarn

#### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `components/hero.tsx` - Update name, description, and social links
- **About Section**: `components/about.tsx` - Update bio and skills
- **Contact Section**: `components/contact.tsx` - Update contact details
- **Footer**: `components/footer.tsx` - Update name and links

### Projects

Add new projects by editing `data/projects.ts`:

1. **Add project data** to the `projects` array
2. **Create project images** and update image URLs
3. **Update project content** with your specific details

### Styling

- **Colors**: Update CSS variables in `app/globals.css`
- **Components**: Modify TailwindCSS classes in component files
- **Theme**: Customize dark/light mode colors

## 📱 Project Page Structure

Each project page includes:

- **Hero Section**: Title, subtitle, banner image, quick info
- **Introduction**: Project motivation and goals
- **Design & Planning**: Goals, CAD renders, parts list
- **Build Process**: Timeline with images and descriptions
- **Testing & Iteration**: Videos, screenshots, problems & solutions
- **Final Results**: Images, videos, performance metrics
- **Lessons Learned**: Key takeaways from the project
- **Resources**: GitHub links, parts lists, config files

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with smooth animations
- **Responsive**: Optimized for all device sizes
- **Accessible**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized images and code splitting
- **SEO**: Meta tags, structured data, and proper headings

## 📧 EmailJS Setup (Optional)

To enable the contact form:

1. **Sign up** for EmailJS at [emailjs.com](https://www.emailjs.com/)
2. **Create a template** for your contact form
3. **Get your credentials** (Service ID, Template ID, Public Key)
4. **Update the contact form** in `components/contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to reach out!

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
