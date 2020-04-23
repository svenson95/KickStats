import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useEffect, useRef, useState} from 'react';
import {RouteComponentProps, useHistory, withRouter} from "react-router";
import {pageTitles} from "../App";
import MainTable from "../modules/MainTable";
import SideTable from "../modules/SideTable";
import MatchdayResults from "../modules/MatchdayResults";
import {basePath, fetchData} from "../services/http.service";

export const league_ids = {
    "bundesliga": "2002",
    "premierleague": "2021",
    "primeradivision": "2014",
    "seriea": "2019",
    "ligue1": "2015",
    "primerialiga": "2017",
    "eredivise": "2003",
    // "england_championship": "2015",
    // "brazil": "2013"
};

let counter = 0;
export function markItems(teamName: string) {
    let marked1 = document.querySelector(`.team__info__${teamName}`)?.classList.contains('marked1');
    if (marked1) {
        document.querySelectorAll(`.team__info__${teamName}`)?.forEach(el => el.classList.remove('marked1'));
        counter -= 1;
    } else if (document.querySelector(`.team__info__${teamName}`)?.classList.contains('marked2')) {
        document.querySelectorAll(`.team__info__${teamName}`)?.forEach(el => el.classList.remove('marked2'));
        counter -= 1;
    } else if (counter >= 2) {
        document.querySelectorAll(`.team__info`)?.forEach(el => {
            el.classList.remove('marked1');
            el.classList.remove('marked2');
        });
        document.querySelectorAll(".home__team")?.forEach(el => {
            el.classList.remove('marked1');
            el.classList.remove('marked2');
        });
        document.querySelectorAll(".away__team")?.forEach(el => {
            el.classList.remove('marked1');
            el.classList.remove('marked2');
        });
        counter = 0;
    } else {
        if (counter === 0) {
            document.querySelectorAll(`.team__info__${teamName}`)?.forEach(el => el.classList.add('marked1'));
        } else {
            document.querySelectorAll(`.team__info__${teamName}`)?.forEach(el => el.classList.add('marked2'));
        }
        counter += 1;
    }
}

let shortClubName = (str: string, history: any) => {
    if (history.location.pathname.substring(1) === "bundesliga") {
        if (str === "FC Bayern München") return "Bayern München";
        if (str === "BV Borussia 09 Dortmund") return "Borussia Dortmund";
        if (str === "Borussia Mönchengladbach") return "Mönchengladbach";
        if (str === "Bayer 04 Leverkusen") return "Bayer Leverkusen";
        if (str === "FC Schalke 04") return "FC Schalke";
        if (str === "TSG 1899 Hoffenheim") return "TSG Hoffenheim";
        if (str === "1. FC Köln") return "1.FC Köln";
        if (str === "1. FC Union Berlin") return "Union Berlin";
        if (str === "1. FSV Mainz 05") return "Mainz 05";
        if (str === "TSV Fortuna 95 Düsseldorf") return "Fortuna Düsseldorf";
        if (str === "SV Werder Bremen") return "Werder Bremen";
        if (str === "SC Paderborn 07") return "SC Paderborn";
        return str;
    } if (history.location.pathname.substring(1) === "premierleague") {
        if (str === "Liverpool FC") return "Liverpool";
        if (str === "Manchester City FC") return "Manchester City";
        if (str === "Leicester City FC") return "Leicester City";
        if (str === "Chelsea FC") return "Chelsea";
        if (str === "Manchester United FC") return "Manchester United";
        if (str === "Wolverhampton Wanderers FC") return "Wolverhampton";
        if (str === "Sheffield United FC") return "Sheffield United";
        if (str === "Tottenham Hotspur FC") return "Tottenham Hotspurs";
        if (str === "Arsenal FC") return "Arsenal";
        if (str === "Burnley FC") return "Burnley";
        if (str === "Crystal Palace FC") return "Crystal Palace";
        if (str === "Everton FC") return "Everton";
        if (str === "Newcastle United FC") return "Newcastle United";
        if (str === "Southampton FC") return "Southampton";
        if (str === "Brighton & Hove Albion FC") return "Brighton & Hove Albion";
        if (str === "West Ham United FC") return "West Ham";
        if (str === "Watford FC") return "Watford";
        if (str === "AFC Bournemouth") return "Bournemouth";
        if (str === "Aston Villa FC") return "Aston Villa";
        if (str === "Norwich City FC") return "Norwich City";
        return str;
    } if (history.location.pathname.substring(1) === "primeradivision") {
        if (str === "Real Madrid CF") return "Real Madrid";
        if (str === "Sevilla FC") return "Sevilla";
        if (str === "Real Sociedad de Fútbol") return "Real Sociedad";
        if (str === "Getafe FC") return "Getafe";
        if (str === "Club Atlético de Madrid") return "Atlético Madrid";
        if (str === "Valencia CF") return "Valencia";
        if (str === "Villarreal CF") return "Villarreal";
        if (str === "Granada CF") return "Granada";
        if (str === "Athletic Club") return "Athletic Bilbao";
        if (str === "Real Betis Balompié") return "Real Betis";
        if (str === "Real Valladolid CF") return "Real Valladolid";
        if (str === "RC Celta de Vigo") return "Celta Vigo";
        if (str === "CD Leganés") return "Leganés";
        if (str === "RCD Espanyol de Barcelona") return "Espanyol Barcelona";
        return str;
    } else {
        return str;
    }
};

const LeagueView: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

    let [competitionData, setCompetitionData] = useState([] as any);
    let [isLoading, setLoading] = useState();
    let history = useHistory();

    // componentDidMount
    const mounted = useRef(false);
    useEffect(() => {

        if (mounted.current) return;
        mounted.current = true;

        fetchTables()

    }, [setLoading]);

    let fetchTables = () => {
        setLoading(true);
        const url_parameter = match.path.substr(1, match.path.length);
        const league_id = Object.values(league_ids)[pageTitles.findIndex(el => el.title === url_parameter)];

        fetchData(basePath + `/competitions/${league_id}/standings`)
            .then(data => {
                data.standings.forEach((standing: any) => {
                    standing.table.forEach((el: any) => {
                        el.team.name = shortClubName(el.team.name, history);
                    });
                });
                setCompetitionData(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        {competitionData.competition && <div className="table__name">
                            <>{competitionData.competition.name} | <span>{competitionData.competition.area.name}</span></>
                        </div>}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="content__div">
                    <MainTable data={competitionData} isLoading={isLoading} />
                    <div className="home__and__away__container">
                        <SideTable data={competitionData} isLoading={isLoading} name={"Home"} />
                        <SideTable data={competitionData} isLoading={isLoading} name={"Away"} />
                    </div>
                    {competitionData.competition &&
                        <MatchDays data={competitionData} isLoading={isLoading} route={match}/>
                    }
                </div>
            </IonContent>
        </IonPage>
    );
};

let MatchDays = ({ ...props }) => {

    let [matchesData, setMatchesData] = useState();
    let [isLoading, setLoading] = useState();
    let history = useHistory();
    let matchDay = props.data.season.currentMatchday;

    const mounted = useRef(false);
    useEffect(() => {

        if (mounted.current) return;
        mounted.current = true;

        fetchMatches();

        return () => setMatchesData([]);
    }, [setLoading]);

    let fetchMatches = () => {
        setLoading(true);
        const url_parameter = props.route.path.substr(1, props.route.path.length);
        const league_id = Object.values(league_ids)[pageTitles.findIndex(el => el.title === url_parameter)];

        fetchData(basePath + `/competitions/${league_id}/matches`)
            .then(data => {
                data.matches.forEach((el: any) => {
                    el.awayTeam.name = shortClubName(el.awayTeam.name, history);
                    el.homeTeam.name = shortClubName(el.homeTeam.name, history);
                });
                setMatchesData(data);
                setLoading(false)
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="matches__container">
            <MatchdayResults
                matchesData={matchesData}
                route={props.route}
                matchDay={matchDay}
                data={props.data}
                name="Next"
                isLoading={isLoading}
            />
            <MatchdayResults
                matchesData={matchesData}
                route={props.route}
                matchDay={matchDay}
                data={props.data}
                name="Current"
                isLoading={isLoading}
            />
            <MatchdayResults
                matchesData={matchesData}
                route={props.route}
                matchDay={matchDay}
                data={props.data}
                name="Last"
                isLoading={isLoading}
            />
        </div>
    )
};

export default withRouter(LeagueView);
