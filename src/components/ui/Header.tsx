import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black">
      <Container className="flex items-center justify-between">
        <div className="w-auto md:w-1/3 md:gap-0 flex items-center gap-2.5 justify-start ">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <AccountIcon />
        </div>
      </Container>
    </header>
  );
};

export default Header;
