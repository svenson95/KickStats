import React, {useContext} from 'react';
import LoadingContext from "./Loading.context";
import {IonCard, IonItem, IonList, IonProgressBar, IonSkeletonText} from "@ionic/react";

let cardTitle = "";
let matchdayIndex = 0;

function MatchdayResults(props: any) {

    const loadContext = useContext(LoadingContext);
    if (props.name === "currentMatchday") {
        cardTitle = "Current Matchday";
        matchdayIndex = 0;
    } else if (props.name === "lastMatchday") {
        cardTitle = "Last Matchday";
        matchdayIndex = 1;
    } else if (props.name === "nextToLastMatchday") {
        cardTitle = "Next-To-Last Matchday";
        matchdayIndex = 2;
    }

    return (
        <IonCard className="matchday__results__card" style={{margin: "10px"}}>
            <div className="league__view__card">
                <IonProgressBar value={1} type={loadContext.state ? 'indeterminate' : 'determinate'}/>
                <div className="card__title no-absolute-position">
                    <div className="table__name">
                        {cardTitle && cardTitle}
                    </div>
                </div>
                {props.data && <LastGamesItems data={props.data} context={loadContext} competitionData={props.competitionData} name={props.name}/>}
            </div>
        </IonCard>
    );
}

const LastGamesItems = ({ ...props }) => {

    const currentMatchDay = props.competitionData.season.currentMatchday;
    const table = props.competitionData.standings[0].table;
    function getTeamPosition(teamName: string) {
        const position = table.find((el: any) => el.team.name === teamName);
        return position.position;
    }
    const matches: [] = props.data.matches.filter((match: any) => match.matchday === currentMatchDay - matchdayIndex);

    return (<>
        <IonList>
            {!props.data || props.context.state ? (
                <>
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((index) => {
                        return (
                            <IonItem key={index} className="team__item">
                                <div className="match__container">
                                <span className="home__team team__name">
                                    <IonSkeletonText animated style={{ width: '95%' }} />
                                </span>
                                    <span><IonSkeletonText animated style={{ width: '80%' }} /> : <IonSkeletonText animated style={{ width: '80%' }} /></span>
                                    <span className="away__team">
                                    <IonSkeletonText animated style={{ width: '95%' }} />
                                </span>
                                </div>
                            </IonItem>
                        )
                    })}
                </>
            ) : (
                <>
                    {matches.map((match: any, index: number) => {
                        const homeScore = match.score.fullTime.homeTeam;
                        const awayScore = match.score.fullTime.awayTeam;
                        return (
                            <IonItem key={index} className="team__item">
                                <div className="team__container">
                                    <span className="home__team team__name">
                                        <span className="matchday__position">{getTeamPosition(match.homeTeam.name)}.</span> {match.homeTeam.name}
                                    </span>
                                    <span>{homeScore !== null ? homeScore : "-"} : {awayScore !== null ? awayScore : "-"}</span>
                                    <span className="away__team">
                                        {match.awayTeam.name} <span className="matchday__position">{getTeamPosition(match.awayTeam.name)}.</span>
                                    </span>
                                </div>
                            </IonItem>
                        )
                    })}
                </>
            )}
        </IonList>
    </>);
};

export default MatchdayResults;
