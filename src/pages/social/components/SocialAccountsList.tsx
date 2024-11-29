import React from 'react';
import { useSocialAccounts } from '../../../hooks/useSocialAccounts';

export const SocialAccountsList = () => {
  const { accounts } = useSocialAccounts();

  return (
    <div className="mt-4 space-y-4">
      {accounts.map((account) => (
        <div key={account.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full ${account.connected ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="font-medium">{account.platform}</span>
          </div>
          <span className="text-sm text-gray-600">{account.username}</span>
        </div>
      ))}
    </div>
  );
};