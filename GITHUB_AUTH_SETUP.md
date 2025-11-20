# GitHub Authentication Setup

## Quick Fix: Use SSH Instead of HTTPS

### Step 1: Check if you have SSH keys
```bash
ls -al ~/.ssh
```

### Step 2: If no SSH keys, create one
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter for all prompts (use default location)
```

### Step 3: Copy your public key
```bash
cat ~/.ssh/id_ed25519.pub
```

### Step 4: Add to GitHub
1. Go to: https://github.com/settings/keys
2. Click "New SSH key"
3. Paste the key from step 3
4. Click "Add SSH key"

### Step 5: Change your remote URL to SSH
```bash
cd "/Users/shashank/untitled folder/escp-finance-site"
git remote set-url origin git@github.com:shashh-hash/escp-finance-site.git
```

### Step 6: Push!
```bash
git push -u origin main
```

---

## Alternative: Use Personal Access Token (PAT)

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "ESCP Finance Deploy"
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

Then use it as password when pushing:
```bash
git push -u origin main
# Username: shashh-hash
# Password: <paste your token here>
```

---

**My Recommendation**: Just use Netlify Drop for now - it's instant and you can always set up GitHub later!
