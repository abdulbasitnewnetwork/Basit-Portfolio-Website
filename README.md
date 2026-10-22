# Abdul Basit - Professional Portfolio

A modern, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. Features dark/light mode, smooth navigation, networking labs, case studies, and more.

## 🚀 Quick Start

### How to View the Portfolio

1. Navigate to the project folder
2. Open `index.html` in your web browser
3. The portfolio will load with your default theme (dark or light based on system preference)

No installation, build tools, or dependencies required. Just open and view!

## 📁 File Structure

```
myproject/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # JavaScript interactions and functionality
├── README.md           # This file
└── text.html           # (Optional, not used)
```

## 🎨 Features

- ✅ **Dark & Light Mode** - Toggle theme with persistent localStorage
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Smooth Navigation** - Sticky nav with active section highlighting
- ✅ **Mobile Menu** - Hamburger menu for small screens
- ✅ **Network Diagram** - Interactive SVG architecture diagram
- ✅ **Expandable Labs** - Click to learn about networking topics
- ✅ **Form Validation** - Client-side contact form with real-time feedback
- ✅ **Back-to-Top Button** - Appears when scrolling down
- ✅ **Accessibility** - Keyboard navigation, focus styles, reduced motion support
- ✅ **Performance** - No external dependencies, fast loading

## 📝 How to Edit Content

### 1. Personal Information (Quick Edits)

Open `index.html` and search for these items to update them:

**Your Name and Title:**
```html
<h1>Abdul Basit</h1>
<p class="subtitle">Computer Engineer | Computer Science Student | Networking & Technology Enthusiast</p>
```

**Email (appears in multiple places):**
```html
<!-- In Contact Section -->
<a href="mailto:abdulbasitaiilkl@gmail.com">abdulbasitaiilkl@gmail.com</a>

<!-- Update ALL instances of this email -->
```

**Phone:**
```html
<a href="tel:03249093066">03249093066</a>
```

**Location:**
```html
<p>Khyber Pakhtunkhwa, Pakistan</p>
```

**Education Details:**
Search for the education section and update:
- University name (currently: "University Name — To Be Added")
- Current semester
- CGPA
- Graduation year

### 2. Add or Edit Skills

Skills are organized in the **Skills Section** (search for `id="skills"`).

**Add a new skill chip:**
```html
<span class="skill-chip">Your New Skill</span>
```

**Remove a skill chip:**
Simply delete the `<span class="skill-chip">` line.

**Add a new skill category:**
Copy this template and add it to `.skills-categories`:

```html
<div class="skill-category">
    <h3>🎯 Category Name</h3>
    <div class="skill-chips">
        <span class="skill-chip">Skill 1</span>
        <span class="skill-chip">Skill 2</span>
        <span class="skill-chip">Skill 3</span>
    </div>
</div>
```

### 3. Add or Edit Projects

Projects are in the **Projects Section** (search for `id="projects"`).

**Edit existing project:**
Find the `.project-card` and update:
- Title: `<h3>Project Name</h3>`
- Status badge: `<span class="project-status in-progress">In Progress</span>`
- Description: `<p class="project-description">...</p>`
- Tech tags: `<span class="tech-tag">Technology</span>`

**Add a new project:**
Copy this template and add it to `.projects-grid`:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
        <span class="project-status in-progress">Status Label</span>
    </div>
    <p class="project-description">Your project description goes here.</p>
    <div class="project-tech">
        <span class="tech-tag">Tech 1</span>
        <span class="tech-tag">Tech 2</span>
        <span class="tech-tag">Tech 3</span>
    </div>
    <button class="btn btn-small">View Details</button>
</div>
```

**Project Status Options:**
- `class="project-status in-progress"` — Yellow/warning color
- `class="project-status in-development"` — Cyan/info color
- `class="project-status learning"` — Green/success color

### 4. Add Networking Lab Topics

Labs are in the **Networking Labs Section** (search for `id="labs"`).

**Edit existing lab topic:**
Find the `.lab-card` and update:
- Title: `<h3>📍 Topic Name</h3>`
- Description: `<p>Short description</p>`
- Details: Inside `<details>`, update the `<summary>` and `<p>` content

**Add a new lab topic:**
```html
<div class="lab-card">
    <h3>🎓 New Topic</h3>
    <p>Brief description of the topic.</p>
    <details class="lab-details">
        <summary>Learn More</summary>
        <p>Detailed explanation of the topic. Include key concepts, examples, and relevance.</p>
    </details>
</div>
```

### 5. Edit the Case Study

The case study is in the **Case Study Section** (search for `id="case-study"`).

All sections use standard HTML structure:
- Headings: `<h3>Section Name</h3>`
- Paragraphs: `<p>Content</p>`
- Lists: `<ul class="problem-list"><li>Item</li></ul>`
- Tables: Modify `.testing-table` rows

**Network Diagram (SVG):**
The network diagram uses SVG. You can:
- Change device labels: Look for `<text>` elements with device names
- Change colors: Modify CSS classes in `style.css` (search for `.device`, `.connection-line`, etc.)
- Add devices: Add new `<rect>` or `<circle>` elements with appropriate classes

### 6. Update GitHub and LinkedIn Links

Search for "Coming Soon" in the contact section:

```html
<a href="#" class="social-link" title="GitHub coming soon">GitHub</a>
<a href="#" class="social-link" title="LinkedIn coming soon">LinkedIn</a>
```

Replace `href="#"` with your actual profile URLs:
```html
<a href="https://github.com/yourusername" class="social-link">GitHub</a>
<a href="https://linkedin.com/in/yourusername" class="social-link">LinkedIn</a>
```

## 🎨 How to Change Colors and Typography

All colors and fonts are defined in CSS variables at the top of `style.css`.

### Change Colors

Open `style.css` and find the `:root` section (around line 1-17):

```css
:root {
    /* Dark Mode Colors (default) */
    --bg-primary: #0a0e27;           /* Main background */
    --accent-cyan: #00d4ff;          /* Primary accent color */
    --text-primary: #e8eaf6;         /* Main text color */
    /* ... other colors ... */
}
```

**Common changes:**
- **Primary background:** Change `--bg-primary`
- **Accent color:** Change `--accent-cyan` and `--accent-light-cyan`
- **Text color:** Change `--text-primary` and `--text-secondary`

For **light mode** colors, scroll to the light-mode section:

```css
body.light-mode {
    --bg-primary: #f8f9fa;
    /* ... other light colors ... */
}
```

### Change Typography

Font definitions are in `:root`:

```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
```

To change the main font, modify this line. Example:

```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**Font size changes:**
Search for `font-size:` in `.hero-text h1`, `.skills h2`, etc., and adjust values.

## 📧 Contact Form Backend Integration

Currently, the contact form validates client-side only. To actually send emails, integrate a backend service:

### Option 1: Formspree (Recommended for beginners)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form endpoint (looks like: `https://formspree.io/f/xxxxx`)
4. In `index.html`, find the `<form id="contactForm">` tag and update it:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Keep the same inputs and labels -->
    <!-- Remove the id="contactForm" if using action method -->
    <!-- Remove the form-note paragraph -->
</form>
```

### Option 2: EmailJS (No backend required)

1. Visit [https://www.emailjs.com](https://www.emailjs.com)
2. Set up an account and email service
3. Add this script to your `<head>` before closing tag:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```

4. Initialize EmailJS in `script.js` and update the form submission handler

### Option 3: Your Own Backend

Create a simple API endpoint that accepts POST requests with name, email, and message. Update the form submission in `script.js`.

## 🌐 Deploying Your Portfolio

### Free Hosting Options

**1. GitHub Pages**
- Push to a GitHub repository
- Go to Settings → Pages
- Select branch and save
- Your site is live at `username.github.io`

**2. Netlify**
- Drag and drop the project folder
- Get a live URL instantly
- Custom domain available

**3. Vercel**
- Similar to Netlify
- Works great with GitHub integration

**4. Firebase Hosting**
- Free with Google account
- Follow Firebase CLI instructions

## 🔧 Customization Guide

### Change Section Colors

Each section can have its own background color. Find the section in HTML:

```html
<section id="about" class="about">
```

In `style.css`, search for `.about` and modify:

```css
.about {
    background-color: var(--bg-primary);
}
```

Change to any CSS variable or hex color.

### Adjust Spacing

Spacing values are CSS variables:

```css
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
```

Increase these values for more spacious layout, decrease for compact layout.

### Modify Border Radius

Rounded corners are controlled by:

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
```

Make borders more rounded or keep them sharp.

### Adjust Shadows

Shadows create depth:

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.2);
```

Increase the alpha value (last number) for more prominent shadows.

## ⚙️ JavaScript Features Explained

### Theme Toggle

The theme button in the top-right corner:
- Toggles between dark and light mode
- Saves preference to browser's localStorage
- Respects system color scheme preference on first visit

### Mobile Menu

The hamburger menu on mobile:
- Appears on screens smaller than 768px
- Closes automatically when a link is clicked
- Animated hamburger icon (lines transform to X)

### Smooth Scrolling

- All navigation links use smooth scrolling
- Back-to-top button also scrolls smoothly
- Works across all modern browsers

### Active Navigation Highlighting

- As you scroll, the active section's nav link gets highlighted
- Visual underline appears under the current section
- Updates in real-time as you scroll

### Form Validation

- Real-time feedback as you type
- Email format validation
- Minimum length checks for message
- Error colors applied to invalid fields

## 🐛 Troubleshooting

**Q: The page doesn't look right in Internet Explorer**
A: This portfolio uses modern CSS and JavaScript. Use Chrome, Firefox, Safari, or Edge instead.

**Q: Theme toggle doesn't work**
A: Check if localStorage is enabled in your browser. Some private/incognito modes restrict it.

**Q: Contact form shows an error**
A: Ensure all fields are filled correctly. Email must be a valid format. Try validating in browser console (F12).

**Q: Mobile menu doesn't close**
A: Refresh the page. Ensure JavaScript is enabled in your browser.

**Q: Images not loading**
A: If you add images, make sure file paths are correct relative to `index.html`.

## 📚 Learning Resources

To better understand and modify this portfolio:

**HTML:**
- [MDN: HTML Basics](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

**CSS:**
- [CSS Variables (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

**JavaScript:**
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 🚀 Next Steps

1. **Add Your GitHub Link** - Update the GitHub placeholder with your profile
2. **Add Your LinkedIn** - Update the LinkedIn placeholder
3. **Update University Name** - Replace "University Name — To Be Added"
4. **Connect a Backend** - Integrate email functionality
5. **Add More Projects** - As you complete projects, add them here
6. **Deploy** - Choose a hosting platform and go live
7. **Update Regularly** - Keep skills and projects current

## 📄 License

This portfolio is your own. Feel free to use, modify, and deploy it however you like.

## 💡 Tips for Success

- **Keep it updated** - Add projects and skills as you learn
- **Quality over quantity** - 3 great projects > 10 mediocre ones
- **Use real information** - Employers value authenticity
- **Test on mobile** - Use developer tools (F12) to check responsiveness
- **Proofread** - Spelling and grammar matter
- **Link your work** - Always provide working links to projects
- **Customize the design** - Make it uniquely yours with your own color scheme

---

**Built with ❤️ using HTML, CSS, and JavaScript**

For questions or issues, refer to the troubleshooting section or check the browser console (F12) for error messages.
