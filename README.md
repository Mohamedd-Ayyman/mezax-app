<div align="center">

# 📰 Mezax App: Next.js Data Fetching Playground

**A Next.js App Router project exploring server and client data fetching, dynamic routes, nested layouts and loading UI.**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## 📖 Overview

A hands-on project for learning the **App Router** rendering model. It fetches posts from the [DummyJSON](https://dummyjson.com) API in several ways and compares them.

## ✨ Concepts demonstrated

- 🖥️ **Server Components** with `fetch` and **ISR** (`revalidate: 120`)
- 🧑‍💻 **Client Components** fetching data with `useEffect` and loading/error state
- 🔗 **Dynamic routes**: `/posts/[postId]` and `/articles/[title]`
- ⏳ Route-level **loading UI** (`loading.js`)
- 🧩 **Nested layouts** for the `/articles` section
- ⭐ A featured-articles sub-route

## 🗂️ Routes

| Route | Rendering |
|---|---|
| `/posts` | Server component + ISR |
| `/posts/[postId]` | Dynamic server route with loading state |
| `/articles` | Nested layout |
| `/articles/[title]` | Dynamic route |
| `/articles/featuredArticles` | Static sub-page |

## 🚀 Getting Started

```bash
git clone https://github.com/Mohamedd-Ayyman/mezax-app.git
cd mezax-app
npm install
npm run dev     # http://localhost:3000
```

## 👤 Author

**Mohamed Ayman**, Frontend / Full-Stack Developer · [GitHub](https://github.com/Mohamedd-Ayyman) · [LinkedIn](https://linkedin.com/in/mohamed-ayman-8787b0269)
