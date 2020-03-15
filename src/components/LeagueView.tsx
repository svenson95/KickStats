import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useEffect, useRef, useState} from 'react';
import {RouteComponentProps} from "react-router";
import {pageTitles} from "../App";
import MainTable from "../modules/MainTable";
import SideTable from "../modules/SideTable";
import MatchdayResults from "../modules/MatchdayResults";

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

let counter = 0;
export function markItems(teamName: string) {
    console.log(teamName);
    if (document.querySelector(`.team__info__${teamName}`)?.classList.contains('marked')) {
        document.querySelectorAll(`.team__info__${teamName}`)?.forEach(el => el.classList.remove('marked'));
        counter -= 1;
    } else if (counter >= 2) {
        document.querySelectorAll(`.team__info`)?.forEach(el => el.classList.remove('marked'));
        document.querySelectorAll(".home__team")?.forEach(el => el.classList.remove('marked'));
        document.querySelectorAll(".away__team")?.forEach(el => el.classList.remove('marked'));
        counter = 0;
    } else {
        document.querySelectorAll(`.team__info__${teamName}`)?.forEach(el => el.classList.add('marked'));
        counter += 1;
    }
}

const LeagueView: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

    // componentDidMount
    const mounted = useRef(false);
    useEffect(() => {

        if (mounted.current) return;
        mounted.current = true;

        const url_parameter = match.path.substr(1, match.path.length);
        const league_id = Object.values(league_ids)[pageTitles.findIndex(el => el.title === url_parameter)];

        // const team_matches = `https://api.football-data.org/v2/teams/524/matches`;
        const competition_data = `https://api.football-data.org/v2/competitions/${league_id}/standings`;
        const competition_matches = `https://api.football-data.org/v2/competitions/${league_id}/matches`;

        fetchData(competition_data).then(data => {
            setCompetitionData(data);
            console.log(data);
            currentMatchday = data.season.currentMatchday;
        });
        fetchData(competition_matches).then(data => {
            setCompetitionMatches(data);
            console.log(data);
        });

    }, );

    const [competitionData, setCompetitionData] = useState();
    const [competitionMatches, setCompetitionMatches] = useState();

    async function fetchData(url: string) {

        const response = await fetch(url,  {
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
            },
        });
        return response.json();

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        {competitionData && <div className="table__name">
                            <>{competitionData.competition.name} | <span>{competitionData.competition.area.name}</span></>
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
                    <div className="matches__container">
                        <MatchdayResults competitionMatches={competitionMatches} data={competitionData} name={"currentMatchday"} />
                        <MatchdayResults competitionMatches={competitionMatches} data={competitionData} name={"lastMatchday"} />
                        <MatchdayResults competitionMatches={competitionMatches} data={competitionData} name={"nextToLastMatchday"} />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LeagueView;
