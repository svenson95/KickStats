import {
    IonCard,
    IonItem,
    IonList,
    IonProgressBar, IonSkeletonText,
} from '@ionic/react';
import React, {useContext} from 'react';
import LoadingContext from "./Loading.context";
import {TeamRanking} from "../types/TeamRanking";

function MainTable(props: any) {
    const loadContext = useContext(LoadingContext);

    return (
        <div className="main__table__container">
            <IonCard className="table__card">
                <IonProgressBar value={1} type={loadContext.state ? 'indeterminate' : 'determinate'}/>
                    <div className="team__header__info">
                        <div className="table__name">
                            Table
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
                    {props.data && <TableItems table={props.data.standings[0].table} loading={loadContext.state}/>}
            </IonCard>
        </div>
    );
}

const TableItems = ({ ...props }) => {
    const context = useContext(LoadingContext);

    return (<>
        <IonList>
            <div className="vertical__line line__1" />
            <div className="vertical__line line__2" />
            <div className="vertical__line line__3" />
            <div className="vertical__line line__4" />
            <div className="vertical__line line__5" />
            <div className="vertical__line line__6" />
            <div className="vertical__line line__7" />
            {context.state ? (
                <>{[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((index) => {
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
                })}</>
            ) : (
                <>
                    {props.table.map((team: TeamRanking, index: number) => {
                        return (<>
                            <IonItem key={index} className="team__item">
                                <div className="team__container">
                                    <div className="team__info">
                                        <div className="team__position">{team.position}.</div>
                                        <div className="team__logo"><img src={team.team.crestUrl} alt={""}/></div>
                                        <div className="team__name">
                                            {team.team.name}
                                        </div>
                                    </div>
                                    <div className="team__stats">
                                        <div className="team__result__item">{team.playedGames}</div>
                                        <div className="team__result__item">{team.won}</div>
                                        <div className="team__result__item">{team.draw}</div>
                                        <div className="team__result__item">{team.lost}</div>
                                        <div className="team__result__item">{team.points}</div>
                                        <div className="team__result__item">{team.goalsFor}</div>
                                        <div className="team__result__item">{team.goalsAgainst}</div>
                                        <div className="team__result__item">{team.goalDifference}</div>
                                    </div>
                                </div>
                            </IonItem>
                        </>)
                    })}
                </>
            )}
        </IonList>
    </>);
};

export default MainTable;
