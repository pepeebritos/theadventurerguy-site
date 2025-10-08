# Assets You Need to Add

This guide explains what media files you need to add to complete your site.

## 📹 1. Hero Videos (REQUIRED)

**Location:** `/public/videos/`

You need **2 videos** that will crossfade as users scroll:

### Video 1 (First Hero)
- **File:** `/public/videos/hero1.mp4`
- **Poster:** `/public/videos/hero1.jpg` (thumbnail shown before video loads)

### Video 2 (Second Hero - Crossfade)
- **File:** `/public/videos/hero2.mp4`  
- **Poster:** `/public/videos/hero2.jpg` (thumbnail shown before video loads)

### Video Recommendations:
- **Format:** MP4 (H.264 codec for best browser compatibility)
- **Resolution:** 1920x1080 or higher (will scale down on mobile)
- **Aspect Ratio:** 16:9 works best
- **Length:** 10-30 seconds (it loops)
- **File Size:** Keep under 5-10MB each for fast loading
  - Use a tool like [HandBrake](https://handbrake.fr/) to compress
  - Try settings: CRF 23-28, preset "Fast", web optimized
- **Content:** Choose cinematic outdoor shots that represent your brand
  - Video 1: Your signature shot (what people see first)
  - Video 2: A complementary scene (crossfades in as they scroll)

### Poster Images:
- **Format:** JPG or WebP
- **Size:** Same as video resolution (e.g., 1920x1080)
- **Purpose:** Shows while video loads, improves perceived performance

---

## 📸 2. Bio Portrait Photo

**Location:** `/public/images/pedro.jpg`

Your professional portrait for the Bio section.

### Recommendations:
- **Format:** JPG or WebP
- **Dimensions:** 800x1000px (portrait orientation, 4:5 ratio)
- **Content:** Professional outdoor/adventure portrait
- **Quality:** High resolution, well-lit, in your element

---

## 🖼️ 3. Gallery Photos

**Location:** `/public/photos/`

Your adventure/landscape photography gallery. Currently configured for 9 photos, but you can add more or fewer by editing `/src/lib/photos.ts`.

### Current Expected Files:
```
/public/photos/mountain-peak-1.jpg
/public/photos/coastal-cliffs-1.jpg
/public/photos/forest-trail-1.jpg
/public/photos/desert-dunes-1.jpg
/public/photos/waterfall-1.jpg
/public/photos/alpine-lake-1.jpg
/public/photos/canyon-view-1.jpg
/public/photos/glacier-1.jpg
/public/photos/night-sky-1.jpg
```

### Photo Recommendations:
- **Format:** JPG or WebP
- **Size:** 1920x1280 (landscape) or 1280x1920 (portrait)
- **Mix:** Use both landscape and portrait orientations for visual variety
- **Quality:** High resolution, well-composed adventure shots
- **Optimization:** Compress before uploading (use [Squoosh](https://squoosh.app/))

### To Add/Remove/Change Photos:
Edit `/src/lib/photos.ts` and update the array with your actual filenames and descriptions.

---

## 🎯 Quick Start Checklist

1. ✅ Created directories: `videos/`, `images/`, `photos/`
2. ⬜ Add 2 hero videos (hero1.mp4, hero2.mp4)
3. ⬜ Add 2 hero posters (hero1.jpg, hero2.jpg)
4. ⬜ Add bio portrait (pedro.jpg)
5. ⬜ Add 9 gallery photos (or customize the list in photos.ts)

---

## 🛠️ Video Compression Tips

### Using FFmpeg (Command Line):
```bash
# Compress video to web-optimized MP4
ffmpeg -i input.mov -c:v libx264 -crf 26 -preset slow -movflags +faststart -c:a aac -b:a 128k hero1.mp4

# Extract poster frame (at 2 seconds)
ffmpeg -i hero1.mp4 -ss 00:00:02 -vframes 1 hero1.jpg
```

### Using HandBrake (GUI):
1. Open your video file
2. Choose "Fast 1080p30" preset
3. Set Quality: RF 26
4. Check "Web Optimized"
5. Save as hero1.mp4

---

## 📱 Testing

After adding your assets:

1. Run the dev server: `npm run dev`
2. Open http://localhost:3000
3. Check that:
   - Videos load and play when scrolling
   - Crossfade works smoothly
   - Portrait appears in Bio section
   - Gallery photos display correctly
   - Everything looks good on mobile (resize browser)

---

## 🔄 Optional: Using Different Filenames

If you want to use different filenames, update:

**For videos:** `/src/app/page.tsx` (lines 16-19)
```tsx
videos={[
  { src: "/videos/your-video-1.mp4", poster: "/videos/your-poster-1.jpg" },
  { src: "/videos/your-video-2.mp4", poster: "/videos/your-poster-2.jpg" },
]}
```

**For portrait:** `/src/components/Bio.tsx` (line 9)
```tsx
src="/images/your-portrait.jpg"
```

**For gallery:** `/src/lib/photos.ts` (entire file)












