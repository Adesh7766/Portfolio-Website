import React from 'react';

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
  separator?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 28,
  reverse = false,
  className = '',
  separator,
}) => {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className={`marquee ${className}`.trim()} aria-hidden="true">
      <div
        className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {loop.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
            <span className="marquee__star" aria-hidden="true">
              {separator ?? '\u2733'}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
