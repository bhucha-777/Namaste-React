
import {render,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact Us Page Test Case",()=>{
    it("Should load contact us component",()=>{
    
        render(<Contact/>);
        const heading=screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    });
    it("Should load button in contact component",()=>{
        
        render(<Contact/>);
        const button=screen.getByRole("button")
        expect(button).toBeInTheDocument();
    });
    it("Should load input  in contact component",()=>{
        
        render(<Contact/>);
        const inputName=screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument();
    });
    it("Should load 2 input  in contact component",()=>{
        
        render(<Contact/>);
        const inputBoxes=screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2);
    });
    
})
