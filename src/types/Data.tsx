import {TeamRanking} from "./TeamRanking";

export interface Data {
    filters?: {}
    competition?: {
        id: number
        area: {
            id: number
            name: string
        }
        name: string
        code: string
        plan: string
        lastUpdated: string
    };
    season?: {
        id: number,
        startDate: string
        endDate: string
        currentMatchday: number
        winner: null
    }
    standings?: {
        stage: string
        type: string
        group: null
        table: TeamRanking[]
    }
}
