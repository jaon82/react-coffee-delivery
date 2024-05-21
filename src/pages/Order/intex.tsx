import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import OrderItem from "../../components/OrderItem";
import RadioButton from "../../components/RadioButton";
import TextInput from "../../components/TextInput";
import {
  AddressFields,
  Divider,
  InputsContainer,
  LabelContainer,
  LabelDescription,
  LabelTitle,
  OrdeResume,
  OrderContainer,
  OrderSectionTitle,
  OrderTotal,
  PaymentFields,
  PaymentOptionsContainer,
} from "./styles";

const orderValidationSchema = zod.object({
  cep: zod.number(),
  street: zod.string(),
  number: zod.number(),
  adjunct: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.enum(["credit", "debit", "money"]),
});

type OrderFormData = zod.infer<typeof orderValidationSchema>;

export default function Order() {
  const { register, handleSubmit, formState, reset } = useForm<OrderFormData>({
    resolver: zodResolver(orderValidationSchema),
  });

  const handleCreateOrder = (data: OrderFormData) => {
    console.log(data);
    reset();
  };

  console.log(formState.errors);

  return (
    <OrderContainer onSubmit={handleSubmit(handleCreateOrder)}>
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
            <TextInput
              placeholder="CEP"
              {...register("cep", { valueAsNumber: true })}
            />
            <TextInput placeholder="Rua" {...register("street")} />
            <TextInput
              placeholder="Número"
              {...register("number", { valueAsNumber: true })}
              type="number"
            />
            <TextInput
              placeholder="Complemento"
              required={false}
              {...register("adjunct")}
            />
            <TextInput placeholder="Bairro" {...register("neighborhood")} />
            <TextInput placeholder="Cidade" {...register("city")} />
            <TextInput placeholder="UF" {...register("state")} />
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
            <RadioButton {...register("paymentMethod")} value="credit">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </RadioButton>
            <RadioButton {...register("paymentMethod")} value="debit">
              <Bank size={16} />
              <span>cartão de débito</span>
            </RadioButton>
            <RadioButton {...register("paymentMethod")} value="money">
              <Money size={16} />
              <span>Dinheiro</span>
            </RadioButton>
          </PaymentOptionsContainer>
        </PaymentFields>
      </div>
      <div>
        <OrderSectionTitle>Cafés selecionados</OrderSectionTitle>
        <OrdeResume>
          <OrderItem />
          <Divider />
          <OrderTotal>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </OrderTotal>
          <button>Confirmar pedido</button>
        </OrdeResume>
      </div>
    </OrderContainer>
  );
}
