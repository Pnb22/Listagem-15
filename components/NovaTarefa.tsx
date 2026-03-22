"use client"

import { useState } from "react"

export default function NovaTarefa() {
  const [titulo, setTitulo] = useState("")
  const [tarefas, setTarefas] = useState<string[]>([])

  function adicionarTarefa() {
    if (!titulo.trim()) return

    setTarefas([...tarefas, titulo])
    setTitulo("")
  }

  return (
    <div>
      <input
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul>
        {tarefas.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
