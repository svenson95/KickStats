import {
    IonContent,
    IonPage,
    IonRouterOutlet,
} from "@ionic/react";
import React from 'react';
import {Redirect, Route, RouteComponentProps, withRouter} from "react-router";

import Start from "../pages/Start";
import LeagueView from "./LeagueView";
import {PageTitle} from "../declarations";

interface ContentProps extends RouteComponentProps {
    pageTitles: PageTitle[]
}

const Content: React.FC<ContentProps> = () =>
    <IonPage className="content__container" id="main">
        <IonContent>
            <IonRouterOutlet id="main">
                <Route path="/home" component={Start} />
                <Route path="/bundesliga" component={LeagueView} />
                <Route path="/premierleague" component={LeagueView} />
                <Route path="/primeradivisión" component={LeagueView}  />
                <Route path="/seriea" component={LeagueView} />
                <Route path="/ligue1" component={LeagueView} />
                <Route path="/primeiraliga" component={LeagueView} />
                <Route path="/eredivise" component={LeagueView} />
                <Redirect to="/home" exact={true} />
            </IonRouterOutlet>
        </IonContent>
    </IonPage>;

export default withRouter(Content);
