import { useFadeOnRouteChange } from "./hooks/useFadeOnRouteChange";

export default function AppLayout({ children }) {
  useFadeOnRouteChange();
  return children;
}
