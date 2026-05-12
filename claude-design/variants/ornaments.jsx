// Shared SVG ornaments used across all three variants.
// Eastern miniature / Islamic geometric vocabulary.

const Ornament = {};

// 8-point star (Islamic geometric staple)
Ornament.Star8 = ({ size = 40, color = 'currentColor', stroke = 1.2 }) => (
  <svg width={size} height={size} viewBox="-50 -50 100 100" fill="none" stroke={color} strokeWidth={stroke}>
    <polygon points="0,-44 12,-12 44,0 12,12 0,44 -12,12 -44,0 -12,-12" />
    <polygon points="-31,-31 31,-31 31,31 -31,31" transform="rotate(0)" />
    <polygon points="-31,-31 31,-31 31,31 -31,31" transform="rotate(45)" />
  </svg>
);

// Geometric medallion (round, dense)
Ornament.Medallion = ({ size = 120, color = 'currentColor', stroke = 1 }) => (
  <svg width={size} height={size} viewBox="-100 -100 200 200" fill="none" stroke={color} strokeWidth={stroke}>
    <circle r="92" />
    <circle r="78" />
    <circle r="58" />
    <g>
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="0" y1="58" x2="0" y2="92" transform={`rotate(${i * 30})`} />
      ))}
    </g>
    <g>
      {Array.from({ length: 8 }).map((_, i) => (
        <polygon key={i} points="0,-44 8,-8 44,0 8,8 0,44 -8,8 -44,0 -8,-8" transform={`rotate(${i * 45})`} opacity="0.5" />
      ))}
    </g>
    <polygon points="0,-32 9,-9 32,0 9,9 0,32 -9,9 -32,0 -9,-9" />
    <circle r="10" />
  </svg>
);

// Corner illumination — manuscript page corner
Ornament.Corner = ({ size = 120, color = 'currentColor', stroke = 1.1 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={stroke}>
    <path d="M0 30 Q 0 0, 30 0 L 50 0 M 0 50 L 0 30" />
    <path d="M8 30 Q 8 8, 30 8 L 45 8 M 8 45 L 8 30" opacity="0.6" />
    <circle cx="14" cy="14" r="3" fill={color} stroke="none" />
    <path d="M22 22 q 6 0 6 6 q 0 6 -6 6 q -6 0 -6 -6 q 0 -6 6 -6 z" />
    <path d="M28 8 L 36 8 M 42 8 L 50 8" strokeDasharray="4 3" opacity="0.4" />
  </svg>
);

// Repeating tile pattern (Bukhara koshin)
Ornament.TilePattern = ({ id, color = '#d68b1f', bg = 'transparent', opacity = 1 }) => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <pattern id={id} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect width="80" height="80" fill={bg} />
        <g fill="none" stroke={color} strokeWidth="1.1" opacity={opacity}>
          <polygon points="40,8 48,32 72,40 48,48 40,72 32,48 8,40 32,32" />
          <polygon points="40,8 48,32 72,40 48,48 40,72 32,48 8,40 32,32" transform="rotate(22.5 40 40)" />
          <circle cx="40" cy="40" r="6" />
        </g>
      </pattern>
    </defs>
  </svg>
);

// Arch / mehrab silhouette (frames hero photos)
Ornament.Mehrab = ({ width = 280, height = 380, fill = '#e8d5a8', stroke, strokeWidth = 1.5 }) => (
  <svg width={width} height={height} viewBox="0 0 280 380" fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
    <path d="M 20 380 L 20 160 Q 20 20, 140 20 Q 260 20, 260 160 L 260 380 Z" />
  </svg>
);

// Mehrab clip path id helper
Ornament.MehrabClip = ({ id }) => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <clipPath id={id} clipPathUnits="objectBoundingBox">
        <path d="M 0.07 1 L 0.07 0.42 Q 0.07 0.05, 0.5 0.05 Q 0.93 0.05, 0.93 0.42 L 0.93 1 Z" />
      </clipPath>
    </defs>
  </svg>
);

// Decorative horizontal rule with center medallion
Ornament.Divider = ({ width = 600, color = 'currentColor', stroke = 1, height = 28 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" stroke={color} strokeWidth={stroke}>
    <line x1="0" y1={height / 2} x2={width / 2 - 20} y2={height / 2} />
    <line x1={width / 2 + 20} y1={height / 2} x2={width} y2={height / 2} />
    <g transform={`translate(${width / 2} ${height / 2})`}>
      <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill={color} stroke="none" />
      <circle r="14" />
    </g>
  </svg>
);

// Calligraphic flourish (under section labels)
Ornament.Flourish = ({ width = 80, color = 'currentColor' }) => (
  <svg width={width} height="14" viewBox="0 0 80 14" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
    <path d="M 2 7 Q 14 0, 26 7 T 50 7 T 78 7" />
    <circle cx="40" cy="7" r="1.5" fill={color} />
  </svg>
);

// Tiny Muqimiy stylised portrait (placeholder used inside all variants)
Ornament.Portrait = ({ size = 240, palette = {} }) => {
  const skin = palette.skin || '#d9a36a';
  const beard = palette.beard || '#3a2817';
  const robe = palette.robe || '#7a5230';
  const turban = palette.turban || '#e8dcc4';
  const bg = palette.bg || '#f5e9c8';
  const accent = palette.accent || '#a83232';
  return (
    <svg width={size} height={size} viewBox="0 0 240 280" style={{ display: 'block' }}>
      <rect width="240" height="280" fill={bg} />
      {/* miniature halo / arch */}
      <path d="M 40 280 L 40 130 Q 40 40, 120 40 Q 200 40, 200 130 L 200 280 Z" fill="none" stroke={accent} strokeWidth="2" />
      {/* halo */}
      <circle cx="120" cy="100" r="62" fill={accent} opacity="0.18" />
      {/* turban */}
      <path d="M 70 95 Q 70 60, 120 60 Q 170 60, 170 95 Q 170 110, 160 115 L 80 115 Q 70 110, 70 95 Z" fill={turban} stroke={beard} strokeWidth="1.5" />
      <path d="M 75 88 Q 100 75, 120 78 Q 145 80, 165 90" fill="none" stroke={beard} strokeWidth="1" opacity="0.5" />
      <path d="M 80 100 Q 100 92, 120 94 Q 145 96, 160 102" fill="none" stroke={beard} strokeWidth="1" opacity="0.5" />
      {/* face */}
      <ellipse cx="120" cy="135" rx="38" ry="42" fill={skin} stroke={beard} strokeWidth="1.2" />
      {/* eyes (miniature-style almond) */}
      <path d="M 100 130 Q 105 126, 112 130" fill="none" stroke={beard} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 128 130 Q 135 126, 140 130" fill="none" stroke={beard} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="106" cy="131" r="1.5" fill={beard} />
      <circle cx="134" cy="131" r="1.5" fill={beard} />
      {/* brows */}
      <path d="M 98 122 Q 106 119, 114 122" fill="none" stroke={beard} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 126 122 Q 134 119, 142 122" fill="none" stroke={beard} strokeWidth="1.5" strokeLinecap="round" />
      {/* nose */}
      <path d="M 120 135 L 117 152 Q 117 156, 120 156" fill="none" stroke={beard} strokeWidth="1.2" strokeLinecap="round" />
      {/* mouth */}
      <path d="M 113 165 Q 120 168, 127 165" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      {/* beard */}
      <path d="M 85 158 Q 90 200, 120 215 Q 150 200, 155 158 Q 145 168, 120 168 Q 95 168, 85 158 Z" fill={beard} />
      <path d="M 95 175 Q 100 185, 105 178 M 115 180 Q 120 188, 125 180 M 135 175 Q 140 185, 145 178" fill="none" stroke={turban} strokeWidth="0.8" opacity="0.4" />
      {/* robe */}
      <path d="M 60 280 L 70 220 Q 120 200, 170 220 L 180 280 Z" fill={robe} stroke={beard} strokeWidth="1.2" />
      <path d="M 110 215 L 115 280 M 130 215 L 125 280" fill="none" stroke={beard} strokeWidth="1" opacity="0.4" />
      {/* collar trim */}
      <path d="M 105 213 Q 120 222, 135 213 L 138 230 Q 120 240, 102 230 Z" fill={accent} stroke={beard} strokeWidth="1" />
    </svg>
  );
};

// Quill / pen icon
Ornament.Quill = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 4 20 L 8 16 M 6 18 Q 14 14, 18 4 Q 12 6, 8 14 Q 6 17, 6 18 Z" />
    <path d="M 9 13 L 14 8" />
  </svg>
);

window.Ornament = Ornament;
