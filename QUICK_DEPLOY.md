# 🚀 Quick Deploy Checklist

## ✅ Pre-deployment Checklist

- [ ] Code is pushed to GitHub
- [ ] `netlify.toml` file exists
- [ ] `vercel.json` file exists
- [ ] `package.json` has correct build scripts
- [ ] Environment variables are ready

## 🌐 Frontend Deployment (Netlify)

### 1. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/public`
5. Click "Deploy site"

### 2. Configure Environment Variables
In Netlify dashboard → Site settings → Environment variables:
```
VITE_API_URL=https://your-backend-url.vercel.app
```

## 🔧 Backend Deployment (Vercel)

### 1. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Node.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add environment variables (see below)
6. Click "Deploy"

### 2. Configure Environment Variables
In Vercel dashboard → Project settings → Environment variables:
```
DATABASE_URL=postgresql://username:password@host:port/database
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@yourdomain.com
SESSION_SECRET=your_session_secret
NODE_ENV=production
```

## 🔗 Connect Frontend to Backend

1. Copy your Vercel backend URL
2. Update Netlify environment variable:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
3. Redeploy Netlify site

## 🧪 Test Your Deployment

- [ ] Frontend loads correctly
- [ ] All pages work
- [ ] Contact form submits
- [ ] Emails are received
- [ ] Responsive design works

## 📞 Support

If you encounter issues:
1. Check build logs in Netlify/Vercel dashboard
2. Verify environment variables are set correctly
3. Test locally first: `npm run dev`
4. Check the full `DEPLOYMENT.md` guide

---

**Your sites will be available at:**
- Frontend: `https://your-site-name.netlify.app`
- Backend: `https://your-project-name.vercel.app`
