# CTA Section Background Image Setup

## What's Been Done ✅
The new CTA section component has been implemented with full-width design, gradient overlay, and responsive behavior. The component is ready and compiled without errors.

## What's Needed 🔄
You need to provide the background image file and place it in the correct location.

### Image Placement
**Destination Path:**
```
/Users/jgatjens/Development/jgatjens.com/public/assets/img/lets-talk-background.jpg
```

### Requirements
- **Filename:** `lets-talk-background.jpg`
- **Location:** `public/assets/img/`
- **Format:** JPG or equivalent image format
- **Image:** Use the supplied mountain photo (the landscape with hikers)
- **Recommended size:** Optimized for web (e.g., 1920x1200 or similar, compressed for performance)

### Steps to Add the Image
1. Export/save one of the mountain landscape images you provided as attachments
2. Rename it to `lets-talk-background.jpg`
3. Place it in the `public/assets/img/` directory

### Verification
Once the image is in place:
- The CTA section will display with the background image on the right
- Gradient overlay will smoothly transition from white (left) to transparent (right)
- Desktop: Background visible on right, content on left
- Mobile: Full white overlay, background centered on hikers/mountains

## Component Reference
The component code is located at:
```
/Users/jgatjens/Development/jgatjens.com/components/cta-section/cta-section.tsx
```

**Key Features Implemented:**
- Full-width layout with background image
- White-to-transparent gradient overlay (responsive opacity)
- Eyebrow: "LET'S WORK TOGETHER"
- Heading: "Have a project in mind?"
- Description: Multi-line text with large typography
- Availability indicator with green dot
- Location info with pin icon
- Primary "Let's Talk →" button (dark navy)
- Secondary links: Email me ↗ · LinkedIn ↗ · View Resume ↗
- Responsive: Desktop (bg-right), Mobile (bg-center, increased overlay)
- Backward compatible with existing Footer usage

## Next Steps (After Adding Image)
1. ✅ Add background image to `public/assets/img/`
2. ⏳ Test responsive behavior at different breakpoints
3. ⏳ Verify all links work correctly
4. ⏳ Validate visual appearance matches the reference design

That's it! Once the image is placed, the component will be fully functional.
