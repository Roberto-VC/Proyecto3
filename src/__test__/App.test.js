import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import ReactDom from "react-dom"
import App from "../Components/App"
import { MemoryRouter } from "react-router-dom"

describe("Testing component App", () => {
  it("renders without crashing", () => {
    render(<App />, { wrapper: MemoryRouter })
  })
})

describe("Testing component App", () => {
  it("renders without crashing", () => {
    render(<App />, { wrapper: MemoryRouter })
    const testElement = screen.getByTestId("WebPack")
    fireEvent.click(testElement)
    const pantalla = screen.getByTestId("D-Webpack")
    expect(pantalla).toBeInTheDocument()
  })
  it("renders without crashing", () => {
    render(<App />, { wrapper: MemoryRouter })
    const testElement = screen.getByTestId("Babel")
    fireEvent.click(testElement)
    const pantalla = screen.getByTestId("D-Babel")
    expect(pantalla).toBeInTheDocument()
  })
  it("renders without crashing", () => {
    render(<App />, { wrapper: MemoryRouter })
    const testElement = screen.getByTestId("React")
    fireEvent.click(testElement)
    const pantalla = screen.getByTestId("D-React")
    expect(pantalla).toBeInTheDocument()
  })
  it("renders without crashing", () => {
    render(<App />, { wrapper: MemoryRouter })
    const testElement = screen.getByTestId("Linting")
    fireEvent.click(testElement)
    const pantalla = screen.getByTestId("D-Linting")
    expect(pantalla).toBeInTheDocument()
  })
  it("renders without crashing", () => {
    render(<App />, { wrapper: MemoryRouter })
    const testElement = screen.getByTestId("Jest")
    fireEvent.click(testElement)
    const pantalla = screen.getByTestId("D-Jest")
    expect(pantalla).toBeInTheDocument()
  })
})
