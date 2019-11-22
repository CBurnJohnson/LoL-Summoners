import React from 'react';

const SummonerItem = props => {
    const { queueType, rank, tier } = props.detail;

    return (
        <div>
            {queueType} {rank} {tier}{' '}
        </div>
    );
};

export default SummonerItem;
