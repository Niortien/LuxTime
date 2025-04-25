export function WatchIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    {/* Montre */}
    <circle cx="200" cy="150" r="80" fill="gold" />
    <circle cx="200" cy="150" r="75" fill="black" />
    
    {/* Cadran */}
    <circle cx="200" cy="150" r="70" fill="white" />
    <line x1="200" y1="150" x2="200" y2="80" stroke="gold" strokeWidth="4" /> {/* Aiguille des heures */}
    <line x1="200" y1="150" x2="250" y2="150" stroke="gold" strokeWidth="2" /> {/* Aiguille des minutes */}
    
    {/* Chiffres */}
    <text x="200" y="50" textAnchor="middle" fill="gold" fontSize="20">12</text>
    <text x="200" y="250" textAnchor="middle" fill="gold" fontSize="20">6</text>
    <text x="50" y="150" textAnchor="middle" fill="gold" fontSize="20">9</text>
    <text x="350" y="150" textAnchor="middle" fill="gold" fontSize="20">3</text>
    
    {/* Bracelet */}
    <rect x="120" y="230" width="160" height="20" fill="black" />
    <rect x="120" y="220" width="20" height="10" fill="gold" />
    <rect x="260" y="220" width="20" height="10" fill="gold" />
  </svg>
  );
}
