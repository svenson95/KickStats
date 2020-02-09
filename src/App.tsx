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
import Content, {updateCurrentPage} from "./components/Content";
import './scss/app.scss';
import {league_ids} from "./modules/Table";
import {createBrowserHistory} from "history";

export function setLeagueID() {
  // Set 'current_page' initial value related to current page url
  const history = createBrowserHistory();
  const url_parameter = history.location.pathname.substr(1, history.location.pathname.length);
  const titles = pageTitles;
  titles.forEach(function(page, index) {
    if (url_parameter === page.title.toLowerCase().trim()) {
      updateCurrentPage[index]();
      changeLeagueID(index);
    } else if (url_parameter === "home" || "/" || "") {
      const idx = titles.length - 1;
      updateCurrentPage[idx]();
      changeLeagueID(idx);
    }
  });
}

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
    url: stringToUrl(`/${primeiraliga.toLowerCase()}`),
  },
  {
    title: eredivise,
    url: stringToUrl(`/${eredivise.toLowerCase()}`),
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

export let league_url: string;
export let league_id: string;
export function changeLeagueID(index: number) {
  league_id = Object.values(league_ids)[index];
  league_url = `http://api.football-data.org/v2/competitions/${league_id}/standings`;
}

const App = () => {

  useEffect(() => {
    console.log('app started');
    setLeagueID();
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
