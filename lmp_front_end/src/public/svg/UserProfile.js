import React from 'react';
export const UserProfile = ({ width, height }) => {
  return (
    <svg
      width={width ? width : '30'}
      height={height ? height : '30'}
      viewBox="-4 -4 32 32"
      fill="#000"
      class="rounded-full bg-gray-400 dark:bg-gray-900 flex-shrink-0 "
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  );
};
