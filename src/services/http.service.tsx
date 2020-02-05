import {StandingRank} from "../types/StandingRank";

export let fetchedStanding: [];
export let stand_positions: StandingRank[] = [];

export async function initialFetchStanding(url: string) {

    async function tryFetch() {
        const res: Response = await fetch(url, {
            // method: 'GET',
            mode: 'cors',
            // cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
            },
            // redirect: 'follow',
            // referrerPolicy: 'no-referrer',
        });
        const json = await res.json();
        json.standings[0].table.forEach((position: StandingRank) => {
            if (!stand_positions.includes(position)) {
                stand_positions.push(position);
            }
        });
        return json.standings[0].table;
    }

    try {
        return await tryFetch();
    } catch (err) {
        const alert = document.createElement('ion-toast');
        alert.message = `${err}`;
        alert.duration = 3000;
        document.body.appendChild(alert);
        return alert.present();
    }
}

