import { Fragment } from "react";

export default function Character(props) {
  const { characters, setCharacters } = props;
  
  const resetCharacters = () => {
    setCharacters(null);
  };
  return (
    <div className="">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver al home</span>

      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <Fragment>
                    <span className="alive">Alive</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className="dead">Dead</span>
                  </Fragment>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
