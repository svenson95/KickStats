import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader, IonMenuButton,
    IonPage, IonTitle, IonToolbar,
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';

const Start: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Start
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className="welcome-card" style={{margin: "10px"}}>
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
            </IonContent>
        </IonPage>
    );
};

export default Start;
