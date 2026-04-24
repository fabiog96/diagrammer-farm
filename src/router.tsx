import { createBrowserRouter } from 'react-router';

import { LandingPage } from '@/pages/Landing';
import { HomePage } from '@/pages/HomePage';
import { DesignerPage } from '@/pages/DesignerPage';
import { VisualizerPage } from '@/pages/VisualizerPage';
import { GitHubTokenGuidePage } from '@/pages/GitHubTokenGuidePage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/app',
      element: <HomePage />,
    },
    {
      path: '/designer',
      element: <DesignerPage />,
    },
    {
      path: '/visualizer',
      element: <VisualizerPage />,
    },
    {
      path: '/guide/github-token',
      element: <GitHubTokenGuidePage />,
    },
  ],
  { basename: '/InfraWeaver' },
);
