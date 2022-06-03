import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import ReactDom from "react-dom"
import Shuffle from "../Components/stateComponents/Shuffle"
import Carta from "../Components/stateComponents/carta"

describe("Testing component Shuffle", () => {
  it("Testing compónent Calculator", () => {
    render(<Shuffle />)
    const testElement = screen.getByTestId("card")
    expect(testElement).toBeInTheDocument()
  })
})
