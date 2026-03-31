"use client";
import React from "react";
import { headerData } from "../../../constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="hidden md:inline-flex items-center gap-7 text-sm capitalize font-semibold">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={
            "hover:text-shop-dark-red hoverEffect relative group " +
            (pathname === item?.href ? "text-shop-dark-red" : "")
          }
        >
          {item?.title}
          <span
            className={
              "absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop-dark-red group-hover:w-1/2 hoverEffect group-hover:left-0 " +
              (pathname === item?.href ? "w-1/2" : "")
            }
          />
          <span
            className={
              "absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-dark-red group-hover:w-1/2 hoverEffect group-hover:right-0 " +
              (pathname === item?.href ? "w-1/2" : "")
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
