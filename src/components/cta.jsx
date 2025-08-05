import React, { useState } from 'react';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Subscribing...');

        // Simulate an API call
        setTimeout(() => {
            setMessage('✅ Success! Thank you for subscribing.');
            setEmail('');
        }, 2000);
    };

    return (
        <section id="cta" className="bg-primary text-white py-16 px-6 md:px-10 lg:px-16 text-center rounded-xl shadow-2xl mx-4 md:mx-auto max-w-6xl mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Aurora Nexus!</h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join our newsletter to get the latest news, updates, and early access to new features. Don't miss out on the future of AI!
            </p>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-grow p-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-opacity-75 transition duration-300 shadow-lg"
                />
                <button
                    type="submit"
                    className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                >
                    Subscribe Now
                </button>
            </form>
            {message && <p className="mt-6 text-base opacity-100 font-semibold">{message}</p>}
        </section>
    );
};

export default CTA;
