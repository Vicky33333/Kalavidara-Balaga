# Kalavidara-Balaga

Karnataka's finest folk troupe booking platform. Connect directly with verified artists for Dollu Kunitha, Yakshagana, Veeragase, and more.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) (v18+)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kalavidara-connect-main
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

### Development

Start the development server:
```bash
bun dev
# or
npm run dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
bun run build
# or
npm run build
```

To preview the production build:
```bash
bun run preview
# or
npm run preview
```

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/guide/start/overview) (React + TanStack Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Radix UI + Custom components
- **Build Tool**: Vite

## Project Structure

- `src/routes/`: File-based routing (TanStack Router)
- `src/components/`: Reusable UI components
- `src/data/`: Mock data for troupes and art forms
- `src/hooks/`: Custom React hooks
- `src/styles.css`: Tailwind CSS entry point
- `src/server.ts`: SSR server entry point
