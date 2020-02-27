import {
    IonButtons,
    IonCard,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonProgressBar,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, {useEffect, useRef, useState} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {TableItems} from "../components/TableItems";
import {createBrowserHistory} from "history";
import {pageTitles} from "../App";

export const league_ids = {
    "bundesliga": "2002",
    "premierleague": "2021",
    "primeradivisión": "2014",
    "seriea": "2019",
    "ligue1": "2015",
    "primerialiga": "2017",
    "eredivise": "2003",
    // "england_championship": "2015",
    // "brazil": "2013"
};

export let league_name: string;
export let league_country: string;
export let league_id: string;

// export const LOADING_CONTEXT_DATA = {
//   leagueId: "",
//   setLeagueId(value: string) { this.leagueId = value }
// };
// export const LoadingContext = React.createContext(LOADING_CONTEXT_DATA);

const Table: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

    // componentDidMount
    const mounted = useRef(false);
    useEffect(() => {

        if (mounted.current) return;
        mounted.current = true;

        (async function() { await fetchDataFromAPI() })();

        console.log('did mount');

    }, );

    const [table, updateTable] = useState();
    // const [request, response] = useFetch(`https://api.football-data.org/v2/competitions/${league_id}/standings`,  {
    //     mode: 'cors',
    //     credentials: 'same-origin',
    //     headers: {
    //         'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
    //     },
    // });

    async function fetchDataFromAPI() {

        const history = createBrowserHistory();
        const url_parameter = history.location.pathname.substr(1, history.location.pathname.length);

        league_id = Object.values(league_ids)[pageTitles.findIndex(el => el.title === url_parameter)];

        const response = await fetch(`https://api.football-data.org/v2/competitions/${league_id}/standings`,  {
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
            },
        });
        const fetchedData = await response.json();

        if (response.ok) {
            league_name = fetchedData.competition.name;
            league_country = fetchedData.competition.area.name;
            updateTable(fetchedData.standings[0].table);
            console.log(fetchedData.standings[0].table);
        } else {
            console.log('+++ error +++\n');
            console.log(response.status)
        }

    }

    return (
        // <LoadingContext.Provider value={LOADING_CONTEXT_DATA}>
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
                        {table && <IonCard className="ranking__card">
                            <IonProgressBar value={1} type={false ? 'indeterminate' : 'determinate'}/>
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
                            <TableItems table={table}/>
                        </IonCard>}
                        {/*<HomeTable />*/}
                    </div>
                </IonContent>
            </IonPage>
        // </LoadingContext.Provider>
    );
};

export default withRouter(Table);