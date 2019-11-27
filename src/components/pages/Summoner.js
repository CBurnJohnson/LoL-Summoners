import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';
import SummonerItem from '../summoner/SummonerItem';
import Spinner from '../layout/Spinner';
import SearchBar from '../summoner/SearchBar';

const Summoner = () => {
    const summonerContext = useContext(SummonerContext);

    const { summonerQueues, summonerName, loading } = summonerContext;

    if (loading) {
        return (
            <>
                <SearchBar />
                <Spinner />
            </>
        );
    } else {
        return (
            <>
                <SearchBar />
                <h2 className='summoner-title'>{summonerName}</h2>
                {summonerQueues.map(queue => (
                    <SummonerItem key={queue.queueType} queue={queue} />
                ))}
            </>
        );
    }
};

export default Summoner;
