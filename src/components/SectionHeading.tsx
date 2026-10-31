import React from 'react';

interface SectionHeadingProps {
  index: string;
  title: string;
  accent?: string;
  kicker?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  accent,
  kicker,
}) => (
  <div className="section-head">
    <div className="section-head__row">
      <span className="section-head__index">{index}</span>
      <h2 className="section-head__title">
        {title}
        {accent ? <em className="serif"> {accent}</em> : null}
      </h2>
    </div>
    {kicker ? <p className="section-head__kicker">{kicker}</p> : null}
  </div>
);

export default SectionHeading;
