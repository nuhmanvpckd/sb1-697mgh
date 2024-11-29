import { create } from 'zustand';
import { nanoid } from 'nanoid';

interface Link {
  id: string;
  originalUrl: string;
  slug: string;
  title?: string;
  clicks: number;
  createdAt: string;
  expiresAt?: string;
}

interface LinkAnalytics {
  totalLinks: number;
  totalClicks: number;
  clickHistory: Array<{ date: string; clicks: number }>;
  topLinks: Link[];
}

interface LinkStore {
  links: Link[];
  analytics: LinkAnalytics;
  createLink: (data: { originalUrl: string; customSlug?: string; title?: string; expiresAt?: string }) => void;
  deleteLink: (id: string) => void;
}

export const useLinkStore = create<LinkStore>((set) => ({
  links: [
    {
      id: '1',
      originalUrl: 'https://example.com/very-long-url',
      slug: 'demo-link',
      title: 'Demo Link',
      clicks: 150,
      createdAt: new Date().toISOString(),
    },
  ],
  analytics: {
    totalLinks: 1,
    totalClicks: 150,
    clickHistory: [
      { date: '2023-11-01', clicks: 45 },
      { date: '2023-11-02', clicks: 52 },
      { date: '2023-11-03', clicks: 53 },
    ],
    topLinks: [],
  },
  createLink: (data) =>
    set((state) => {
      const newLink: Link = {
        id: nanoid(),
        originalUrl: data.originalUrl,
        slug: data.customSlug || nanoid(8),
        title: data.title,
        clicks: 0,
        createdAt: new Date().toISOString(),
        expiresAt: data.expiresAt,
      };

      return {
        links: [...state.links, newLink],
        analytics: {
          ...state.analytics,
          totalLinks: state.analytics.totalLinks + 1,
        },
      };
    }),
  deleteLink: (id) =>
    set((state) => ({
      links: state.links.filter((link) => link.id !== id),
      analytics: {
        ...state.analytics,
        totalLinks: state.analytics.totalLinks - 1,
      },
    })),
}));