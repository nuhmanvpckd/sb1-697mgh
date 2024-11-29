import { create } from 'zustand';
import { SocialAccount } from '../types';

interface SocialAccountsStore {
  accounts: SocialAccount[];
  addAccount: (account: SocialAccount) => void;
  removeAccount: (id: string) => void;
}

export const useSocialAccounts = create<SocialAccountsStore>((set) => ({
  accounts: [
    {
      id: '1',
      platform: 'facebook',
      connected: true,
      username: 'businesspage',
    },
    {
      id: '2',
      platform: 'instagram',
      connected: true,
      username: 'company.official',
    },
    {
      id: '3',
      platform: 'twitter',
      connected: false,
      username: 'companytweets',
    },
  ],
  addAccount: (account) =>
    set((state) => ({ accounts: [...state.accounts, account] })),
  removeAccount: (id) =>
    set((state) => ({
      accounts: state.accounts.filter((account) => account.id !== id),
    })),
}));