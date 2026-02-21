import { useState } from 'react'

export function useInscricao() {
  const [inscrito, setInscrito] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const confirmarInscricao = () => {
    setInscrito(true)
  }

  return { inscrito, loading, error, confirmarInscricao, setLoading, setError }
}
