import "../styles/home.css";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaHome, FaSearch, FaUser,
  FaShoppingBasket, FaTruck, FaHandHolding,
  FaClipboardList, FaHistory, FaBars
} from "react-icons/fa";

export default function SidebarLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isHome = location.pathname === "/home";

  const services = [
    { name: "Market", icon: <FaShoppingBasket />, path: "/market" },
    { name: "Delivery", icon: <FaTruck />, path: "/delivery" },
    { name: "Pick Up", icon: <FaHandHolding />, path: "/pickup" },
    { name: "Other Errands", icon: <FaClipboardList />, path: "/other-errands" },
    { name: "Errands History", icon: <FaHistory />, path: "/errands-history" },
  ];

  return (
    <div className={`home-layout ${collapsed ? "collapsed" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="logo-box">
            <div className="logo-icon">EE</div>
            {!collapsed && <span className="logo-text">Estate Errands</span>}
          </div>

          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
            <FaBars />
          </button>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/home" end className="nav-link">
            <FaHome /> {!collapsed && <span>Home</span>}
          </NavLink>
          <NavLink to="/discover" className="nav-link">
            <FaSearch /> {!collapsed && <span>Discover</span>}
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            <FaUser /> {!collapsed && <span>Profile</span>}
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <Outlet />

        {isHome && (
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                onClick={() => navigate(service.path)}
              >
                <div className="service-icon">{service.icon}</div>
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
