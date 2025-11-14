# Portfolio - Full Stack Developer

A modern, responsive portfolio website showcasing skills, experience, education, and certifications.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-friendly interface
- 🚀 Fast loading with Vite
- 🐳 Docker support for easy deployment
- 📄 GitHub Pages deployment ready

## Sections

- **Hero**: Introduction and call-to-action
- **Skills**: Technical skills and languages
- **Experience**: Work history and achievements
- **Education**: Academic background
- **Certifications**: Professional certifications
- **Hire Me**: Contact form with email integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Email Configuration

To set your contact email, create a `.env` file in the portfolio directory:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_BASE_PATH=/billing/
```

**Important**: Replace `your-email@example.com` with your actual email address. The "Hire Me" button will use this email to open the user's email client.

### GitHub Pages Base Path

The base path in `vite.config.js` is set to `/billing/` for GitHub Pages. If your repository has a different name, update the `VITE_BASE_PATH` in your `.env` file or modify `vite.config.js` directly.

## Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio-app .
```

### Run Docker Container

```bash
docker run -p 8080:80 portfolio-app
```

The app will be available at `http://localhost:8080`

## GitHub Pages Deployment

### Automatic Deployment

Run the deploy script:

```bash
./deploy.sh
```

Or manually:

```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npx gh-pages -d dist
   ```

### Important Notes

- Make sure your repository is set up with GitHub Pages
- The base path in `vite.config.js` must match your repository name
- After deployment, your site will be available at `https://[username].github.io/[repository-name]/`

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── HireMe.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── Dockerfile
├── deploy.sh
├── vite.config.js
└── package.json
```

## Customization

### Update Content

Edit the component files in `src/components/` to update:
- Skills: `Skills.jsx`
- Experience: `Experience.jsx`
- Education: `Education.jsx`
- Certifications: `Certifications.jsx`

### Styling

Each component has its own CSS file. Modify the CSS files to customize the appearance.

## Technologies Used

- React 19
- Vite
- CSS3 (with modern features)
- Docker
- Nginx (for production)

## License

This project is open source and available for personal use.
# me
