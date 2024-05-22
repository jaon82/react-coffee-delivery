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
import useOrder from "../../hooks/useOrder";
import {
  AddressFields,
  Divider,
  ErrorContainer,
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

import { useNavigate } from "react-router-dom";
import coffeesList from "../../coffees.json";

const orderValidationSchema = zod.object({
  cep: zod.number({ message: "Informe o CEP (somente números)" }),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.number({ message: "Informe o número" }),
  adjunct: zod.string(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Informe o estado"),
  paymentMethod: zod.enum(["credit", "debit", "money"], {
    message: "Informe o método de pagamento",
  }),
});

type OrderFormData = zod.infer<typeof orderValidationSchema>;

export default function Order() {
  const navigate = useNavigate();
  const shippmentPrice = 3.5;
  const { items, createOrder } = useOrder();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderValidationSchema),
  });

  const handleCreateOrder = (data: OrderFormData) => {
    const order = {
      info: data,
      items,
    };
    createOrder(order);
    reset();
    navigate("/");
  };

  const orderCoffees = items.map((item) => {
    const coffee = coffeesList.find((coffee) => coffee.id === item.id)!;
    return {
      ...coffee,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = orderCoffees.reduce((sum, orderCoffee) => {
    sum += orderCoffee.price * orderCoffee.quantity;
    return sum;
  }, 0);

  const totalPrice = shippmentPrice + totalItemsPrice;

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
              error={errors.cep}
            />
            <TextInput
              placeholder="Rua"
              {...register("street")}
              error={errors.street}
            />
            <TextInput
              placeholder="Número"
              {...register("number", { valueAsNumber: true })}
              type="number"
              error={errors.number}
            />
            <TextInput
              placeholder="Complemento"
              required={false}
              {...register("adjunct")}
            />
            <TextInput
              placeholder="Bairro"
              {...register("neighborhood")}
              error={errors.neighborhood}
            />
            <TextInput
              placeholder="Cidade"
              {...register("city")}
              error={errors.city}
            />
            <TextInput
              placeholder="UF"
              {...register("state")}
              error={errors.state}
            />
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
          {errors.paymentMethod && (
            <ErrorContainer>{errors.paymentMethod.message}</ErrorContainer>
          )}
        </PaymentFields>
      </div>
      <div>
        <OrderSectionTitle>Cafés selecionados</OrderSectionTitle>
        <OrdeResume>
          {orderCoffees.map((orderCoffee) => (
            <OrderItem item={orderCoffee} key={orderCoffee.id} />
          ))}
          <Divider />
          <OrderTotal>
            <div>
              <span>Total de itens</span>
              <span>
                {totalItemsPrice.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  currency: "BRL",
                  style: "currency",
                })}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {shippmentPrice.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  currency: "BRL",
                  style: "currency",
                })}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                {totalPrice.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  currency: "BRL",
                  style: "currency",
                })}
              </span>
            </div>
          </OrderTotal>
          <button disabled={orderCoffees.length === 0}>Confirmar pedido</button>
        </OrdeResume>
      </div>
    </OrderContainer>
  );
}
