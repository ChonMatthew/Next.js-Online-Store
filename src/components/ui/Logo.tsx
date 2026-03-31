import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl text-shop-dark-red font-bold tracking-wide uppercase",
          className,
        )}
      >
        Logo
      </h2>
    </Link>
  );
};

export default Logo;
