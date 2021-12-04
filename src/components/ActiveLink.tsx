import { useMatch, useResolvedPath } from "react-router-dom";
import { LinkProps, Link } from 'react-router-dom';
import { ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}

export function ActiveLink({ children, to, ...props }: ActiveLinkProps) {

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ color: match ? '#4FD1C5' : undefined }} to={to} {...props}>
      {children}
    </Link>

  );
}