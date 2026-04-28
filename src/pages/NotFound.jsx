import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Helmet><title>404 – Page Not Found</title></Helmet>
      <h1>404</h1>
      <p>Oops! This page doesn't exist.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}