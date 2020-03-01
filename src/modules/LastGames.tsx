import React, {useContext} from 'react';
import LoadingContext from "./Loading.context";
import {IonCard, IonItem, IonList, IonProgressBar, IonSkeletonText} from "@ionic/react";

function LastGames(props: any) {

    const loadContext = useContext(LoadingContext);

    return (
        <div className="league__view__card">
            <IonCard className="table__card">
                <IonProgressBar value={1} type={loadContext.state ? 'indeterminate' : 'determinate'}/>
                <div className="card__title no-absolute-position">
                    <div className="table__name">
                        Last Games
                    </div>
                </div>
                {props.data && <LastGamesItems data={props.data} context={loadContext} competitionData={props.competitionData}/>}
            </IonCard>
        </div>
    );
}

const LastGamesItems = ({ ...props }) => {

    const currentMatchDay = props.competitionData.season.currentMatchday;
    const matches: [] = props.data.matches.filter((match: any) => match.matchday === currentMatchDay);

    return (<>
        <IonList>
            {!props.data || props.context.state ? (
                <>
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((index) => {
                        return (
                            <IonItem key={index} className="team__item">
                                <div className="team__container">
                                    <div className="team__info">
                                        <div className="team__position">{index}.</div>
                                        <div className="team__logo"><IonSkeletonText animated style={{ width: '95%' }} /></div>
                                        <div className="team__name">
                                            <IonSkeletonText animated style={{ width: '95%' }} />
                                        </div>
                                    </div>
                                    <div className="team__stats">
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                        <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                                    </div>
                                </div>
                            </IonItem>
                        )
                    })}
                </>
            ) : (
                <>
                    {matches.map((match: any, index: number) => {
                        return (
                            <IonItem key={index} className="team__item">
                                <div className="team__container">
                                    <span className="home__team" style={{width: "200px", textAlign: "right"}}>
                                        {match.homeTeam.name}
                                    </span>
                                    <span>{props.data.matches[index].score.fullTime.homeTeam} | {props.data.matches[index].score.fullTime.awayTeam}</span>
                                    <span className="away__team" style={{width: "200px"}}>
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

export default LastGames;
