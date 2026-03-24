# Modern Portfolio Website

A fully responsive, modern portfolio website built with React, Tailwind CSS, and AOS (Animate On Scroll).

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and visually stunning
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🌓 **Dark Mode** - Toggle between light and dark themes
- ✨ **Smooth Animations** - Beautiful scroll animations using AOS
- 🎯 **SEO Optimized** - Semantic HTML5 structure
- ⚡ **Fast Performance** - Optimized for speed
- 🎭 **Interactive UI** - Hover effects and micro-animations

## 📋 Sections

1. **Home** - Hero section with introduction and CTA buttons
2. **About** - Professional summary and highlights
3. **Skills** - Categorized skill set with progress indicators
4. **Projects** - Filterable project showcase with live demos
5. **Experience** - Timeline-style work experience and education
6. **Contact** - Contact form and social links

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the local URL shown in the terminal (usually `http://localhost:5173`)

## 🎨 Customization

### Update Your Information

All portfolio content is centralized in one file for easy customization:

**File:** `src/data/portfolioData.js`

#### Personal Information
```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Full Stack Web Developer",
  tagline: "Your tagline here",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  }
}
```

#### Skills
Update the skill levels (0-100) for each category:
```javascript
export const skills = {
  frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 95 },
    // Add or modify skills
  ],
  backend: [...],
  tools: [...]
}
```

#### Projects
Add your projects with images, descriptions, and links:
```javascript
export const projects = [
  {
    title: 'Project Name',
    category: 'Full Stack', // or 'Frontend', 'Mobile'
    description: 'Project description',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://your-live-demo.com',
    githubLink: 'https://github.com/yourusername/project',
    gradient: 'from-blue-500 to-cyan-500'
  }
]
```

#### Experience & Education
```javascript
export const experience = [
  {
    type: 'work', // or 'education'
    title: 'Job Title',
    company: 'Company Name',
    location: 'City, State',
    period: '2022 - Present',
    description: 'Job description',
    achievements: [
      'Achievement 1',
      'Achievement 2'
    ]
  }
]
```

### Color Customization

The portfolio uses a gradient color scheme. To change colors, edit `src/index.css`:

```css
:root {
    --bg-color: #ffffff;
    --text-color: #1f2937;
    /* Add your custom colors */
}

[data-theme="dark"] {
    --bg-color: #0f172a;
    --text-color: #f1f5f9;
    /* Dark mode colors */
}
```

### Adding Project Images

You can use:
1. **Unsplash URLs** (as shown in examples)
2. **Local images** - Place in `public/` folder and reference as `/image.jpg`
3. **Your own hosted images**

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **AOS** - Scroll animations
- **Lucide React** - Icons
- **Material-UI** - Theme switcher component

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment.

## 🚀 Deployment

You can deploy this portfolio to:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use GitHub Actions
- **Any static hosting service**

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Tips

1. **Images**: Use high-quality images for best results
2. **Content**: Keep descriptions concise and impactful
3. **Links**: Update all social and project links before deployment
4. **Testing**: Test on multiple devices before going live
5. **SEO**: Update the `index.html` title and meta tags

## 📞 Support

If you encounter any issues, check:
1. Node.js version (should be v14+)
2. All dependencies are installed
3. No console errors in browser dev tools

---

**Made with ❤️ using React and Tailwind CSS**
