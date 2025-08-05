export default function TailwindColorTest() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Tailwind Color Configuration Test</h1>
      
      {/* Primary Color Tests */}
      <div className="p-4 bg-primary text-white">
        Primary Background (#62c41c)
      </div>
      <div className="p-4 text-primary border-2 border-primary">
        Primary Text and Border
      </div>
      
      {/* Secondary Color Tests */}
      <div className="p-4 bg-secondary text-white">
        Secondary Background (#1da1f2)
      </div>
      <div className="p-4 text-secondary border-2 border-secondary">
        Secondary Text and Border
      </div>
      
      {/* Accent Color Tests */}
      <div className="p-4 bg-accent text-white">
        Accent Background (#f1892b)
      </div>
      <div className="p-4 text-accent border-2 border-accent">
        Accent Text and Border
      </div>
      
      {/* Light Variants */}
      <div className="p-4 bg-primary-light text-dark-bg">
        Primary Light Background (#e6eaf3)
      </div>
      <div className="p-4 bg-secondary-light text-dark-bg">
        Secondary Light Background (#e6f5fd)
      </div>
      <div className="p-4 bg-accent-light text-dark-bg">
        Accent Light Background (#fdf3e6)
      </div>
      
      {/* Dark Mode Colors */}
      <div className="p-4 bg-dark-bg text-dark-text">
        Dark Background (#1a202c) with Light Text (#e2e8f0)
      </div>
      <div className="p-4 bg-dark-card text-dark-text">
        Dark Card (#2d3748) with Light Text
      </div>
      
      {/* Hover States */}
      <button className="px-4 py-2 bg-primary hover:bg-opacity-90 text-white rounded transition">
        Hover Test (should darken slightly)
      </button>
      
      {/* Opacity Test */}
      <div className="p-4 bg-primary bg-opacity-50 border border-primary">
        Primary with 50% opacity
      </div>
    </div>
  );
}