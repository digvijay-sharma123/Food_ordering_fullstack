import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import your custom CSS file

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <div className="col-md-4">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* Your link content */}
          </Link>
          <span className="text-muted">© 2023 GoFood, Inc</span>
        </div>
      </footer>
    </div>
  )
}
