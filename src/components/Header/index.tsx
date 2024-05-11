import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Cart from "../Cart";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} />
      </Link>
      <nav>
        <a>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </a>
        <Cart />
      </nav>
    </HeaderContainer>
  );
}
