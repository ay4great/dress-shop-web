import React from 'react';

interface Props {
  number: number;
}

export const ProductsSkeleton: React.FC<Props> = ({ number }) => {
  return (
    <>
      <div className="grid">
        {[...Array(number)].map((_, i) => (
          <div key={i} className="grid-item">
            <div className="grid-box-wrapper">
              <div className="grid-box"></div>
            </div>
            <div className="info">
              <div className="line"></div>
              <div className="half-line"></div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1.5rem;
          }

          @media only screen and (min-width: 768px) {
            .grid {
              grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
            }
          }

          .grid-box-wrapper {
            position: relative;
            padding-top: 100%;
          }

          .grid-box {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background-color: var(--color-gray-light);
          }

          .info {
            padding: 1rem 0;
          }

          .line {
            height: 2rem;
            width: 100%;
            background-color: var(--color-gray-light);
          }

          .half-line {
            height: 2rem;
            margin-top: 1rem;
            background-color: var(--color-gray-light);
            width: 50%;
          }
        `}
      </style>
    </>
  );
};
