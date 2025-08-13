# Professional Website Project

A modern, responsive website built with Next.js 13+, TypeScript, and Tailwind CSS. This project provides a complete business website solution with multiple pages and components.

## 🚀 Features

- **Modern Stack**: Built with Next.js 13+ App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **SEO Optimized**: Built-in SEO optimizations with proper meta tags
- **Performance**: Optimized for speed and user experience
- **Modular Components**: Reusable and maintainable component architecture
- **Professional Design**: Clean, modern design suitable for businesses

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading component
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI components
│   │   └── button.tsx    # Button component
│   ├── CTASection.tsx    # Call-to-action section
│   ├── FeaturesSection.tsx # Features section
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header/Navigation
│   ├── HeroSection.tsx   # Hero section
│   ├── StatsSection.tsx  # Statistics section
│   └── TestimonialsSection.tsx # Testimonials
└── lib/
    └── utils.ts          # Utility functions
```

## 🛠️ Technologies Used

- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants

## 📄 Pages

1. **Homepage** (`/`) - Hero section, features, stats, testimonials, and CTA
2. **About** (`/about`) - Company story, values, and team information
3. **Services** (`/services`) - Service offerings with detailed descriptions
4. **Contact** (`/contact`) - Contact form and business information

## 🎨 Components

### Layout Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Company information and links

### Content Sections
- **HeroSection** - Main banner with CTA buttons
- **FeaturesSection** - Key features or benefits
- **StatsSection** - Company statistics and achievements
- **TestimonialsSection** - Customer reviews and testimonials
- **CTASection** - Call-to-action prompts

### UI Components
- **Button** - Reusable button with variants

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Customization

### Colors
Update the color scheme in `src/app/globals.css` by modifying the CSS variables:

```css
:root {
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  /* ... other colors */
}
```

### Content
- Update company information in components
- Replace placeholder text with actual content
- Add real images to the `public/` directory
- Modify navigation links in `Header.tsx`

### Styling
- Customize Tailwind configuration in `tailwind.config.ts`
- Add custom styles in `globals.css`
- Modify component styles using Tailwind classes

## 🔧 Build and Deploy

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## 📈 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting with Next.js App Router
- CSS optimization with Tailwind CSS
- Font optimization with next/font

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support, email info@company.com or join our Slack channel.

---

**Note**: This is a template website. Please replace all placeholder content with your actual business information, images, and branding before deploying to production.
