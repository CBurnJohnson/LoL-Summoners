import React from 'react';

const Match = props => {
    const {
        participantIdentities,
        gameType,
        gameMode,
        gameDuration
    } = props.match;

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
                    <div>VICTORY</div>
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
