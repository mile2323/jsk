import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  companyName?: string;
  year?: number;
  links?: Array<{
    title: string;
    url: string;
  }>;
  socialLinks?: Array<{
    icon: React.ReactNode;
    url: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'E ENROLLMENT SYSTEM',
  year = new Date().getFullYear(),
  links = [
    { title: 'Home', url: '/' },
    // { title: 'About', url: '/about' },
    // { title: 'Contact', url: '/contact' },
    // { title: 'Gallery', url: '/gallery' },
    { title: 'Privacy Policy', url: '/privacy' },
    { title: 'Terms of Service', url: '/terms' },
    
  ],
  // socialLinks = [
  //   {
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  //       </svg>
  //     ),
  //     url: 'https://twitter.com',
  //   },
  //   {
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  //       </svg>
  //     ),
  //     url: 'https://instagram.com',
  //   },
  //   {
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  //       </svg>
  //     ),
  //     url: 'https://linkedin.com',
  //   },
  // ],
}) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          
          <div>
              <div className="flex items-center space-x-4 text-white">
                {/* ✅ Logo (Left Side) */}
                {/* <img
                  src={`${window.config.imageUrl}logo-sm.png`}
                  alt="Company Logo"
                  className="h-12 w-auto"
                /> */}

                {/* ✅ Company Info (Right Side) */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-50">
                    {companyName || "E ENROLLMENT SYSTEM"}
                  </h3>
                  {/* <p className="flex items-center text-sm">
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </span> */}
                    {/* 69/2, Vikas Nagar, Devpuri, near Plastic Factory, Raipur, Chhattisgarh 492015 */}
                     {/* Clickable Address */}
                    {/* <a
                      href="https://maps.app.goo.gl/xmo2tudV1oMEcn5t9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      69/2, Vikas Nagar, Devpuri, near Plastic Factory, Raipur, Chhattisgarh
                      492015
                    </a> */}
                  {/* </p> */}
                  <p className="text-sm flex items-center gap-2">
                    {/* Email Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>

                    {/* Email Text */}
                    <span>Email:</span>
                    <a
                      href="mailto:pushpendra@gbasa.in"
                      className="text-blue-500 hover:underline"
                    >
                      pushpendra@gbasa.in
                    </a>
                  </p>

                  <p className="text-sm flex items-center gap-2">
                      {/* Phone Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>

                      {/* Phone Text */}
                      <span>Phone:</span>
                      <a
                        href="tel:+917067026430"
                        className="text-blue-500 hover:underline"
                      >
                        +91-7067026430
                      </a>
                   </p>

                </div>
            </div>

            {/* <h3 className="text-lg font-semibold text-gray-50">{companyName}</h3> */}
            <p className="mt-4 text-sm text-gray-50">
              Making your life easier with our solutions.
            </p>
            {/* <div className="mt-4 flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{social.url.replace('https://', '')}</span>
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-50 uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2">
                {links.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-50 hover:text-gray-900"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-50 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {links.slice(4).map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-50 hover:text-gray-50"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p className="text-sm text-white mt-4 md:mt-0">
            Made with Pushpendra Mahilang ❤️ by {companyName} Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;