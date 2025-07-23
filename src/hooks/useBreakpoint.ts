"use client";

import { useMediaQuery } from "react-responsive";

/**
 * React hook that returns an object with boolean values indicating whether
 * the current viewport width matches each of the following breakpoints:
 * - sm: 640px
 * - md: 768px
 * - lg: 1024px
 * - xl: 1280px
 * - xxl: 2080px
 *
 * Note that the values are determined using the `min-width` media query,
 * so the values will be true if the viewport width is greater than or equal
 * to the breakpoint value.
 *
 * @returns an object with boolean values for each breakpoint
 */
export function useBreakpoint() {
  const sm = useMediaQuery({ query: "(min-width: 640px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const xl = useMediaQuery({ query: "(min-width: 1280px)" });
  const xxl = useMediaQuery({ query: "(min-width: 2080px)" });

  return { sm, md, lg, xl, xxl };
}

export default useBreakpoint