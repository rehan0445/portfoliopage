# Deployment Guide

This guide will help you deploy NexusConnect to production.

## 🚀 Frontend Deployment (Netlify)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Ensure these files are in your repository:**
   - `netlify.toml` (already created)
   - `package.json`
   - `vite.config.ts`
   - `tailwind.config.ts`
   - `tsconfig.json`

### Step 2: Deploy to Netlify

#### Option A: Deploy via Netlify UI

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/public`
   - **Node version:** `18`
5. Click "Deploy site"

#### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Step 3: Configure Environment Variables (if needed)

In your Netlify dashboard:
1. Go to Site settings > Environment variables
2. Add any frontend environment variables:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

## 🔧 Backend Deployment (Vercel)

### Step 1: Prepare Backend

1. **Ensure you have a `vercel.json` file** (already created)
2. **Set up environment variables** (see Environment Variables section below)

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel UI

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Node.js
   - **Root Directory:** `./` (root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Add environment variables (see below)
6. Click "Deploy"

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 🔑 Environment Variables

### Backend Environment Variables (Vercel)

In your Vercel dashboard, add these environment variables:

```
DATABASE_URL=postgresql://username:password@host:port/database
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=noreply@yourdomain.com
SESSION_SECRET=your_session_secret_here
NODE_ENV=production
```

### Frontend Environment Variables (Netlify)

In your Netlify dashboard, add:

```
VITE_API_URL=https://your-backend-url.vercel.app
```

## 🗄️ Database Setup

### Option 1: Neon Database (Recommended)

1. Go to [neon.tech](https://neon.tech) and create an account
2. Create a new project
3. Copy the connection string
4. Add it to your environment variables as `DATABASE_URL`

### Option 2: Supabase

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Add it to your environment variables

## 📧 Email Setup (SendGrid)

1. Go to [sendgrid.com](https://sendgrid.com) and create an account
2. Create an API key
3. Add the API key to your environment variables as `SENDGRID_API_KEY`
4. Set up domain authentication (recommended)

## 🔗 Connecting Frontend to Backend

After deploying both frontend and backend:

1. **Update your frontend API URL** in Netlify environment variables:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

2. **Update your contact form** to use the correct API URL:
   ```typescript
   // In client/src/pages/Contact.tsx
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
     // ... rest of the code
   });
   ```

## 🧪 Testing Your Deployment

1. **Test the frontend:**
   - Visit your Netlify URL
   - Check all pages load correctly
   - Test responsive design

2. **Test the backend:**
   - Visit `https://your-backend-url.vercel.app/api/health` (if you have a health endpoint)
   - Test the contact form

3. **Test the full flow:**
   - Submit a contact form
   - Check if you receive the email

## 🚨 Troubleshooting

### Common Issues

1. **Build fails on Netlify:**
   - Check Node.js version (should be 18+)
   - Ensure all dependencies are in `package.json`
   - Check build logs for specific errors
   - If you see dependency conflicts, the `netlify.toml` already includes `--legacy-peer-deps` flag

2. **API calls fail:**
   - Verify the backend URL is correct
   - Check CORS settings in your backend
   - Ensure environment variables are set

3. **Database connection fails:**
   - Verify `DATABASE_URL` is correct
   - Check if your database allows external connections
   - Ensure the database is running

4. **Email not sending:**
   - Verify `SENDGRID_API_KEY` is correct
   - Check SendGrid dashboard for any issues
   - Ensure `FROM_EMAIL` is verified in SendGrid

### Getting Help

1. Check the build logs in Netlify/Vercel dashboard
2. Check the function logs in Vercel dashboard
3. Test locally first: `npm run dev`
4. Check the README.md for more information

## 🎉 Success!

Once everything is working:
1. Your frontend will be available at: `https://your-site-name.netlify.app`
2. Your backend will be available at: `https://your-project-name.vercel.app`
3. The contact form will send emails via SendGrid
4. All data will be stored in your database

## 🔄 Continuous Deployment

Both Netlify and Vercel support automatic deployments:
- Every push to your main branch will trigger a new deployment
- You can set up preview deployments for pull requests
- You can rollback to previous deployments if needed
