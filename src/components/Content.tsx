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

import { createBrowserHistory } from "history";
import Home from "../pages/Home";
import List from "./RankingList";
import {PageTitle} from "../declarations";

export let current_page = 0;
export const setBundesligaTitle = () => { current_page = 0 };
export const setPremierLeagueTitle = () => { current_page = 1 };
export const setPrimeraDivisionTitle = () => { current_page = 2 };
export const setSeriaaTitle = () => { current_page = 3 };
export const setLigue1Title = () => { current_page = 4 };
export const setPrimeriaLigaTitle = () => { current_page = 5 };
export const setErediviseTitle = () => { current_page = 6 };
export const setHomeTitle = () => { current_page = 7 };
export const setPageTitle = [
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

        // Prepare app for reload, 'current_page' initial value is zero & we set it related to current page url
        const history = createBrowserHistory();
        const pageLink = history.location.pathname.substr(1, history.location.pathname.length);
        const titles = this.props.pageTitles;
        titles.forEach(function(page, index) {
            if (pageLink === page.title.toLowerCase()) {
                current_page = index;
            } else if (pageLink === "home") {
                current_page = titles.length + 1;
            }
        });
    }

    render() {
        return (
            <IonPage className="content__container" id="main">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>{this.props.pageTitles[current_page].title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRouterOutlet id="main">
                        <Route path="/home" component={Home} exact={true} />
                        <Route path="/bundesliga" component={List} exact={true} />
                        <Route path="/premierleague" component={List} exact={true} />
                        <Route path="/primeradivision" component={List} exact={true} />
                        <Route path="/seriea" component={List} exact={true} />
                        <Route path="/ligue1" component={List} exact={true} />
                        <Route path="/primeiraliga" component={List} exact={true} />
                        <Route path="/eredivise" component={List} exact={true} />
                        <Route path="/" render={() => <Redirect to="/home"/> } exact={true} />
                    </IonRouterOutlet>
                </IonContent>
            </IonPage>
        )
    }
}

export default withRouter(Content);
