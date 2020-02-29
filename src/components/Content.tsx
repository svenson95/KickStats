import {
    IonContent,
    IonPage,
    IonRouterOutlet,
} from "@ionic/react";
import React from 'react';
import {Redirect, Route, RouteComponentProps, withRouter} from "react-router";

import Start1 from "../pages/Start";
import Table from "../modules/LeagueView";
import {PageTitle} from "../declarations";
import LoadingContext from "../modules/Loading.context";

interface ContentProps extends RouteComponentProps {
    pageTitles: PageTitle[]
}

const Content: React.FC<ContentProps> = () => {

    return (
        <IonPage className="content__container" id="main">
            <IonContent>
                <IonRouterOutlet id="main">
                    <Route path="/home" component={Start1} exact={true} />
                    <Route path="/bundesliga" component={Table} exact={true} />
                    <Route path="/premierleague" component={Table} exact={true} />
                    <Route path="/primeradivisión" component={Table} exact={true} />
                    <Route path="/seriea" component={Table} exact={true} />
                    <Route path="/ligue1" component={Table} exact={true} />
                    <Route path="/primeiraliga" component={Table} exact={true} />
                    <Route path="/eredivise" component={Table} exact={true} />
                    <Route path="/" render={() => <Redirect to="/start" /> } exact={true} />
                </IonRouterOutlet>
            </IonContent>
        </IonPage>
    )
};

export default withRouter(Content);
