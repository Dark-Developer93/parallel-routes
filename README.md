# Next.js Parallel Routes Demo

This project demonstrates the power of Next.js 14's parallel routes feature, showcasing how multiple pages can load simultaneously within the same layout for improved user experience and performance.

## Overview

The application implements a dashboard-style interface with three main parallel routes:

- Main content
- Team members panel
- Analytics panel

Each route loads independently, allowing for:

- Simultaneous data fetching
- Independent loading states
- Isolated error boundaries
- Improved perceived performance

## Key Features

### 1. Parallel Loading

- Independent data fetching for each route section
- Simulated API delays to demonstrate loading states
- Custom loading skeletons for each component

### 2. Error Handling

- Isolated error boundaries for each parallel route
- Graceful error states with retry functionality
- Default fallback components for unmatched routes

### 3. Team Members Section

- Dynamic member cards with status indicators
- Gradient avatars with member initials
- Real-time online status display
- Individual member detail pages

### 4. Analytics Section

- Real-time metrics display
- Animated loading states
- Error recovery mechanisms
- Responsive layout integration

## Technical Implementation

### Parallel Routes Structure

```typescript
src/app/
├── @team/                          // Team members slot
│   ├── page.tsx                    // Team listing page
│   ├── loading.tsx                 // Team loading state
│   ├── error.tsx                   // Team error handling
│   └── memberDetails/              // Member details feature
│       ├── [id]/                   // Dynamic route for member
│           ├── page.tsx            // Member detail page
│           ├── loading.tsx         // Member loading state
│           └── error.tsx           // Member error handling
│
├── @analytics/                     // Analytics slot
│   ├── page.tsx                    // Analytics content
│   ├── loading.tsx                 // Analytics loading state
│   ├── error.tsx                   // Analytics error handling
│   └── default.tsx                 // Analytics fallback
│
├── page.tsx                        // Main content
└── layout.tsx                      // Root layout
```

### Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Technical Requirements

- Node.js 18.17 or later
- Next.js 14.0.0 or later
- React 19.0.0
- TypeScript 5.0.0 or later

## Key Concepts Demonstrated

1. **Slot-based Architecture**

   - Uses @folder convention for named slots
   - Enables true parallel rendering

2. **Independent Loading States**

   - Custom loading.tsx files for each route
   - Skeleton loaders for improved UX

3. **Error Handling**

   - Isolated error boundaries
   - Custom error UI components
   - Error recovery mechanisms

4. **State Management**
   - Route-specific data fetching
   - Independent component states
   - Shared layout context

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Parallel Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Error Handling in Next.js](https://nextjs.org/docs/app/building-your-application/routing/error-handling)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
