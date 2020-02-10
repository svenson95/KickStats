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
import {TableItems} from "../components/TableItems";

const league_ids = {
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

let league_name: string;
let league_country: string;
let data_set = [];

let league_url: string;
let league_id: string;

export const HomeTable = () => {

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
                                Table Test
                            </div>
                        </div>
                        {table && <TableItems table={table}/>}
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(HomeTable);
