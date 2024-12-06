import type { SVGProps } from "react";

export function TwitterIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='22'
      height='18'
      viewBox='0 0 22 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22 0.000290078C21.0424 0.675767 19.9821 1.1924 18.86 1.53029C18.2577 0.837801 17.4573 0.346982 16.567 0.124216C15.6767 -0.0985496 14.7395 -0.0425143 13.8821 0.284743C13.0247 0.612001 12.2884 1.19469 11.773 1.95401C11.2575 2.71332 10.9877 3.61263 11 4.53029V5.53029C9.24263 5.57586 7.50127 5.1861 5.93101 4.39574C4.36074 3.60537 3.01032 2.43893 2 1.00029C2 1.00029 -2 10.0003 7 14.0003C4.94053 15.3983 2.48716 16.0992 0 16.0003C9 21.0003 20 16.0003 20 4.50029C19.9991 4.22174 19.9723 3.94388 19.92 3.67029C20.9406 2.66378 21.6608 1.393 22 0.000290078Z'
        fill='#006E3B'
      />
    </svg>
  );
}
