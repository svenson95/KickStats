export interface Match {
    match_id: number;
    match_date_time: string;
    time_zone_id: string;
    league_id: number;
    league_name: string;
    match_date_time_utc: string;
    group: {
        group_name: string;
        group_order_id: number;
        group_id: number;
    }
    team_1: {
        team_id: number;
        team_name: string;
        short_name: string;
        team_icon_url: string;
        team_group_name?: string;
    }
    team_2: {
        team_id: number;
        team_name: string;
        short_name: string;
        team_icon_url: string;
        team_group_name?: string;
    }
    last_update_date_time: string;
    match_is_finished: boolean;
    match_results: {
        half_time: {
            result_id: number;
            result_name: string;
            points_team_1: number;
            points_team_2: number;
            result_order_id: number;
            result_type_id: number;
            result_description: string;

        }
        full_time: {
            result_id: number;
            result_name: string;
            points_team_1: number;
            points_team_2: number;
            result_order_id: number;
            result_type_id: number;
            result_description: string;
        }
    }
    goals: {
        0: {
            GoalID: number;
            ScoreTeam1: number;
            ScoreTeam2: number;
            MatchMinute: number;
            GoalGetterID: number;
            GoalGetterName: string;
            IsPenalty: boolean;
            IsOwnGoal: boolean;
            IsOvertime: boolean;
            Comment: string;
        }
    }
    location: {
        LocationID: number;
        LocationCity: string;
        LocationStadium: string;
    }
}

export default Match;
