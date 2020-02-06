import {
    IonContent,
    IonItem,
    IonList,
    IonPage,
    IonCard
} from '@ionic/react';
import React from 'react';
import {initialFetchRanking, rank_positions} from "../services/http.service";

let league_id = "2021";
export const league_ids = {
    "bundesliga": "2002",
    "premierleague": "2021",
    "primeradivision": "2014",
    "seriaa": "2019",
    "ligue1": "2015",
    "primerialiga": "2017",
    "eredivise": "2003",
    // "england_championship": "2015",
    // "brazil": "2013"
};
export function changeLeagueID(index: number) {
    league_id = Object.values(league_ids)[index];
}
const league_api = `http://api.football-data.org/v2/competitions/${league_id}/standings`;
let ranking: any[] = [];

class RankingList extends React.Component<any , any> {

    constructor(props: any) {
        super(props);
        this.state = {
            ranking: {},
            reload: {}
        }
    }

    componentDidMount(): void {
        ranking = rank_positions;
        console.log(ranking);
        console.log(league_api);

        if (ranking.length === 0) {
            initialFetchRanking(league_api).then(data => {
                this.setState({ ranking: data});
                localStorage.setItem('ranking', data);
            });
        }
    }

    render() {
        return (
            <IonPage>
                <IonContent>
                    <div className="module__container">
                        <IonCard className="ranking__card">
                            <div className="team__header">
                                <div className="team__header__wrapper">
                                    <div className="team__result__item played">PLAYED</div>
                                    <div className="team__result__item won">WIN</div>
                                    <div className="team__result__item draw">DRAW</div>
                                    <div className="team__result__item lost">LOSE</div>
                                </div>
                            </div>
                            <RankingItems/>
                        </IonCard>
                        <IonCard className="test__card">
                            TEST
                        </IonCard>
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}

class RankingItems extends React.Component<any, any> {

    render() {
        const items = ranking.map((team, index) => {
            return (
                <IonItem key={index} className="team__item">
                    <div className="team__container">
                        <div className="team__wrapper">
                            <div className="team__info">
                                <div className="team__position">{ranking[index].position}.</div>
                                <div className="team__logo"><img src={ranking[index].team.crestUrl} /></div>
                                <div className="team__name">{ranking[index].team.name}</div>
                            </div>
                            <div className="team__stats">
                                <div className="team__result__item">{ranking[index].playedGames}</div>
                                <div className="team__result__item">{ranking[index].won}</div>
                                <div className="team__result__item">{ranking[index].draw}</div>
                                <div className="team__result__item">{ranking[index].lost}</div>
                            </div>
                        </div>
                    </div>
                </IonItem>
            );
        });
        return <IonList>
            <div className="vertical__line line__1" />
            <div className="vertical__line line__2" />
            <div className="vertical__line line__3" />
            {items}</IonList>;
    }
}

export default RankingList;
