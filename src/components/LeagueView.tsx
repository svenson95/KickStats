import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useEffect, useRef, useState} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {createBrowserHistory} from "history";
import {pageTitles} from "../App";
import {LoadingContextData} from "../modules/Loading.context";
import MainTable from "../modules/MainTable";
import SideTable from "../modules/SideTable";
import MatchdayResults from "../modules/MatchdayResults";
import Context from '../modules/Loading.context';

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
export let currentMatchday: number;

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

            setLoading({ state: true });
            await fetchData(competition_data);
            await fetchData(competition_matches);
            setLoading({ state: false });
        })();

    }, );

    const [competitionData, setCompetitionData] = useState();
    const [competitionMatches, setCompetitionMatches] = useState();
    const [state, setLoading] = useState({state: false, setLoading: (value: boolean) => { setLoading({state: value}) }} as LoadingContextData);

    async function fetchData(url: string) {

        const response = await fetch(url,  {
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
            },
        });
        const fetchedData = await response.json();

        if (url.includes("/standings") && response.ok) {
            setCompetitionData(fetchedData);
            currentMatchday = fetchedData.season.currentMatchday;

        // TODO: regexp -> 'competitions/regexp/matches'
        } else if (url.includes("/matches") && response.ok) {
            setCompetitionMatches(fetchedData);

        } else {
            console.log('+++ error +++\n');
            console.log(response.status)
        }

    }

    return (
        <Context.Provider value={state}>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>
                            {competitionData && <div className="table__name">
                                {competitionData.competition.name || "League"} | <span>{competitionData.competition.area.name || "Country"}</span>
                            </div>}
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="content__div">
                        <MainTable data={competitionData} />
                        <div className="home__and__away__container">
                            <SideTable data={competitionData} name={"Home"} />
                            <SideTable data={competitionData} name={"Away"} />
                        </div>
                        <MatchdayResults data={competitionMatches} competitionData={competitionData} name={"currentMatchday"}/>
                        <MatchdayResults data={competitionMatches} competitionData={competitionData} name={"lastMatchday"}/>
                        <MatchdayResults data={competitionMatches} competitionData={competitionData} name={"nextToLastMatchday"}/>
                    </div>
                </IonContent>
            </IonPage>
        </Context.Provider>
    );
};

export default withRouter(LeagueView);
