import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar } from '@ionic/react';
import React from 'react';
import {initialFetchStanding, stand_positions} from "../services/http.service";

const league_id = "2021";
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
const erediviseAPI = `http://api.football-data.org/v2/competitions/${league_id}/standings`;
let standing: any[] = [];

class StandingList extends React.Component<any , any> {

    constructor(props: any) {
        super(props);
        this.state = {
            standing: {}
        }
    }

    foo() {

    }

    componentDidMount(): void {
        standing = stand_positions;
        console.log(standing);

        if (standing.length === 0) {
            initialFetchStanding(erediviseAPI).then(data => {
                this.setState({ standing: data});
                localStorage.setItem('standing', data);
            });
        }
    }

    render() {
        return (
            <IonPage>
                <IonContent>
                    <ListItems/>
                </IonContent>
            </IonPage>
        );
    }
}

class ListItems extends React.Component<any, any> {

    render() {
        const items = standing.map((team, index) => {
            return (
                <IonItem key={index} className="team__item">
                    <div className="team__container">
                        <div className="team__info">
                            <div className="team__position">{standing[index].position}.</div>
                            <div className="team__logo"><img src={standing[index].team.crestUrl} /></div>
                            <div className="team__name">{standing[index].team.name}</div>
                        </div>
                        <div className="team__stats">
                            <div className="team__playedGames">{standing[index].playedGames}</div>
                            <div className="team__result won">{standing[index].won}</div>
                            <div className="team__result draw">{standing[index].draw}</div>
                            <div className="team__result lost">{standing[index].lost}</div>
                        </div>
                    </div>
                </IonItem>
            );
        });
        return <IonList>{items}</IonList>;
    }
}

export default StandingList;
