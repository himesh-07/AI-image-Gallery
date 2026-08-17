# AI Image Gallery

A web application for generating and browsing AI-created images, built with **React + Vite** on the frontend and a lightweight **Node.js** server.

## ✨ Features

- Browse and view AI-generated images in a responsive gallery
- Component-based React architecture for easy extension
- Styled with **Tailwind CSS** and **PostCSS**
- Fast dev/build tooling powered by **Vite**
- Simple Node.js server (`server.js`) for backend/API needs
- Linting via **oxlint**

## 🛠️ Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React (JSX)            |
| Bundler    | Vite                   |
| Styling    | Tailwind CSS, PostCSS  |
| Linting    | oxlint                 |
| Backend    | Node.js (`server.js`)  |
| Package Mgr| npm                    |

## 📁 Project Structure

```
frontend/
├── dist/                   # Production build output
├── node_modules/           # Installed dependencies
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, icons, and other static assets
│   ├── Components/         # Reusable React components
│   ├── Pages/
│   │   └── Home.jsx        # Home page component
│   ├── App.css             # Global app styles
│   ├── App.jsx             # Root application component
│   ├── index.css           # Base/global CSS (Tailwind entry)
│   └── main.jsx             # React app entry point
├── .env                     # Environment variables (not committed)
├── .gitignore                # Git ignore rules
├── .oxlintrc.json            # oxlint configuration
├── index.html                 # HTML entry point for Vite
├── package.json               # Project metadata & dependencies
├── package-lock.json           # Locked dependency versions
├── postcss.config.js            # PostCSS configuration
├── server.js                     # Node.js backend server
├── tailwind.config.js             # Tailwind CSS configuration
├── vite.config.js                  # Vite configuration
└── README.md                        # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd frontend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add any required keys, e.g.:

```
VITE_API_KEY=your_api_key_here
VITE_API_BASE_URL=http://localhost:5000
```

### Development

Run the Vite dev server:

```bash
npm run dev
```

If the project uses `server.js` as a backend, start it separately:

```bash
node server.js
```

### Build for Production

```bash
npm run build
```

The output will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npx oxlint
```

## 📂 Key Files

- **`src/main.jsx`** – Bootstraps the React app and mounts it to the DOM.
- **`src/App.jsx`** – Root component that sets up routing/layout.
- **`src/Pages/Home.jsx`** – Main gallery/home page displaying AI-generated images.
- **`src/Components/`** – Shared UI components (cards, headers, modals, etc.).
- **`tailwind.config.js`** – Tailwind theme and content path configuration.
- **`server.js`** – Backend entry point (API routes / image generation logic).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch and open a Pull Request

## 📄 License

This project is licensed under the MIT License — feel free to use and modify it.
