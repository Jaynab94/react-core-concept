import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)

    const handlerClick = () => {
        setTeam(team + 1);
    }

    const handleClick2 = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }





    const teamStyle = {
        border: '2px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'

    }
    return (
        <div style={teamStyle}>
            <h2>player:{team}</h2>
            <button onClick={handlerClick}>Add Player</button>
            <button onClick={handleClick2}>Remove Player</button>

        </div>
    )
}