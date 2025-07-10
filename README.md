# Crafted By - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. Features a terminal-inspired design with dark/light theme support and showcases projects, photography, and professional information.

## ⚡ Built with [Bolt.new](https://bolt.new/) & [Cursor AI](https://cursor.sh/)

This project was created using [Bolt.new](https://bolt.new/) - an AI-powered platform for building stunning apps & websites by chatting with AI, and developed with [Cursor AI](https://cursor.sh/) - the AI-first code editor.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 13, TypeScript, and Tailwind CSS
- **Terminal-Inspired Design**: Unique CLI-style interface with typing animations
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Photo Gallery**: Masonry layout with lightbox functionality
- **Project Showcase**: Detailed project cards with GitHub integration
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Styling & UI
- **shadcn/ui** - Re-usable component library
- **next-themes** - Theme management
- **tailwindcss-animate** - Animation utilities
- **JetBrains Mono** - Monospace font for terminal aesthetic

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
craftedby.dev/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── photos/            # Photo gallery
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Navigation component
│   └── theme-provider.tsx # Theme provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Custom HSL-based color system
- **Background**: Dark/light theme support
- **Accent**: Muted colors for secondary elements
- **Border**: Subtle borders for component separation

### Typography
- **Font**: JetBrains Mono (monospace)
- **Hierarchy**: Clear heading and text styles
- **Terminal Aesthetic**: Command-line inspired design

### Components
- **Cards**: Project and content containers
- **Buttons**: Multiple variants (outline, ghost, etc.)
- **Navigation**: Responsive with mobile menu
- **Lightbox**: Photo gallery modal

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imansprn/craftedby.dev.git
   cd craftedby.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Home (`/`)
- Terminal-style welcome message with typing animation
- Quick navigation links
- System information display
- Professional introduction

### About (`/about`)
- Personal background and skills
- Tech stack visualization
- Current focus areas
- Social media links

### Projects (`/projects`)
- Project showcase with detailed cards
- GitHub integration
- Technology tags
- Live demo links
- Repository statistics

### Photos (`/photos`)
- Masonry layout photo gallery
- Lightbox functionality
- Photo metadata (camera, caption)
- Responsive grid system

### Contact (`/contact`)
- Contact information
- Social media links
- Availability status
- Preferred contact methods

## 🎯 Key Features

### Terminal-Inspired Interface
- Command-line style navigation
- Typing animations
- Monospace typography
- Terminal color scheme

### Theme System
- Dark/light mode toggle
- System preference detection
- Smooth transitions
- Persistent theme storage

### Responsive Design
- Mobile-first approach
- Responsive navigation
- Adaptive layouts
- Touch-friendly interactions

### Performance
- Next.js optimizations
- Image optimization
- Code splitting
- Fast loading times

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://craftedby.dev
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Animation utilities
- Typography settings
- Component-specific styles

### Next.js Configuration
- Image optimization disabled for external domains
- ESLint configuration
- Custom build settings

## 📸 Photo Gallery

The photo gallery features:
- **Masonry Layout**: Responsive grid with varying image sizes
- **Lightbox**: Full-screen image viewing
- **Navigation**: Previous/next image controls
- **Metadata**: Camera information and captions
- **Optimization**: Responsive image loading

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Iman**
- Email: iman@craftedby.dev
- GitHub: [@imansprn](https://github.com/imansprn)
- Instagram: [@imansprn](https://instagram.com/imansprn)
- LinkedIn: [@imansprn](https://linkedin.com/in/imansprn)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Next.js](https://nextjs.org/) for the React framework
- [Lucide](https://lucide.dev/) for the icon library

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 