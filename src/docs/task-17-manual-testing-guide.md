# Task 17: Manual Testing Guide for Hover Effects

## Purpose
This guide helps you manually verify that all hover effects are working correctly after the refinements made in Task 17.

## Prerequisites
1. Start the development server: `npm run dev`
2. Open the blog in your browser: `http://localhost:5173/blog`
3. Have DevTools open to monitor performance (optional)

## Testing Checklist

### 1. PostCard Hover Effects
**Location:** Blog listing page - regular post cards in the grid

**Steps:**
1. Navigate to `/blog`
2. Scroll to the post cards grid
3. Hover over any post card

**Expected behavior:**
- [ ] Card smoothly lifts up by 6px (translateY)
- [ ] Card shadow becomes more prominent
- [ ] Image inside zooms in slightly (scale 1.10)
- [ ] Title text changes to green (#0E8F66)
- [ ] "Ler artigo" arrow moves right
- [ ] Gap between "Ler artigo" text and arrow increases
- [ ] All transitions complete in 300ms
- [ ] Transitions feel smooth and synchronized

**Performance check:**
- Open DevTools > Performance
- Record while hovering
- Verify 60fps maintained
- No layout shifts or repaints

### 2. FeaturedPostCard Hover Effects
**Location:** Blog listing page - large featured card in hero section

**Steps:**
1. Navigate to `/blog`
2. Look at the hero section (top of page)
3. Hover over the large featured post card on the right

**Expected behavior:**
- [ ] Entire card scales up slightly (scale 1.02)
- [ ] Image inside scales up (scale 1.02)
- [ ] Title text changes to mint green (#6FFFC7)
- [ ] "Ler artigo completo" arrow moves right
- [ ] Gap between text and arrow increases
- [ ] All transitions complete in 300ms
- [ ] Effect is subtle but noticeable

**Performance check:**
- Verify smooth scaling without jank
- No layout shifts during hover

### 3. Category Filter Pills
**Location:** Blog listing page - filter section below hero

**Steps:**
1. Navigate to `/blog`
2. Scroll to the category filter section
3. Hover over different filter pills

**Expected behavior:**
- [ ] Inactive pills: Border and text color change to green
- [ ] Inactive pills: Subtle shadow appears
- [ ] Active pills: Shadow becomes more prominent
- [ ] "Todos" button: Smooth color transitions
- [ ] All transitions complete in 300ms
- [ ] Hover feedback is immediate and clear

**Interaction check:**
- Click a filter pill
- Verify active state is visually distinct
- Hover over active pill - should still show hover effect

### 4. Pagination Buttons
**Location:** Blog listing page - bottom of post grid (if multiple pages)

**Steps:**
1. Navigate to `/blog`
2. Scroll to pagination section at bottom
3. Hover over "Anterior", page numbers, and "Próxima" buttons

**Expected behavior:**
- [ ] Buttons lift up slightly (translateY -0.5px)
- [ ] Shadow becomes more prominent
- [ ] Border and text color change to green
- [ ] Arrow icons move left/right appropriately
- [ ] All transitions complete in 300ms
- [ ] Disabled buttons don't show hover effects

**Edge cases:**
- Hover over disabled "Anterior" on page 1
- Hover over disabled "Próxima" on last page
- Verify no hover effects on disabled buttons

### 5. TOC Links (Sidebar)
**Location:** Individual post page - right sidebar (desktop only)

**Steps:**
1. Navigate to any blog post (e.g., `/blog/[slug]`)
2. Look at the right sidebar (desktop view)
3. Hover over different TOC links

**Expected behavior:**
- [ ] Background changes to light gray (slate-50)
- [ ] Text color changes to coral (#d97757)
- [ ] Active link has coral background and bold text
- [ ] All transitions complete in 300ms
- [ ] Smooth color transitions

**Scroll behavior:**
- Scroll through the article
- Verify active link updates as you scroll
- Hover over active link - should still show hover effect

### 6. Share Buttons
**Location:** Individual post page - share section in article

**Steps:**
1. Navigate to any blog post
2. Scroll to the share section
3. Hover over Twitter, LinkedIn, and Facebook buttons

**Expected behavior:**
- [ ] Border color changes to green
- [ ] Text color darkens slightly
- [ ] All transitions complete in 300ms
- [ ] Smooth, consistent feedback

### 7. Additional Interactive Elements

#### Search Input
**Location:** Blog listing page - hero section

**Steps:**
1. Navigate to `/blog`
2. Click on the search input
3. Observe focus effects

**Expected behavior:**
- [ ] Border color changes to mint green
- [ ] Background becomes slightly more opaque
- [ ] Glow shadow appears
- [ ] Focus ring is visible
- [ ] All transitions are smooth

#### Stats Cards
**Location:** Blog listing page - hero section

**Steps:**
1. Navigate to `/blog`
2. Hover over the three stats cards

**Expected behavior:**
- [ ] Border becomes more visible
- [ ] Background becomes slightly more opaque
- [ ] Transitions are smooth and subtle

## Cross-Browser Testing

### Desktop Browsers
Test in each browser and verify all hover effects work correctly:

- [ ] **Chrome/Edge (Chromium)**
  - All hover effects smooth
  - 60fps maintained
  - No visual glitches

- [ ] **Firefox**
  - All hover effects smooth
  - Consistent with Chrome
  - No rendering issues

- [ ] **Safari** (if available)
  - All hover effects smooth
  - Webkit-specific rendering correct
  - No compatibility issues

### Mobile Testing
Test on mobile devices to ensure no stuck hover states:

- [ ] **Mobile Chrome**
  - Tap interactions work correctly
  - No stuck hover states after tap
  - Touch targets are adequate

- [ ] **Mobile Safari**
  - Tap interactions work correctly
  - No stuck hover states after tap
  - Smooth transitions on tap

## Accessibility Testing

### Keyboard Navigation
1. Use Tab key to navigate through interactive elements
2. Verify focus indicators are visible
3. Check that hover effects don't interfere with focus

**Checklist:**
- [ ] Focus indicators visible on all interactive elements
- [ ] Tab order is logical
- [ ] Enter/Space activate buttons correctly
- [ ] Focus states distinct from hover states

### Reduced Motion
1. Enable reduced motion in OS settings:
   - **Windows:** Settings > Ease of Access > Display > Show animations
   - **macOS:** System Preferences > Accessibility > Display > Reduce motion
   - **Linux:** Varies by desktop environment

2. Reload the blog page
3. Hover over elements

**Expected behavior:**
- [ ] Hover effects are instant (no animation)
- [ ] Transitions complete in <10ms
- [ ] No motion sickness triggers
- [ ] Functionality remains intact

## Performance Verification

### DevTools Performance Tab
1. Open Chrome DevTools
2. Go to Performance tab
3. Click Record
4. Hover over multiple elements
5. Stop recording
6. Analyze results

**Look for:**
- [ ] Consistent 60fps during hover
- [ ] No long tasks (>50ms)
- [ ] No layout shifts
- [ ] Only compositing (no paint/layout)
- [ ] GPU acceleration active

### DevTools Rendering Tab
1. Open Chrome DevTools
2. Go to More tools > Rendering
3. Enable "Paint flashing"
4. Hover over elements

**Expected behavior:**
- [ ] No green flashes on hover (no repaints)
- [ ] Only compositing layer updates
- [ ] Smooth visual feedback

## Common Issues to Watch For

### Visual Issues
- ❌ Janky or stuttering animations
- ❌ Inconsistent transition speeds
- ❌ Elements jumping or shifting
- ❌ Hover effects not reversing properly
- ❌ Stuck hover states on mobile

### Performance Issues
- ❌ Frame drops during hover
- ❌ Layout shifts
- ❌ Repaints on hover
- ❌ Slow response time (>16ms)

### Accessibility Issues
- ❌ Focus indicators hidden during hover
- ❌ Hover effects interfere with keyboard navigation
- ❌ Reduced motion not respected
- ❌ Poor color contrast in hover states

## Reporting Issues

If you find any issues during testing, document:
1. **Component:** Which element has the issue
2. **Browser:** Which browser/version
3. **Steps:** How to reproduce
4. **Expected:** What should happen
5. **Actual:** What actually happens
6. **Screenshot/Video:** Visual evidence if possible

## Sign-off

After completing all tests, sign off on each section:

- [ ] PostCard hover effects verified
- [ ] FeaturedPostCard hover effects verified
- [ ] Category filter pills verified
- [ ] Pagination buttons verified
- [ ] TOC links verified
- [ ] Share buttons verified
- [ ] Additional elements verified
- [ ] Cross-browser testing complete
- [ ] Accessibility testing complete
- [ ] Performance verification complete

**Tester:** _______________  
**Date:** _______________  
**Status:** ⬜ Pass / ⬜ Fail  
**Notes:** _______________

## Conclusion

All hover effects should now provide a smooth, consistent, and professional experience across all blog components. The 300ms cubic-bezier transitions create a polished feel that enhances user engagement without being distracting.
