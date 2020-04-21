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
                <Route path="/home" render={() => <Start />} />
                <Route path="/bundesliga" render={() => <LeagueView/>} />
                <Route path="/premierleague" render={() => <LeagueView/>} />
                <Route path="/primeradivision" render={() => <LeagueView/>} />
                <Route path="/seriea" render={() => <LeagueView/>} />
                <Route path="/ligue1" render={() => <LeagueView/>} />
                <Route path="/primeiraliga" render={() => <LeagueView/>} />
                <Route path="/eredivise" render={() => <LeagueView/>} />
                <Redirect to="/home" exact={true} />
            </IonRouterOutlet>
        </IonContent>
    </IonPage>;

export default withRouter(Content);
