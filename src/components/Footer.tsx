import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="w-full py-16 px-6 bg-[#f2f4f6] border-t border-[#c6c6cd] mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-[1280px] mx-auto">
        <div className="col-span-2 lg:col-span-2 space-y-3">
          <a className="font-headline text-[24px] font-bold text-black" href="#">
            ELEVA
          </a>
          <p className="text-sm text-[#45464d] mt-4">
            © 2024 ELEVA EdTech Solutions. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <a className="text-xs text-[#45464d] hover:text-black hover:underline transition-all" href="#">
            Product
          </a>
          <a className="text-xs text-[#45464d] hover:text-black hover:underline transition-all" href="#">
            Solutions
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a className="text-xs text-[#45464d] hover:text-black hover:underline transition-all" href="#">
            Company
          </a>
          <a className="text-xs text-[#45464d] hover:text-black hover:underline transition-all" href="#">
            Legal
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a className="text-xs text-[#45464d] hover:text-black hover:underline transition-all" href="#">
            Privacy Policy
          </a>
          <a className="text-xs text-[#45464d] hover:text-black hover:underline transition-all" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
