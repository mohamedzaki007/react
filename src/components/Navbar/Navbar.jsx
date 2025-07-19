import React from "react";
// استورد Link و NavLink من react-router-dom
import { Link, NavLink } from "react-router-dom";
// تأكد من مسار ملف الـ CSS الخاص بك
import "./Navbar.css"; // لستايلات Start Framework الإضافية
// إذا كان لديك ملف CSS عام لـ Bootstrap، فتأكد من استيراده في App.jsx أو index.html

export default function Navbar() {
  return (
    // استخدم فئات Bootstrap لتعيين وضعية وشكل الـ Navbar
    <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100 py-3 px-5">
      <div className="container-fluid">
        {/* رابط الشعار/العلامة التجارية باستخدام Link من React Router */}
        <Link to="/home" className="navbar-brand text-decoration-none">
          {/* يمكنك إضافة الفئات الخاصة بك هنا لتحسين المظهر */}
          <h1 className="my-0 ms-5 fw-bold text-white">Start Framework</h1> {/* أو استخدم لونًا مناسبًا */}
        </Link>

        {/* زر التبديل (Toggler) لقائمة الموبايل من Bootstrap */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup" // تأكد من مطابقة الـ ID مع الـ div الذي سيتم طيه
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* محتوى القائمة القابل للطي (Collapsible Navbar Content) */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* استخدم ms-auto لدفع الروابط إلى اليمين */}
            <li className="nav-item mx-3">
              {/* NavLink للصفحة "About" */}
              <NavLink
                to="/about"
                // استخدم className كـ function لتطبيق الأنماط الشرطية
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-decoration-none fw-semibold px-3 py-2 rounded fs-5 activ-link"
                    : "nav-link text-decoration-none fw-semibold fs-5"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              {/* NavLink للصفحة "Portfolio" */}
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link"
                    : "nav-link text-decoration-none fw-semibold fs-5"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              {/* NavLink للصفحة "Contact" */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link"
                    : "nav-link text-decoration-none fw-semibold fs-5"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}