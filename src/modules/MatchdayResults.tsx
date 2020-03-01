import React, {useContext} from 'react';
import LoadingContext from "./Loading.context";
import {IonCard, IonItem, IonList, IonProgressBar, IonSkeletonText} from "@ionic/react";

let cardTitle = "";

function MatchdayResults(props: any) {

    const loadContext = useContext(LoadingContext);
    if (props.name === "lastMatchday") {
        cardTitle = "Last Matchday"
    } else if (props.name === "currentMatchday") {
        cardTitle = "Current Matchday"
    }

    return (
        <div className="league__view__card">
            <IonCard className="matchday__results__card">
                <IonProgressBar value={1} type={loadContext.state ? 'indeterminate' : 'determinate'}/>
                <div className="card__title no-absolute-position">
                    <div className="table__name">
                        {cardTitle && cardTitle}
                    </div>
                </div>
                {props.data && <LastGamesItems data={props.data} context={loadContext} competitionData={props.competitionData} name={props.name}/>}
            </IonCard>
        </div>
    );
}

const LastGamesItems = ({ ...props }) => {

    const currentMatchDay = props.competitionData.season.currentMatchday;
    const matches: [] = props.data.matches.filter((match: any) => match.matchday === currentMatchDay - (props.name === "lastMatchday" ? 1 : 0));

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
                                        {match.homeTeam.name}
                                    </span>
                                    <span>{homeScore !== null ? homeScore : "-"} : {awayScore !== null ? awayScore : "-"}</span>
                                    <span className="away__team">
                                        {match.awayTeam.name}
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