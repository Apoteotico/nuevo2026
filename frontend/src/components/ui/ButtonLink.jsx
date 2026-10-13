import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-lime-600 text-neutral-950 px-4 py-1 rounded-md">
    {children}
  </Link>
);
