import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';

const Match = props => {
    const {
        participantIdentities,
        teams,
        gameType,
        gameMode,
        gameDuration
    } = props.match;

    const summonerContext = useContext(SummonerContext);

    const { summonerDetails } = summonerContext;

    let currentParticipantId;

    for (let i = 0; i < participantIdentities.length; i++) {
        if (
            participantIdentities[i].player.summonerName ===
            summonerDetails.name
        ) {
            currentParticipantId = participantIdentities[i].participantId;
        }
    }

    let playerTeamId;

    if (currentParticipantId <= 5) {
        playerTeamId = 100;
    } else {
        playerTeamId = 200;
    }

    let playerTeam;

    for (let i = 0; i < teams.length; i++) {
        if (playerTeamId === teams[i].teamId) {
            playerTeam = teams[i];
        }
    }

    // who won
    let didWin;

    if (playerTeam.win === 'Win') {
        didWin = true;
    } else {
        didWin = false;
    }

    console.log(playerTeam);

    const leftTeam = participantIdentities.filter(participant => {
        return participant.participantId <= 5;
    });

    const rightTeam = participantIdentities.filter(participant => {
        return participant.participantId > 5;
    });

    return (
        <div className='match-item'>
            <div className='match-info'>
                <div className='info'>
                    <div className='game-type'>{gameType}</div>
                    <div className='game-mode'>{gameMode}</div>
                    <div className='game-duration'>{gameDuration / 60}</div>
                </div>
                <div className='outcome'>
                    <div>{didWin ? 'Victory!' : 'Defeat!'} </div>
                </div>
            </div>
            <div className='players'>
                <div className='left-team'>
                    {leftTeam.map(player => (
                        <div key={player.player.summonerName}>
                            {player.player.summonerName}
                        </div>
                    ))}
                </div>
                <div className='right-team'>
                    {rightTeam.map(player => (
                        <div key={player.player.summonerName}>
                            {player.player.summonerName}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Match;