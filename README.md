# Sample Next.js Dashboard with Shadcn/UI and Framer Motion

This is a modern, responsive dashboard application built with Next.js 15, featuring a clean UI powered by Shadcn/UI and smooth animations using Framer Motion.

## Features

- **Responsive Dashboard:** Optimized for both mobile and desktop views.
- **Dynamic Metrics:** Visual representation of organization funds, spending, and allocations.
- **Animated UI:** Smooth reveal animations and animated numerical counters for a premium feel.
- **Modern Tech Stack:** Built with Next.js, TypeScript, Tailwind CSS, and Shadcn/UI.
- **Charts:** Interactive data visualization using Recharts.

## Project Structure

- `app/`: Next.js App Router directory.
  - `(dashboard)/`: Contains the main dashboard layout and components.
- `components/`: Reusable React components.
  - `ui/`: Core UI components from Shadcn/UI.
  - `animated-number.tsx`: Custom component for numerical animations.
  - `stat-card.tsx`: Metric card component with reveal animations.
  - `balancecard.tsx`: Main organization balance component.
- `hooks/`: Custom React hooks (e.g., `use-mobile`).
- `lib/`: Utility functions and shared logic.
- `public/`: Static assets like images and icons.
- `utils/`: Helper functions for data processing.
- `data/`: Sample JSON data for the dashboard.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sample-nextjs-app-shadcn
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Iconsax React](https://iconsax.io/)
- [Recharts](https://recharts.org/)