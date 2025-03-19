# Personal Blog with Next.js and Firebase

This is a personal blog built with [Next.js](https://nextjs.org) and Firebase. It supports Markdown-formatted content for blog articles.

## Getting Started

First, set up your Firebase configuration by creating a `.env` file at the root of your project with the following variables:

```
# Firebase Configuration
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
FIREBASE_MEASUREMENT_ID=your-measurement-id

# Next.js public URL for OpenGraph metadata
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Markdown Support for Articles

The blog now supports Markdown formatting for article content. When creating or editing articles, you can use standard Markdown syntax:

### Markdown Features Supported:

- Headers (`# Header 1`, `## Header 2`, etc.)
- Emphasis (`*italic*`, `**bold**`)
- Lists (ordered and unordered)
- Links (`[link text](url)`)
- Images (`![alt text](image-url)`)
- Code blocks with syntax highlighting
  ```javascript
  // Example code block
  const hello = "world";
  ```
- Blockquotes
- Tables
- And more!

The blog automatically detects whether content is in Markdown or HTML format and renders it appropriately.

### Seeding Articles

To seed your Firebase database with sample articles, run:

```bash
node scripts/seed-firebase-markdown.js
```

Make sure your Firebase credentials are correctly set up in your `.env` file before running the seed script.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For more about Firebase:

- [Firebase Documentation](https://firebase.google.com/docs) - learn about Firebase services and features.
- [Firestore Documentation](https://firebase.google.com/docs/firestore) - specifically for the database used in this project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
