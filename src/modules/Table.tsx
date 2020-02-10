import {
    IonContent,
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
import {pageTitles} from "../App";
import {withRouter} from "react-router";
import {TableItems} from "../components/TableItems";
import {createBrowserHistory} from "history";
import {HomeTable} from "./HomeTable";

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

export let league_url: string = "http://api.football-data.org/v2/competitions/2002/standings";
export let league_id: string = "2002";
export function changeLeagueID(ind?: number) {
    // Set 'current_page' initial value related to current page url
    const history = createBrowserHistory();
    const url_parameter = history.location.pathname.substr(1, history.location.pathname.length);
    pageTitles.forEach(function(page, index) {
        if (url_parameter === page.title.toLowerCase().trim()) {
            league_id = Object.values(league_ids)[index];
        } else if (url_parameter === "home" || "/" || "") {
            const idx = pageTitles.length - 1;
            league_id = Object.values(league_ids)[idx];
        }
    });

    if (ind) league_id = league_id = Object.values(league_ids)[ind];
    league_url = `http://api.football-data.org/v2/competitions/${league_id}/standings`;
}

const Table = () => {

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
            changeLeagueID();
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
                    {/*<HomeTable />*/}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(Table);
