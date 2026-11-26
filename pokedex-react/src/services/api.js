import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export async function buscarListaPokemon(limite = 20, deslocamento = 0) {
  const resposta = await api.get('/pokemon', {
    params: { limit: limite, offset: deslocamento },
  })

  const detalhes = await Promise.all(
    resposta.data.results.map((pokemon) => api.get(pokemon.url)),
  )

  return detalhes.map((item) => item.data)
}

export async function buscarPokemonPorNome(nome) {
  const resposta = await api.get(`/pokemon/${nome.trim().toLowerCase()}`)
  return resposta.data
}
