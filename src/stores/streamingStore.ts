import { create } from 'zustand';

interface StreamMessage {
  user: string;
  text: string;
}

interface StreamAnalytics {
  viewers: number;
  duration: string;
  viewerHistory: Array<{ time: string; viewers: number }>;
}

interface StreamingState {
  isLive: boolean;
  messages: StreamMessage[];
  analytics: StreamAnalytics;
  startStream: (config: any) => void;
  stopStream: () => void;
  sendMessage: (text: string) => void;
}

export const useStreamingStore = create<StreamingState>((set) => ({
  isLive: false,
  messages: [],
  analytics: {
    viewers: 0,
    duration: '00:00:00',
    viewerHistory: [
      { time: '00:00', viewers: 0 },
      { time: '00:05', viewers: 10 },
      { time: '00:10', viewers: 25 },
    ],
  },
  startStream: (config) => set({ isLive: true }),
  stopStream: () => set({ isLive: false }),
  sendMessage: (text) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { user: 'User', text },
      ],
    })),
}));