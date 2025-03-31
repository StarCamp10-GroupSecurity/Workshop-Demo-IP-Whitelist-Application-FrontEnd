import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [ip, setIP] = useState<string>('Loading...');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIP(data.ip))
      .catch(() => setIP('Unavailable'));
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-600 text-white shadow-md">
      <div className="text-xl font-bold">
        IP Whitelisting
      </div>
      <div className="text-sm">
        Your IP: <span className="font-mono">{ip}</span>
      </div>
    </nav>
  );
};

export default Navbar;
