export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface SocialAccount {
  id: string;
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'tiktok' | 'youtube';
  connected: boolean;
  username: string;
}

export interface Analytics {
  views: number;
  engagement: number;
  followers: number;
  likes: number;
  shares: number;
}

export interface Post {
  id: string;
  content: string;
  media?: string[];
  platforms: string[];
  scheduledFor?: Date;
  status: 'draft' | 'scheduled' | 'published';
}