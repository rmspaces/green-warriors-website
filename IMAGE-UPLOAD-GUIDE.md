# 📸 Image Upload Guide

Your website has **3 placeholder boxes** where you should upload your own photos. This guide shows you exactly where to add them and what photos work best.

---

## 🖼️ Images to Upload

### 1️⃣ Hero Section Image (Top of page)
**Location:** `src/app/components/Hero.tsx`

**Best photo:**
- Green Warriors in training or graduation ceremony
- Group photo of participants
- Inspiring action shot of program in progress
- Happy faces showing hope and opportunity

**Recommended size:** 1080 x 1080 pixels (square)

**How to upload:**
1. Save your photo to `/public/images/` folder (create this folder if it doesn't exist)
2. Name it: `hero-image.jpg`
3. In `Hero.tsx`, replace the placeholder `div` with:
```tsx
<img
  src="/images/hero-image.jpg"
  alt="Green Warriors community"
  className="w-full h-full object-cover"
/>
```

---

### 2️⃣ About Section Image
**Location:** `src/app/components/AboutSection.tsx`

**Best photo:**
- Training session in action
- Classroom or workshop setting
- Participants learning hospitality skills
- Sustainability training in progress

**Recommended size:** 1920 x 1080 pixels (landscape)

**How to upload:**
1. Save to `/public/images/about-section.jpg`
2. Replace the placeholder `div` in `AboutSection.tsx` with:
```tsx
<img
  src="/images/about-section.jpg"
  alt="Training in action"
  className="rounded-2xl shadow-xl w-full"
/>
```

---

### 3️⃣ Impact Section Image
**Location:** `src/app/components/ImpactSection.tsx`

**Best photo:**
- Filipino family together
- Graduate with their family
- Community gathering
- Before/after style photo showing transformation
- Green Warrior at work supporting their family

**Recommended size:** 1920 x 1080 pixels (landscape)

**How to upload:**
1. Save to `/public/images/impact-section.jpg`
2. Replace the placeholder `div` in `ImpactSection.tsx` with:
```tsx
<img
  src="/images/impact-section.jpg"
  alt="Community impact"
  className="rounded-2xl shadow-xl w-full"
/>
```

---

## 📐 Quick Photo Specs

| Section | Size | Ratio | Best Subject |
|---------|------|-------|--------------|
| Hero | 1080x1080px | Square | Group photo, graduation |
| About | 1920x1080px | Landscape | Training session |
| Impact | 1920x1080px | Landscape | Family, community |

---

## 🎨 Photo Tips

### ✅ DO:
- Use high-quality photos (not blurry)
- Show authentic moments from your program
- Include people's faces (with permission!)
- Use bright, well-lit photos
- Show diversity of participants
- Capture emotion and hope

### ❌ DON'T:
- Use stock photos (people can tell!)
- Use dark or poorly lit images
- Include copyrighted images
- Use photos without permission
- Show sad or depressing images

---

## 🔧 Step-by-Step: Uploading Photos

### Method 1: Using Visual Studio Code (or any code editor)

1. **Create images folder:**
   - In `/public/`, create a new folder called `images`
   
2. **Add your photos:**
   - Drag and drop your 3 photos into `/public/images/`
   - Rename them:
     - `hero-image.jpg`
     - `about-section.jpg`
     - `impact-section.jpg`

3. **Update the code:**
   - Open each component file (Hero.tsx, AboutSection.tsx, ImpactSection.tsx)
   - Find the placeholder `div` (has gray border with dashed lines)
   - Replace entire `div` with the `<img>` tag shown above

4. **Save and test:**
   - Save all files
   - Run `npm run dev`
   - Check if images appear correctly

### Method 2: After Deployment (Advanced)

If already deployed to Vercel:
1. Upload images to your GitHub repository in `/public/images/`
2. Update the component files with `<img>` tags
3. Commit and push changes
4. Vercel auto-deploys (2 minutes)

---

## 📱 Optimizing Photos Before Upload

**Free tools to resize/compress:**
- **TinyPNG** (tinypng.com) - Compress without losing quality
- **Squoosh** (squoosh.app) - Resize and compress
- **Canva** (canva.com) - Resize and edit

**Steps:**
1. Upload photo to TinyPNG
2. Download compressed version
3. Use Squoosh to resize to recommended dimensions
4. Save and upload to website

---

## 🎯 Example: Complete Hero Section Code

**Before (placeholder):**
```tsx
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
  <div className="text-center p-8">
    ...placeholder content...
  </div>
</div>
```

**After (with your image):**
```tsx
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
  <img
    src="/images/hero-image.jpg"
    alt="Green Warriors in training"
    className="w-full h-full object-cover"
  />
</div>
```

---

## ❓ FAQ

**Q: Can I use PNG files instead of JPG?**
A: Yes! Just change the file extension: `hero-image.png`

**Q: My image looks stretched. What do I do?**
A: Make sure you're using the recommended dimensions. The `object-cover` class will crop it nicely.

**Q: Can I use different file names?**
A: Yes, but make sure to update the `src="/images/your-name.jpg"` path to match.

**Q: Do I need all 3 images?**
A: No, you can start with 1 and add more later. The placeholders look professional on their own.

**Q: Where can I get photos if I don't have any yet?**
A: Keep the placeholders for now! They look clean and professional. Add real photos when you have them.

---

## 🚀 After Adding Photos

1. Test on mobile phone
2. Check all images load correctly
3. Ensure photos are appropriate and inspiring
4. Get permission from people in photos
5. Commit changes to GitHub
6. Let Vercel auto-deploy
7. Share updated site!

---

**Need help?** The placeholders work perfectly fine until you have the right photos. Don't rush it—use authentic images when you have them! 💚
