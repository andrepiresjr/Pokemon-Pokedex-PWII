import { useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import { buscarListaPokemon, buscarPokemonPorNome } from './services/api.js'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pesquisa, setPesquisa] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [deslocamento, setDeslocamento] = useState(0)
  const [modoPesquisa, setModoPesquisa] = useState(false)

  async function carregarPokemon(novoDeslocamento = 0) {
    try {
      setCarregando(true)
      setErro('')
      const dados = await buscarListaPokemon(20, novoDeslocamento)
      setPokemon((atual) =>
        novoDeslocamento === 0 ? dados : [...atual, ...dados],
      )
      setDeslocamento(novoDeslocamento)
      setModoPesquisa(false)
    } catch {
      setErro('Não foi possível carregar os Pokémon. Verifique sua conexão e tente novamente.')
    } finally {
      setCarregando(false)
    }
  }

  async function pesquisarPokemon(event) {
    event.preventDefault()

    if (!pesquisa.trim()) {
      carregarPokemon(0)
      return
    }

    try {
      setCarregando(true)
      setErro('')
      const resultado = await buscarPokemonPorNome(pesquisa)
      setPokemon([resultado])
      setModoPesquisa(true)
    } catch {
      setPokemon([])
      setErro('Pokémon não encontrado. Confira o nome digitado.')
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregarPokemon(0)
  }, [])

  return (
    <main className="container py-4">
      <header className="text-center mb-4">
        <h1 className='titulo'>Minha Pokédex</h1>
        <p>Pesquise e descubra informações sobre Pokémon.</p>
      </header>

      <form className="row g-2 mb-4" onSubmit={pesquisarPokemon}>
        <div className="col">
          <label className="visually-hidden" htmlFor="pesquisa">
            Nome do Pokémon
          </label>
          <input
            id="pesquisa"
            className="form-control"
            type="search"
            placeholder="Digite o nome de um Pokémon..."
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="submit">
            Pesquisar
          </button>
        </div>
        {modoPesquisa && (
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {
                setPesquisa('')
                carregarPokemon(0)
              }}
            >
              Limpar pesquisa
            </button>
          </div>
        )}
      </form>

      {carregando && <p className="text-center">Carregando Pokémon...</p>}

      {erro && <div className="alert alert-warning">{erro}</div>}

      {!carregando && pokemon.length > 0 && (
        <section aria-label="Lista de Pokémon" className="row g-3">
          {pokemon.map((item) => (
            <div className="col-12 col-sm-6 col-lg-3" key={item.id}>
              <PokemonCard pokemon={item} />
            </div>
          ))}
        </section>
      )}

      {!carregando && !erro && pokemon.length === 0 && (
        <p className="text-center">Nenhum Pokémon para exibir.</p>
      )}

      {!modoPesquisa && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-primary"
            type="button"
            disabled={carregando}
            onClick={() => carregarPokemon(deslocamento + 20)}
          >
            Carregar mais
          </button>
        </div>
      )}
    </main>
  )
}

export default App
