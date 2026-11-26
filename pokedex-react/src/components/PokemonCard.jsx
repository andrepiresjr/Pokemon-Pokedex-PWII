function PokemonCard({ pokemon }) {
  const imagem =
    pokemon.sprites.other?.['official-artwork']?.front_default ||
    pokemon.sprites.front_default

  const numero = String(pokemon.id).padStart(3, '0')

  return (
    <article className="card h-100 pokemon-card">
      <div className="card-body text-center">
        <p className="text-secondary mb-1">#{numero}</p>

        {imagem ? (
          <img
            src={imagem}
            alt={`Imagem de ${pokemon.name}`}
            className="pokemon-image"
          />
        ) : (
          <div className="pokemon-image-placeholder">Sem imagem</div>
        )}

        <h2 className="h5 text-capitalize mt-2">{pokemon.name}</h2>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {pokemon.types.map((item) => (
            <span className="badge text-bg-secondary" key={item.type.name}>
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default PokemonCard
