


export function IllustrationSvg() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor/Screen */}
        <rect x="70" y="60" width="220" height="160" rx="5" fill="#FFFFFF" stroke="#333" strokeWidth="4" />
        <rect x="80" y="80" width="200" height="120" rx="2" fill="#F0F0F0" />
        
        {/* Monitor Stand */}
        <path d="M150 220 L210 220 L200 260 L160 260 Z" fill="#DDDDDD" stroke="#333" strokeWidth="2" />
        <rect x="150" y="260" width="60" height="10" rx="2" fill="#BBBBBB" stroke="#333" strokeWidth="2" />
        
        {/* Lock Icon on Screen */}
        <rect x="130" y="100" width="100" height="70" rx="5" fill="#4287f5" />
        <rect x="155" y="100" width="50" height="30" rx="25" fill="#2463EB" />
        <rect x="150" y="120" width="60" height="50" rx="5" fill="#4287f5" />
        
        {/* Person */}
        <circle cx="280" cy="170" r="15" fill="#333" /> {/* Head */}
        <rect x="270" y="185" width="20" height="40" fill="white" /> {/* Body */}
        <rect x="255" y="195" width="15" height="5" fill="white" /> {/* Left arm */}
        <rect x="290" y="195" width="30" height="5" fill="white" /> {/* Right arm pointing */}
        <rect x="270" y="225" width="8" height="25" fill="#3B82F6" /> {/* Left leg */}
        <rect x="282" y="225" width="8" height="25" fill="#3B82F6" /> {/* Right leg */}
        
        {/* Decorative leaves/elements */}
        <path d="M30 280 Q50 260 60 270 Q80 290 70 310 Q50 330 30 320 Q20 300 30 280 Z" fill="#4287f5" opacity="0.5" />
        <path d="M330 100 Q350 80 360 90 Q380 110 370 130 Q350 150 330 140 Q320 120 330 100 Z" fill="#9333EA" opacity="0.5" />
        <path d="M40 180 Q60 160 70 170 Q90 190 80 210 Q60 230 40 220 Q30 200 40 180 Z" fill="#9333EA" opacity="0.5" />
      </svg>
    );
  }