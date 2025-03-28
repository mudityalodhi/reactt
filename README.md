<<<<<<< HEAD
=======
# 🚀 Learning React.js with Vite and Tailwind CSS

> A beginner-friendly guide to setting up and learning React.js using Vite and Tailwind CSS.

## 📌 Why Use Vite?
- Faster build times compared to CRA (Create React App)
- Instant hot module replacement (HMR)
- Optimized for modern JavaScript development

## 🛠 Setting Up a React.js Project with Vite
```sh
# Install Vite
npm create vite@latest my-react-app --template react

# Navigate to project folder
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎨 Adding Tailwind CSS
```sh
# Install Tailwind CSS and dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind configuration
npx tailwindcss init -p
```

### ✏️ Configure `tailwind.config.js`
Update the content array:
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 🖌 Add Tailwind to `index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🔥 Running the Project
```sh
npm run dev
```

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
>>>>>>> 7872dddd93e40fc3da0d20d85ce6b934edab8845
