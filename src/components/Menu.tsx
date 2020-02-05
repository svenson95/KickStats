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
import {league_ids} from "./StandingList";

// interface MenuProps extends RouteComponentProps {
//   appPages: AppPage[];
// }
export const leagueAPI = `http://api.football-data.org/v2/competitions/${Object.values(league_ids)[current_page]}/`;

// const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => {
class Menu extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      standing: {}
    };
  }

  componentDidMount(): void {
    // standing = stand_positions;
    // console.log(standing);

    // if (standing.length === 0) {
    //   initialFetchStanding(erediviseAPI).then(data => {
    //     this.setState({ standing: data});
    //     localStorage.setItem('standing', data);
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
                        console.log(leagueAPI);
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
