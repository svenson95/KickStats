import React, {useEffect, useState} from 'react';
import {IonCard, IonItem, IonList, IonProgressBar, IonSkeletonText} from "@ionic/react";

let MatchdayResults = ({ ...props }) => {

    let [matches, setMatches] = useState();
    let [matchDay, setMatchDay] = useState();

    useEffect(() => {
        if (props.name === "Next") {
            setMatchDay(props.matchDay);
            setMatches(props.matchesData?.matches.filter((allMatches: any) => allMatches.matchday === props.matchDay));
            // matches.filter(el => el.utcDate);
        } else if (props.name === "Current") {
            setMatchDay(props.matchDay-1);
            setMatches(props.matchesData?.matches.filter((allMatches: any) => allMatches.matchday === props.matchDay-1));
        } else if (props.name === "Last") {
            setMatchDay(props.matchDay-2);
            setMatches(props.matchesData?.matches.filter((allMatches: any) => allMatches.matchday === props.matchDay-2));
        }
    }, [props.matchesData]);

    return (
        <IonCard className="matchday__card">
            <div className="league__view__card">
                <IonProgressBar value={1} type={props.isLoading ? 'indeterminate' : 'determinate'}/>
                <div className="card__title absolute-position">
                    <div className="table__name">
                        {props.name} | {matchDay}. Matchday
                    </div>
                </div>
                {props.matchesData && matches &&
                    <MatchDayCard matches={matches} data={props.data} />
                }
                {props.isLoading && <MatchDayCardSkeleton/>}
            </div>
        </IonCard>
    );
};

const MatchDayCard = ({ ...props }) => {

    function getTeamPosition(teamName: string) {
        const ranking = props.data.standings[0].table.find((el: any) => el.team.name === teamName);
        return ranking.position;
    }

    return (<>
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
    </>);
};

const MatchDayCardSkeleton = () => {
    const skeletonItems = Array(9).fill(null);
    const items = skeletonItems.map((_, index) =>
        <IonItem key={index} className="team__item">
            <div className="team__container">
                <span className="home__team">
                    <span className="matchday__position">
                        <IonSkeletonText animated style={{ width: '100%' }} />
                        <span id="position__dot">.</span>
                    </span>
                    <IonSkeletonText animated style={{ width: '100%' }} />
                </span>
                <span className="match__result">
                    <IonSkeletonText animated style={{ width: '100%' }} />
                    <span>:</span>
                    <IonSkeletonText animated style={{ width: '100%' }} />
                </span>
                <span className="away__team">
                    <IonSkeletonText animated style={{ width: '100%' }} />
                    <span className="matchday__position">
                        <IonSkeletonText animated style={{ width: '100%' }} />
                        <span id="position__dot">.</span>
                    </span>
                </span>
            </div>
        </IonItem>
    );

    return <IonList className="matchday__card__skeleton">{items}</IonList>;
};

export default MatchdayResults;
