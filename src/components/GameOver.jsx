export default function GameOver({ winner, onRestart }) {
    return (
        <div id="game-over">
            <h2>Gane Over!</h2>
            { winner === "Draw" ? <p>It's a draw!</p> : <p>{winner} won!</p> }
            
            <button onClick={onRestart}>Rematch!</button>
        </div>
    );
};
