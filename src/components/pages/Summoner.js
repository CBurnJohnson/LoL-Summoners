import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';
import SummonerItem from '../summoner/SummonerItem';
import Spinner from '../layout/Spinner';
import SearchBar from '../summoner/SearchBar';

const Summoner = () => {
    const summonerContext = useContext(SummonerContext);

    const { summonerQueues, summonerDetails, loading } = summonerContext;

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
                <div className='summoner-container'>
                    <div className='summoner-details'>
                        <span className='summoner-name'>
                            {summonerDetails.name}
                        </span>{' '}
                        <br />{' '}
                        <span className='summoner-level'>
                            Level {summonerDetails.summonerLevel}
                        </span>
                    </div>
                    {summonerQueues.map(queue => (
                        <SummonerItem key={queue.queueType} queue={queue} />
                    ))}
                </div>
            </>
        );
    }
};

export default Summoner;
