import { getTarefas } from "@/data/tarefas"
import NovaTarefa from "@/components/NovaTarefa"

export default async function Page() {
  const tarefas = await getTarefas()

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>

      <NovaTarefa />
    </main>
  )
}
