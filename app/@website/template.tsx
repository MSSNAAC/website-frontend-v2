import { PropsWithChildren } from "react";

type TemplateProps = PropsWithChildren<{}>;

export default function Template({ children }: TemplateProps) {
  return children;
}
