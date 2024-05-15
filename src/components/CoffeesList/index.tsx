import Card from "../Card";
import {
  CoffeesListContainer,
  CoffeesListItems,
  CoffeesListTitle,
} from "./styles";

export default function CoffeesList() {
  return (
    <CoffeesListContainer>
      <CoffeesListTitle>Nossos cafés</CoffeesListTitle>
      <CoffeesListItems>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CoffeesListItems>
    </CoffeesListContainer>
  );
}
