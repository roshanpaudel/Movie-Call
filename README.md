# Movie World App

**Movie World** is a modern and responsive web application that allows users to search for movies and view detailed information using data fetched from the OMDb API. Built with React.js, the app features a clean interface, fast performance, and an intuitive user experience.

---

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Setup](#api-setup)
- [Testing](#testing)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features

- Movie search by title with real-time results
- Movie details including:
  - Title
  - Poster
  - Year
  - Genre
  - Director
  - Plot
  - IMDb rating
- Responsive design for mobile, tablet, and desktop
- Error handling for empty search and failed API responses
- Loading indicators for a smoother user experience

---

## Live Demo

> Coming Soon  
> *(You can deploy using Vercel, Netlify, or GitHub Pages and add the link here)*

---

## Screenshots

> *(Add screenshots here if available, or use placeholders)*  
> ![Home View](./screenshots/home.png)  
> ![Movie Detail View](./screenshots/details.png)

---

## Tech Stack

- **Frontend**: React.js, JSX, CSS Modules / Tailwind CSS (or other styling)
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Requests**: Axios
- **API**: [OMDb API](https://www.omdbapi.com/)
- **Development Tools**: Vite / Create React App, npm, ESLint

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/movie-world-app.git
cd movie-world-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file and add your OMDb API key**

```bash
touch .env
```

Add this line:

```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

4. **Start the development server**

```bash
npm start
```

Visit the app in your browser at: `http://localhost:3000`

---

## Usage

- Type a movie title into the search input.
- Click on any movie result to view more details.
- If no match is found, a "No Results" message is shown.
- If the API fails, an error message is displayed.

---

## API Setup

This app uses the [OMDb API](https://www.omdbapi.com/) to fetch movie data.

- Visit: https://www.omdbapi.com/apikey.aspx
- Sign up for a free API key
- Add the API key to your `.env` file as shown above

---

## Testing

The app is structured for easy testing and supports tools like:

- **Jest** (for unit tests)
- **React Testing Library** (for component behavior)

You can start adding tests in a `__tests__` or `tests` folder:

```bash
npm test
```

---

## Deployment

To deploy a production-ready build:

```bash
npm run build
```

You can then deploy the `/build` folder to:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## Folder Structure

```
movie-world-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── MovieList.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.js
│   └── styles/
├── .env
├── package.json
└── README.md
```

---

## License

This project is licensed under the **MIT License**.  
Feel free to use and modify it for personal or commercial projects.

---

## Contributing

Contributions are welcome!  
If you'd like to improve the app or fix bugs:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## Contact

Maintainer:Roshan Paudel  
GitHub: [@roshanpaudel](https://github.com/roshanpaudel)  
Email: paudelroshan93@gmail.com

---
