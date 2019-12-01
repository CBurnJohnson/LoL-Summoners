import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';
import SummonerItem from '../summoner/SummonerItem';
import Spinner from '../layout/Spinner';
import SearchBar from '../summoner/SearchBar';
import Match from '../summoner/Match';

const Summoner = () => {
    const summonerContext = useContext(SummonerContext);

    const {
        summonerQueues,
        summonerDetails,
        summonerMatches,
        loading
    } = summonerContext;

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
                <h1 className='match-history'>Match History</h1>
                <div className='matches-container'>
                    {summonerMatches.map(match => (
                        <Match key={match.gameId} match={match} />
                    ))}
                </div>
            </>
        );
    }
};

export default Summoner;
