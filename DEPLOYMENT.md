# GitHub Pages Deployment Guide

This guide will help you deploy your Chrono e-commerce website to GitHub Pages with automatic updates.

## Prerequisites

✅ GitHub repository: `https://github.com/maazshqh/E-commerce-project-chrono.git`
✅ GitHub Actions workflow configured
✅ Vite config updated with base path

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/maazshqh/E-commerce-project-chrono
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. Push Your Code

```bash
# Make sure you're in the project directory
cd "c:\Users\MAAZ\Desktop\college project\linea-chic-header-main"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Configure GitHub Pages deployment"

# Add remote repository
git remote add origin https://github.com/maazshqh/E-commerce-project-chrono.git

# Push to main branch
git push -u origin main
```

### 3. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at:
   
   **🌐 https://maazshqh.github.io/E-commerce-project-chrono/**

## Automatic Updates

Every time you push changes to the `main` branch, your site will automatically rebuild and deploy:

```bash
# Make your changes to the code
# ...

# Stage changes
git add .

# Commit with a descriptive message
git commit -m "Your commit message"

# Push to trigger automatic deployment
git push origin main
```

## File Configuration Summary

### ✅ Files Created/Modified:

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for deployment
2. **`vite.config.ts`** - Added `base: '/E-commerce-project-chrono/'` for proper routing
3. **`README.md`** - Updated with deployment instructions and live demo link

### Configuration Details:

**Vite Config (`vite.config.ts`):**
```typescript
export default defineConfig(({ mode }) => ({
  base: '/E-commerce-project-chrono/', // ← Important for GitHub Pages
  // ... rest of config
}));
```

**GitHub Actions Workflow (`.github/workflows/deploy.yml`):**
- Triggers on push to `main` branch
- Builds the project with `npm run build`
- Deploys to GitHub Pages automatically
- Can also be triggered manually from Actions tab

## Troubleshooting

### Issue: 404 Error on Page Load

**Solution:** Make sure `base` in `vite.config.ts` matches your repository name exactly:
```typescript
base: '/E-commerce-project-chrono/'
```

### Issue: Workflow Failed

**Solution:** 
1. Check Actions tab for error details
2. Ensure all dependencies in `package.json` are correct
3. Try running `npm run build` locally first
4. Check that node version in workflow matches your local version

### Issue: Images Not Loading

**Solution:** All image paths are relative and should work automatically. If issues persist:
- Verify images are in `src/assets/` or `public/` folder
- Check import statements in components
- Clear browser cache

### Issue: Routes Not Working (404 on Refresh)

**Solution:** GitHub Pages doesn't support client-side routing by default. The workflow is configured to handle this, but if you still have issues:
- Ensure you're using HashRouter instead of BrowserRouter, or
- The build process creates proper routing configuration

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The dist folder contains your built site
# You can manually upload this to any hosting service
```

## Repository Settings

**Important Settings Already Configured:**

1. ✅ Base path in vite.config.ts
2. ✅ GitHub Actions workflow
3. ✅ Permissions for workflow (write access to pages)
4. ✅ Build command: `npm run build`
5. ✅ Output directory: `dist`

## Verifying Deployment

Once deployed, verify everything works:

1. ✅ Homepage loads: https://maazshqh.github.io/E-commerce-project-chrono/
2. ✅ Navigation works between pages
3. ✅ Images and assets load properly
4. ✅ Shopping cart and wishlist functionality works
5. ✅ All links work correctly

## Next Steps

1. Push your code to trigger the first deployment
2. Wait 2-3 minutes for build to complete
3. Visit your live site
4. Make changes and push to auto-deploy updates!

## Support

If you encounter any issues:
- Check the Actions tab for build logs
- Review this guide again
- Ensure all file paths are correct
- Verify GitHub Pages is enabled in repository settings

---

🎉 Your site is now configured for automatic deployment!

Every push to `main` = Automatic update to your live site!
