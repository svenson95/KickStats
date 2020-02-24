import {
    IonContent,
    IonPage,
    IonRouterOutlet,
} from "@ionic/react";
import React from 'react';
import {Redirect, Route, RouteComponentProps, withRouter} from "react-router";

import Start1 from "../pages/Start1";
import Table from "../modules/Table";
import {PageTitle} from "../declarations";

interface ContentProps extends RouteComponentProps {
    pageTitles: PageTitle[]
}

const Content: React.FC<ContentProps> = () => {

    return (
        <IonPage className="content__container" id="main">
            <IonContent>
                <IonRouterOutlet id="main">
                    <Route path={`${process.env.PUBLIC_URL}/home`} component={Start1} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/bundesliga`} component={Table} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/premierleague`} component={Table} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/primeradivision`} component={Table} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/seriea`} component={Table} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/ligue1`} component={Table} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/primeiraliga`} component={Table} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/eredivise`} component={Table} exact={true} />
                    <Route path={`${process.env.PUBLIC_URL}/`} render={() => <Redirect to={`${process.env.PUBLIC_URL}/start`}/> } exact={true} />
                </IonRouterOutlet>
            </IonContent>
        </IonPage>
    )
};

export default withRouter(Content);
