import React from 'react';

const SummonerItem = props => {
    const { summonerName, queueType } = props.detail;

    return (
        <div>
            {summonerName}
            {queueType}
        </div>
    );
};

export default SummonerItem;
