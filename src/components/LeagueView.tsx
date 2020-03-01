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
import MainTable from "../modules/MainTable";
import SideTable from "../modules/SideTable";
import LoadingContext from "../modules/Loading.context";

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

        let league_id: string;
        const history = createBrowserHistory();
        const url_parameter = history.location.pathname.substr(1, history.location.pathname.length);
        league_id = Object.values(league_ids)[pageTitles.findIndex(el => el.title === url_parameter)];

        // const team_matches = `https://api.football-data.org/v2/teams/524/matches`;
        const competition_data = `https://api.football-data.org/v2/competitions/${league_id}/standings`;
        const competition_matches = `https://api.football-data.org/v2/competitions/${league_id}/matches`;

        (async function() {
            loadContext.setLoading?.(true);

            await fetchData(competition_data);
            // await fetchData(competition_matches);
            loadContext.setLoading?.(false);
        })();

    }, );

    const [data, setData] = useState();
    const loadContext = useContext(LoadingContext);

    async function fetchData(url: string) {

        const response = await fetch(url,  {
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
            },
        });
        const fetchedData = await response.json();
        console.log(fetchedData);

        if (url.includes("/standings") && response.ok) {
            setData(fetchedData);

        // TODO: need regexp -> 'competitions/regexp/matches'
        } else if (url.includes("/matches") && response.ok) {
            // setSeasonMatches(fetchedData)

        } else {
            console.log('+++ error +++\n');
            console.log(response.status)
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
                        {data && <div className="table__name">
                            {data.competition.name || "League"} | <span>{data.competition.area.name || "Country"}</span>
                        </div>}
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
