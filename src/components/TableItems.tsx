import {TeamRanking} from "../types/TeamRanking";
import {IonItem, IonList} from "@ionic/react";
import React from "react";

export const TableItems = ({ ...props }) => {

    const items = props.table.map((team: TeamRanking, index: number) => {
        return (
            <IonItem key={index} className="team__item">
                <div className="team__container">
                    <div className="team__info">
                        <div className="team__position">{team.position}.</div>
                        <div className="team__logo"><img src={team.team.crestUrl} alt={""}/></div>
                        <div className="team__name">{team.team.name}</div>
                    </div>
                    <div className="team__stats">
                        <div className="team__result__item">{team.playedGames}</div>
                        <div className="team__result__item">{team.won}</div>
                        <div className="team__result__item">{team.draw}</div>
                        <div className="team__result__item">{team.lost}</div>
                        <div className="team__result__item">{team.points}</div>
                    </div>
                </div>
            </IonItem>
        );
    });
    return <IonList>
        <div className="vertical__line line__1" />
        <div className="vertical__line line__2" />
        <div className="vertical__line line__3" />
        <div className="vertical__line line__4" />
        {items}</IonList>;
};
