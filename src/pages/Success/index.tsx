import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import DynamicIcon from "../../components/DynamicIcon";
import { OrderInfo, OrderInfoContent, SuccessContainer } from "./styles";

import successBackground from "../../assets/success-background.svg";

export default function Success() {
  const theme = useTheme();
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <OrderInfoContent>
        <OrderInfo>
          <div>
            <DynamicIcon icon={MapPin} size={16} color={theme.purple} />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <DynamicIcon icon={Timer} size={16} color={theme.yellow} />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>
          <div>
            <DynamicIcon
              icon={CurrencyDollar}
              size={16}
              color={theme["yellow-dark"]}
            />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </div>
        </OrderInfo>
        <img src={successBackground} />
      </OrderInfoContent>
    </SuccessContainer>
  );
}
