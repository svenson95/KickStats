import {
    IonCard,
    IonItem,
    IonList,
    IonProgressBar,
} from '@ionic/react';
import React, {useContext} from 'react';
import LoadingContext from "./Loading.context";
import {TeamRanking} from "../types/TeamRanking";

function SideTable(props: any) {
    const loadContext = useContext(LoadingContext);

    // const mounted = useRef(false);
    // useEffect(() => {
    //    if (mounted.current) return;
    //    mounted.current = true;
    //
    // });

    return (
        <div className="side__table__container">
            <IonCard className="side__table__card">
                <IonProgressBar value={1} type={loadContext.state ? 'indeterminate' : 'determinate'}/>
                <div className="team__header__info">
                    <div className="table__name">{props.name}</div>
                </div>
                <div className="team__header__stats">
                    <div className="team__header">
                        <div className="team__result__item played">PLAY</div>
                        <div className="team__result__item won">WIN</div>
                        <div className="team__result__item draw">DRA</div>
                        <div className="team__result__item lost">LOS</div>
                        <div className="team__result__item">PTS</div>
                    </div>
                </div>
                {props.data && <TableItems table={props.data.standings[(props.name === "Home" ? 1 : 2)].table}/>}
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

export default SideTable;
