import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <Link className="navbar-brand fw-bold" to="/">
            Pharmacy System
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <div className="navbar-nav ms-auto">

              <Link className="nav-link" to="/">Home</Link>

              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Medicine
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/add-medicine">
                      Add Medicine
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/view-medicine">
                      View Medicine
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Sale
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/add-sale">
                      Add Sale
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/view-sale">
                      View Sale
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Supplier
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/add-supplier">
                      Add Supplier
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/view-supplier">
                      View Supplier
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar