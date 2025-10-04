"use client";

export default function MatrixBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0" style={{ height: '400px', top: '-200px' }}>
      {/* Matrix code rain columns - Reduced for performance */}
      {Array.from({length: 20}).map((_, i) => (
        <div
          key={`matrix-${i}`}
          className="absolute top-0 w-px h-full"
          style={{
            left: `${(i * 5) + Math.random() * 2}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${6 + Math.random() * 3}s`
          }}
        >
          {Array.from({length: 20}).map((_, j) => (
            <div
              key={`char-${i}-${j}`}
              className="absolute text-green-400/30 font-mono text-xs animate-matrix-fall"
              style={{
                top: `${j * 5}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
            </div>
          ))}
        </div>
      ))}

      {/* Additional matrix columns - Reduced for performance */}
      {Array.from({length: 15}).map((_, i) => (
        <div
          key={`matrix-dense-${i}`}
          className="absolute top-0 w-px h-full"
          style={{
            left: `${(i * 6.67) + Math.random() * 3}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {Array.from({length: 15}).map((_, j) => (
            <div
              key={`char-dense-${i}-${j}`}
              className="absolute text-cyan-400/20 font-mono text-xs animate-matrix-fall"
              style={{
                top: `${j * 6.67}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            >
              {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
            </div>
          ))}
        </div>
      ))}

      {/* Binary streams - Reduced for performance */}
      {Array.from({length: 10}).map((_, i) => (
        <div
          key={`binary-${i}`}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"
          style={{
            left: `${(i * 10) + Math.random() * 5}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Circuit board patterns - Simplified */}
      <div className="absolute top-20 left-10 w-48 h-24 border border-blue-400/10 rounded-lg animate-pulse">
        <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full"></div>
      </div>

      <div className="absolute top-40 right-20 w-32 h-16 border border-purple-400/10 rounded-lg animate-pulse" style={{animationDelay: '1s'}}>
        <div className="absolute top-1 left-1 w-1 h-1 bg-purple-400/30 rounded-full"></div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400/30 rounded-full"></div>
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-purple-400/30 rounded-full"></div>
        <div className="absolute bottom-1 right-1 w-1 h-1 bg-purple-400/30 rounded-full"></div>
      </div>

      {/* Data flow lines - Reduced */}
      <div className="absolute top-1/3 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>

      {/* Floating data packets - Reduced */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-green-400/40 rounded-full animate-float"></div>
      <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>

      {/* Network nodes - Reduced */}
      <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-5/6 right-1/6 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
}