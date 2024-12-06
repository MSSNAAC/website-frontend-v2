import type { SVGProps } from "react";

export function InstagramIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='instagram-icon'
      {...props}
    >
      <path
        d='M17.5 2.5H7.5C4.73858 2.5 2.5 4.73858 2.5 7.5V17.5C2.5 20.2614 4.73858 22.5 7.5 22.5H17.5C20.2614 22.5 22.5 20.2614 22.5 17.5V7.5C22.5 4.73858 20.2614 2.5 17.5 2.5Z'
        stroke='#006E3B'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 7H18.01M16.5 11.87C16.6234 12.7022 16.4812 13.5522 16.0937 14.299C15.7062 15.0458 15.0931 15.6514 14.3416 16.0297C13.5901 16.4079 12.7384 16.5396 11.9077 16.4059C11.0771 16.2723 10.3097 15.8801 9.71479 15.2852C9.11987 14.6902 8.72768 13.9229 8.59402 13.0922C8.46035 12.2616 8.59202 11.4099 8.97028 10.6584C9.34854 9.90685 9.95414 9.29374 10.7009 8.90624C11.4477 8.51874 12.2977 8.37659 13.13 8.5C13.9789 8.62588 14.7648 9.02146 15.3716 9.62831C15.9785 10.2351 16.3741 11.0211 16.5 11.87Z'
        stroke='#006E3B'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
