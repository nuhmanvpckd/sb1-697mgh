import { create } from 'zustand';
import { nanoid } from 'nanoid';

interface Campaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  sendTime: string;
  status: 'draft' | 'scheduled' | 'sent';
  opens: number;
  clicks: number;
  targetAudience: string[];
}

interface Subscriber {
  id: string;
  email: string;
  status: 'active' | 'inactive';
  joinedDate: string;
}

interface EmailAnalytics {
  openRate: number;
  clickRate: number;
  performanceHistory: Array<{
    date: string;
    opens: number;
    clicks: number;
  }>;
  topCampaigns: Array<{
    id: string;
    name: string;
    openRate: number;
  }>;
}

interface EmailStore {
  campaigns: Campaign[];
  subscribers: Subscriber[];
  analytics: EmailAnalytics;
  createCampaign: (data: Omit<Campaign, 'id' | 'status' | 'opens' | 'clicks'>) => void;
  deleteCampaign: (id: string) => void;
}

export const useEmailStore = create<EmailStore>((set) => ({
  campaigns: [
    {
      id: '1',
      name: 'Welcome Series',
      subject: 'Welcome to our platform!',
      content: 'Thank you for joining...',
      sendTime: new Date().toISOString(),
      status: 'sent',
      opens: 150,
      clicks: 75,
      targetAudience: ['new'],
    },
  ],
  subscribers: [
    {
      id: '1',
      email: 'user@example.com',
      status: 'active',
      joinedDate: '2023-11-01',
    },
  ],
  analytics: {
    openRate: 45.2,
    clickRate: 12.8,
    performanceHistory: [
      { date: '2023-11-01', opens: 120, clicks: 45 },
      { date: '2023-11-02', opens: 150, clicks: 60 },
      { date: '2023-11-03', opens: 180, clicks: 75 },
    ],
    topCampaigns: [
      { id: '1', name: 'Welcome Series', openRate: 68.5 },
    ],
  },
  createCampaign: (data) =>
    set((state) => ({
      campaigns: [
        ...state.campaigns,
        {
          ...data,
          id: nanoid(),
          status: 'scheduled',
          opens: 0,
          clicks: 0,
        },
      ],
    })),
  deleteCampaign: (id) =>
    set((state) => ({
      campaigns: state.campaigns.filter((campaign) => campaign.id !== id),
    })),
}));