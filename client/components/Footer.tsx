import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A0B0A] text-[#EFE7D2] border-t border-[rgba(239,231,210,0.1)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img
              src="/Recurso8.svg"
              alt="Snackers Logo"
              className="h-10 w-auto"
            />
            <p className="text-[#E0D3C4] text-sm leading-relaxed max-w-xs">
              Experience culinary excellence in the heart of the city. Where every meal is a celebration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase text-[#EFE7D2] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-[#E0D3C4] text-sm hover:text-[#EFE7D2] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-[#E0D3C4] text-sm hover:text-[#EFE7D2] transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#E0D3C4] text-sm hover:text-[#EFE7D2] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className="text-[#E0D3C4] text-sm hover:text-[#EFE7D2] transition-colors"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase text-[#EFE7D2] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-[#E0D3C4] text-sm">
                123 Restaurant Street
              </li>
              <li className="text-[#E0D3C4] text-sm">
                New York, NY 10001
              </li>
              <li className="text-[#E0D3C4] text-sm">
                <a href="tel:+15551234567" className="hover:text-[#EFE7D2] transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="text-[#E0D3C4] text-sm">
                <a href="mailto:hello@snackers.com" className="hover:text-[#EFE7D2] transition-colors">
                  hello@snackers.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sales Points */}
          <div>
            <h3 className="font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase text-[#EFE7D2] mb-4">
              {t("footer.sales_points")}
            </h3>
            <ul className="space-y-3">
              <li className="text-[#E0D3C4] text-sm">
                Saha Yoga Studio
              </li>
              <li className="text-[#E0D3C4] text-sm">
                Coffee Max Paitilla
              </li>
              <li className="text-[#E0D3C4] text-sm">
                Brew Coffee
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase text-[#EFE7D2] mb-4">
              Hours
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-[#E0D3C4] text-sm">
                Mon - Fri: 11am - 10pm
              </li>
              <li className="text-[#E0D3C4] text-sm">
                Sat - Sun: 10am - 11pm
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/levier.studio?igsh=MXNycXR6MzExMmI0Zw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(239,231,210,0.1)] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4.5C6.51563 4.5 4.5 6.51563 4.5 9C4.5 11.4844 6.51563 13.5 9 13.5C11.4844 13.5 13.5 11.4844 13.5 9C13.5 6.51563 11.4844 4.5 9 4.5ZM9 12C7.34531 12 6 10.6547 6 9C6 7.34531 7.34531 6 9 6C10.6547 6 12 7.34531 12 9C12 10.6547 10.6547 12 9 12Z"
                    fill="#E0D3C4"
                  />
                  <path
                    d="M13.6875 5.0625C14.2053 5.0625 14.625 4.64277 14.625 4.125C14.625 3.60723 14.2053 3.1875 13.6875 3.1875C13.1697 3.1875 12.75 3.60723 12.75 4.125C12.75 4.64277 13.1697 5.0625 13.6875 5.0625Z"
                    fill="#E0D3C4"
                  />
                  <path
                    d="M16.5 1.5H1.5V16.5H16.5V1.5ZM15 11.25C15 13.3219 13.3219 15 11.25 15H6.75C4.67812 15 3 13.3219 3 11.25V6.75C3 4.67812 4.67812 3 6.75 3H11.25C13.3219 3 15 4.67812 15 6.75V11.25Z"
                    fill="#E0D3C4"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(239,231,210,0.1)] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 9C16.5 4.86562 13.1344 1.5 9 1.5C4.86562 1.5 1.5 4.86562 1.5 9C1.5 12.6891 4.12031 15.7406 7.59375 16.3828V11.1094H5.57812V9H7.59375V7.35937C7.59375 5.37187 8.7375 4.3125 10.5469 4.3125C11.4094 4.3125 12.3094 4.47187 12.3094 4.47187V6.42188H11.3109C10.3266 6.42188 10.0031 7.01719 10.0031 7.62656V9H12.2109L11.8406 11.1094H10.0031V16.3828C13.4766 15.7406 16.5 12.6891 16.5 9Z"
                    fill="#E0D3C4"
                  />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(239,231,210,0.1)] transition-colors"
                aria-label="Twitter"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1187 2.25H16.6406L11.0625 8.62031L17.625 15.75H12.4875L8.64844 10.8328L4.25156 15.75H1.72969L7.67344 9.00469L1.375 2.25H6.64375L10.1172 6.78281L14.1187 2.25ZM13.2094 14.3438H14.6156L5.85156 3.68906H4.34531L13.2094 14.3438Z"
                    fill="#E0D3C4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(239,231,210,0.08)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E0D3C4] text-sm">
            &copy; {new Date().getFullYear()} Snackers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-[#E0D3C4] text-sm hover:text-[#EFE7D2] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#E0D3C4] text-sm hover:text-[#EFE7D2] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
