# Chrono - Premium Smartwatch E-Commerce Website

A modern, feature-rich e-commerce platform for premium smartwatches built with React, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [https://maazshqh.github.io/E-commerce-project-chrono/](https://maazshqh.github.io/E-commerce-project-chrono/)

## Features

- 🎨 Modern UI/UX with smooth animations and 3D effects
- 🛒 Full shopping cart and wishlist functionality
- 📱 Fully responsive design for all devices
- ⚡ Fast performance with Vite
- 🎭 Creative entrance animations and interactions
- 📦 Product browsing and filtering
- 💳 Checkout flow
- 📄 Legal pages (Privacy Policy, Terms, Refund, Warranty, Shipping)
- 🎯 Animated preloader
- 🌙 Dark mode ready

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router v6** - Navigation
- **Lucide React** - Icons
- **Shadcn/ui** - UI components

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/maazshqh/E-commerce-project-chrono.git

# Navigate to project directory
cd E-commerce-project-chrono

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch automatically triggers a deployment:

1. Push your changes to the main branch
2. GitHub Actions builds the project
3. Deploys to GitHub Pages automatically
4. Live site updates within 2-3 minutes

### Manual Deployment

You can also manually trigger deployment from the GitHub Actions tab.

## What technologies are used for this project?

This project is built with:

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router v6** - Client-side routing
- **Shadcn/ui** - UI component library
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header/         # Navigation and header
│   ├── footer/         # Footer component
│   ├── product/        # Product-related components
│   ├── layout/         # Layout components
│   └── ui/             # Shadcn UI components
├── pages/              # Page components
├── context/            # React Context (Cart, Wishlist)
├── data/               # Static data (products)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## Key Features

### Shopping Cart
- Add/remove items
- Update quantities
- Persistent storage (localStorage)
- Real-time price calculation

### Wishlist
- Toggle favorite products
- Persistent storage
- Quick add to cart from wishlist

### Animations
- Page transitions
- 3D entrance effects
- Hover interactions
- Spring physics
- Animated preloader

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For any queries, reach out at:
- Email: support@chrono.com
- Phone: +91 98765 43210

---

Built with ❤️ using React and TypeScript
