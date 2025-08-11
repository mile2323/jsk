import React from "react";

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Admin_Footer: React.FC<FooterProps> = ({
  companyName = " E ENROLLMENT MANAGMENT SYSTEM",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-200 py-4 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm">&copy; {year} {companyName}</p> 
        {/* . All rights reserved. */}
        <p className="text-sm mt-2 sm:mt-0">Made with PUSHPENDRA MAHILANG ❤️ by {companyName} Team</p>
      </div>
    </footer>
  );
};

export default Admin_Footer;