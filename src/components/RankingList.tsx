import {
    IonContent,
    IonItem,
    IonList,
    IonPage,
    IonCard, IonProgressBar
} from '@ionic/react';
import React, {useEffect, useRef, useState} from 'react';
import useFetch from "use-http/dist";
import {TeamRanking} from "../types/TeamRanking";
import {Data} from "../types/Data";
import {league_id, setLeagueID} from "../App";

export const league_ids = {
    "bundesliga": "2002",
    "premierleague": "2021",
    "primeradivision": "2014",
    "seriaa": "2019",
    "ligue1": "2015",
    "primerialiga": "2017",
    "eredivise": "2003",
    // "england_championship": "2015",
    // "brazil": "2013"
};

export let _data: Data = {};
export let _table: TeamRanking[] = [];

let data_set = [];

const RankingList = () => {

    // componentDidMount
    const mounted = useRef(false);
    useEffect(() => {

        if (mounted.current) return;
        mounted.current = true;

        if (data_set.length <= 0) {
            (async function() {
                await fetchDataFromAPI();
                console.log('async function done');
            })();
        } else {
            setLeagueID();
        }

        console.log('did mount');

    }, );

    const [ranking, updateRanking] = useState([]);
    const [request, response] = useFetch(`http://api.football-data.org/v2/competitions/${league_id}/standings`,  {
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
        },
    });

    async function fetchDataFromAPI() {
        const fetchedData = await request.get();
        if (response.ok) {
            _data = fetchedData;
            _table = fetchedData.standings[0].table;
            console.log(_data);
            updateRanking(fetchedData.standings[0].table);
            console.log('fetched');
        } else {
            console.log('+++ error +++\n')
        }
    }

    return mounted && (
        <IonPage>
            <IonContent>
                <div className="module__container">

                    <IonCard className="ranking__card">
                        <IonProgressBar value={1} type={request.loading ? 'indeterminate' : 'determinate'}></IonProgressBar>
                        <div className="team__header">
                            <div className="team__header__stats">
                                <div className="team__result__item played">PLAYED</div>
                                <div className="team__result__item won">WIN</div>
                                <div className="team__result__item draw">DRAW</div>
                                <div className="team__result__item lost">LOSE</div>
                                <div className="team__result__item">PTS</div>
                            </div>
                            <div className="team__header__info">
                                {_data.competition?.name || ""} | {_data.competition?.area.name || ""}
                            </div>
                        </div>
                        {ranking && <RankingItems ranking={ranking}/>}
                    </IonCard>
                    <IonCard className="test__card">
                        <IonProgressBar value={1} type={request.loading ? 'indeterminate' : 'determinate'}></IonProgressBar>
                        <p>Test</p>
                        <p>{request.error && `${request.error.message}`}</p>
                        <p>{request.loading && 'Loading...'}</p>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

const RankingItems = ({ ...ranking }) => {

    const items = _table.map((team: TeamRanking, index: number) => {
        return (
            <IonItem key={index} className="team__item">
                <div className="team__container">
                    <div className="team__info">
                        <div className="team__position">{team.position}.</div>
                        <div className="team__logo"><img src={team.team.crestUrl} alt={team.team.name}/></div>
                        <div className="team__name">{team.team.name}</div>
                    </div>
                    <div className="team__stats">
                        <div className="team__result__item">{team.playedGames}</div>
                        <div className="team__result__item">{team.won}</div>
                        <div className="team__result__item">{team.draw}</div>
                        <div className="team__result__item">{team.lost}</div>
                        <div className="team__result__item">{team.points}</div>
                    </div>
                </div>
            </IonItem>
        );
    });
    return <IonList>
        <div className="vertical__line line__1" />
        <div className="vertical__line line__2" />
        <div className="vertical__line line__3" />
        <div className="vertical__line line__4" />
        {items}</IonList>;
};

export default RankingList;
