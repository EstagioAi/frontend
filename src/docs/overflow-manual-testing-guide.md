# Manual Overflow Testing Guide

**Task:** 20.3 Testar overflow e scroll horizontal  
**Purpose:** Step-by-step guide for manually testing horizontal overflow issues

## Quick Test (5 minutes)

### Browser DevTools Method

1. **Open DevTools**
   - Chrome/Edge: `F12` or `Ctrl+Shift+I`
   - Firefox: `F12`
   - Safari: `Cmd+Option+I`

2. **Enable Device Toolbar**
   - Chrome/Edge: `Ctrl+Shift+M`
   - Firefox: `Ctrl+Shift+M`
   - Safari: Enable "Responsive Design Mode"

3. **Test These Widths**
   ```
   320px  - iPhone SE (smallest common device)
   375px  - iPhone 12/13 Mini
   390px  - iPhone 12/13/14 Pro
   414px  - iPhone Plus models
   768px  - iPad Portrait
   1024px - iPad Landscape
   1280px - Desktop
   ```

4. **Visual Check**
   - Look for horizontal scrollbar at bottom of page
   - Scroll down entire page at each width
   - Check if any content extends beyond viewport

### Quick CSS Check

Add this to browser console to highlight overflow:

```javascript
// Highlight elements wider than viewport
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    el.style.outline = '3px solid red';
    console.log('Overflow detected:', el);
  }
});
```

## Comprehensive Test (15 minutes)

### Pages to Test

- [ ] Home (`/`)
- [ ] Vagas (`/radar-de-vagas`)
- [ ] Sobre (`/sobre`)
- [ ] Empresas (`/empresas`)
- [ ] Blog (`/blog`)
- [ ] Login (`/login`)
- [ ] Register (`/register`)

### Components to Focus On

#### 1. Navigation
- [ ] Top bar dropdowns don't overflow
- [ ] Mobile menu doesn't cause horizontal scroll
- [ ] Logo and buttons stay within bounds

#### 2. Hero Sections
- [ ] Slot machine animation stays contained
- [ ] Hero text doesn't overflow
- [ ] Background decorative elements don't cause scroll

#### 3. Grids and Cards
- [ ] Job cards grid adapts properly
- [ ] Feature cards don't overflow
- [ ] Company logos stay within bounds

#### 4. Carousels
- [ ] Testimonials carousel doesn't overflow
- [ ] Navigation arrows stay within viewport
- [ ] Dots indicator doesn't overflow

#### 5. Forms
- [ ] Input fields don't overflow
- [ ] Buttons stay within bounds
- [ ] Error messages wrap properly

### Breakpoint Testing

Test at exact breakpoint boundaries:

```
639px  - Just before sm breakpoint
640px  - sm breakpoint
767px  - Just before md breakpoint
768px  - md breakpoint
1023px - Just before lg breakpoint
1024px - lg breakpoint
1279px - Just before xl breakpoint
1280px - xl breakpoint
1535px - Just before 2xl breakpoint
1536px - 2xl breakpoint
```

## Common Overflow Patterns to Check

### ❌ Bad Patterns (Should NOT exist)

```css
/* Fixed large widths without max-width */
.bad-example {
  width: 1200px; /* ❌ Will overflow on mobile */
}

/* Viewport width without constraints */
.bad-example {
  width: 100vw; /* ❌ Can cause horizontal scroll */
}

/* Negative margins without containment */
.bad-example {
  margin-left: -100px; /* ❌ Can overflow left edge */
}

/* Absolute positioning without bounds */
.bad-example {
  position: absolute;
  left: -50px; /* ❌ Can overflow left edge */
}
```

### ✅ Good Patterns (Should exist)

```css
/* Max-width with percentage */
.good-example {
  max-width: 1200px;
  width: 100%;
}

/* Constrained viewport width */
.good-example {
  max-width: 100vw;
  overflow-x: hidden;
}

/* Contained negative margins */
.good-example {
  margin-left: -1rem;
  padding-left: 1rem;
}

/* Bounded absolute positioning */
.good-example {
  position: absolute;
  left: 0;
  right: 0;
}
```

## Testing Checklist

### Visual Tests
- [ ] No horizontal scrollbar appears at any breakpoint
- [ ] All text is readable and doesn't overflow
- [ ] Images scale properly and don't overflow
- [ ] Buttons and interactive elements stay within bounds
- [ ] Navigation dropdowns don't overflow
- [ ] Cards and grids adapt to viewport width

### Interaction Tests
- [ ] Can scroll vertically without triggering horizontal scroll
- [ ] Touch/swipe gestures don't reveal overflow
- [ ] Resizing browser window doesn't cause overflow
- [ ] Zooming in/out doesn't cause overflow (up to 200%)

### Edge Cases
- [ ] Very long words in user content (if applicable)
- [ ] Very long URLs in links
- [ ] Long company names in job cards
- [ ] Long email addresses in forms
- [ ] Code blocks or pre-formatted text (if applicable)

## Automated Testing Script

Save this as `test-overflow.js` and run in browser console:

```javascript
/**
 * Automated Overflow Detection Script
 * Tests for horizontal overflow at multiple breakpoints
 */

const breakpoints = [320, 375, 414, 640, 768, 1024, 1280, 1536];
const results = [];

function testOverflow(width) {
  // Resize viewport (only works in responsive mode)
  console.log(`Testing at ${width}px...`);
  
  // Check document width
  const docWidth = document.documentElement.clientWidth;
  const scrollWidth = document.documentElement.scrollWidth;
  
  if (scrollWidth > docWidth) {
    results.push({
      width,
      overflow: scrollWidth - docWidth,
      status: '❌ FAIL'
    });
  } else {
    results.push({
      width,
      overflow: 0,
      status: '✅ PASS'
    });
  }
  
  // Find overflowing elements
  const overflowingElements = [];
  document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth > docWidth) {
      overflowingElements.push({
        tag: el.tagName,
        class: el.className,
        id: el.id,
        scrollWidth: el.scrollWidth
      });
    }
  });
  
  if (overflowingElements.length > 0) {
    console.warn(`Found ${overflowingElements.length} overflowing elements:`, overflowingElements);
  }
}

// Run test at current width
testOverflow(window.innerWidth);

// Display results
console.table(results);
```

## Mobile Device Testing

### iOS Safari
1. Open Safari on iPhone
2. Navigate to site
3. Scroll through all pages
4. Check for horizontal scroll by swiping left/right
5. Test in both portrait and landscape

### Android Chrome
1. Open Chrome on Android device
2. Navigate to site
3. Scroll through all pages
4. Check for horizontal scroll by swiping left/right
5. Test in both portrait and landscape

### Common Mobile Issues
- [ ] Touch targets too small (< 44x44px)
- [ ] Text too small to read
- [ ] Buttons overflow viewport
- [ ] Images not responsive
- [ ] Fixed positioning causes issues

## Reporting Issues

If you find overflow issues, document:

1. **Breakpoint:** Width where issue occurs
2. **Page:** Which page has the issue
3. **Component:** Which component is overflowing
4. **Screenshot:** Visual evidence
5. **Element:** CSS selector or class name
6. **Expected:** What should happen
7. **Actual:** What is happening

### Issue Template

```markdown
## Overflow Issue

**Breakpoint:** 375px
**Page:** /radar-de-vagas
**Component:** Job Card Grid
**Element:** `.job-card-container`

**Expected:** Grid should adapt to viewport width
**Actual:** Grid causes horizontal scroll of 20px

**Screenshot:** [attach screenshot]

**CSS Fix:**
```css
.job-card-container {
  max-width: 100%;
  overflow-x: hidden;
}
```
```

## Prevention Checklist

When adding new components:

- [ ] Use relative units (%, rem, em) instead of fixed px
- [ ] Apply `.container-safe` or `.no-overflow-x` classes
- [ ] Test at 320px width before committing
- [ ] Use `max-width` instead of `width` for large values
- [ ] Wrap wide content in `.overflow-x-auto` containers
- [ ] Apply `.text-truncate` to dynamic text
- [ ] Use CSS Grid with `fr` units instead of fixed columns
- [ ] Test with DevTools responsive mode

## Tools and Resources

### Browser Extensions
- **Responsive Viewer** - Test multiple devices simultaneously
- **Window Resizer** - Quick preset viewport sizes
- **Pesticide** - Visualize element boxes

### Online Tools
- **Responsively App** - Desktop app for responsive testing
- **BrowserStack** - Real device testing
- **LambdaTest** - Cross-browser testing

### CSS Debugging
```css
/* Add to temporarily visualize all elements */
* {
  outline: 1px solid red !important;
}

/* Highlight overflowing elements */
*:not(html):not(body) {
  overflow: visible !important;
  outline: 2px solid blue !important;
}
```

## Success Criteria

✅ Test passes when:
- No horizontal scrollbar at any breakpoint (320px - 1536px+)
- All content visible and readable
- No elements extend beyond viewport
- Smooth transitions between breakpoints
- Touch targets meet 44x44px minimum
- Text wraps properly without overflow

## Next Steps

After completing manual testing:
1. Document any issues found
2. Create fix for each issue
3. Re-test after fixes
4. Mark task 20.3 as complete
5. Move to next task (21.1)

---

**Last Updated:** 2025-10-03  
**Task:** 20.3 Testar overflow e scroll horizontal  
**Status:** Testing guide complete
