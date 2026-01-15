# ✏️ Content Editing Guide

This guide shows you exactly what content you can edit and where to find it. All content is based on Alessandra's specifications - update as your program evolves!

---

## 📍 Key Details from Alessandra

Current content includes:
- ✅ Eco Sustainability Foundation - Green Warriors Program
- ✅ Transforms individuals from underserved Filipino communities
- ✅ 6-month immersive training program
- ✅ Selection based on character, not diplomas
- ✅ Comprehensive hospitality service standards and sustainability practices
- ✅ Direct pathway to employment with EcoHotels Inc.
- ✅ Each Green Warrior supports 4-6 family members
- ✅ Creates generational change, not just short-term aid

---

## 🎯 What You Can Edit

### 1. Contact Information
**File:** `/src/app/components/Footer.tsx`

**Current placeholders:**
- Email: `info@ecosustainabilityfoundation.org`
- Phone: `+63 XXX XXX XXXX` ← **Update this!**
- Address: Currently generic

**How to update:**
1. Open `Footer.tsx`
2. Find the contact section
3. Replace placeholder text with real info
4. Save and commit to GitHub

---

### 2. Program Statistics
**File:** `/src/app/components/Hero.tsx`

**Current stat:**
- "6 months" - immersive training program

**You can change this to:**
- Number of graduates
- Success rate
- Years of operation
- Any compelling number

**Example:**
```tsx
<p className="text-4xl font-bold text-emerald-700">150+</p>
<p className="text-gray-600">lives transformed in 2024</p>
```

---

### 3. Training Curriculum
**File:** `/src/app/components/ProgramDetails.tsx`

**Current trainings list:**
1. Hospitality service standards
2. Housekeeping and operations
3. Food safety and hygiene
4. Guest relations and customer care
5. Workplace ethics and discipline
6. Sustainability in daily operations
7. Communication and teamwork
8. Leadership and personal development

**To add/edit:**
```tsx
const trainings = [
  'Your training module here',
  'Another module',
  // Add as many as you need
];
```

---

### 4. Employment Pathway
**File:** `/src/app/components/ImpactSection.tsx`

**Current steps:**
1. Successful completion of 6-month program
2. Endorsed by supervisors and department heads
3. Approved by Human Resources and Management
4. Direct pathway to employment with EcoHotels Inc.

**Customize as your process evolves**

---

### 5. Beneficiaries List
**File:** `/src/app/components/AboutSection.tsx`

**Current beneficiaries:**
- Out-of-school youth
- Single parents and unemployed adults
- Individuals from geographically isolated and disadvantaged communities
- Those with no prior work experience but high motivation to learn

**Update to match your current target groups**

---

### 6. Core Values
**File:** `/src/app/components/ProgramDetails.tsx`

**Current values:**
1. Honesty & Integrity
2. Ownership (Malasakit)
3. Teamwork
4. Empathy & Initiative
5. Leadership
6. Service Excellence

**These should stay consistent, but you can reorder or add values as needed**

---

### 7. Donation Amounts
**File:** `/src/app/components/DonateSection.tsx`

**Current levels:**
- ₱5,000 - Supports 1 month of training
- ₱15,000 - Covers meals and allowance
- ₱30,000 - Full 6-month sponsorship

**Adjust based on actual costs:**
```tsx
const donationLevels = [
  { amount: 5000, impact: 'Supports 1 month of training' },
  { amount: 15000, impact: 'Covers meals and allowance for 3 months' },
  { amount: 30000, impact: 'Full 6-month Green Warrior sponsorship' }
];
```

---

### 8. Social Media Links
**File:** `/src/app/components/Footer.tsx`

**Current:** Placeholder links

**Update with your actual profiles:**
```tsx
<a href="https://facebook.com/yourpage" ...>
<a href="https://twitter.com/yourhandle" ...>
<a href="https://instagram.com/yourpage" ...>
```

---

## 🖼️ Images (Placeholder Boxes)

**Current state:** 3 gray placeholder boxes

**See:** `IMAGE-UPLOAD-GUIDE.md` for detailed instructions

**Locations:**
1. Hero section - Group/training photo
2. About section - Classroom/workshop
3. Impact section - Family/community

**These are READY for your real photos - no rush!**

---

## 📝 Text Tone and Style

**Current style:**
- ✅ Professional but warm
- ✅ Donor-focused (emphasizing impact)
- ✅ Filipinos supporting Filipinos
- ✅ Dignity over charity
- ✅ Measurable outcomes

**When editing, maintain:**
- Active voice ("We transform lives" not "Lives are transformed")
- Specific numbers (4-6 family members, 6 months, etc.)
- Emotional connection (generational change, hope, opportunity)
- Call-to-action language (Support, Partner, Transform)

---

## 🎨 Design Elements (Be Careful!)

**DON'T change (unless you know CSS/Tailwind):**
- Colors (emerald green theme)
- Spacing and layout
- Component structure
- Responsive breakpoints

**You CAN change:**
- Text content
- Numbers and statistics
- Lists and bullet points
- Button text (e.g., "Donate Now" → "Support a Green Warrior")

---

## 🔄 How to Update Content After Deployment

### Quick Process:
1. **Edit locally**
   - Open file in code editor
   - Make changes
   - Save

2. **Test locally** (optional but recommended)
   ```bash
   npm run dev
   ```
   - View at localhost:5173
   - Check changes look good

3. **Commit to GitHub**
   - Open GitHub Desktop
   - Review changes
   - Add commit message: "Updated contact info" or "Added new statistics"
   - Click "Commit to main"
   - Click "Push origin"

4. **Auto-deploy**
   - Vercel detects changes
   - Auto-deploys in 1-2 minutes
   - Refresh your live site

---

## 📊 Content That Updates Regularly

Consider updating quarterly:
- Number of graduates
- Success stories
- Employment statistics
- New partnerships
- Program improvements

---

## ⚠️ DON'T Edit These Files

Unless you're a developer:
- `/src/app/App.tsx`
- `/src/main.tsx`
- `/package.json`
- `/vite.config.ts`
- Any file in `/src/app/components/ui/`

These are structural files - breaking them breaks the site!

---

## ✅ Safe Files to Edit

Go ahead and customize:
- `Hero.tsx` - Main headline and statistics
- `AboutSection.tsx` - Program description and beneficiaries
- `ProblemSolution.tsx` - Problem/solution messaging
- `ProgramDetails.tsx` - Training modules, standards, values
- `ImpactSection.tsx` - Employment pathway and impact stats
- `WhyDonors.tsx` - Donor messaging
- `DonateSection.tsx` - Donation levels and form text
- `Footer.tsx` - Contact info and social links

---

## 💡 Pro Tips

1. **Always test locally before pushing**
   - Catches typos and errors
   - See exactly what donors will see

2. **Use descriptive commit messages**
   - Good: "Updated phone number and email"
   - Bad: "changes"

3. **Keep a backup**
   - GitHub is your backup!
   - Every commit is saved forever

4. **Make small changes**
   - Don't edit 5 files at once
   - Makes it easier to find/fix issues

5. **Get a second pair of eyes**
   - Have someone review text changes
   - Check grammar and tone

---

## 📞 Need Help?

**For content questions:**
- Ask Alessandra for program details
- Check with team on messaging
- Review donation pricing with finance

**For technical questions:**
- Read the guides (QUICK-START.md, etc.)
- Search Google/YouTube for React tutorials
- Contact your developer

---

## 🎯 Content Improvement Roadmap

**Phase 1 (Now):**
- ✅ Update contact information
- ✅ Verify all numbers are accurate
- ✅ Add real social media links

**Phase 2 (This month):**
- Add real photos (see IMAGE-UPLOAD-GUIDE.md)
- Add success stories section
- Update with latest graduate numbers

**Phase 3 (Ongoing):**
- Regular updates with new statistics
- Blog posts about program milestones
- Video testimonials
- Donor recognition wall

---

**Remember:** This is YOUR template. Start with Alessandra's core details, then improve as you grow! 💚
