import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';
import SummonerItem from '../summoner/SummonerItem';
import Spinner from '../layout/Spinner';
import SearchBar from '../summoner/SearchBar';

const Summoner = () => {
    const summonerContext = useContext(SummonerContext);

    const { summonerDetails, summonerName, loading } = summonerContext;

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
                {summonerName}
                {summonerDetails.map(detail => (
                    <SummonerItem key={detail.queueType} detail={detail} />
                ))}
            </>
        );
    }
};

export default Summoner;
