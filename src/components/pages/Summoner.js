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
                <div className='summoner-details'>
                    <div className='summoner-icon'>
                        <img
                            src={`http://avatar.leagueoflegends.com/na/${summonerDetails.name}.png`}
                            alt=''
                        />
                    </div>
                    <div className='summoner-info'>
                        <span className='summoner-name'>
                            {summonerDetails.name}
                        </span>{' '}
                        <br />{' '}
                        <span className='summoner-level'>
                            Level {summonerDetails.summonerLevel}
                        </span>
                    </div>
                </div>
                <h2 className='summoner-ranks'>Summoner Ranks</h2>
                <div className='summoner-container'>
                    {summonerQueues.map(queue => (
                        <SummonerItem key={queue.queueType} queue={queue} />
                    ))}
                </div>
                <h2 className='match-history'>Match History</h2>
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
