import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';
import SummonerItem from '../summoner/SummonerItem';
import Spinner from '../layout/Spinner';
import SearchBar from '../summoner/SearchBar';
import Match from '../summoner/Match';

const Summoner = () => {
    const summonerContext = useContext(SummonerContext);

    const uuid4 = require('uuid4');

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

                <div className='summoner-container'>
                    {summonerQueues.map(queue => (
                        <SummonerItem key={uuid4()} queue={queue} />
                    ))}
                </div>
                <div className='matches-container'>
                    {summonerMatches.map(match => (
                        <Match key={uuid4()} match={match} />
                    ))}
                </div>
            </>
        );
    }
};

export default Summoner;
