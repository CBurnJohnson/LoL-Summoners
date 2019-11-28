import React from 'react';

const SummonerItem = props => {
    const { queueType, rank, tier, leaguePoints } = props.queue;

    return (
        <div className={queueType.toLowerCase()}>
            <div className='queue-type'>{queueType} </div>
            {tier} {rank} {leaguePoints} LP
        </div>
    );
};

export default SummonerItem;
