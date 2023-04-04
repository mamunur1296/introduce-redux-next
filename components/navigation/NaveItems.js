import Link from "next/link";
import React from "react";

const NaveItems = () => {
  return (
    <>
      <Link href="/product">
        <li>Product</li>
      </Link>
      <Link href="/blog">
        <li>Blog</li>
      </Link>
      <Link href="/login">
        <li>login</li>
      </Link>
      <Link href="/register">
        <li>Register</li>
      </Link>
    </>
  );
};

export default NaveItems;
