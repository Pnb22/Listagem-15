import { render, screen } from "@testing-library/react"
import Page from "@/app/page"

test("renderiza lista de tarefas", async () => {
  const PageComponent = await Page()
  render(PageComponent)

  expect(screen.getByText("Estudar Next.js")).toBeInTheDocument()
  expect(screen.getByText("Aprender Testes")).toBeInTheDocument()
})
