import React from "react";
import Link from "next/link";
import { User } from "lucide-react";

const AccountIcon = () => {
  return (
    <Link href={"/account"} className="group relative">
      <User className="w-5 h-5 hover:text-shop-dark-red hoverEffect" />
    </Link>
  );
};

export default AccountIcon;
