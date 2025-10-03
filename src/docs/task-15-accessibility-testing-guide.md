# Accessibility Testing Guide - Blog Redesign

## Overview
This guide provides step-by-step instructions for testing the accessibility improvements implemented in Task 15.

## Testing Date
January 2025

## Prerequisites
- Modern browser (Chrome, Firefox, Safari, or Edge)
- Keyboard for navigation testing
- Screen reader (optional but recommended):
  - **Windows**: NVDA (free) or JAWS
  - **macOS**: VoiceOver (built-in)
  - **Linux**: Orca

## Manual Testing Procedures

### 1. Keyboard Navigation Testing

#### Test 1.1: Skip Link
**Steps:**
1. Navigate to `/blog` page
2. Press `Tab` key once (first tab after page load)
3. **Expected**: "Pular para o conteúdo principal" link appears in top-left
4. Press `Enter` to activate
5. **Expected**: Focus jumps to main content area (skips navigation)

**Pass Criteria:**
- ✅ Skip link is visible when focused
- ✅ Skip link has coral outline (3px)
- ✅ Activating skip link moves focus to #main-content
- ✅ Skip link is hidden when not focused

#### Test 1.2: Focus Indicators
**Steps:**
1. Navigate to `/blog` page
2. Press `Tab` repeatedly to cycle through all interactive elements
3. Observe focus indicators on each element

**Elements to Check:**
- [ ] Navigation links
- [ ] Search input
- [ ] Category filter pills
- [ ] Post cards (entire card is clickable)
- [ ] Pagination buttons
- [ ] Footer links

**Pass Criteria:**
- ✅ All interactive elements show coral outline when focused
- ✅ Outline is 3px solid with 2px offset
- ✅ Outline is visible against all backgrounds
- ✅ Outline doesn't appear on mouse click (only keyboard)

#### Test 1.3: Tab Order
**Steps:**
1. Navigate to `/blog` page
2. Press `Tab` repeatedly and note the order

**Expected Tab Order:**
1. Skip link (when focused)
2. Navigation menu items
3. Search input
4. "Limpar filtros" button (if filters active)
5. "Todos" filter pill
6. Category filter pills (left to right)
7. Featured post card (if visible)
8. Post cards (left to right, top to bottom)
9. Pagination "Anterior" button
10. Page number buttons
11. Pagination "Próxima" button
12. Newsletter CTA link
13. Footer links

**Pass Criteria:**
- ✅ Tab order is logical and predictable
- ✅ No elements are skipped
- ✅ No keyboard traps (can tab out of all elements)
- ✅ Shift+Tab reverses the order correctly

#### Test 1.4: Keyboard Activation
**Steps:**
1. Tab to each interactive element
2. Try activating with `Enter` and `Space` keys

**Elements to Test:**
- [ ] Links: `Enter` key
- [ ] Buttons: `Enter` or `Space` key
- [ ] Search input: Type text, `Enter` to search
- [ ] Filter pills: `Enter` or `Space` to toggle

**Pass Criteria:**
- ✅ All links activate with `Enter`
- ✅ All buttons activate with `Enter` or `Space`
- ✅ Form inputs accept keyboard input
- ✅ No JavaScript errors on activation

### 2. Screen Reader Testing

#### Test 2.1: Page Structure (NVDA/JAWS/VoiceOver)
**Steps:**
1. Start screen reader
2. Navigate to `/blog` page
3. Use heading navigation (H key in NVDA/JAWS)

**Expected Announcements:**
- "Heading level 1: Histórias, frameworks e guias..."
- "Heading level 2: [Section headings]"
- "Heading level 3: [Post titles]"

**Pass Criteria:**
- ✅ H1 is announced correctly (only one per page)
- ✅ Heading hierarchy is logical (no skipped levels)
- ✅ All major sections have headings

#### Test 2.2: Landmarks (NVDA/JAWS/VoiceOver)
**Steps:**
1. Use landmark navigation (D key in NVDA/JAWS)
2. Navigate through page landmarks

**Expected Landmarks:**
- "Main landmark" (main content area)
- "Navigation landmark" (top navigation)
- "Navigation landmark: breadcrumb" (post page)
- "Navigation landmark: Paginação de artigos" (pagination)
- "Navigation landmark: Índice do artigo" (TOC on post page)
- "Contentinfo landmark" (footer)

**Pass Criteria:**
- ✅ All major sections have appropriate landmarks
- ✅ Landmarks have descriptive labels
- ✅ Can navigate between landmarks easily

#### Test 2.3: ARIA Labels
**Steps:**
1. Navigate to `/blog` page with screen reader
2. Tab through interactive elements
3. Listen to announcements

**Expected Announcements:**
- Search input: "Buscar artigos no blog, edit text"
- Filter pills: "Filtrar por categoria [name], button, not pressed"
- Active filter: "Filtrar por categoria [name], button, pressed"
- Pagination: "Paginação de artigos, navigation"
- Previous button: "Página anterior, button"
- Page number: "Page 1, current page, button"
- Next button: "Próxima página, button"

**Pass Criteria:**
- ✅ All interactive elements have descriptive labels
- ✅ Button states are announced (pressed/not pressed)
- ✅ Current page is announced in pagination
- ✅ No "unlabeled" or "button" only announcements

#### Test 2.4: Post Page TOC
**Steps:**
1. Navigate to any blog post (e.g., `/blog/[slug]`)
2. Find TOC in sidebar with screen reader
3. Navigate through TOC links

**Expected Announcements:**
- "Índice do artigo, navigation"
- "[Heading text], link"
- "[Heading text], link, current location" (for active section)
- "Voltar ao topo da página, button"

**Pass Criteria:**
- ✅ TOC is announced as navigation
- ✅ All links are descriptive
- ✅ Current section is announced
- ✅ "Back to top" button has clear label

#### Test 2.5: Progress Bar
**Steps:**
1. Navigate to any blog post
2. Scroll down the page
3. Listen for progress announcements (may need to enable progress bar announcements)

**Expected:**
- "Progresso de leitura do artigo, progress bar, [X] percent"

**Pass Criteria:**
- ✅ Progress bar is announced as progressbar role
- ✅ Current value is announced
- ✅ Label describes what's being measured

### 3. Color Contrast Testing

#### Test 3.1: Automated Contrast Check
**Tools:**
- Chrome DevTools Lighthouse
- axe DevTools extension
- WAVE extension

**Steps:**
1. Install axe DevTools or WAVE
2. Navigate to `/blog` page
3. Run accessibility scan
4. Check for contrast violations

**Pass Criteria:**
- ✅ No contrast violations reported
- ✅ All text meets WCAG AA (4.5:1 for normal text)
- ✅ Large text meets WCAG AA (3:1 for 18px+ or 14px+ bold)

#### Test 3.2: Manual Contrast Verification
**Use WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/

**Text Combinations to Test:**

| Foreground | Background | Ratio | Pass? |
|------------|------------|-------|-------|
| #3d3d3a (titles) | #ffffff (white) | 10.8:1 | ✅ AAA |
| #6b6b68 (body) | #ffffff (white) | 5.2:1 | ✅ AA |
| #9a9a97 (secondary) | #ffffff (white) | 3.8:1 | ⚠️ Large text only |
| #d97757 (coral links) | #ffffff (white) | 3.8:1 | ⚠️ Large text only |
| #0E8F66 (green) | #ffffff (white) | 4.6:1 | ✅ AA |
| #ffffff (white) | #020F1A (dark) | 16.2:1 | ✅ AAA |
| #6FFFC7 (mint) | #020F1A (dark) | 12.5:1 | ✅ AAA |

**Pass Criteria:**
- ✅ All body text (16px) meets 4.5:1 ratio
- ✅ All large text (18px+) meets 3:1 ratio
- ✅ Focus indicators meet 3:1 ratio with background

#### Test 3.3: Visual Inspection
**Steps:**
1. Navigate to `/blog` page
2. Visually inspect all text elements
3. Check readability in different lighting conditions

**Elements to Check:**
- [ ] Page titles (H1)
- [ ] Section headings (H2, H3)
- [ ] Body text
- [ ] Links (coral color)
- [ ] Button text
- [ ] Badge text
- [ ] Placeholder text
- [ ] Metadata (dates, reading time)

**Pass Criteria:**
- ✅ All text is easily readable
- ✅ No eye strain when reading
- ✅ Links are distinguishable from body text
- ✅ Disabled elements are visually distinct

### 4. Reduced Motion Testing

#### Test 4.1: Browser Setting
**Steps:**
1. Enable reduced motion in OS settings:
   - **Windows**: Settings > Ease of Access > Display > Show animations
   - **macOS**: System Preferences > Accessibility > Display > Reduce motion
   - **Linux**: Varies by desktop environment
2. Navigate to `/blog` page
3. Observe animations

**Pass Criteria:**
- ✅ Card entrance animations are disabled
- ✅ Hover scale effects are disabled
- ✅ Smooth scrolling is disabled (instant jumps)
- ✅ Progress bar still works (no animation)
- ✅ Page remains fully functional

#### Test 4.2: DevTools Emulation
**Steps (Chrome):**
1. Open DevTools (F12)
2. Open Command Menu (Ctrl+Shift+P / Cmd+Shift+P)
3. Type "Emulate CSS prefers-reduced-motion"
4. Select "Emulate CSS prefers-reduced-motion: reduce"
5. Navigate to `/blog` page

**Pass Criteria:**
- ✅ Same as Test 4.1
- ✅ No console errors
- ✅ Layout doesn't break

### 5. Form Accessibility Testing

#### Test 5.1: Search Input
**Steps:**
1. Navigate to `/blog` page
2. Tab to search input
3. Type search query
4. Observe behavior

**Pass Criteria:**
- ✅ Input has visible label (aria-label)
- ✅ Placeholder text is supplementary
- ✅ Focus indicator is visible
- ✅ Can type and delete text
- ✅ Search icon is decorative (aria-hidden)

#### Test 5.2: Newsletter Form (Post Page)
**Steps:**
1. Navigate to any blog post
2. Scroll to newsletter form
3. Tab through form elements
4. Try submitting (will preventDefault)

**Pass Criteria:**
- ✅ Form has accessible name (aria-label)
- ✅ Email input has label
- ✅ Submit button has descriptive text
- ✅ Required attribute is present
- ✅ Focus indicators visible on all fields

### 6. Link Context Testing

#### Test 6.1: Descriptive Links
**Steps:**
1. Navigate to `/blog` page with screen reader
2. Use links list (Insert+F7 in NVDA)
3. Review all link text

**Links to Check:**
- [ ] "Ler artigo completo" (on featured card)
- [ ] "Ler artigo" (on post cards)
- [ ] "Voltar ao blog" (on empty state)
- [ ] "Limpar filtros" (when filters active)
- [ ] "Criar minha conta" (newsletter CTA)
- [ ] "Compartilhar no Twitter" (post page)
- [ ] "Voltar ao topo da página" (post page)

**Pass Criteria:**
- ✅ All links make sense out of context
- ✅ No "click here" or "read more" without context
- ✅ Links describe destination or action
- ✅ Duplicate links have unique labels (aria-label)

#### Test 6.2: External Links
**Steps:**
1. Navigate to blog post page
2. Find share links (Twitter, LinkedIn, Facebook)
3. Check link attributes

**Pass Criteria:**
- ✅ All external links have `target="_blank"`
- ✅ All external links have `rel="noopener noreferrer"`
- ✅ All external links have descriptive aria-label
- ✅ Screen reader announces "opens in new window"

### 7. Image Accessibility Testing

#### Test 7.1: Alt Text
**Steps:**
1. Navigate to `/blog` page
2. Inspect post card images
3. Check alt attributes

**Pass Criteria:**
- ✅ All content images have descriptive alt text
- ✅ Alt text describes image content, not "image of..."
- ✅ Decorative images have empty alt (`alt=""`)
- ✅ Decorative images have `aria-hidden="true"`

#### Test 7.2: Image Loading
**Steps:**
1. Navigate to `/blog` page
2. Disable images in browser
3. Check if content is still understandable

**Pass Criteria:**
- ✅ Alt text provides sufficient context
- ✅ Page layout doesn't break
- ✅ Links are still functional
- ✅ No broken image icons

### 8. Responsive Accessibility Testing

#### Test 8.1: Mobile Keyboard Navigation
**Steps:**
1. Open `/blog` page on mobile device or emulator
2. Connect external keyboard (or use on-screen keyboard)
3. Tab through all elements

**Pass Criteria:**
- ✅ All elements are reachable
- ✅ Focus indicators are visible
- ✅ No horizontal scrolling required
- ✅ Touch targets are at least 44x44px

#### Test 8.2: Mobile Screen Reader
**Steps:**
1. Enable VoiceOver (iOS) or TalkBack (Android)
2. Navigate to `/blog` page
3. Swipe through all elements

**Pass Criteria:**
- ✅ All elements are announced
- ✅ Swipe order is logical
- ✅ Buttons and links are distinguishable
- ✅ Images have alt text

### 9. Browser Compatibility Testing

#### Test 9.1: Cross-Browser Focus Visible
**Browsers to Test:**
- [ ] Chrome 86+
- [ ] Firefox 85+
- [ ] Safari 15.4+
- [ ] Edge 86+

**Steps:**
1. Open `/blog` page in each browser
2. Tab through interactive elements
3. Observe focus indicators

**Pass Criteria:**
- ✅ Focus indicators appear in all browsers
- ✅ Coral outline is consistent
- ✅ No browser-specific issues

#### Test 9.2: Cross-Browser ARIA Support
**Steps:**
1. Test with screen reader in each browser
2. Verify ARIA labels are announced
3. Check for browser-specific issues

**Pass Criteria:**
- ✅ ARIA labels work in all browsers
- ✅ No missing announcements
- ✅ Consistent behavior across browsers

## Automated Testing Tools

### Recommended Tools

#### 1. axe DevTools (Browser Extension)
**Installation:**
- Chrome: https://chrome.google.com/webstore (search "axe DevTools")
- Firefox: https://addons.mozilla.org/firefox (search "axe DevTools")

**Usage:**
1. Install extension
2. Open DevTools (F12)
3. Click "axe DevTools" tab
4. Click "Scan ALL of my page"
5. Review violations and warnings

**What to Check:**
- Color contrast violations
- Missing ARIA labels
- Keyboard accessibility issues
- Form label associations

#### 2. WAVE (Web Accessibility Evaluation Tool)
**Installation:**
- Chrome/Firefox: Search for "WAVE" in extension store

**Usage:**
1. Install extension
2. Navigate to page
3. Click WAVE icon
4. Review visual feedback

**What to Check:**
- Red icons: Errors (must fix)
- Yellow icons: Alerts (review)
- Green icons: Features (good practices)
- Blue icons: Structural elements

#### 3. Lighthouse (Chrome DevTools)
**Usage:**
1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Accessibility" category
4. Click "Generate report"

**What to Check:**
- Accessibility score (aim for 95+)
- Failed audits
- Passed audits
- Manual checks needed

#### 4. Pa11y (Command Line)
**Installation:**
```bash
npm install -g pa11y
```

**Usage:**
```bash
pa11y http://localhost:5173/blog
pa11y http://localhost:5173/blog/[slug]
```

**What to Check:**
- WCAG 2.1 Level AA violations
- Console output for errors
- HTML validation issues

## Regression Testing Checklist

### Before Each Release
- [ ] Run axe DevTools scan on all blog pages
- [ ] Test keyboard navigation on Blog listing
- [ ] Test keyboard navigation on Post page
- [ ] Verify focus indicators are visible
- [ ] Test with screen reader (spot check)
- [ ] Check color contrast (automated)
- [ ] Test reduced motion preference
- [ ] Verify skip link works
- [ ] Check ARIA labels are present
- [ ] Test on mobile device

### Monthly Audits
- [ ] Full screen reader testing (NVDA/JAWS/VoiceOver)
- [ ] Manual color contrast verification
- [ ] Cross-browser testing
- [ ] Mobile accessibility testing
- [ ] User testing with people with disabilities
- [ ] Review and update documentation

## Common Issues and Solutions

### Issue 1: Focus Indicator Not Visible
**Symptoms:** Outline doesn't appear when tabbing
**Solution:** Check for `outline: none` in CSS, ensure `:focus-visible` is supported

### Issue 2: Screen Reader Not Announcing Labels
**Symptoms:** "Unlabeled button" or "button" only
**Solution:** Add `aria-label` or ensure visible label is associated

### Issue 3: Keyboard Trap
**Symptoms:** Can't tab out of element
**Solution:** Check for `tabindex="-1"` or JavaScript preventing default

### Issue 4: Low Contrast
**Symptoms:** Text is hard to read
**Solution:** Increase color contrast, use darker text or lighter background

### Issue 5: Animations Cause Motion Sickness
**Symptoms:** User reports dizziness
**Solution:** Ensure `prefers-reduced-motion` is respected

## Success Criteria Summary

### WCAG 2.1 Level AA Compliance
- ✅ All text meets 4.5:1 contrast ratio (or 3:1 for large text)
- ✅ All functionality available via keyboard
- ✅ Focus indicators visible (3:1 contrast with background)
- ✅ No keyboard traps
- ✅ Skip links provided
- ✅ Headings are hierarchical
- ✅ Links are descriptive
- ✅ ARIA labels provide context
- ✅ Forms have labels
- ✅ Images have alt text
- ✅ Reduced motion is respected

### User Experience Goals
- ✅ Screen reader users can navigate efficiently
- ✅ Keyboard-only users can access all features
- ✅ Users with low vision can read all text
- ✅ Users with motion sensitivity can disable animations
- ✅ Mobile users have accessible touch targets
- ✅ All users have a consistent, predictable experience

## Conclusion

This testing guide ensures that all accessibility improvements are thoroughly validated. Regular testing with real users and assistive technologies is essential for maintaining accessibility standards.

For questions or issues, refer to:
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM Resources: https://webaim.org/
- MDN Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility
