import {
    IonCard, IonItem, IonList,
    IonProgressBar, IonTitle,
} from '@ionic/react';
import React, {useContext} from 'react';
import LoadingContext from "./Loading.context";
import {TeamRanking} from "../types/TeamRanking";
import {league_country, league_name} from "./LeagueView";

function MainTable(props: any) {
    const loadContext = useContext(LoadingContext);
    console.log(loadContext.state);

    return (
        <div className="main__table__container">
            <IonCard className="table__card">
                <IonProgressBar value={1} type={loadContext.state ? 'indeterminate' : 'determinate'}/>
                <div className="team__header__info">
                    <div className="table__name">
                        {league_name || "League"} | <span>{league_country || "Country"}</span>
                    </div>
                </div>
                <div className="team__header__stats">
                    <div className="team__header">
                        <div className="team__result__item played">PLAY</div>
                        <div className="team__result__item won">WIN</div>
                        <div className="team__result__item draw">DRA</div>
                        <div className="team__result__item lost">LOS</div>
                        <div className="team__result__item">PTS</div>
                        <div className="team__result__item goals--plus">+</div>
                        <div className="team__result__item goals--minus">-</div>
                        <div className="team__result__item goals--difference">=</div>
                    </div>
                </div>
                {props.table && <TableItems table={props.table.standings[0].table}/>}
            </IonCard>
        </div>
    );
}

const TableItems = ({ ...props }) => {

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
                        <div className="team__result__item">20</div>
                        <div className="team__result__item">5</div>
                        <div className="team__result__item">15</div>
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
        <div className="vertical__line line__5" />
        <div className="vertical__line line__6" />
        <div className="vertical__line line__7" />
        {items}</IonList>;
};

export default MainTable;
