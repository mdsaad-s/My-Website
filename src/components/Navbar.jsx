// import React, { useState, useRef, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// const services = [
//   { name: "General Medicine", slug: "general-medicine" },
//   { name: "Emergency Care", slug: "emergency-care" },
//   { name: "Cardiology", slug: "cardiology" },
//   { name: "Orthopedics", slug: "orthopedics" },
//   { name: "Gynecology", slug: "gynecology" },
//   { name: "Pediatrics", slug: "pediatrics" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   // close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const linkClass = ({ isActive }) =>
//     `relative font-bold transition duration-300
//      ${isActive ? "text-yellow-500" : "text-blue-600"}
//      hover:text-yellow-500`;

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

//         {/* LOGO */}
//         <img
//           src={logo}
//           alt="Hospital Logo"
//           onClick={() => navigate("/")}
//           className="h-11 w-auto cursor-pointer hover:scale-105 transition"
//         />

//         {/* NAV LINKS */}
//         <ul className="flex gap-8 text-sm md:text-base items-center">

//           <li>
//             <NavLink to="/" className={linkClass}>Home</NavLink>
//           </li>

//           <li>
//             <NavLink to="/about" className={linkClass}>About</NavLink>
//           </li>

//           {/* SERVICES DROPDOWN */}
//           <li className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setOpen(!open)}
//               className="font-bold text-blue-600 hover:text-yellow-500 transition"
//             >
//               Services ▾
//             </button>

//             {open && (
//               <ul
//                 className="absolute top-10 left-0 w-60 bg-white
//                            shadow-xl rounded-xl overflow-hidden z-50"
//               >
//                 {services.map((service, index) => (
//                   <li
//                     key={index}
//                     onClick={() => {
//                       navigate(`/services?service=${service.slug}`);
//                       setOpen(false);
//                     }}
//                     className="px-5 py-3 text-sm font-medium text-gray-700
//                                hover:bg-blue-600 hover:text-white
//                                cursor-pointer transition"
//                   >
//                     {service.name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li>
//             <NavLink to="/contact" className={linkClass}>Contact</NavLink>
//           </li>

//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const services = [
  { name: "General Medicine", slug: "general-medicine" },
  { name: "Emergency Care", slug: "emergency-care" },
  { name: "Cardiology", slug: "cardiology" },
  { name: "Orthopedics", slug: "orthopedics" },
  { name: "Gynecology", slug: "gynecology" },
  { name: "Pediatrics", slug: "pediatrics" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = ({ isActive }) =>
    `block font-bold transition duration-300 ${
      isActive ? "text-yellow-500" : "text-blue-600"
    } hover:text-yellow-500`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <img
          src={logo}
          alt="Hospital Logo"
          onClick={() => navigate("/")}
          className="h-11 w-auto cursor-pointer hover:scale-105 transition"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>

          {/* SERVICES DROPDOWN */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="font-bold text-blue-600 hover:text-yellow-500 transition"
            >
              Services ▾
            </button>

            {open && (
              <ul className="absolute top-10 left-0 w-60 bg-white shadow-xl rounded-xl overflow-hidden">
                {services.map((service) => (
                  <li
                    key={service.slug}
                    onClick={() => {
                      navigate(`/services?service=${service.slug}`);
                      setOpen(false);
                    }}
                    className="px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white cursor-pointer transition"
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-blue-600"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <NavLink onClick={() => setMobileMenu(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setMobileMenu(false)} to="/about" className={linkClass}>About</NavLink>

          <div>
            <p className="font-bold text-blue-600 mb-2">Services</p>
            <div className="pl-4 space-y-2">
              {services.map((service) => (
                <p
                  key={service.slug}
                  onClick={() => {
                    navigate(`/services?service=${service.slug}`);
                    setMobileMenu(false);
                  }}
                  className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  {service.name}
                </p>
              ))}
            </div>
          </div>

          <NavLink onClick={() => setMobileMenu(false)} to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
