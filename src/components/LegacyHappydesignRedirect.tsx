import { Navigate, useLocation } from "react-router-dom";

/** Old `/happydesign/...` URLs → root paths */
export function LegacyHappydesignRedirect() {
  const location = useLocation();
  const nextPath = location.pathname.replace(/^\/happydesign/, "") || "/";
  return (
    <Navigate
      to={`${nextPath}${location.search}${location.hash}`}
      replace
    />
  );
}
