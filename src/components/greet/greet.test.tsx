import { render, screen } from "@testing-library/react"
import Greet from "./greet"


test('greet renders successfully', () => {
    render(<Greet/>);
    const textLabel = screen.getByText(/greet/i);
    expect(textLabel).toBeInTheDocument()
})

// test('greet renders successfully with name', () => {
//     render(<Greet name="anaks"/>);
//     const textLabel = screen.getByText(/greet anaks/i);
//     expect(textLabel).toBeInTheDocument()
// })