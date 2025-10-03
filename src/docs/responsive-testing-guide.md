# Responsive Testing Guide

Complete guide for testing responsive design across all breakpoints.

## 🎯 Testing Objectives

1. Verify layout at all breakpoints
2. Ensure touch targets meet 44x44px minimum
3. Prevent horizontal scrolling
4. Validate text readability
5. Check interactive element accessibility

## 📱 Breakpoints to Test

### 320px - Extra Small Mobile
- **Devices**: iPhone SE (1st gen), small Android phones
- **Test Focus**: 
  - Minimum viable layout
  - Touch target sizes
  - Text readability
  - Button accessibility

### 640px - Small Mobile/Phablet
- **Devices**: iPhone 12/13 Mini, standard smartphones
- **Test Focus**:
  - Two-column grids
  - Navigation usability
  - Form layouts
  - Image scaling

### 768px - Tablet Portrait
- **Devices**: iPad Mini, Android tablets
- **Test Focus**:
  - Sidebar layouts
  - Multi-column content
  - Navigation transitions
  - Touch vs mouse interactions

### 1024px - Tablet Landscape/Small Desktop
- **Devices**: iPad, small laptops
- **Test Focus**:
  - Desktop navigation
  - Three-column layouts
  - Hover states
  - Keyboard navigation

### 1280px - Desktop
- **Devices**: Standard monitors, laptops
- **Test Focus**:
  - Full desktop experience
  - Multi-column layouts
  - Optimal content width
  - Spacing and typography

### 1536px - Large Desktop
- **Devices**: Large monitors, 4K displays
- **Test Focus**:
  - Content centering
  - Maximum width constraints
  - Typography scaling
  - Whitespace management

## 🛠️ Testing Tools

### Browser DevTools
```javascript
// Chrome DevTools Console
// Check viewport width
window.innerWidth

// Check for horizontal overflow
document.body.scrollWidth > document.body.clientWidth

// Check for vertical overflow
document.body.scrollHeight > document.body.clientHeight

// Get all interactive elements
document.querySelectorAll('button, a, input, [role="button"]')

// Check touch target sizes
Array.from(document.querySelectorAll('button, a')).filter(el => {
  const rect = el.getBoundingClientRect();
  return rect.width < 44 || rect.height < 44;
})
```

### Responsive Design Mode
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Select device or enter custom dimensions
4. Test at each breakpoint

### Real Device Testing
- iOS Safari (iPhone, iPad)
- Chrome Mobile (Android)
- Samsung Internet
- Firefox Mobile

## ✅ Testing Checklist

### Layout Testing
- [ ] No horizontal scrolling at any breakpoint
- [ ] All content visible without zooming
- [ ] Proper spacing maintained
- [ ] Grid/flex layouts work correctly
- [ ] Images scale appropriately
- [ ] Navigation accessible
- [ ] Footer displays correctly

### Typography Testing
- [ ] Text readable at all sizes
- [ ] Headings scale appropriately
- [ ] Line height comfortable
- [ ] No text overflow
- [ ] Proper word wrapping
- [ ] Links distinguishable

### Interactive Elements
- [ ] All buttons at least 44x44px
- [ ] Touch targets have adequate spacing
- [ ] Hover states work (desktop)
- [ ] Active states visible
- [ ] Focus indicators clear
- [ ] Forms usable on mobile
- [ ] Dropdowns accessible

### Performance
- [ ] No layout shifts (CLS)
- [ ] Fast paint times
- [ ] Smooth scrolling
- [ ] No jank during resize
- [ ] Animations perform well

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper heading hierarchy
- [ ] ARIA labels present
- [ ] Color contrast sufficient
- [ ] Focus visible

## 📋 Page-by-Page Testing

### Home Page
```
Breakpoints: 320px, 640px, 768px, 1024px, 1280px, 1536px

Sections to Test:
- [ ] Hero Section
  - [ ] Title scales properly
  - [ ] CTA button accessible
  - [ ] Background doesn't overflow
  - [ ] Slot machine animations work
  
- [ ] Features Section
  - [ ] Cards stack on mobile
  - [ ] Grid expands on desktop
  - [ ] Icons visible
  - [ ] Text readable
  
- [ ] Stats Section
  - [ ] Numbers scale
  - [ ] Icons display correctly
  - [ ] Layout adapts
  
- [ ] Testimonials
  - [ ] Carousel works on mobile
  - [ ] Cards readable
  - [ ] Navigation accessible
  
- [ ] Companies Section
  - [ ] Logos scale
  - [ ] Grid adapts
  - [ ] Animations smooth
  
- [ ] CTA Section
  - [ ] Button prominent
  - [ ] Text readable
  - [ ] Background works
```

### Vagas Page
```
Breakpoints: 320px, 640px, 768px, 1024px, 1280px, 1536px

Sections to Test:
- [ ] Header
  - [ ] Search bar usable
  - [ ] Location input accessible
  - [ ] Button works
  
- [ ] Filters Sidebar
  - [ ] Stacks on mobile
  - [ ] Badges clickable
  - [ ] Categories clear
  
- [ ] Job Grid
  - [ ] Cards stack on mobile
  - [ ] Two columns on tablet
  - [ ] Proper spacing
  - [ ] All info visible
  
- [ ] Pagination
  - [ ] Buttons accessible
  - [ ] Numbers readable
  - [ ] Navigation works
```

### Navigation
```
All Breakpoints

Desktop (1024px+):
- [ ] Horizontal menu visible
- [ ] Dropdowns work
- [ ] Hover states active
- [ ] Logo visible
- [ ] Buttons accessible

Mobile (<1024px):
- [ ] Hamburger menu visible
- [ ] Menu toggles correctly
- [ ] Links stack vertically
- [ ] Touch targets adequate
- [ ] Close button works
```

## 🔍 Common Issues to Check

### Layout Issues
- Content extending beyond viewport
- Overlapping elements
- Broken grid layouts
- Misaligned items
- Excessive whitespace

### Typography Issues
- Text too small to read
- Headings too large
- Poor line height
- Text overflow
- Unreadable color contrast

### Interactive Issues
- Buttons too small
- Links too close together
- Forms difficult to use
- Dropdowns not working
- Hover states missing

### Performance Issues
- Slow loading
- Janky animations
- Layout shifts
- Unresponsive interactions
- Memory leaks

## 📊 Testing Matrix

| Page | 320px | 640px | 768px | 1024px | 1280px | 1536px |
|------|-------|-------|-------|--------|--------|--------|
| Home | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Vagas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sobre | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Companies | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Blog | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Login | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Register | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 🎨 Visual Regression Testing

### Screenshots to Capture
1. Full page at each breakpoint
2. Navigation (open and closed)
3. Forms (empty and filled)
4. Cards and components
5. Hover states (desktop)
6. Active states (mobile)

### Tools
- Percy (visual regression)
- Chromatic (Storybook)
- Manual screenshots
- Browser extensions

## 📱 Device-Specific Testing

### iOS Safari
- [ ] Viewport meta tag correct
- [ ] Touch events work
- [ ] Scroll behavior smooth
- [ ] Forms don't zoom
- [ ] Safe areas respected

### Chrome Mobile
- [ ] Touch targets adequate
- [ ] Scroll performance good
- [ ] Forms accessible
- [ ] Animations smooth

### Samsung Internet
- [ ] Layout correct
- [ ] Colors accurate
- [ ] Fonts load
- [ ] Interactions work

## 🚀 Automated Testing

### Lighthouse Audit
```bash
# Run Lighthouse for mobile
lighthouse https://your-site.com --preset=mobile --view

# Run Lighthouse for desktop
lighthouse https://your-site.com --preset=desktop --view
```

### Responsive Design Checker
```bash
# Using Playwright
npx playwright test --project=mobile
npx playwright test --project=tablet
npx playwright test --project=desktop
```

## 📝 Bug Report Template

```markdown
## Responsive Bug Report

**Breakpoint**: [320px / 640px / 768px / 1024px / 1280px / 1536px]
**Page**: [Home / Vagas / etc.]
**Section**: [Hero / Navigation / etc.]
**Browser**: [Chrome / Safari / Firefox]
**Device**: [iPhone 12 / Desktop / etc.]

### Issue Description
[Describe the issue]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### Screenshots
[Attach screenshots]

### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Severity
- [ ] Critical (blocks usage)
- [ ] High (major issue)
- [ ] Medium (minor issue)
- [ ] Low (cosmetic)
```

## ✨ Best Practices

1. **Test Early and Often**: Don't wait until the end
2. **Use Real Devices**: Emulators aren't perfect
3. **Test Edge Cases**: Very small and very large screens
4. **Check Orientation**: Portrait and landscape
5. **Verify Touch**: Not just mouse interactions
6. **Test Performance**: Not just layout
7. **Document Issues**: Keep track of bugs
8. **Retest After Fixes**: Ensure fixes work

## 🔄 Continuous Testing

### On Every PR
- [ ] Run automated tests
- [ ] Check key breakpoints
- [ ] Verify no regressions
- [ ] Test new components

### Weekly
- [ ] Full manual test
- [ ] Real device testing
- [ ] Performance audit
- [ ] Accessibility check

### Monthly
- [ ] Comprehensive audit
- [ ] Update documentation
- [ ] Review analytics
- [ ] Plan improvements

---

**Last Updated**: 2025-10-03
**Maintained By**: Development Team
**Status**: ✅ Active Testing Protocol
