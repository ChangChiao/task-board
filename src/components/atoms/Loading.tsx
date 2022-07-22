import { FC } from 'react';

const LoadingText = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '...'];
const Loading: FC = () => {
  return (
    <div className="loading-text">
      {LoadingText.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
      <style jsx>
        {`
          .loading-text {
            span {
              @apply animate-fadeOut;
              &:nth-child(1) {
                @apply animation-delay-100;
              }
              &:nth-child(2) {
                @apply animation-delay-200;
              }
              &:nth-child(3) {
                @apply animation-delay-300;
              }
              &:nth-child(4) {
                @apply animation-delay-400;
              }
              &:nth-child(5) {
                @apply animation-delay-500;
              }
              &:nth-child(6) {
                @apply animation-delay-600;
              }
              &:nth-child(7) {
                @apply animation-delay-700;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
