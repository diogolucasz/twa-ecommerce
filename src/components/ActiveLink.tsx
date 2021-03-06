import { useMatch, useResolvedPath } from "react-router-dom";
import { LinkProps, Link } from 'react-router-dom';
import { ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}

export function ActiveLink({ children, to, ...props }: ActiveLinkProps) {

  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: false });

  return (
    <Link style={{ color: match ? '#4FD1C5' : undefined }} to={to} {...props}>
      {children}
    </Link>

  );
}