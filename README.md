# Kento Yokozuka - Portfolio

A modern, bilingual (Japanese/English) portfolio website showcasing UI/UX design and software engineering projects. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### Design & User Experience
- **Bilingual Support**: Japanese and English language switching
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Dark Theme**: Professional dark color scheme with gradient accents

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Image optimization, lazy loading, and efficient animations
- **SEO Ready**: Meta tags, structured data, and semantic HTML

### Content Sections
- **Hero Section**: Animated backgrounds and compelling introductions
- **Skills & Expertise**: Technical skills with proficiency levels
- **Project Showcase**: Detailed case studies with before/after comparisons
- **Experience Timeline**: Professional background and achievements
- **Contact Information**: Multiple ways to connect

## 🚀 Projects Showcased

### UI/UX Design Projects
- **Achievy**: Task management app for ADHD students (Design Sprint methodology)
- **Six Acres Restaurant**: Complete website redesign with user research

### Software Engineering Projects
- **JMA Systems**: AWS-based data analytics platform
- **TechDoctor**: Healthcare platform with FastAPI
- **E-commerce Platform**: Full-stack React application

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library (planned)

### Backend & Infrastructure
- **AWS**: Cloud infrastructure and services
- **Python**: Backend development and data processing
- **FastAPI**: Modern Python web framework
- **PostgreSQL/MySQL**: Database management

### Development Tools
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Git**: Version control
- **Vercel**: Deployment platform

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── contact/           # Contact page
│   │   ├── software/          # Software projects
│   │   │   ├── jma-systems/   # JMA Systems case study
│   │   │   ├── techdoctor/    # TechDoctor case study
│   │   │   └── ecommerce/     # E-commerce case study
│   │   └── uiux/              # UI/UX projects
│   │       ├── achievy/       # Achievy case study
│   │       └── six-acres/     # Six Acres case study
│   ├── components/            # Reusable components
│   │   ├── software/          # Software-specific components
│   │   └── uiux/              # UI/UX-specific components
│   ├── data/                  # Content and configuration
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
│   ├── projects/              # Project images and assets
│   └── skills/                # Technology icons
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#3B82F6 to #06B6D4)
- **Secondary**: Purple accents (#8B5CF6)
- **Background**: Dark slate (#0F172A to #1E293B)
- **Text**: White and gray variations

### Typography
- **Headings**: Custom font with gradient text effects
- **Body**: Clean, readable sans-serif
- **Code**: Monospace for technical content

### Animations
- **Page Transitions**: Smooth fade-in effects
- **Hover States**: Scale and color transitions
- **Loading States**: Skeleton screens and spinners
- **Background Effects**: Floating particles and gradients

## 📱 Responsive Design

The portfolio is fully responsive across all devices:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌐 Internationalization

- **Languages**: Japanese (ja) and English (en)
- **Language Switching**: Persistent across sessions
- **Content**: All text content is localized
- **Direction**: Left-to-right (LTR) support

## 🔧 Customization

### Adding New Projects
1. Create a new directory in `src/app/software/` or `src/app/uiux/`
2. Add project data to `src/data/softwareData.ts`
3. Create project-specific components
4. Update navigation links

### Modifying Styles
- **Global Styles**: `src/app/globals.css`
- **Component Styles**: Tailwind CSS classes
- **Custom Animations**: CSS keyframes in component files

### Content Management
- **Text Content**: Edit language files in components
- **Images**: Add to `public/projects/` directory
- **Icons**: Use Iconify library or custom SVGs

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **Self-hosted**: Docker or traditional hosting

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: kento.yokozuka@gmail.com
- **GitHub**: [@kyokozuka](https://github.com/kyokozuka)
- **LinkedIn**: [Kento Yokozuka](https://linkedin.com/in/kento-yokozuka-26a1731b4)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
