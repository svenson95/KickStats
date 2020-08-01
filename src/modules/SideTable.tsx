import {
    IonCard,
    IonItem,
    IonList,
    IonProgressBar,
    IonSkeletonText,
} from '@ionic/react';
import React from 'react';

const SideTable = ({ ...props }) =>
    <IonCard className="side__table__container">
        <div className="side__table__card">
            <IonProgressBar value={1} type={props.isLoading ? 'indeterminate' : 'determinate'}/>
            <div className="card__title">
                <div className="table__name">{props.name} Table</div>
            </div>
            <div className="team__header__stats">
                <div className="team__header">
                    <div className="team__result__item played">PYD</div>
                    <div className="team__result__item won">WIN</div>
                    <div className="team__result__item draw">DRA</div>
                    <div className="team__result__item lost">LOS</div>
                    <div className="team__result__item goals--plus"><div className="ball">+</div></div>
                    <div className="team__result__item goals--minus"><div className="ball">-</div></div>
                </div>
            </div>
            {props.data.standings && <SideTableItems data={props.data} name={props.name} isLoading={props.isLoading} />}
            {props.isLoading && <SideTableSkeleton />}
        </div>
    </IonCard>;

const SideTableItems = ({ ...props }) =>
    <IonList>
        <div className="vertical__line line__1" />
        <div className="vertical__line line__2" />
        <div className="vertical__line line__3" />
        <div className="vertical__line line__4" />
        <div className="vertical__line line__5" />
        {props.data.standings && props.data.standings[(props.name === "Home" ? 1 : 2)].table.map((team: any, index: number) => {
            const trimmedTeamName = team.team.name.toLowerCase().split(' ').join('').split('.').join('').split('&').join('and');
            return (
                <IonItem key={index} className="team__item">
                    <div className="team__container">
                        <div className={`team__info team__info__${trimmedTeamName}`}
                             onClick={() => props.markItems(team.team.name, trimmedTeamName)}>
                            <div className="team__position">{team.position}.</div>
                            <div className="team__logo"><img src={team.team.crestUrl} alt={""}/></div>
                        </div>
                        <div className="team__stats">
                            <div className="team__result__item">{team.playedGames}</div>
                            <div className="team__result__item">{team.won}</div>
                            <div className="team__result__item">{team.draw}</div>
                            <div className="team__result__item">{team.lost}</div>
                            <div className="team__result__item">{team.goalsFor}</div>
                            <div className="team__result__item">{team.goalsAgainst}</div>
                        </div>
                    </div>
                </IonItem>
            )
        })}
    </IonList>;

const SideTableSkeleton = () => {
    const skeletonItems = Array(18).fill(0);

    const items = skeletonItems.map((_, index) =>
        <IonItem className="team__item" key={index}>
            <div className="team__container">
                <div className={`team__info`}>
                    <div className="team__position">
                        <IonSkeletonText animated style={{ width: '95%' }} />
                        <span id="position__dot">.</span>
                    </div>
                    <div className="team__logo"><IonSkeletonText animated style={{ width: '95%' }} /></div>
                </div>
                <div className="team__stats">
                    <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                    <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                    <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                    <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                    <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                    <div className="team__result__item"><IonSkeletonText animated style={{ width: '80%' }} /></div>
                </div>
            </div>
        </IonItem>
    );

    return (
        <IonList className="side__table__skeleton">
            {items}
        </IonList>
    )
};

export default SideTable;
