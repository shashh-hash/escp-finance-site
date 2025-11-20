# 🚀 Deploy to GitHub Pages - Complete Guide

## ✅ I've Set Everything Up For You!

Your site is ready to deploy to GitHub Pages. Here's what you need to do:

---

## Step 1: Create GitHub Repository

1. Go to: **[github.com/new](https://github.com/new)**
2. Repository name: `escp-finance-site`
3. Make it **Public**
4. **DON'T** check "Initialize with README"
5. Click "Create repository"

---

## Step 2: Set Up GitHub Authentication

You need to authenticate with GitHub. Choose ONE option:

### Option A: Use Personal Access Token (Easier)

1. Go to: **[github.com/settings/tokens](https://github.com/settings/tokens)**
2. Click "Generate new token (classic)"
3. Name: "ESCP Finance Deploy"
4. Select scope: **`repo`** (full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

Then run these commands:
```bash
cd "/Users/shashank/untitled folder/escp-finance-site"
git remote add origin https://github.com/shashh-hash/escp-finance-site.git
git push -u origin main
```

When prompted:
- Username: `shashh-hash`
- Password: `<paste your token here>`

### Option B: Use SSH (More Secure, One-Time Setup)

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter for all prompts
```

2. Copy your public key:
```bash
cat ~/.ssh/id_ed25519.pub
```

3. Add to GitHub:
   - Go to: **[github.com/settings/keys](https://github.com/settings/keys)**
   - Click "New SSH key"
   - Paste the key
   - Click "Add SSH key"

4. Push your code:
```bash
cd "/Users/shashank/untitled folder/escp-finance-site"
git remote add origin git@github.com:shashh-hash/escp-finance-site.git
git push -u origin main
```

---

## Step 3: Enable GitHub Pages

1. Go to your repository: `https://github.com/shashh-hash/escp-finance-site`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. That's it! The workflow will automatically deploy

---

## Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the deployment running
3. Wait ~2 minutes for it to complete
4. Your site will be live at:
   ```
   https://shashh-hash.github.io/escp-finance-site/
   ```

---

## 🎉 Your Site Will Be Live!

Once deployed, share this URL with your friends:
```
https://shashh-hash.github.io/escp-finance-site/
```

---

## 🔄 Future Updates

Whenever you want to update your site:
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. GitHub Actions will automatically rebuild and deploy!

---

## ✨ What I've Set Up:

✅ Configured Vite for GitHub Pages (base path)
✅ Created GitHub Actions workflow (auto-deploy on push)
✅ Your code is ready to push

**Just follow Steps 1-4 above and you're done!**
