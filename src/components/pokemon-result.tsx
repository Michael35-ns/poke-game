import { GameState } from "../hooks/use-game-manager";

interface Props {
  loadNewPokemon: () => void;
  gameState : GameState
}

const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {

    if(gameState === GameState.Playing){
        return null
    }

  return (
    <div
      className={`alert alert-${
        gameState === GameState.Correct ? "success" : "danger"
      } text-center`}>
      {gameState === GameState.Correct ? (
        <h2>
          ¡Correcto! <i className="bi bi-check2-circle" />
        </h2>
      ) : (
        <h2>
          ¡Incorrecto! <i className="bi bi-x-circle" />
        </h2>
      )}
      <button 
        className="btn btn-dark mt-3" 
        onClick={loadNewPokemon}
        >
        Volver a jugar
      </button>
    </div>
  );
};

export default PokemonResult;
