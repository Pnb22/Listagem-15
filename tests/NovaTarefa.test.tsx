import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NovaTarefa from "@/components/NovaTarefa"

test("adiciona uma nova tarefa", async () => {
  render(<NovaTarefa />)

  const input = screen.getByPlaceholderText("Digite uma tarefa")
  const botao = screen.getByText("Adicionar")

  await userEvent.type(input, "Nova tarefa")
  await userEvent.click(botao)

  expect(screen.getByText("Nova tarefa")).toBeInTheDocument()
})

test("não adiciona tarefa vazia", async () => {
  render(<NovaTarefa />)

  const botao = screen.getByText("Adicionar")

  await userEvent.click(botao)

  expect(screen.queryByRole("listitem")).not.toBeInTheDocument()
})
