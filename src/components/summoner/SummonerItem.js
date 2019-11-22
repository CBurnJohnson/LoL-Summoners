import React from 'react';

const SummonerItem = props => {
    const { summonerName, queueType, rank, tier } = props.detail;

    return (
        <div>
            {summonerName} {queueType} {rank} {tier}{' '}
        </div>
    );
};

export default SummonerItem;
