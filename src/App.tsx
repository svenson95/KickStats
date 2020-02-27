import React, {useEffect} from 'react';
import {IonApp, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {AppPage, PageTitle} from './declarations';

import Menu from './components/Menu';

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
import './scss/variables.css';
import Content from "./components/Content";
import './scss/app.scss';

const bundesliga = 'Bundesliga';
const premierleague = 'Premier League';
const primeradivision = 'Primera División';
const seriea = 'Serie A';
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
  },
  {
    title: premierleague,
    url: stringToUrl(`/${premierleague}`),
  },
  {
    title: primeradivision,
    url: stringToUrl(`/${primeradivision}`),
  },
  {
    title: seriea,
    url: stringToUrl(`/${seriea}`),
  },
  {
    title: ligue1,
    url: stringToUrl(`/${ligue1}`),
  },
  {
    title: primeiraliga,
    url: stringToUrl(`/${primeiraliga}`),
  },
  {
    title: eredivise,
    url: stringToUrl(`/${eredivise}`),
  },
];

export const pageTitles: PageTitle[] = [
  {
    title: stringToUrl(bundesliga)
  },
  {
    title: stringToUrl(premierleague)
  },
  {
    title: stringToUrl(primeradivision)
  },
  {
    title: stringToUrl(seriea)
  },
  {
    title: stringToUrl(ligue1)
  },
  {
    title: stringToUrl(primeiraliga)
  },
  {
    title: stringToUrl(eredivise)
  },
  {
    title: "Home"
  }
];

const App = () => {

  useEffect(() => {
    console.log('app started');
  });

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
};

export default App;
