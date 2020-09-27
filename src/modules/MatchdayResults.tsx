import React, {useEffect, useState} from 'react';
import {IonCard, IonItem, IonList, IonProgressBar, IonSkeletonText} from "@ionic/react";

let MatchdayResults = ({ ...props }) => {

    let [matches, setMatches] = useState(null as any);

    useEffect(() => {
        if (props.marked) {
            if (props.name === "1") {
                setMatches(props.matchesData?.matches.filter((matches: any) => {
                    return matches.homeTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay ||
                            matches.awayTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay ||
                            matches.homeTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay ||
                            matches.awayTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay
                }));
            } else if (props.name === "2") {
                setMatches(props.matchesData?.matches.filter((matches: any) => {
                    return matches.homeTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-1 ||
                        matches.awayTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-1 ||
                        matches.homeTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-1 ||
                        matches.awayTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-1
                }));
            } else if (props.name === "3") {
                setMatches(props.matchesData?.matches.filter((matches: any) => {
                    return matches.homeTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-2 ||
                        matches.awayTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-2 ||
                        matches.homeTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-2 ||
                        matches.awayTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-2
                }));
            } else if (props.name === "4") {
                setMatches(props.matchesData?.matches.filter((matches: any) => {
                    return matches.homeTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-3 ||
                        matches.awayTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-3 ||
                        matches.homeTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-3 ||
                        matches.awayTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-3
                }));
            } else if (props.name === "5") {
                setMatches(props.matchesData?.matches.filter((matches: any) => {
                    return matches.homeTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-4 ||
                        matches.awayTeam.name === props.marked.team1?.name && matches.matchday === props.matchDay-4 ||
                        matches.homeTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-4 ||
                        matches.awayTeam.name === props.marked.team2?.name && matches.matchday === props.matchDay-4
                }));
            }
        } else {
            if (props.name === "1") {
                setMatches(props.matchesData?.matches.filter((match: any) => match.matchday === props.matchDay));
            } else if (props.name === "2") {
                setMatches(props.matchesData?.matches.filter((match: any) => match.matchday === props.matchDay-1));
            } else if (props.name === "3") {
                setMatches(props.matchesData?.matches.filter((match: any) => match.matchday === props.matchDay-2));
            } else if (props.name === "4") {
                setMatches(props.matchesData?.matches.filter((match: any) => match.matchday === props.matchDay-3));
            } else if (props.name === "5") {
                setMatches(props.matchesData?.matches.filter((match: any) => match.matchday === props.matchDay-4));
            }
        }
    }, [props.marked, props.matchesData]);

    return (
        <IonCard className="matchday__card">
            <div className="league__view__card">
                <IonProgressBar value={1} type={props.isLoading ? 'indeterminate' : 'determinate'}/>
                {props.matchesData?.matches.length ?
                    <>
                        <div className="card__title absolute-position">
                            <div className="table__name">
                                {props.matchDay - props.name+1}. Matchday
                            </div>
                        </div>
                        {props.matchesData && <MatchDayCard matches={matches} data={props.data} />}
                    </>
                    :
                    !props.isLoading && <div className="no-data"><p>No data available</p></div>
                }
            </div>
        </IonCard>
    );
};

const MatchDayCard = ({ ...props }) => {

    function getTeamPosition(teamName: string) {
        const ranking = props.data.standings[0].table.find((el: any) => el.team.name === teamName);
        return ranking.position;
    }

    return (
        <IonList>
            {props.matches && props.matches.map((match: any, index: number) => {
                const homeScore = match.score.fullTime.homeTeam;
                const awayScore = match.score.fullTime.awayTeam;
                const trimmedHomeTeam = match.homeTeam.name.toLowerCase().split(' ').join('').split('.').join('').split('&').join('and');
                const trimmedAwayTeam = match.awayTeam.name.toLowerCase().split(' ').join('').split('.').join('').split('&').join('and');

                return (
                    <IonItem key={index} className="team__item">
                        <div className="team__container">
                            <span className={`home__team team__info__${trimmedHomeTeam}`}>
                                <span className="matchday__position">
                                    {getTeamPosition(match.homeTeam.name)}.
                                </span>
                                {match.homeTeam.name}
                            </span>
                            <span className="match__result">
                                {homeScore !== null ? homeScore : "-"} : {awayScore !== null ? awayScore : "-"}
                            </span>
                            <span className={`away__team team__info__${trimmedAwayTeam}`}>
                                <span>{match.awayTeam.name}</span>
                                <span className="matchday__position">
                                     {getTeamPosition(match.awayTeam.name)}.
                                </span>
                            </span>
                        </div>
                    </IonItem>
                )
            })}
        </IonList>
    );
};

export default MatchdayResults;
