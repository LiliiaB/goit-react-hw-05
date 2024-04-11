import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Link to="/">Back to home page</Link>
      <div>Page not found</div>
    </>
  );
}
