import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to IP Whitelisting</h1>
      <p className="text-lg max-w-2xl mx-auto">
        Our project helps you understand your online presence by analyzing your email and IP data.
      </p>
    </section>
  );
};

export default Hero;
