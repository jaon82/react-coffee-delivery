import { IntroContainer } from "./styles";

import backgroundImage from "../../assets/intro-background.svg";

export default function Home() {
  return (
    <>
      <IntroContainer>
        <aside>
          <p>Encontre o café perfeito para qualquer hora do dia</p>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </aside>
        <aside>
          <img src={backgroundImage} />
        </aside>
      </IntroContainer>
    </>
  );
}
