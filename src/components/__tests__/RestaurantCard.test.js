import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render Restaurant componenet with props data",()=>{
         render(<RestaurantCard resData={MOCK_DATA}/>);
         const name=screen.getByText("Geetha Canteen");
         expect(name).toBeInTheDocument();
})