import React from 'react';

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Admin_Footer: React.FC<FooterProps> = ({
  companyName = 'Milestone Soft Tech Pvt. Ltd.',
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-200 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
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

export default Admin_Footer;