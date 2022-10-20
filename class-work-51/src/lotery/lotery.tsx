import React from 'react';

interface LoteryProps {
  number:number;
}

const Lotery: React.FC<LoteryProps> = props => {
  return (
    <div className="lotery">
      <p>{props.number}</p>
    </div>
  );
};

export default Lotery;