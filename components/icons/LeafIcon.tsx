import React from "react";

const LeafIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M20.8945 4.35107H37.8945V21.3511C37.8945 26.0969 36.2477 30.1167 32.9539 33.4104C29.6602 36.7042 25.6404 38.3511 20.8945 38.3511C18.9112 38.3511 17.0433 38.0408 15.2909 37.4203C13.5371 36.8012 10.2872 34.5438 8.83516 33.4104C7.70182 31.9584 5.44437 28.7532 4.82528 26.9823C4.20478 25.2115 3.89453 23.3344 3.89453 21.3511C3.89453 16.6052 5.54141 12.5854 8.83516 9.2917C12.1289 5.99795 16.1487 4.35107 20.8945 4.35107Z"
        stroke="#1E1F1F"
        strokeWidth="2"
      />
      <path
        d="M3.89453 38.3511L19.8945 20.3511"
        stroke="#6A0DAD"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LeafIcon;
