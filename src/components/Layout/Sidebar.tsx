import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  VideoCameraIcon,
  PhotoIcon,
  LinkIcon,
  ShareIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Social Media', href: '/social', icon: ShareIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Live Streaming', href: '/streaming', icon: VideoCameraIcon },
  { name: 'AI Content Creator', href: '/content-creator', icon: PhotoIcon },
  { name: 'Link Shortener', href: '/links', icon: LinkIcon },
  { name: 'Email Marketing', href: '/email', icon: EnvelopeIcon },
  { name: 'Website Builder', href: '/websites', icon: GlobeAltIcon },
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-900 text-white h-screen">
      <div className="px-4 py-5">
        <h1 className="text-xl font-bold">Marketing Suite</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
          >
            <item.icon className="mr-3 h-6 w-6" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};