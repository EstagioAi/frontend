# Task 14: Manual Testing Guide - Mobile Responsiveness

## Testing Setup

### Tools Required
1. **Chrome DevTools** (F12 → Toggle Device Toolbar)
2. **Firefox Responsive Design Mode** (Ctrl+Shift+M)
3. **Real Devices** (if available):
   - iPhone SE / iPhone 12/13/14
   - iPad / iPad Pro
   - Android phone (Samsung, Pixel, etc.)

### Pages to Test
1. `/blog` - Blog listing page
2. `/blog/[slug]` - Individual post page (test with any post)

---

## Breakpoint Testing Checklist

### 📱 375px - iPhone SE (Mobile Small)

**Setup:** Chrome DevTools → iPhone SE or Custom 375x667

#### Blog Listing Page (`/blog`)

**Hero Section:**
- [ ] Title readable and not cut off
- [ ] Description text wraps properly
- [ ] Stats cards stack vertically (1 column)
- [ ] Each stat card has proper spacing
- [ ] Search bar full width with proper padding
- [ ] Search icon visible on left
- [ ] Featured card displays below hero content
- [ ] Featured card image loads and displays properly
- [ ] Featured card text readable over image

**Category Filter:**
- [ ] "Explore por tema" header visible
- [ ] Filter pills wrap to multiple rows if needed
- [ ] Each pill is tappable (not too small)
- [ ] Active pill has distinct visual state
- [ ] "Limpar filtros" button visible when filters active

**Posts Grid:**
- [ ] Grid shows 1 column
- [ ] Cards have proper spacing (gap-6 = 24px)
- [ ] Card images load and display properly
- [ ] Card titles readable (not too small)
- [ ] Card excerpts truncate at 3 lines
- [ ] Badges visible and readable
- [ ] "Ler agora" CTA visible on image
- [ ] Entire card is tappable

**Pagination:**
- [ ] Pagination buttons stack if needed
- [ ] "Anterior" and "Próxima" buttons tappable
- [ ] Page number buttons at least 44x44px
- [ ] Current page visually distinct
- [ ] Disabled buttons have reduced opacity

**Overflow Check:**
- [ ] No horizontal scrollbar
- [ ] Swipe left/right doesn't reveal hidden content
- [ ] All images contained within viewport
- [ ] No text overflow

#### Individual Post Page (`/blog/[slug]`)

**Header:**
- [ ] Breadcrumbs wrap properly
- [ ] Title readable and wraps naturally
- [ ] Metadata (date, reading time) visible
- [ ] Tags wrap to multiple rows if needed
- [ ] Cover image NOT visible in header (desktop only)

**Article Content:**
- [ ] Cover image visible at top of article
- [ ] Cover image aspect ratio maintained
- [ ] Text size comfortable (17-18px)
- [ ] Line height comfortable (1.7-1.8)
- [ ] Headings properly sized
- [ ] Code blocks scroll horizontally if needed (not overflow)
- [ ] Lists properly indented
- [ ] Links underlined and tappable

**Share Section:**
- [ ] Share buttons stack or wrap properly
- [ ] Each button at least 44x44px (py-3)
- [ ] Buttons tappable with finger
- [ ] Button text readable

**Newsletter CTA:**
- [ ] Email input full width
- [ ] Input and button stack vertically
- [ ] Button full width on mobile
- [ ] Both elements tappable

**Sidebar:**
- [ ] Sidebar NOT visible (hidden class)
- [ ] TOC not accessible on mobile
- [ ] Tags widget not visible

**Progress Bar:**
- [ ] Progress bar visible at top
- [ ] Bar fills as you scroll
- [ ] Bar doesn't cause layout shift

**Overflow Check:**
- [ ] No horizontal scrollbar
- [ ] All content contained
- [ ] Images don't overflow
- [ ] Code blocks scroll internally

---

### 📱 768px - iPad (Tablet Portrait)

**Setup:** Chrome DevTools → iPad or Custom 768x1024

#### Blog Listing Page

**Hero Section:**
- [ ] Stats cards show 3 columns (sm:grid-cols-3)
- [ ] Featured card still below content (not side-by-side yet)
- [ ] Search bar has more padding (sm:px-6)

**Posts Grid:**
- [ ] Grid shows 2 columns (sm:grid-cols-2)
- [ ] Cards have proper spacing
- [ ] Cards maintain aspect ratio

**Pagination:**
- [ ] Buttons display inline
- [ ] Proper spacing between buttons

#### Individual Post Page

**Header:**
- [ ] Cover image still hidden in header
- [ ] Text sizes slightly larger

**Article:**
- [ ] Cover image visible in article
- [ ] Content width comfortable
- [ ] Sidebar still hidden

**Newsletter:**
- [ ] Input and button side-by-side (sm:flex-row)
- [ ] Proper spacing between elements

---

### 💻 1024px - Laptop (Desktop Small)

**Setup:** Chrome DevTools → Custom 1024x768 or Laptop preset

#### Blog Listing Page

**Hero Section:**
- [ ] Layout switches to 2 columns (lg:grid-cols-[...])
- [ ] Content on left, featured card on right
- [ ] Featured card aligned with content
- [ ] Proper gap between columns (lg:gap-16)

**Posts Grid:**
- [ ] Grid shows 3 columns (lg:grid-cols-3)
- [ ] Cards evenly spaced
- [ ] Hover effects work smoothly

**Filters:**
- [ ] Pills display inline
- [ ] No wrapping unless many categories

#### Individual Post Page

**Header:**
- [ ] Layout switches to 2 columns
- [ ] Cover image visible in header (lg:block)
- [ ] Cover image on right side
- [ ] Proper aspect ratio (4:3)

**Article:**
- [ ] Cover image hidden in article (lg:hidden)
- [ ] Content and sidebar side-by-side
- [ ] Sidebar visible (lg:block)
- [ ] Sidebar sticky (top: 108px)

**Sidebar:**
- [ ] TOC visible and functional
- [ ] TOC links at least 44px tall (py-2.5)
- [ ] Active link highlighted
- [ ] Smooth scroll on click
- [ ] Tags widget visible
- [ ] "↑ Topo" button visible

**Hover Effects:**
- [ ] Card hover: translateY(-6px)
- [ ] Card image scale on hover
- [ ] Title color change on hover
- [ ] Smooth transitions (300ms)

---

### 🖥️ 1440px - Desktop (Large)

**Setup:** Chrome DevTools → Custom 1440x900

#### All Pages

**Layout:**
- [ ] Content centered with max-width
- [ ] Proper margins on sides
- [ ] No excessive whitespace
- [ ] All elements scale proportionally

**Typography:**
- [ ] Hero title at max size (54px)
- [ ] Body text comfortable (17-18px)
- [ ] Headings properly sized

**Grid:**
- [ ] 3 columns maintained
- [ ] Proper gaps (2rem)
- [ ] Cards don't stretch too wide

---

## Touch Target Verification

### Minimum Size: 44x44px

**Elements to Check:**

#### Blog Listing
- [ ] Search input: Height ≥ 44px ✅ (py-4 = 48px+)
- [ ] Filter pills: Height ≥ 44px ✅ (py-2.5 = 44px+)
- [ ] Post cards: Entire card tappable ✅
- [ ] Pagination buttons: 44x44px ✅ (min-w-[44px] py-2.5)
- [ ] "Anterior/Próxima": Height ≥ 44px ✅ (py-2.5)

#### Individual Post
- [ ] Share buttons: Height ≥ 44px ✅ (py-3 = 48px+)
- [ ] TOC links: Height ≥ 44px ✅ (py-2.5 = 44px+)
- [ ] Newsletter button: Height ≥ 44px ✅ (py-3)
- [ ] "↑ Topo" button: Height ≥ 44px ✅

**Testing Method:**
1. Use finger or stylus on real device
2. Try tapping each element
3. Verify no mis-taps on adjacent elements
4. Check spacing between tappable elements

---

## Overflow Testing

### Horizontal Scroll Check

**Method:**
1. Open page at each breakpoint
2. Try to scroll horizontally (swipe left/right)
3. Check browser scrollbar (should only be vertical)
4. Inspect elements with DevTools for overflow

**Common Culprits:**
- [ ] Fixed-width elements
- [ ] Images without max-width
- [ ] Long unbreakable text
- [ ] Negative margins
- [ ] Absolute positioned elements

**Verification:**
```javascript
// Run in console to check for overflow
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > el.clientWidth) {
    console.log('Overflow detected:', el);
  }
});
```

---

## Performance Testing

### Metrics to Check

**Lighthouse (Mobile):**
- [ ] Performance score ≥ 90
- [ ] Accessibility score ≥ 95
- [ ] Best Practices score ≥ 90
- [ ] SEO score ≥ 95

**Core Web Vitals:**
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

**Mobile-Specific:**
- [ ] Images lazy load
- [ ] Smooth scrolling
- [ ] No jank on animations
- [ ] Touch interactions responsive

---

## Accessibility Testing

### Keyboard Navigation

**Test Flow:**
1. Tab through all interactive elements
2. Verify focus visible on all elements
3. Check tab order is logical
4. Test Enter/Space on buttons
5. Test Escape on modals/dropdowns

**Elements to Test:**
- [ ] Search input
- [ ] Filter pills
- [ ] Post cards (links)
- [ ] Pagination buttons
- [ ] Share buttons
- [ ] TOC links
- [ ] Newsletter form

### Screen Reader Testing

**Tools:**
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (Mac/iOS)
- TalkBack (Android)

**Check:**
- [ ] All images have alt text
- [ ] Links are descriptive
- [ ] Headings are hierarchical
- [ ] ARIA labels present where needed
- [ ] Form inputs have labels

---

## Browser Testing

### Browsers to Test

**Desktop:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile:**
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)
- [ ] Firefox Mobile
- [ ] Samsung Internet

### Known Issues to Check

**Safari:**
- [ ] Backdrop-blur works
- [ ] Sticky positioning works
- [ ] Flexbox gaps work

**Firefox:**
- [ ] Grid layouts correct
- [ ] Animations smooth
- [ ] Focus outlines visible

---

## Issue Reporting Template

```markdown
### Issue: [Brief description]

**Breakpoint:** [375px / 768px / 1024px / 1440px]
**Browser:** [Chrome / Firefox / Safari / etc.]
**Device:** [iPhone SE / iPad / Desktop / etc.]

**Steps to Reproduce:**
1. Navigate to [page]
2. [Action]
3. [Observe issue]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Screenshot:**
[Attach screenshot if possible]

**Severity:**
- [ ] Critical (blocks usage)
- [ ] Major (impacts UX significantly)
- [ ] Minor (cosmetic issue)
```

---

## Sign-Off Checklist

### Before Marking Task Complete

- [ ] All breakpoints tested (375px, 768px, 1024px, 1440px)
- [ ] Touch targets verified (≥ 44x44px)
- [ ] No horizontal overflow on any breakpoint
- [ ] Grid adapts correctly (1/2/3 columns)
- [ ] Sidebar hidden on mobile, visible on desktop
- [ ] Featured card adapts layout
- [ ] All interactive elements accessible
- [ ] Performance acceptable on mobile
- [ ] No console errors
- [ ] Tested on at least 2 real devices
- [ ] Tested on at least 3 browsers
- [ ] Documentation updated

---

## Testing Results

**Date:** [Fill in]
**Tester:** [Fill in]

### 375px Results
- Status: [ ] Pass / [ ] Fail
- Issues found: [List or "None"]

### 768px Results
- Status: [ ] Pass / [ ] Fail
- Issues found: [List or "None"]

### 1024px Results
- Status: [ ] Pass / [ ] Fail
- Issues found: [List or "None"]

### 1440px Results
- Status: [ ] Pass / [ ] Fail
- Issues found: [List or "None"]

### Overall Status
- [ ] All tests passed
- [ ] Minor issues found (documented)
- [ ] Major issues found (requires fixes)

**Notes:**
[Any additional observations or recommendations]
