import React from 'react';
import {IonApp, IonSplitPane, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {AppPage, PageTitle} from './declarations';

import Menu from './components/Menu';
import { home, list } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Content from "./components/Content";
import './scss/app.scss';

// export let matches: Match[] = [];

const bundesliga = 'Bundesliga';
const premierleague = 'Premier League';
const primeradivision = 'Primera División';
const seriea = 'Seria A';
const ligue1 = 'Ligue 1';
const primeiraliga = 'Primeira Liga';
const eredivise = 'Eredivise';

function stringToUrl(string: string) {
  return string.replace(' ', '').toLowerCase()
}

const appPages: AppPage[] = [
  {
    title: bundesliga,
    url: stringToUrl(`/${bundesliga}`),
    icon: home
  },
  {
    title: premierleague,
    url: stringToUrl(`/${premierleague}`),
    icon: list
  },
  {
    title: primeradivision,
    url: stringToUrl(`/${primeradivision}`),
    icon: home
  },
  {
    title: seriea,
    url: stringToUrl(`/${seriea}`),
    icon: list
  },
  {
    title: ligue1,
    url: stringToUrl(`/${ligue1}`),
    icon: list
  },
  {
    title: primeiraliga,
    url: stringToUrl(`/${primeiraliga.toLowerCase()}`),
    icon: home
  },
  {
    title: eredivise,
    url: stringToUrl(`/${eredivise.toLowerCase()}`),
    icon: list
  },
];

export const pageTitles: PageTitle[] = [
  {
    title: bundesliga
  },
  {
    title: premierleague
  },
  {
    title: primeradivision
  },
  {
    title: seriea
  },
  {
    title: ligue1
  },
  {
    title: primeiraliga
  },
  {
    title: eredivise
  },
  {
    title: "Home"
  }
];

class App extends React.Component<any, any> {

  render() {
    return (
        <IonApp>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu appPages={appPages} />
              <Content pageTitles={pageTitles} />
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
    )
  }
}

export default App;
