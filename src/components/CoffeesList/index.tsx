import Card from "../Card";
import {
  CoffeesListContainer,
  CoffeesListItems,
  CoffeesListTitle,
} from "./styles";

import coffeesList from "../../coffees.json";

export default function CoffeesList() {
  return (
    <CoffeesListContainer>
      <CoffeesListTitle>Nossos cafés</CoffeesListTitle>
      <CoffeesListItems>
        {coffeesList.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesListItems>
    </CoffeesListContainer>
  );
}
