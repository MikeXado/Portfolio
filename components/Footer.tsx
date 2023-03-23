import React from "react";

function Footer() {
  return (
    <footer className=" border-t-[1px] text-gray-400 border-white">
      <div className="md:flex text-center  max-w-7xl mx-auto md:justify-between items-center mt-5">
        <p className="text-lg">&#169;2023 All Right Reserved</p>
        <p className="text-lg py-5">
          Created By <span className="text-[#ff7f01]">Gurin Mihail</span>
        </p>
        <p className="text-lg">gurin.mihail21@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
