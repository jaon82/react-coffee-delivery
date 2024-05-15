import { IntroContainer, ItemsContainer } from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import backgroundImage from "../../assets/intro-background.svg";
import DynamicIcon from "../../components/DynamicIcon";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <IntroContainer>
        <aside>
          <div>
            <p>Encontre o café perfeito para qualquer hora do dia</p>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ItemsContainer>
            <div>
              <DynamicIcon
                icon={ShoppingCart}
                size={16}
                color={theme["yellow-dark"]}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <DynamicIcon
                icon={Package}
                size={16}
                color={theme["base-text"]}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
          </ItemsContainer>
          <ItemsContainer>
            <div>
              <DynamicIcon icon={Timer} size={16} color={theme.yellow} />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <DynamicIcon icon={Coffee} size={16} color={theme.purple} />
              <span>O café chega fresquinho até você</span>
            </div>
          </ItemsContainer>
        </aside>
        <aside>
          <img src={backgroundImage} />
        </aside>
      </IntroContainer>
    </>
  );
}
