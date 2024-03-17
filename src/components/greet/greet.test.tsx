import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('greet renders successfully', () => {
    render(<Greet/>)
    const testInput = screen.getByText(/greet/i)
    expect(testInput).toBeInTheDocument()
})

test('greet renders with name successfully', () => {
    render(<Greet name={'Anaks'}/>)
    const testInput = screen.getByText(/greet Anaks/i)
    expect(testInput).toBeInTheDocument()
})