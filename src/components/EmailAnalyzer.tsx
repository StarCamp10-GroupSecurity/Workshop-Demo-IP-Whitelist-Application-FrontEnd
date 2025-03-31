import React, { useState } from 'react';

const EmailAnalyzer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    try {
      const response = await fetch('https://w4r1mw61pe.execute-api.us-east-1.amazonaws.com/production/starcampnocors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      setResult(data.description || 'No impression available.');
    } catch (error) {
      setResult('Error fetching analysis.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-lg rounded">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="email" className="mb-2 font-medium">Enter your email:</label>
        <input
          type="email"
          id="email"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          {result}
        </div>
      )}
    </div>
  );
};

export default EmailAnalyzer;
