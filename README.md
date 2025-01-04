# Random Cat Image Fetcher

This project is a simple Next.js application that fetches and displays random cat images using [The Cat API](https://thecatapi.com/). Users can load new cat images dynamically by clicking a button.

---

## Features

- **Server-Side Rendering (SSR):** The initial cat image is fetched server-side using `getServerSideProps`.
- **Client-Side Interactivity:** Users can fetch a new random cat image by clicking the "One More Cat 🐈️" button.
- **Stylish UI:** The application uses modular CSS for styling.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **Yarn** or **npm**

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd random-cat-main
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

- **`pages/index.tsx`:** Main React component rendering the cat image and the button.
- **`pages/index.module.css`:** CSS styles for the page.
- **`package.json`:** Defines dependencies and scripts.
- **`tsconfig.json`:** TypeScript configuration.
- **`yarn.lock`:** Dependency lock file.
- **`.gitignore`:** Configuration to ignore specific files in version control.

---

## Usage

1. On the home page, you will see a random cat image.
2. Click the "One More Cat 🐈️" button to fetch another random cat image.

---

## API Integration

This application uses [The Cat API](https://thecatapi.com/) to fetch random cat images. You can integrate your own API key for additional functionality:

1. Sign up at [The Cat API](https://thecatapi.com/) and get an API key.
2. Store the API key in an environment variable:
   ```bash
   export CAT_API_KEY=your_api_key_here
   ```
3. Update the `fetchImage` function in `index.tsx` to include the API key:
   ```typescript
   const res = await fetch("https://api.thecatapi.com/v1/images/search", {
       headers: { "x-api-key": process.env.CAT_API_KEY },
   });
   ```

---

## Reference to Tutorial

This project was inspired by the tutorial "[Next.jsで猫画像ジェネレーターを作ろう](https://typescriptbook.jp/tutorials/nextjs)" from [サバイバルTypeScript](https://typescriptbook.jp/). The tutorial provides a step-by-step guide to creating a similar application, covering:

- Setting up a Next.js project.
- Creating page components.
- Fetching data from an API.
- Styling with CSS modules.
- Deploying to Vercel.

For more details, visit the tutorial at [typescriptbook.jp](https://typescriptbook.jp/tutorials/nextjs).

---

## Future Enhancements

- **Loading Indicator:** Add a spinner to improve user feedback during image loading.
- **Image Gallery:** Enable users to view previously fetched cat images in a gallery or carousel.
- **Testing:** Add unit and end-to-end tests to ensure application reliability.
- **Error Handling:** Provide user-friendly error messages if the API fails.

---

## Acknowledgements

- [The Cat API](https://thecatapi.com/) for providing free access to random cat images.
- The open-source community for enabling such projects.

---
