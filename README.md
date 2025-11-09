# Meuwissen Machinabouw

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-97.7%25-blue)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

> **Note**: This repository was archived on March 12, 2025 and is now read-only.

A modern, responsive website built for Meuwissen Machinebouw, showcasing their machinery manufacturing services and expertise in the Netherlands.

🌐 **Live Site**: [meuwissenmachinabouw.vercel.app](https://meuwissenmachinabouw.vercel.app)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## 🏭 About

Meuwissen Machinebouw is a specialized machinery manufacturing company based in Sint Odiliënberg, Limburg, Netherlands. This website serves as their digital presence, showcasing their capabilities in custom machine construction and engineering solutions.

The company, established in 1995, specializes in:
- Custom machinery design and manufacturing
- Production machines and systems
- Industrial automation solutions
- Specialized equipment for various industries

## ✨ Features

- **Modern Web Architecture**: Built with Next.js 15+ for optimal performance and SEO
- **Type-Safe Development**: Comprehensive TypeScript implementation (97.7%)
- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **Optimized Performance**: Leveraging Next.js features for fast page loads and excellent UX
- **Font Optimization**: Automatic optimization using `next/font` with Geist font family
- **Production Ready**: Deployed on Vercel with automatic CI/CD

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) 15+
- **Language**: TypeScript (97.7%)
- **Styling**: CSS (2.1%)
- **Font**: Geist (via `next/font`)

### Development Tools
- **Package Manager**: npm/yarn/pnpm/bun
- **Code Quality**: ESLint, TypeScript strict mode
- **Build Tool**: Next.js built-in compiler

### Deployment
- **Platform**: [Vercel](https://vercel.com)
- **Auto-deployment**: Connected to GitHub repository
- **URL**: meuwissenmachinabouw.vercel.app

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
- Node.js 18+ recommended
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raeveira/meuwissenmachinabouw.git
cd meuwissenmachinabouw
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
meuwissenmachinabouw/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── ...                # Additional routes and pages
├── public/                # Static assets
├── styles/                # CSS stylesheets
├── components/            # React components (if applicable)
├── .gitignore            # Git ignore rules
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Code Structure

This project uses:
- **App Router**: Next.js 15+ App Router for file-based routing
- **Server Components**: Leveraging React Server Components by default
- **Font Optimization**: `next/font` for automatic font optimization
- **TypeScript**: Strict type checking for improved code quality

### Making Changes

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly in development mode
4. Submit a pull request (Note: repository is now archived)

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel automatically detects Next.js and configures the build
4. Your site is deployed instantly with automatic HTTPS

The production site is available at: [meuwissenmachinabouw.vercel.app](https://meuwissenmachinabouw.vercel.app)

### Manual Deployment

For other platforms:

```bash
# Build the production bundle
npm run build

# Start the production server
npm run start
```

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript handbook
- [Vercel Platform](https://vercel.com/docs) - Deployment and hosting documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏢 Company Information

**Meuwissen Machinebouw B.V.**
- **Address**: Gulikerweg 1, 6077 PB Sint Odiliënberg, Netherlands
- **Website**: [www.meuwissenmachinebouw.nl](http://www.meuwissenmachinebouw.nl)
- **Founded**: 1995
- **KVK Number**: 50607510

## ⚠️ Archive Notice

**This repository was archived on March 12, 2025 and is now read-only.**

No further updates or pull requests will be accepted. For inquiries about the project or company, please visit the company website.

## 👨‍💻 Author

**raeveira**
- GitHub: [@raeveira](https://github.com/raeveira)

---

Built with ❤️ using Next.js and deployed on Vercel
