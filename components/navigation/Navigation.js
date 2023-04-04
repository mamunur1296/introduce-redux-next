import React from "react";
import NaveItems from "./NaveItems";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="max-w-7xl mx-auto bg-slate-300 p-5 flex">
      <div className="w-4/12 ">
        <Link href="/">Logo</Link>
      </div>
      <div className="w-8/12 ">
        <ul className=" flex space-x-5 justify-end">
          <NaveItems />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
