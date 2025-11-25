# Yash Pandav | AI Engineer & Full Stack Developer Portfolio

A high-performance, interactive personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. This project showcases my skills, projects, and experience as an AI Engineer and Full Stack Developer, featuring a secure, custom-built **AI Chat Agent** powered by Google Gemini.

## 🚀 Features

-   **Next.js 15 App Router**: Modern, server-first architecture for optimal performance and SEO.
-   **Secure AI Chat Widget**:
    -   Integrated AI assistant powered by **Google Gemini**.
    -   **Secure Backend API**: API keys are handled server-side (`/api/chat`), ensuring they are never exposed to the client.
    -   Full-screen backdrop and polished UI/UX.
-   **Premium UI/UX**:
    -   **Custom Cursor**: Interactive trailing cursor with hover effects.
    -   **Cinematic Preloader**: System-boot style intro animation.
    -   **Scroll Animations**: Elements reveal smoothly on scroll using `framer-motion` concepts.
    -   **Glassmorphism & Gradients**: Modern dark-themed aesthetic with emerald accents.
-   **Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
-   **SEO Optimized**: Comprehensive metadata, Open Graph tags, and semantic HTML.
-   **Performance**: Lazy loading for heavy components and optimized image handling.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI Integration**: [Google Gemini API](https://ai.google.dev/) (via `@google/genai`)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Markdown**: `react-markdown` (for AI responses)
-   **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/yashpandav/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add your Google Gemini API key:

```env
# .env.local
GEMINI_API_KEY=your_google_gemini_api_key_here
```

> **Note**: You can get your API key from [Google AI Studio](https://aistudio.google.com/).

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and API routes
│   ├── api/chat/         # Secure backend route for Gemini API
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with metadata and fonts
│   └── page.tsx          # Main landing page
├── components/           # Reusable UI components
│   ├── ChatWidget.tsx    # AI Chat interface
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   └── ...
├── lib/                  # Utilities and constants
│   ├── constants.ts      # Portfolio content (text, links, data)
│   └── types.ts          # TypeScript interfaces
├── public/               # Static assets (images, favicon)
└── ...
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

-   **Website**: [https://www.yashpandav.dev/](https://www.yashpandav.dev/)
-   **Email**: [contact@yashpandav.dev](mailto:contact@yashpandav.dev)
-   **LinkedIn**: [Yash Pandav](https://www.linkedin.com/in/yash-pandav/)
-   **GitHub**: [@yashpandav](https://github.com/yashpandav)
