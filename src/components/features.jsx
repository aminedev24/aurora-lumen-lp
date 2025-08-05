
const featuresData = [
    {
        title: "Intelligent AI Model",
        description: "Powered by a cutting-edge AI, Aurora Nexus understands context, generates coherent responses, and learns from your interactions.",
        icon: (
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 7h2m-2 10h2M19 7h2m-2 10h2M4 12H2m20 0h-2M12 4.5v15M12 2a1 1 0 00-1 1v18a1 1 0 001 1 1 1 0 001-1V3a1 1 0 00-1-1z"></path>
            </svg>
        )
    },
    {
        title: "Customizable Modes",
        description: "Switch between different interaction modes like creative writing, coding assistant, factual query, and more to suit your needs.",
        icon: (
            <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2v-7m-4 0H3m6 0h2"></path>
            </svg>
        )
    },
    {
        title: "Intuitive Chat Experience",
        description: "Enjoy a clean, user-friendly chat interface designed for natural and efficient conversations.",
        icon: (
            <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
        )
    }
];

const Features = () => {
    return (
        <section id="features" className="py-16 px-6 md:px-10 lg:px-16 bg-white dark:bg-dark-bg rounded-xl shadow-lg mx-4 md:mx-auto max-w-6xl mb-16 transition-colors duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-dark-text mb-12">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {featuresData.map((feature, index) => (
                    <div key={index} className="group bg-gray-50 dark:bg-dark-card p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                        <div className="bg-primary-light group-hover:bg-primary-light p-4 rounded-full mb-6 transition duration-300">
                            {feature.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
