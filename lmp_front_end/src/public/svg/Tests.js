import React from 'react';

export const Tests = () => {
  return (
    <svg
      viewBox="0 0 23 24"
      fill="currentColor"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full"
      width="24px"
      height="24px"
    >
      <circle cx="9" cy="14.5" r="1.9" fill="current" stroke="current"></circle>
      <path
        d="m18.2 9.8 4.2-5c.1-.2 0-.4-.2-.4l-4 .3-.2-.2-.4-4c0-.2-.3-.3-.4-.1l-4.2 5s-.1.2 0 .2l1 3.6.2.2 3.8.5.2-.1Z"
        fill="current"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m8.3 15 6-7.2.7.6-6 7.2-.7-.7Z"
        fill="current"
      ></path>
      <mask id="a" fill="#fff">
        <path d="M9.8 5.5a9 9 0 1 0 8 6.8l-2.3.5a6.7 6.7 0 1 1-5.9-5l.2-2.3Z"></path>
      </mask>
      <path
        d="M9.8 5.5a9 9 0 1 0 8 6.8l-2.3.5a6.7 6.7 0 1 1-5.9-5l.2-2.3Z"
        fill="current"
        stroke="current"
        stroke-width="4"
        mask="url(#a)"
      ></path>
    </svg>
  );
};
