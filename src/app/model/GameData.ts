// Only relevant fields are stated
export class GameResponse {
    id!: string;
    races!: Array<GameRace>;
    status!: string;
};
// Only relevant fields are stated
export class GameRace {
    date!: string;
    name!: string;
    scheduledStartTime!: string;
    starts!: Array<RaceStart>;
   }
// Only relevant fields are stated
export class RaceStart {
    number!: number;
    driver!: {
        firstName: string;
        lastName: string;
    };
    horse!: {
        name: string;
        trainer: {
            firstName: string;
            lastName: string;
        },
        pedigree: {
            father: {
                name: string;
            };
        }
    };
}