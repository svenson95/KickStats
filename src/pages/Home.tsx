import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="resources-card">
          <IonList lines="none">
            <IonListHeader>
              <IonLabel>Resources</IonLabel>
            </IonListHeader>
            <IonItem href="https://ionicframework.com/docs/" target="_blank">
              <IonIcon slot="start" color="medium" icon={book} />
              <IonLabel>Ionic Documentation</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
              <IonIcon slot="start" color="medium" icon={build} />
              <IonLabel>Scaffold Out Your App</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
              <IonIcon slot="start" color="medium" icon={grid} />
              <IonLabel>Change Your App Layout</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
              <IonIcon slot="start" color="medium" icon={colorFill} />
              <IonLabel>Theme Your App</IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
