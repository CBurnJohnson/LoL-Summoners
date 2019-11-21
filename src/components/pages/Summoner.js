import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';
import SummonerItem from '../summoner/SummonerItem';

const Summoner = () => {
    const summonerContext = useContext(SummonerContext);

    const { summonerDetails } = summonerContext;
    return (
        <div>
            {summonerDetails.map(detail => (
                <SummonerItem key={detail.queueType} detail={detail} />
            ))}
        </div>
    );
};

export default Summoner;
