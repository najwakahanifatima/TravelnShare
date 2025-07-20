# TravelnShare ✈️ 

<p align="center">
  <img src="./public/logo.svg" alt="Logo" width="600"/>
</p>

A travel-sharing and exploration web application built with **Next.js 15.4.1 App Router**, TypeScript, and TailwindCSS. Users can explore destinations, filter by preferences, and view travel cards submitted by the community. This platform is built on static data and focuses on front-end development. 

This project is made as a Hands-On submission of SISTECH Portfolio Program in Front End Engineering 2025.

Visit the deployed project here: https://traveln-share.vercel.app/

---

## Project Structure
```
├── .next/                      # Next.js build output (auto-generated)
├── node_modules/               # Node.js dependencies
├── public/                     # Static assets (images, data, etc.)
├── src/
│   ├── app/                    # App directory (Next.js App Router)
│   │   ├── destination/
│   │   │   └── [id]/           # Dynamic route for destination details
│   │   │       └── page.tsx
│   │   │   └── page.tsx        # Explore destination page
│   │   ├── profile/
│   │   │   └── page.tsx        # User profile page
│   │   ├── globals.css         # Global Tailwind and custom styles
│   │   ├── layout.tsx          # Main layout for all pages
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   └── ui/                 # UI components from Shadcn UI
│   │   ├── DestCard.tsx
│   │   ├── DynamicBackground.tsx
│   │   ├── FilterBox.tsx
│   │   ├── Footer.tsx
│   │   └── NavBar.tsx
│   └── lib/                    # Shared utility functions
├── .gitignore
├── components.json            # Shadcn UI config
├── eslint.config.mjs          # ESLint config for code linting
├── next-env.d.ts              # Next.js environment types
├── next.config.js             # Next.js configuration
├── package.json               # Project metadata and scripts
├── package-lock.json          # Dependency lock file
├── postcss.config.mjs         # PostCSS config (used by TailwindCSS)
├── README.md                  # Project README
├── tsconfig.json              # TypeScript configuration

```



---

## Features

- Explore travel destinations via cards
- Filter by day, vibe, and transportation
- Dynamic routing for destination detail pages
- Bookmark and like functionality (mocked for now)
- Modular and reusable components

---

## Tech Stack

- **Framework**: [Next.js 15.4.1](https://nextjs.org/docs) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons/UI**: [Lucide](https://lucide.dev/), Shadcn UI

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/najwakahanifatima/TravelnShare.git
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the Development Server
```bash
npm run dev
```

## Pages
| Page | Screenshot |
|---|---|
| Homepage | <img width="2841" height="1544" alt="image" src="https://github.com/user-attachments/assets/c327bb8f-ec89-41ba-9389-036b29ecfe99" />|
| Explore Destination |<img width="2824" height="1555" alt="image" src="https://github.com/user-attachments/assets/c7e68cc9-673d-43da-8d86-d76eec8ef414" /> |
| Details | <img width="2831" height="1415" alt="image" src="https://github.com/user-attachments/assets/e2343555-cc28-47af-9338-5f9911105e77" /> |
| Profile | <img width="2836" height="1402" alt="image" src="https://github.com/user-attachments/assets/1f0d25b7-9519-4e9c-8d07-29f8c38c5d03" /> |

## 👩🏻‍💻 Contributor
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/najwakahanifatima">
        <img src="https://avatars.githubusercontent.com/najwakahanifatima" width="80" style="border-radius: 50%;" /><br />
        <span><b>Najwa Kahani Fatima</span>
      </a>
    </td>
  </tr>
</table>
