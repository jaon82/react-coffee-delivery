import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import RadioButton from "../../components/RadioButton";
import TextInput from "../../components/TextInput";
import {
  AddressFields,
  InputsContainer,
  LabelContainer,
  LabelDescription,
  LabelTitle,
  OrdeResume,
  OrderContainer,
  OrderSectionTitle,
  PaymentFields,
  PaymentOptionsContainer,
} from "./styles";

export default function Order() {
  return (
    <OrderContainer>
      <div>
        <OrderSectionTitle>Complete seu pedido</OrderSectionTitle>
        <AddressFields>
          <LabelContainer>
            <MapPinLine size={22} />
            <div>
              <LabelTitle>Endereço de Entrega</LabelTitle>
              <LabelDescription>
                Informe o endereço onde deseja receber seu pedido
              </LabelDescription>
            </div>
          </LabelContainer>
          <InputsContainer>
            <TextInput placeholder="CEP" />
            <TextInput placeholder="Rua" />
            <TextInput placeholder="Número" />
            <TextInput placeholder="Complemento" required={false} />
            <TextInput placeholder="Bairro" />
            <TextInput placeholder="Cidade" />
            <TextInput placeholder="UF" />
          </InputsContainer>
        </AddressFields>
        <PaymentFields>
          <LabelContainer>
            <CurrencyDollar size={22} />
            <div>
              <LabelTitle>Pagamento</LabelTitle>
              <LabelDescription>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </LabelDescription>
            </div>
          </LabelContainer>
          <PaymentOptionsContainer>
            <RadioButton name="paymentMethod">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </RadioButton>
            <RadioButton name="paymentMethod">
              <Bank size={16} />
              <span>cartão de débito</span>
            </RadioButton>
            <RadioButton name="paymentMethod">
              <Money size={16} />
              <span>Dinheiro</span>
            </RadioButton>
          </PaymentOptionsContainer>
        </PaymentFields>
      </div>
      <div>
        <OrderSectionTitle>Cafés selecionados</OrderSectionTitle>
        <OrdeResume></OrdeResume>
      </div>
    </OrderContainer>
  );
}
