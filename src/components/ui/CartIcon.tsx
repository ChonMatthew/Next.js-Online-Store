import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-5 h-5 hover:text-shop-dark-red hoverEffect" />
      <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-shop-dark-red text-white text-xs rounded-full flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default CartIcon;
