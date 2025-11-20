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
                Chanis, La Fontana
              </li>
              <li className="text-[#E0D3C4] text-sm">
                Panama City, Panama
              </li>
              <li className="text-[#E0D3C4] text-sm">
                <a href="tel:+15551234567" className="hover:text-[#EFE7D2] transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="text-[#E0D3C4] text-sm">
                <a href="mailto:Itslevierstudio@gmail.com" className="hover:text-[#EFE7D2] transition-colors">
                  Itslevierstudio@gmail.com
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

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@levier.estudio?_r=1&_t=ZM-91ULA63L88p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(239,231,210,0.1)] transition-colors"
                aria-label="TikTok"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 6.75C13.2054 6.75 12.2038 6.33482 11.4556 5.58642C10.7075 4.83803 10.2727 3.83609 10.2727 2.79141V2.25H7.63636V12.375C7.63636 12.8723 7.43875 13.3492 7.08868 13.6992C6.73861 14.0493 6.26175 14.25 5.76455 14.25C5.26734 14.25 4.79048 14.0493 4.44041 13.6992C4.09034 13.3492 3.89273 12.8723 3.89273 12.375C3.89273 11.8777 4.09034 11.4008 4.44041 11.0508C4.79048 10.7007 5.26734 10.5 5.76455 10.5C6.01315 10.5 6.26176 10.5563 6.49091 10.6594V7.96875C5.73864 7.86094 4.96455 7.96875 4.27091 8.28281C3.57727 8.59688 2.99455 9.10313 2.58545 9.74063C2.17636 10.3781 1.95818 11.1187 1.95818 11.8875C1.95818 12.6562 2.18182 13.4063 2.59091 14.0438C3 14.6812 3.58909 15.1969 4.28273 15.5203C4.97636 15.8437 5.75045 15.9609 6.50273 15.8625C7.255 15.7641 7.96091 15.4547 8.53818 14.9719C9.11545 14.4891 9.54 13.8516 9.76364 13.1297C9.98727 12.4078 10 11.6391 9.80182 10.9078V5.71875C10.4836 6.27188 11.3482 6.57656 12.2391 6.57656C13.13 6.57656 13.9945 6.27188 14.6764 5.71875V3.89063C14.2482 3.89063 13.8391 3.71719 13.5382 3.41625C13.2373 3.11531 13.0636 2.70609 13.0636 2.27812H10.8V12.375C10.8 13.1437 10.4945 13.8797 9.95182 14.4227C9.40909 14.9656 8.67273 15.2719 7.90364 15.2719C7.13455 15.2719 6.39818 14.9656 5.85545 14.4227C5.31273 13.8797 5.00727 13.1437 5.00727 12.375C5.00727 11.6063 5.31273 10.8703 5.85545 10.3273C6.39818 9.78437 7.13455 9.47812 7.90364 9.47812V6.57656C7.06636 6.57656 6.24636 6.78281 5.52273 7.17422C4.79909 7.56562 4.19818 8.12969 3.77727 8.81484C3.35636 9.5 3.13182 10.2844 3.13182 11.0813C3.13182 11.8781 3.35636 12.6625 3.77727 13.3477C4.19818 14.0328 4.79909 14.5969 5.52273 14.9883C6.24636 15.3797 7.06636 15.5859 7.90364 15.5859C8.74091 15.5859 9.56091 15.3797 10.2845 14.9883C11.0082 14.5969 11.6091 14.0328 12.03 13.3477C12.4509 12.6625 12.6755 11.8781 12.6755 11.0813V7.5C13.5518 8.15625 14.6309 8.5125 15.75 8.5125V6.75H14.25Z"
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
