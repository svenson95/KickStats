import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {createBrowserHistory} from "history";
import {pageTitles} from "../App";
import MainTable from "./MainTable";
import SideTable from "./SideTable";
import LoadingContext from "./Loading.context";

export let league_name: string;
export let league_country: string;
export let league_id: string;

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

const LeagueView: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

    // componentDidMount
    const mounted = useRef(false);
    useEffect(() => {

        if (mounted.current) return;
        mounted.current = true;

        (async function() {
            loadContext.setLoading?.(true);
            await fetchCompetition();
            await fetchMatches();
            loadContext.setLoading?.(false);
        })();

        console.log('did mount');

    }, );

    const [data, setData] = useState();
    const loadContext = useContext(LoadingContext);

    async function fetchCompetition() {

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
            setData(fetchedData);
            console.log(fetchedData);
        } else {
            console.log('+++ error +++\n');
            console.log(response.status)
        }

    }

    async function fetchMatches() {

        const history = createBrowserHistory();
        const url_parameter = history.location.pathname.substr(1, history.location.pathname.length);

        league_id = Object.values(league_ids)[pageTitles.findIndex(el => el.title === url_parameter)];

        const response = await fetch(`https://api.football-data.org/v2/competitions/${league_id}/matches`,  {
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
            },
        });
        const fetchedData = await response.json();
        console.log(fetchedData);

        // if (response.ok) {
        //     loadContext.setLoading?.(false);
        //     league_name = fetchedData.competition.name;
        //     league_country = fetchedData.competition.area.name;
        //     setData(fetchedData);
        //     // dataContext.setData?.(fetchedData);
        //     console.log(fetchedData);
        // } else {
        //     loadContext.setLoading?.(false);
        //     console.log('+++ error +++\n');
        //     console.log(response.status)
        // }

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <div className="table__name">
                            {league_name || "League"} | <span>{league_country || "Country"}</span>
                        </div>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <MainTable data={data} />
                <SideTable data={data} name={"Home"}/>
                <SideTable data={data} name={"Away"}/>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(LeagueView);
