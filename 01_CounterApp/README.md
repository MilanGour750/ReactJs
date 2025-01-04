# React Counter App

This project is a simple **React Counter Application** built using React.js and styled with **Tailwind CSS**. The application demonstrates basic React concepts like state management, functional components, and event handling.

## Features
- Display a counter value that starts at 5.
- **Increase** and **decrease** the counter value with button clicks.
- Dynamic, responsive design using Tailwind CSS utility classes.

---

## Prerequisites
Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm or yarn (comes with Node.js)

---

## Installation
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-counter-app.git
   cd react-counter-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Usage
- The app displays a counter initialized at `5`.
- **Increase** the counter by clicking the **Increase** button.
- **Decrease** the counter by clicking the **Decrease** button.


### `App.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Tailwind Configuration
This project uses Tailwind CSS for styling. Ensure Tailwind is correctly installed and configured:

### Installation
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Dependencies
- **React**
- **Tailwind CSS**

---

## License
This project is open source and available under the [MIT License](LICENSE).

---

## Author
Created by Milan Gour.

