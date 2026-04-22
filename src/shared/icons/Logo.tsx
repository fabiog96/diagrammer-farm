interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className, size = 28 }: LogoProps) => {
  const h = size;
  const w = Math.round(size * (220 / 160));

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 220 160"
      fill="none"
      className={className}
    >
      <path
        d="M50 122 C 26 122, 18 102, 30 86
           C 24 66, 44 50, 62 56
           C 70 40, 96 36, 108 48
           C 124 38, 150 44, 156 62
           C 178 58, 196 72, 196 92
           C 204 100, 208 114, 200 124
           C 194 134, 184 138, 172 134
           L 60 134
           C 54 132, 48 128, 50 122 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <line x1="82" y1="92" x2="118" y2="76" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="118" y1="76" x2="150" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="82" y1="92" x2="150" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="1.5 5" />
      <circle cx="82" cy="92" r="10" className="fill-accent-brand" />
      <circle cx="118" cy="76" r="10" className="fill-accent-brand" />
      <circle cx="150" cy="100" r="10" className="fill-accent-brand" />
    </svg>
  );
};
