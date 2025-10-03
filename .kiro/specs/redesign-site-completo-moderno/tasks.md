# Implementation Plan

- [ ] 1. Set up modern design system foundation
  - Create `src/styles/modern-design-system.css` with CSS custom properties for spacing scale (8px base), border radius (12-32px), shadows (soft, card, glow variants), typography scale (0.75rem-4.5rem), and transition timings
  - Create `src/styles/animations.css` with GPU-accelerated keyframe animations for fade-up, scale-in, float, and parallax effects
  - Update `src/App.css` to import new design system files and add utility classes for modern shadows, gradients, and spacing
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

- [ ] 2. Create modern UI components
- [ ] 2.1 Create modern Card component
  - Write `src/components/ui/card.jsx` with variants (default, featured, glass, gradient), sizes (sm, md, lg), hover elevation effects, and glow prop for coral/mint shadows
  - Implement 24-28px border-radius, 2rem padding, soft shadows, and smooth 300ms transitions
  - Add hover state with translateY(-4px) and increased shadow
  - _Requirements: 4.1, 4.2, 4.3, 4.6_

- [ ] 2.2 Update Button component with premium styles
  - Update `src/components/ui/button.jsx` with new variants (primary coral, secondary mint, outline, ghost, gradient)
  - Implement large sizes (padding 0.875rem-2rem), 12px border-radius, glow shadows for primary buttons
  - Add hover effects: scale(1.02), increased saturation, glow shadow expansion
  - Add icon support with left/right positioning and proper gap spacing
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [ ] 2.3 Create Badge component for tags
  - Write `src/components/ui/badge.jsx` with pastel color variants (yellow, mint, lavender, peach)
  - Implement full border-radius, small padding (0.5rem 1rem), and subtle backgrounds
  - Add hover scale effect and smooth transitions
  - _Requirements: 4.4, 7.7_

- [ ] 2.4 Create AnimatedSection wrapper component
  - Write `src/components/ui/animated-section.jsx` using Intersection Observer API
  - Implement animation types: fade-up, fade-in, scale, slide-left, slide-right
  - Add stagger delay support for multiple children
  - Respect prefers-reduced-motion media query
  - _Requirements: 10.1, 10.2, 12.5_

- [ ] 3. Update Navigation with modern header design
  - Update `src/components/global/Navigation.jsx` with fixed position and backdrop-blur-md
  - Implement white background with opacity 0.95 and subtle border-bottom on scroll
  - Add animated underline on link hover (width 0 → 100% with coral color)
  - Update logo size to 48px with subtle hover scale(1.02)
  - Style CTA button with coral background and glow shadow
  - Improve mobile menu with slide-in drawer animation
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_

- [ ] 4. Update Footer with professional layout
  - Update `src/components/global/Footer.jsx` with bege escuro background (#f0efe6)
  - Implement 4-column layout (responsive: 4 desktop, 2 tablet, 1 mobile)
  - Style links with cinza médio color and coral hover
  - Add social icons with white circular backgrounds, subtle borders, and hover scale
  - Add divider between main content and copyright section
  - Style copyright text with smaller size and muted color
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7_

- [ ] 5. Update Hero Section with premium design
  - Update `src/components/home/sections/HeroSection.jsx` with min-height 90vh
  - Implement gradient background (white → bege claro → coral lightest)
  - Add decorative blobs with absolute positioning, blur-3xl, and coral/mint colors
  - Update title to clamp(3.5rem, 6vw, 5.5rem) with font-weight 800 and gradient text effect
  - Update subtitle to 1.25rem-1.5rem with muted color
  - Style CTAs with large padding (1rem 2.5rem) and glow shadows
  - Add floating visual elements with float animation
  - Implement fade-in-up animation on page load
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [ ] 6. Update Why Choose Section with modern cards
  - Update `src/components/home/sections/WhyChooseSection.jsx` to use new Card component
  - Implement responsive grid (1-2-3 columns) with 24-32px gap
  - Add icons with coral/mint colors (48px size)
  - Style card titles with 1.5rem-2rem size and font-weight 700
  - Add hover elevation effect on cards
  - Wrap section in AnimatedSection for scroll animations
  - _Requirements: 4.1, 4.2, 4.3, 5.1, 5.2, 5.3, 5.4, 5.6_

- [ ] 7. Update Stats Section with visual statistics
  - Update `src/components/home/sections/StatsSection.jsx` with responsive grid (2-4 columns)
  - Style numbers with 3.5rem size, font-weight 800, and gradient text (coral → mint)
  - Add icons with 48px size and coral/mint colors
  - Implement counter animation (0 → final value) using Intersection Observer
  - Use Card component for stat containers with white background and soft shadow
  - Add subtle hover scale(1.02) effect
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7_

- [ ] 8. Update Testimonials Section with premium design
  - Update `src/components/home/sections/TestimonialsCarouselSection.jsx` with 28px border-radius cards
  - Add large decorative quote marks with coral color and opacity 0.15
  - Style avatar as 64px circular image with 3px white border
  - Add rating display (stars or badges) with mint color
  - Implement smooth carousel transitions (500ms)
  - Add navigation dots below and arrows on sides
  - Implement auto-play with 5s interval and pause on hover
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7_

- [ ] 9. Update Top Companies Section with modern grid
  - Update `src/components/home/sections/TopCompaniesSection.jsx` with responsive grid (2-4-6 columns)
  - Style logo containers with white background, subtle border, 20px radius, and 1.5rem padding
  - Apply grayscale filter to logos with transition to color on hover
  - Implement hover effects: scale(1.05), float animation pause, color filter
  - Add subtle float animation (translateY -8px, 6s duration) to logo containers
  - Set gap to 24px between grid items
  - _Requirements: 4.5, 10.4, 10.6_

- [ ] 10. Update CTA Section with impactful design
  - Update `src/components/home/sections/CTASection.jsx` with centered layout
  - Style title with 2.5rem-3.5rem size and font-weight 700
  - Add gradient background or decorative elements
  - Style CTA buttons with large size, glow shadows, and prominent positioning
  - Add subtle animation effects on scroll
  - _Requirements: 3.4, 6.1, 6.7_

- [ ] 11. Implement scroll animations across all sections
  - Create `src/hooks/useScrollAnimation.js` hook using Intersection Observer
  - Wrap all major sections (WhyChoose, Stats, Testimonials, Companies, CTA) in AnimatedSection
  - Configure stagger delays for sequential element animations
  - Set appropriate threshold values (0.1-0.3) for animation triggers
  - Ensure animations respect prefers-reduced-motion
  - _Requirements: 10.1, 10.2, 5.6, 12.5_

- [ ] 12. Implement responsive design and mobile optimization
  - Update all components to use clamp() for fluid typography
  - Adjust section padding for mobile (3rem-4rem) vs desktop (5rem-8rem)
  - Convert 50/50 layouts to single column on mobile
  - Adjust grid columns: 1 mobile, 2 tablet, 3-4 desktop
  - Ensure touch targets are minimum 44x44px
  - Test and fix layouts at breakpoints: 375px, 768px, 1024px, 1440px
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7_

- [ ] 13. Implement accessibility features
  - Add 3px coral outline with 2px offset for focus-visible states
  - Verify color contrast ratios meet WCAG 2.1 AA (4.5:1 minimum)
  - Add proper ARIA labels to all interactive elements
  - Ensure logical tab order and keyboard navigation
  - Add skip-to-main-content link
  - Test with screen readers
  - Implement prefers-reduced-motion support for all animations
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7_

- [ ] 14. Optimize performance and animations
  - Ensure all animations use only transform and opacity (GPU-accelerated)
  - Apply will-change only during active animations
  - Implement lazy loading for images below the fold
  - Use CSS containment (contain: layout style paint) for animated elements
  - Optimize shadow rendering with appropriate blur values
  - Monitor and maintain 60fps during animations
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.6_

- [ ] 15. Final testing and polish
  - Run Lighthouse audits and achieve 90+ scores
  - Test across browsers: Chrome, Firefox, Safari, Edge
  - Verify responsive layouts on real devices
  - Test keyboard navigation and screen reader compatibility
  - Verify all animations are smooth and performant
  - Check for any layout shifts or visual bugs
  - Validate color contrast and accessibility compliance
  - _Requirements: All requirements validation_
