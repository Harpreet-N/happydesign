import { Navigate, useParams } from "react-router-dom";
import { getServiceBySlug } from "../data/services";

/** Legacy `/services/:slug` → `/:slug` */
export function ServiceRedirect() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !getServiceBySlug(slug)) {
    return <Navigate to="/" replace />;
  }
  return <Navigate to={`/${slug}`} replace />;
}
