# Task 17: Hover Effects - Technical Reference

## Overview
This document provides technical details about the hover effects implementation for the blog redesign, including CSS classes, timing functions, and best practices.

## Transition Standards

### Standard Transition Pattern
All hover effects follow this pattern:
```jsx
className="transition-{property} duration-300 ease-in-out hover:{effect}"
```

### Timing Function
**Cubic-bezier:** `cubic-bezier(0.4, 0, 0.2, 1)`
- This is Tailwind's `ease-in-out` curve
- Provides smooth acceleration and deceleration
- Natural, polished feel for all interactions

### Duration
**Standard:** `300ms` (duration-300)
- Fast enough to feel responsive
- Slow enough to be smooth and noticeable
- Consistent across all components

## Component-Specific Implementations

### 1. PostCard Component

#### Container
```jsx
className="... transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[...]"
```
**Properties animated:**
- `transform`: translateY(-6px) - lifts card up
- `box-shadow`: Enhanced multi-layer shadow
- `border-color`: Subtle enhancement (via gradient overlay)

#### Gradient Overlay
```jsx
className="... transition-opacity duration-300 ease-in-out group-hover:opacity-100"
```
**Properties animated:**
- `opacity`: 0 → 100 - reveals gradient on hover

#### Image
```jsx
className="... transition-transform duration-300 ease-in-out group-hover:scale-110"
```
**Properties animated:**
- `transform`: scale(1.10) - zooms image

#### Title
```jsx
className="... transition-colors duration-300 ease-in-out group-hover:text-[#0E8F66]"
```
**Properties animated:**
- `color`: #02161F → #0E8F66 - changes to brand green

#### CTA Container
```jsx
className="... transition-all duration-300 ease-in-out group-hover:gap-3"
```
**Properties animated:**
- `gap`: 0.5rem → 0.75rem - increases spacing

#### Arrow Icon
```jsx
className="... transition-transform duration-300 ease-in-out group-hover:translate-x-1"
```
**Properties animated:**
- `transform`: translateX(0.25rem) - moves right

### 2. FeaturedPostCard Component

#### Container
```jsx
className="... transition-transform duration-300 ease-in-out hover:scale-[1.02]"
```
**Properties animated:**
- `transform`: scale(1.02) - subtle growth

#### Image
```jsx
className="... transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
```
**Properties animated:**
- `transform`: scale(1.02) - synchronized with container

#### Title
```jsx
className="... transition-colors duration-300 ease-in-out group-hover:text-[#6FFFC7]"
```
**Properties animated:**
- `color`: white → #6FFFC7 - changes to mint green

#### CTA Container
```jsx
className="... transition-all duration-300 ease-in-out group-hover:gap-3"
```
**Properties animated:**
- `gap`: 0.5rem → 0.75rem - increases spacing

#### Arrow Icon
```jsx
className="... transition-transform duration-300 ease-in-out group-hover:translate-x-1"
```
**Properties animated:**
- `transform`: translateX(0.25rem) - moves right

### 3. Category Filter Pills

#### Inactive Pills
```jsx
className="... transition-all duration-300 hover:border-[#0E8F66]/40 hover:bg-white hover:text-[#0E8F66] hover:shadow-sm"
```
**Properties animated:**
- `border-color`: slate-200 → #0E8F66/40
- `background-color`: white/90 → white
- `color`: slate-600 → #0E8F66
- `box-shadow`: none → shadow-sm

#### Active Pills
```jsx
className="... transition-all duration-300 hover:bg-[#6FFFC7] hover:shadow-[...]"
```
**Properties animated:**
- `background-color`: #6FFFC7/90 → #6FFFC7
- `box-shadow`: Enhanced shadow

### 4. Pagination Buttons

#### Button Container
```jsx
className="group ... transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:border-[#0E8F66]/40 hover:text-[#0E8F66]"
```
**Properties animated:**
- `transform`: translateY(-0.125rem) - subtle lift
- `box-shadow`: shadow-sm → shadow-md
- `border-color`: slate-200 → #0E8F66/40
- `color`: slate-600 → #0E8F66

#### Arrow Icons
```jsx
className="... transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
// or
className="... transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5"
```
**Properties animated:**
- `transform`: translateX(±0.125rem) - directional movement

### 5. TOC Links

#### Link Element
```jsx
className="... transition-all duration-300 hover:text-[#d97757] hover:bg-slate-50"
```
**Properties animated:**
- `color`: slate-600 → #d97757 (coral)
- `background-color`: transparent → slate-50

#### Active State
```jsx
className="... bg-[#d97757]/10 text-[#d97757] font-semibold shadow-sm"
```
**Static properties (no transition):**
- Background with coral tint
- Coral text color
- Semibold font weight
- Subtle shadow

### 6. Share Buttons

#### Button Element
```jsx
className="... transition-all duration-300 ease-in-out hover:border-[#0E8F66]/40 hover:text-[#0b7453]"
```
**Properties animated:**
- `border-color`: slate-200 → #0E8F66/40
- `color`: #0E8F66 → #0b7453 (darker green)

## Performance Optimization

### GPU-Accelerated Properties
Only these properties are animated (GPU-accelerated):
- `transform` (translate, scale, rotate)
- `opacity`
- `color` (via CSS transitions)
- `background-color` (via CSS transitions)
- `border-color` (via CSS transitions)
- `box-shadow` (via CSS transitions)

### Avoided Properties
These properties are NOT animated (cause repaints/reflows):
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `font-size`

### Will-Change Usage
The `blog-card-entrance` animation class includes `will-change: transform, opacity` to hint to the browser about upcoming animations.

## Accessibility Considerations

### Reduced Motion Support
Global CSS rule in `App.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This automatically disables all hover transitions for users who prefer reduced motion.

### Focus States
All interactive elements maintain visible focus indicators:
```css
*:focus-visible {
  outline: 3px solid rgba(217, 119, 87, 0.6);
  outline-offset: 2px;
  border-radius: 4px;
}
```

Focus states are independent of hover states and remain visible during hover.

### Touch Devices
The `group` class pattern ensures hover effects only apply on actual hover, not on touch:
```jsx
<Link className="group ...">
  <div className="group-hover:scale-110">...</div>
</Link>
```

On touch devices, the hover state is only active during the tap, preventing stuck hover states.

## Browser Compatibility

### Supported Browsers
- Chrome/Edge 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Mobile Chrome 90+ ✅
- Mobile Safari 14+ ✅

### Fallbacks
All transitions gracefully degrade in older browsers:
- Transitions simply don't animate (instant state change)
- Functionality remains intact
- No JavaScript required

## Best Practices

### 1. Use Explicit Transition Properties
❌ Bad:
```jsx
className="transition hover:scale-110"
```

✅ Good:
```jsx
className="transition-transform duration-300 ease-in-out hover:scale-110"
```

### 2. Group Related Elements
❌ Bad:
```jsx
<div className="hover:scale-110">
  <img className="hover:scale-110" />
</div>
```

✅ Good:
```jsx
<div className="group">
  <img className="group-hover:scale-110" />
</div>
```

### 3. Consistent Timing
❌ Bad:
```jsx
className="transition-transform duration-500 hover:scale-110"
className="transition-colors duration-200 hover:text-green"
```

✅ Good:
```jsx
className="transition-transform duration-300 ease-in-out hover:scale-110"
className="transition-colors duration-300 ease-in-out hover:text-green"
```

### 4. GPU-Accelerated Properties Only
❌ Bad:
```jsx
className="transition-all hover:w-full hover:h-full"
```

✅ Good:
```jsx
className="transition-transform hover:scale-110"
```

### 5. Semantic Hover Effects
❌ Bad:
```jsx
className="hover:rotate-180 hover:scale-150"
```

✅ Good:
```jsx
className="hover:-translate-y-1 hover:shadow-lg"
```

## Debugging Tips

### 1. Check Transition Property
Ensure the property being animated is included in the transition:
```jsx
// This won't work - transform not in transition
className="transition-colors hover:scale-110"

// This works
className="transition-transform hover:scale-110"
```

### 2. Verify Duration
Check that duration is specified:
```jsx
// May use default duration (not consistent)
className="transition-transform hover:scale-110"

// Explicit duration
className="transition-transform duration-300 hover:scale-110"
```

### 3. Group Hover Issues
Ensure parent has `group` class:
```jsx
// Won't work - no group class
<div>
  <img className="group-hover:scale-110" />
</div>

// Works
<div className="group">
  <img className="group-hover:scale-110" />
</div>
```

### 4. Performance Issues
Use Chrome DevTools Performance tab:
1. Record during hover
2. Look for long tasks (>50ms)
3. Check for layout/paint (should only see compositing)
4. Verify 60fps maintained

### 5. Reduced Motion Not Working
Check global CSS rule is present in `App.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}
```

## Testing Checklist

- [ ] All transitions use 300ms duration
- [ ] All transitions use ease-in-out timing
- [ ] Only GPU-accelerated properties animated
- [ ] Group classes used correctly
- [ ] Focus states remain visible
- [ ] Reduced motion respected
- [ ] 60fps maintained during hover
- [ ] No layout shifts
- [ ] Cross-browser compatible
- [ ] Touch devices work correctly

## Maintenance

### Adding New Hover Effects
When adding new hover effects, follow this pattern:

1. **Choose the right transition property:**
   - `transition-transform` for movement/scale
   - `transition-colors` for color changes
   - `transition-opacity` for fade effects
   - `transition-all` only when multiple properties change

2. **Add explicit duration and easing:**
   ```jsx
   duration-300 ease-in-out
   ```

3. **Use group pattern for child elements:**
   ```jsx
   <div className="group">
     <div className="group-hover:...">
   ```

4. **Test performance:**
   - Open DevTools Performance tab
   - Verify 60fps
   - Check for layout shifts

5. **Test accessibility:**
   - Enable reduced motion
   - Verify focus states
   - Test keyboard navigation

### Updating Existing Effects
When modifying hover effects:

1. Maintain 300ms duration
2. Keep ease-in-out timing
3. Test cross-browser
4. Verify performance
5. Update documentation

## References

### Tailwind CSS Transitions
- [Transition Property](https://tailwindcss.com/docs/transition-property)
- [Transition Duration](https://tailwindcss.com/docs/transition-duration)
- [Transition Timing Function](https://tailwindcss.com/docs/transition-timing-function)

### CSS Transitions
- [MDN: Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [MDN: transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

### Performance
- [CSS Triggers](https://csstriggers.com/)
- [High Performance Animations](https://web.dev/animations-guide/)

### Accessibility
- [WCAG 2.1: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

## Conclusion

This technical reference provides all the details needed to maintain and extend the hover effects system. By following these patterns and best practices, you can ensure consistent, performant, and accessible hover interactions throughout the blog.
