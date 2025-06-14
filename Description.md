# 🎬 Movie World App

**Movie World** is a fully responsive and modern web application built with **React.js** that allows users to search for and explore detailed information about movies using the **OMDb (Open Movie Database) API**. It provides a seamless user experience with real-time search functionality, clean UI design, and integrated external links to IMDb for further exploration.

---

## 🚀 Features

- 🔍 **Dynamic Movie Search**: Instantly search for movies by title using the OMDb API.
- 🎞️ **Detailed Movie Information**: View posters, genres, directors, writers, cast, plot summaries, release dates, and ratings.
- 📱 **Mobile-Responsive Design**: Optimized layout for mobile, tablet, and desktop devices.
- ⚠️ **Error Handling**: User-friendly error messages for API issues or no results found.
- ⏳ **Loading Indicators**: Visual feedback during asynchronous data fetching.
- 🔗 **IMDb Integration**: Direct links to each movie’s IMDb page for additional information.

---

## 🛠️ Tech Stack

This project is built using modern web development tools and best practices:

- **React.js** with functional components and Hooks (`useState`, `useEffect`)
- **Axios** for clean and efficient API request handling
- **CSS Modules** or **Tailwind CSS** for modular, scalable styling
- **OMDb API** to fetch movie data in real time

---

## 📦 Installation Guide

To set up and run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/movie-world-app.git

# Navigate into the project directory
cd movie-world-app

# Install dependencies
npm install
```

---

## 🔑 API Configuration

To access the OMDb API, you'll need a free API key. Follow these steps:

1. Sign up at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx) to get your API key.
2. Create a `.env` file in the root of your project.
3. Add the following line to the `.env` file:

```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

> ⚠️ Make sure to restart the dev server after editing the `.env` file.

---

## ▶️ Running the App Locally

To start the development server:

```bash
npm start
```

The app will be accessible in your browser at:  
🔗 `http://localhost:3000`

---

## 🏗️ Building for Production

To build an optimized production version of the app:

```bash
npm run build
```

Deploy the contents of the `/build` folder using platforms such as:

- **Vercel**
- **Netlify**
- **GitHub Pages**

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI elements (e.g., MovieCard, SearchBar)
├── pages/            # Page-level components (e.g., Home, MovieDetails)
├── services/         # API calls and utility functions
├── App.jsx           # Main app structure with routing
├── index.js          # ReactDOM entry point
```

This modular structure supports scalability and maintainability.

---

## 📄 License

This project is licensed under the **MIT License**, which allows you to use, modify, and distribute it freely with proper attribution.

---

## 📬 Contact & Credits

**Maintainer**: Roshan Paudel  
📧 Email: [paudelroshan93@gmail.com](mailto:paudelroshan93@gmail.com)  
💻 GitHub: [@roshanpaudel](https://github.com/roshanpaudel)

If you find this project helpful, feel free to star the repository or contribute!

---
