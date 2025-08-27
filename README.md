# NexusConnect - Portfolio Website

A modern, responsive portfolio website for Nexus, India's first indigenous hybrid social networking platform.

## 🚀 Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/nexusconnect)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🏗️ Project Structure

```
NexusConnect/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities and configurations
│   └── index.html         # HTML entry point
├── server/                # Backend Express.js server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Database configuration
├── shared/                # Shared types and schemas
└── attached_assets/       # Static assets
```

## 🚀 Deployment

### Frontend Deployment (Netlify)

1. **Fork/Clone this repository**
   ```bash
   git clone https://github.com/yourusername/nexusconnect.git
   cd nexusconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `dist/public`
   - Deploy!

### Backend Deployment

The backend needs to be deployed separately since Netlify only supports static sites. Recommended platforms:

#### Option 1: Vercel (Recommended)
1. Create a `vercel.json` in the root:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server/index.ts",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "server/index.ts"
       }
     ]
   }
   ```

2. Deploy to Vercel:
   ```bash
   npm i -g vercel
   vercel
   ```

#### Option 2: Railway
1. Connect your repository to Railway
2. Set the root directory to the project root
3. Set the start command to: `npm start`

#### Option 3: Render
1. Create a new Web Service on Render
2. Connect your repository
3. Set build command: `npm run build`
4. Set start command: `npm start`

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=your_neon_database_url

# Email (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_email@domain.com

# Session
SESSION_SECRET=your_session_secret

# Frontend API URL (for production)
VITE_API_URL=https://your-backend-url.vercel.app
```

## 🛠️ Development

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check
- `npm run db:push` - Push database schema

## 🎨 Features

- **Modern Design**: Beautiful, responsive design with animations
- **Performance**: Optimized with Vite and React Query
- **SEO Friendly**: Meta tags and structured data
- **Contact Form**: Functional contact form with email integration
- **Blog**: Blog section with multiple posts
- **Animations**: Smooth scroll animations and transitions

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Query
- Wouter (Router)

### Backend
- Node.js
- Express.js
- TypeScript
- Drizzle ORM
- Neon Database
- SendGrid (Email)

### UI Components
- Radix UI
- Lucide React Icons
- Custom components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🚀 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the [Issues](https://github.com/yourusername/nexusconnect/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

Built with ❤️ for Nexus
