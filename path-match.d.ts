declare module "path-match" {
  import type { ParseOptions, Path, TokensToRegexpOptions } from "path-to-regexp";

  export type Options = TokensToRegexpOptions & ParseOptions;

  interface Params {
    [key: string]: string;
  }

  type MatchFunction = (pathname: string, params?: Params) => Params;

  type PathMatch = (path: Path) => MatchFunction

  export default function pathMatch(options?: Options): PathMatch;
}
