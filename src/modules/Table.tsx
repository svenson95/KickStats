import {
    IonContent,
    IonItem,
    IonList,
    IonPage,
    IonCard,
    IonProgressBar,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonHeader
} from '@ionic/react';
import React, {useEffect, useRef, useState} from 'react';
import useFetch from "use-http/dist";
import {TeamRanking} from "../types/TeamRanking";
import {setLeagueID} from "../App";
import {withRouter} from "react-router";

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

export let league_name: string;
export let league_country: string;
let data_set = [];

export let league_url: string;
export let league_id: string;
export function changeLeagueID(index: number) {
    league_id = Object.values(league_ids)[index];
    league_url = `http://api.football-data.org/v2/competitions/${league_id}/standings`;
}

export const Table = () => {

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

    const [table, updateTable] = useState();
    const [request, response] = useFetch(`https://api.football-data.org/v2/competitions/${league_id}/standings`,  {
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
        },
    });

    async function fetchDataFromAPI() {
        const fetchedData = await request.get();
        if (response.ok) {
            league_name = fetchedData.competition.name;
            league_country = fetchedData.competition.area.name;
            updateTable(fetchedData.standings[0].table);
            console.log('fetched');
        } else {
            console.log('+++ error +++\n')
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <div className="competition__name">{league_name || "League"}</div>
                        <div className="competition__area">{league_country || "Country"}</div>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="module__container">
                    <IonCard className="ranking__card">
                        <IonProgressBar value={1} type={request.loading ? 'indeterminate' : 'determinate'}/>
                        <div className="team__header">
                            <div className="team__header__stats">
                                <div className="team__result__item played">PLAY</div>
                                <div className="team__result__item won">WIN</div>
                                <div className="team__result__item draw">DRA</div>
                                <div className="team__result__item lost">LOS</div>
                                <div className="team__result__item">PTS</div>
                            </div>
                            <div className="team__header__info">
                                Table
                            </div>
                        </div>
                        {table && <TableItems table={table}/>}
                    </IonCard>
                    <IonCard className="test__card">
                        <IonProgressBar value={1} type={request.loading ? 'indeterminate' : 'determinate'}/>
                        <p>{request.error && `${request.error.message}`}</p>
                        <p>{request.loading && 'Loading...'}</p>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

const TableItems = ({ ...props }) => {

    const items = props.table.map((team: TeamRanking, index: number) => {
        return (
            <IonItem key={index} className="team__item">
                <div className="team__container">
                    <div className="team__info">
                        <div className="team__position">{team.position}.</div>
                        <div className="team__logo"><img src={team.team.crestUrl} alt={""}/></div>
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
        // {props.table.map((table: any, index: any) => {
        //     return (
        //         <IonItem key={index} className="team__item">
        //              <div className="team__container">
        //                  <div className="team__info">
        //                      <div className="team__position">{team.position}.</div>
        //                      <div className="team__logo"><img src={team.team.crestUrl} alt={""}/></div>
        //                      <div className="team__name">{team.team.name}</div>
        //                  </div>
        //                  <div className="team__stats">
        //                      <div className="team__result__item">{team.playedGames}</div>
        //                      <div className="team__result__item">{team.won}</div>
        //                      <div className="team__result__item">{team.draw}</div>
        //                      <div className="team__result__item">{team.lost}</div>
        //                      <div className="team__result__item">{team.points}</div>
        //                  </div>
        //              </div>
        //          </IonItem>
        //     );
        // })}
    });
    return <IonList>
        <div className="vertical__line line__1" />
        <div className="vertical__line line__2" />
        <div className="vertical__line line__3" />
        <div className="vertical__line line__4" />
        {items}</IonList>;
};

export default withRouter(Table);
