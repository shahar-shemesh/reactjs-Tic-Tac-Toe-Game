import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onSave }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
        
        if (isEditing){
            onSave(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }


    return <li className={ isActive ? 'active' : undefined }>
        <span className="player">
            {
                isEditing ? (<input className="player-name" value={playerName} onChange={handleChange}/>)
                    : (<span className="player-name">{playerName}</span>)
            }

            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={ handleEditClick }>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
};