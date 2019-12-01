import React from 'react';
import { switchCase } from '@babel/types';

const SummonerItem = props => {
    const { queueType, rank, tier, leaguePoints } = props.queue;

    let queueName;

    switch (queueType) {
        case 'RANKED_SOLO_5x5':
            queueName = 'Ranked Solo/Duo';
            break;

        case 'RANKED_FLEX_SR':
            queueName = 'Ranked Flex';
            break;
        case 'RANKED_FLEX_TT':
            queueName = 'Ranked 3v3';
            break;
        case 'RANKED_TFT':
            queueName = 'Ranked TFT';
            break;

        default:
            break;
    }

    return (
        <div className={queueType.toLowerCase()}>
            <div className='queue-type'>{queueName} </div>
            {tier} {rank} {leaguePoints} LP
        </div>
    );
};

export default SummonerItem;
