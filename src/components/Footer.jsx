import React from 'react';
import { Link } from 'react-router-dom';
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowRightAlt,
  CheckCircle
} from "@mui/icons-material";

const Footer = () => {
  const quickLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "Savings & Investments", path: "/services/savings" },
    { name: "Loans & Advances", path: "/services/loans" },
    { name: "Warehouse Facilities", path: "/services/warehouse" },
    { name: "Interest Rates", path: "/rates" },
    { name: "Branch Network", path: "/branches" },
    { name: "Careers", path: "/careers" },
  ];

  const services = [
    { name: "Development Banking", path: "/developmentBanking" },
    { name: "Research & Development", path: "/research" },
    { name: "Financial Services", path: "/finance" },
    { name: "HR Solutions", path: "/hr" },
    { name: "Marketing Support", path: "/marketing" },
    { name: "Technical Support", path: "/technology" },
  ];

  return (
    <footer className=" bg-blue-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & Description */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-14 w-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl">N</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">NCDB</h2>
                <p className="text-blue-300 text-sm font-medium">Northern Cooperative Development Bank</p>
              </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering communities through innovative financial solutions and cooperative banking services.
              We are committed to fostering sustainable development and economic growth across Northern regions.
            </p>

            <div className="flex space-x-3">
              <a href="#" className="h-10 w-10 rounded-lg bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-blue-800 hover:bg-sky-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-blue-800 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 pb-3 border-b border-blue-700">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center text-blue-200 hover:text-white transition-all duration-300 group"
                  >
                    <span className="group-hover:text-blue-100">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 pb-3 border-b border-blue-700">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center text-blue-200 hover:text-white transition-all duration-300 group"
                  >
                    <span className="group-hover:text-blue-100">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact*/}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-8 pb-3 border-b border-blue-700">Contact Us</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <LocationOn className="h-5 w-5 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-blue-200 text-sm">
                    Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000
                  </p>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-4 flex-shrink-0" />
                  <p className="text-blue-200 text-sm">+94 212 232 673</p>
                </div>

                <div className="flex items-center">
                  <Email className="h-5 w-5 text-blue-400 mr-4 flex-shrink-0" />
                  <p className="text-blue-200 text-sm">info@northerncooperativebank.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-300 text-sm">
              &copy; {new Date().getFullYear()} Northern Cooperative Development Bank. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;