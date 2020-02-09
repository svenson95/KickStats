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
import Table, {_data} from "../modules/Table";
import {PageTitle} from "../declarations";

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

const Content: React.FC<ContentProps> = () => {

    return (
        <IonPage className="content__container" id="main">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <div className="competition__name">
                            {_data.competition?.name || ""}
                        </div>
                        <div className="competition__area">
                            {_data.competition?.area.name || ""}
                        </div>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRouterOutlet id="main">
                    <Route path="/home" component={Home} exact={true} />
                    <Route path="/bundesliga" component={Table} exact={true} />
                    <Route path="/premierleague" component={Table} exact={true} />
                    <Route path="/primeradivision" component={Table} exact={true} />
                    <Route path="/seriea" component={Table} exact={true} />
                    <Route path="/ligue1" component={Table} exact={true} />
                    <Route path="/primeiraliga" component={Table} exact={true} />
                    <Route path="/eredivise" component={Table} exact={true} />
                    <Route path="/" render={() => <Redirect to="/home"/> } exact={true} />
                </IonRouterOutlet>
            </IonContent>
        </IonPage>
    )
};

export default withRouter(Content);
