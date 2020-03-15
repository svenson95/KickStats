import {
    IonCard,
    IonItem,
    IonList,
    IonProgressBar, IonSkeletonText,
} from '@ionic/react';
import React from 'react';
import {TeamRanking} from "../types/TeamRanking";
import {markItems} from "../components/LeagueView";

const MainTable = ({ ...props }) =>
    <div className="main__table__container">
        <IonCard className="table__card">
            <IonProgressBar value={1} type={!props.data ? 'indeterminate' : 'determinate'}/>
                <div className="card__title">
                    <div className="table__name">
                        Table
                    </div>
                </div>
                <div className="team__header__stats">
                    <div className="team__header">
                        <div className="team__result__item played">PYD</div>
                        <div className="team__result__item won">WIN</div>
                        <div className="team__result__item draw">DRA</div>
                        <div className="team__result__item lost">LOS</div>
                        <div className="team__result__item">PTS</div>
                        <div className="team__result__item goals--plus"><div className="ball">+</div></div>
                        <div className="team__result__item goals--minus"><div className="ball">-</div></div>
                        <div className="team__result__item goals--difference"><div className="ball">=</div></div>
                    </div>
                </div>
                <TableItems data={props.data} />
        </IonCard>
    </div>;

const TableItems = ({ ...props }) =>
    <IonList>
        <div className="vertical__line line__1" />
        <div className="vertical__line line__2" />
        <div className="vertical__line line__3" />
        <div className="vertical__line line__4" />
        <div className="vertical__line line__5" />
        <div className="vertical__line line__6" />
        <div className="vertical__line line__7" />
        {props.data ? (
            <>
                {props.data.standings[0].table.map((team: TeamRanking, index: number) => {
                    const trimmedTeamName = team.team.name.toLowerCase().split(' ').join('').split('.').join('').split('&').join('and');
                    return (
                        <IonItem key={index} className="team__item">
                            <div className="team__container">
                                <div className={`team__info team__info__${trimmedTeamName}`} onClick={() => markItems(trimmedTeamName)}>
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
                    )
                })}
            </>
        ) : (<MainTableSkeleton/>)}
    </IonList>;

const MainTableSkeleton = ({ ...props }) =>
    <IonItem className="team__item">
        <div className="team__container">
            <div className="team__info">
                <div className="team__position">{props.index}.</div>
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
    </IonItem>;

export default MainTable;
