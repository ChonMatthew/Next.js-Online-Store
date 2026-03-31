import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black">
      <Container className="flex items-center justify-between">
        <Logo />
        <HeaderMenu />
        <div className="w-auto md:2-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <AccountIcon />
        </div>
        {/* Navigation */}
        {/* NavOthers */}
      </Container>
    </header>
  );
};

export default Header;
