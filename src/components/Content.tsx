import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterOutlet,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React from 'react';
import {Redirect, Route, RouteComponentProps, withRouter} from "react-router";

import Home from "../pages/Home";
import RankingList from "./RankingList";
import {PageTitle} from "../declarations";
import {setLeagueID} from "../App";

export let current_page: number;
export const setBundesligaTitle = () => { current_page = 0 };
export const setPremierLeagueTitle = () => { current_page = 1 };
export const setPrimeraDivisionTitle = () => { current_page = 2 };
export const setSeriaaTitle = () => { current_page = 3 };
export const setLigue1Title = () => { current_page = 4 };
export const setPrimeriaLigaTitle = () => { current_page = 5 };
export const setErediviseTitle = () => { current_page = 6 };
export const setHomeTitle = () => { current_page = 7 };
export const updateCurrentPage = [
    setBundesligaTitle,
    setPremierLeagueTitle,
    setPrimeraDivisionTitle,
    setSeriaaTitle,
    setLigue1Title,
    setPrimeriaLigaTitle,
    setErediviseTitle,
    setHomeTitle
];

interface ContentProps extends RouteComponentProps {
    pageTitles: PageTitle[]
}

class Content extends React.Component<ContentProps> {

    constructor(props: any) {
        super(props);

        setLeagueID();
    }

    render() {
        return (
            <IonPage className="content__container" id="main">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        {/*<IonTitle>{this.props.pageTitles[current_page].title}</IonTitle>*/}
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRouterOutlet id="main">
                        <Route path="/home" component={Home} exact={true} />
                        <Route path="/bundesliga" component={RankingList} exact={true} />
                        <Route path="/premierleague" component={RankingList} exact={true} />
                        <Route path="/primeradivision" component={RankingList} exact={true} />
                        <Route path="/seriea" component={RankingList} exact={true} />
                        <Route path="/ligue1" component={RankingList} exact={true} />
                        <Route path="/primeiraliga" component={RankingList} exact={true} />
                        <Route path="/eredivise" component={RankingList} exact={true} />
                        <Route path="/" render={() => <Redirect to="/home"/> } exact={true} />
                    </IonRouterOutlet>
                </IonContent>
            </IonPage>
        )
    }
}

export default withRouter(Content);
