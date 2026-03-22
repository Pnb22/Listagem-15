export type Tarefa = {
  id: number
  titulo: string
}

export const tarefas: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js" },
  { id: 2, titulo: "Aprender Testes" },
]

export async function getTarefas() {
  return Promise.resolve(tarefas)
}