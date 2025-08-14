# Setup Guide

## Prerequisites

Before running this project, make sure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - This will also install npm (Node Package Manager)

2. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

## Installation Steps

### 1. Install Node.js
- Go to https://nodejs.org/
- Download the LTS version (recommended)
- Run the installer and follow the setup wizard
- Restart your terminal/command prompt after installation

### 2. Verify Installation
Open a terminal/command prompt and run:
```bash
node --version
npm --version
```

Both commands should return version numbers.

### 3. Install Project Dependencies
In the project directory, run:
```bash
npm install
```

This will install all required packages listed in `package.json`.

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open in Browser
Navigate to: http://localhost:3000

## Troubleshooting

### If npm is not recognized:
1. Make sure Node.js is properly installed
2. Restart your terminal/command prompt
3. Check if Node.js is in your system PATH

### If you get permission errors:
- On Windows: Run terminal as Administrator
- On Mac/Linux: Use `sudo npm install` (not recommended for development)

### If you get port conflicts:
- The default port is 3000
- If it's busy, Next.js will automatically try port 3001, 3002, etc.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

After the project is running:

1. **Customize Content**: Update personal information in the component files
2. **Add Projects**: Edit `data/projects.ts` to add your own projects
3. **Deploy**: Push to GitHub and deploy to Vercel for free hosting

## Support

If you encounter any issues:
1. Check the console for error messages
2. Make sure all dependencies are installed
3. Try deleting `node_modules` folder and running `npm install` again
