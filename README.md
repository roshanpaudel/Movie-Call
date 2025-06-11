# 🎬 Movie World App

**Movie World** is a fully responsive and modern web application built with React.js that allows users to **search, explore, and discover detailed information about movies** from the **Open Movie Database (OMDb) API**. Designed with user experience in mind, it features a clean interface, fast search functionality, and well-structured movie information presentation — optimized for both mobile and desktop use.

---

## 🚀 Features

- 🔍 **Dynamic Movie Search**: Instantly search for movies by title with real-time API interaction.
- 🖼️ **Movie Details**: View comprehensive movie information including:
  - Poster image
  - Genre
  - Director
  - Plot summary
  - IMDb ratings and runtime
- 📱 **Responsive Design**: Fully optimized for phones, tablets, and desktops using modern CSS techniques.
- ⚠️ **Error Handling**: Displays clear error messages if no movie is found or API errors occur.
- ⏳ **Loading Indicators**: Smooth loading transitions while fetching data from the OMDb API.
- 🔗 **External Links**: Direct IMDb link for each movie for deeper exploration.

---

## 🛠️ Tech Stack

Built using modern web technologies for performance and scalability:

- **React.js** with Functional Components & Hooks  
- **Axios** for clean and reliable HTTP requests  
- **Tailwind CSS** or **CSS Modules** for modular, maintainable styling  
- **OMDb API** for real-time movie data fetching

---

## 🧩 Installation Guide

1. **Clone the Repository**

```bash
git clone https://github.com/roshanpaudel/movie-world-app.git
cd movie-world-app
Install Dependencies

bash
Copy
Edit
npm install
Configure API Access

Create a .env file in the root of the project and add your OMDb API key:

env
Copy
Edit
REACT_APP_OMDB_API_KEY=your_api_key_here
You can obtain a free OMDb API key at: http://www.omdbapi.com/apikey.aspx

🚦 Running the App Locally
bash
Copy
Edit
npm start
Open your browser and navigate to: http://localhost:3000

📦 Building for Production
To create a production-ready version:

bash
Copy
Edit
npm run build
Deploy the build/ directory using platforms such as:

Vercel

Netlify

GitHub Pages

🗂 Folder Structure
php
Copy
Edit
movie-world-app/
├── public/
│   └── index.html
├── src/
│   ├── components/     # Reusable UI components (SearchBar, MovieCard, etc.)
│   ├── pages/          # Page-level components (e.g., Home, MovieDetails)
│   ├── services/       # API handlers and utility functions
│   ├── App.jsx         # App routing and layout
│   └── index.js        # Entry point
📄 License
Distributed under the MIT License. See LICENSE for more information.

👤 Author & Maintainer
Roshan Paudel
📧 Email: paudelroshan93@gmail.com
🐙 GitHub: @roshanpaudel

