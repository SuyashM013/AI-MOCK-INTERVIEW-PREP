# 🤖 AI Mock Interview App

An AI-powered mock interview platform that simulates real-time interviews based on your chosen job role and experience level. Designed to help users practice and prepare with realistic, intelligent questions.

## 🚀 Live Demo

[![View on Vercel](https://img.shields.io/badge/Vercel-Live%20Demo-black?logo=vercel&style=for-the-badge)](https://ai-mock-interviewer-eosin.vercel.app)

[![View on Netlify](https://img.shields.io/badge/Netlify-Live%20Demo-00C7B7?logo=netlify&style=for-the-badge)](https://ai-mockinterviewer.netlify.app)



## 🛠 Tech Stack

- **Frontend:** Next.js, Tailwind CSS, ShadCN UI
- **Backend:** API Routes, Node, Express
- **Database:** MongoDB (via Mongoose)
- **Authentication:** Clerk
- **AI Model:** Gemini AI model (gemini-1.5-flash)
- **Deployment:** Vercel, Netlify

## ✨ Features

- 🧠 AI-generated mock interview questions
- 📄 Resume template generator after sign-up
- 👤 User-specific interview history (stored in DB)
- 🔐 Secure and dynamic role-based question flow
- 📊 Clean and responsive UI with modern design

## 🧑‍💻 Local Setup

Follow these steps to run the project locally:

### 1. Clone the repo
```bash
git clone https://github.com/SuyashM013/AI-MOCK-INTERVIEW-PREP
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create environment variables

Create a `.env.local` file in the root and add:

```
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key

```
For privacy, security and ownership reasons, all env variables are not publicly disclosed. These are just sample variables


### 4. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🧠 AI Integration: Gemini AI Model

We use Gemini AI to generate intelligent and relevant questions based on:
- The user's selected role
- Years of experience
- Interview history stored in the database

## 📦 Deployment

The project is deployed using [Vercel](https://vercel.com) & [Netlify](https://netlify.com), offering:
- Serverless functions for API routes
- Easy environment management
- Continuous deployment from GitHub

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — feel free to use, modify, and share with proper credit.

---

## 🙋‍♂️ Author

Made with 💻 by Suyash Mishra

Feel free to reach out or connect on [LinkedIn](www.linkedin.com/in/mishrasuyash013)
