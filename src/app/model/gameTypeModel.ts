export class Games {
    betType = '';
    upcoming!: Upcoming[];
    results!: Result[];
}

export class Upcoming {
    id!: string;
    startTime!: Date;
    tracks!: Track[];
    favorites!: Favorite[];
    addOns!: string[];
}

export class Result {
    id!: string;
    tracks!: Track2[];
    totalToWin: any;
    startTime!: Date;
    addOns!: string[];
}

export class Track {
    id!: number;
    name!: string;
}

export class Start {
    number!: number;
    name!: string;
    distribution!: number;
}

export class Favorite {
    raceId!: string;
    legNumber!: number;
    start!: Start;
}

export class Track2 {
    id!: number;
    name!: string;
}

