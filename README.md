# Portfolio Website

A professional portfolio website built with React.js and Bootstrap.

## Features

- **Responsive Design**: Fully responsive layout using Bootstrap 5
- **Smooth Scrolling**: Smooth page transitions and scrolling animations
- **Routing**: Client-side routing with React Router
- **Clean Code**: No inline styles, all CSS is external
- **Pages Included**:
  - About Me
  - Skills
  - Education
  - Contact Us

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Build for Production

To create a production build:
```bash
npm run build
```

## Technologies Used

- React.js 18.2.0
- React Router DOM 6.20.0
- Bootstrap 5.3.2
- CSS3
- JavaScript ES6+

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navigation.js
│   ├── pages/
│   │   ├── AboutMe.js
│   │   ├── Skills.js
│   │   ├── Education.js
│   │   └── ContactUs.js
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Customization

### Update Personal Information

1. Edit the content in each page component:
   - `src/pages/AboutMe.js` - Your bio and introduction
   - `src/pages/Skills.js` - Your technical skills
   - `src/pages/Education.js` - Your education and certifications
   - `src/pages/ContactUs.js` - Your contact information

### Styling

All styles are in `src/styles/main.css`. The CSS is organized with clear sections:
- Global Styles
- Navigation Styles
- Page Container Styles
- Component-specific Styles
- Responsive Styles

### Smooth Scrolling

Smooth scrolling is enabled globally in the App component and applies to:
- Page transitions
- Anchor link navigation
- All scroll events

## License

This project is open source and available for personal and commercial use.
