import {
  IonContent,
  IonHeader,
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
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppPage} from "../declarations";

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ ...props }) =>
    <IonMenu className="side__navigation" contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonButton routerLink='/home' routerDirection="none">
              KICK STATS
            </IonButton>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonListHeader>Competitions</IonListHeader>
        <IonList>
          {props.appPages.map((appPage: any, index: any) => {
            return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem routerLink={appPage.url} routerDirection="none">
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>;

export default withRouter(Menu);
