import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonListHeader, IonButton
} from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import {current_page, setPageTitle} from "./Content";
import {pageTitles} from "../App";
import {league_ids} from "./RankingList";

// interface MenuProps extends RouteComponentProps {
//   appPages: AppPage[];
// }
export const league_api = `http://api.football-data.org/v2/competitions/${Object.values(league_ids)[current_page]}/`;

// const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => {
class Menu extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      ranking: {}
    };
  }

  componentDidMount(): void {
    // ranking = rank_positions;
    // console.log(ranking);

    // if (ranking.length === 0) {
    //   initialFetchRanking(league_api).then(data => {
    //     this.setState({ ranking: data});
    //     localStorage.setItem('ranking', data);
    //   });
    // }
  }

  render() {
    return (
        <IonMenu className="side__navigation" contentId="main" type="overlay">
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                <IonButton routerLink='/home' routerDirection="none" onClick={setPageTitle[pageTitles.length]}>
                  Kickticker
                </IonButton>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonListHeader>Ligen</IonListHeader>
            <IonList>
              {this.props.appPages.map((appPage: any, index: any) => {
                return (
                    <IonMenuToggle key={index} autoHide={false}>
                      <IonItem routerLink={appPage.url} routerDirection="none" onClick={() => {
                        setPageTitle[index]();
                        console.log(league_api);
                      }}>
                        <IonIcon slot="start" icon={appPage.icon} />
                        <IonLabel>{appPage.title}</IonLabel>
                      </IonItem>
                    </IonMenuToggle>
                );
              })}
            </IonList>
          </IonContent>
        </IonMenu>
    );
  }
}

export default withRouter(Menu);
