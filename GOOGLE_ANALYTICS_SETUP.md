# Google Analytics Setup Guide

## 🚀 Quick Setup

1. **Create a Google Analytics Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Sign up for a free account
   - Create a new property for your website

2. **Get Your Tracking ID**
   - In Google Analytics, go to Admin → Property Settings
   - Copy your Measurement ID (starts with "G-")

3. **Add to Your Website**
   - Create a `.env.local` file in your project root
   - Add this line:
     ```
     NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID-HERE
     ```
   - Replace `G-YOUR-ACTUAL-ID-HERE` with your real tracking ID

4. **Deploy**
   - Your website will automatically start tracking visitors
   - View analytics at [analytics.google.com](https://analytics.google.com)

## 📊 What This Tracks

- Page views and user sessions
- Traffic sources (Google, Instagram, direct, etc.)
- Popular pages and content
- User demographics and interests
- Device and browser information

## 🔒 Privacy Compliant

- Cookie banner asks for consent before tracking
- Users can opt-out anytime
- Complies with CCPA and GDPR regulations
- No personal data is collected without consent

## 💡 Benefits

- **Professional credibility** - Shows you're serious about your business
- **Audience insights** - Understand who visits your site
- **Content optimization** - See what resonates with visitors
- **Brand partnerships** - Provide analytics data to potential collaborators
- **Growth tracking** - Monitor your website's success over time

## 🛠️ Troubleshooting

**Not seeing data?**
- Wait 24-48 hours for data to appear
- Check that your tracking ID is correct
- Ensure cookies are accepted by visitors
- Verify the website is live and receiving traffic

**Need help?**
- Contact Pedro at theadventurerguy@gmail.com
- Check Google Analytics documentation
- Ensure your `.env.local` file is in the project root







