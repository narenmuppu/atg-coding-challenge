export class Start {
    number!: number;
    postPosition!: number;
    distance!: number;
    horse!: Horse;
    driver!: Driver;
    result!: Result8;
    pools!: Pools3;
    videos!: Video[];
    scratched!: boolean;
    out!: boolean;
}

export class Race {
    id!: string;
    name!: string;
    date!: string;
    number!: number;
    distance!: number;
    startMethod!: string;
    startTime!: Date;
    scheduledStartTime!: Date;
    prize!: string;
    terms!: string[];
    sport!: string;
    track!: Track;
    result!: Result2;
    status!: string;
    mediaId!: string;
    pools!: Pools2;
    starts!: Start[];
}

export class GameResult {
    type!: string;
    id!: string;
    status!: string;
    pools!: Pools;
    races!: Race[];
    currentVersion!: number;
}

export class Payouts {
    5: 52;
    6: 62;
    7: 72;
}

export class BoostPayout {
    correct!: number;
    amount!: number;
    multiplier!: number;
}

export class BoostInfo {
    boostCode!: string;
    boostPayouts!: BoostPayout[];
    resultComplete!: boolean;
}

export class Result {
    type!: string;
    payouts!: Payouts;
    boostInfo!: BoostInfo;
}

export class Payouts2 {
    5: number;
    6: number;
    7: number;
}

export class V75 {
    type!: string;
    id!: string;
    status!: string;
    timestamp!: string;
    turnover!: number;
    addOns!: string[];
    result!: Result;
    harry!: boolean;
    systemCount!: number;
    payouts!: Payouts2;
    jackpotAmount!: number;
    potentialPayoutRaceId!: string;
}

export class Pools {
    V75!: V75;
}

export class Track {
    id!: number;
    name!: string;
    condition!: string;
    countryCode!: string;
}

export class Result2 {
    victoryMargin!: string;
    scratchings!: number[];
}

export class Winner {
    number!: number;
    odds!: number;
}

export class Result3 {
    type!: string;
    winners!: Winner[];
}

export class Vinnare {
    type!: string;
    id!: string;
    status!: string;
    timestamp!: string;
    turnover!: number;
    result!: Result3;
}

export class First {
    number!: number;
    odds!: number;
}

export class Second {
    number!: number;
    odds!: number;
}

export class Third {
    number!: number;
    odds!: number;
}

export class Winners {
    first!: First[];
    second!: Second[];
    third!: Third[];
}

export class Result4 {
    type!: string;
    winners!: Winners;
}

export class Plats {
    type!: string;
    id!: string;
    status!: string;
    timestamp!: string;
    turnover!: number;
    result!: Result4;
}

export class Winner2 {
    combination!: number[];
    odds!: number;
}

export class Result5 {
    type!: string;
    winners!: Winner2[];
}

export class Tvilling {
    type!: string;
    id!: string;
    status!: string;
    timestamp!: string;
    turnover!: number;
    result!: Result5;
}

export class Winner3 {
    combination!: number[];
    odds!: number;
}

export class Result6 {
    type!: string;
    winners!: Winner3[];
}

export class Trio {
    type!: string;
    id!: string;
    status!: string;
    timestamp!: string;
    turnover!: number;
    result!: Result6;
}

export class Value {
    amount!: number;
}

export class Result7 {
    type!: string;
    systems!: string;
    value!: Value;
    winners!: number[];
    reserveOrder!: number[];
}

export class V752 {
    type!: string;
    result!: Result7;
}

export class Pools2 {
    vinnare!: Vinnare;
    plats!: Plats;
    tvilling!: Tvilling;
    trio!: Trio;
    V75!: V752;
}

export class Time {
    minutes!: number;
    seconds!: number;
    tenths!: number;
}

export class Record {
    code!: string;
    startMethod!: string;
    distance!: string;
    time!: Time;
}

export class HomeTrack {
    id!: number;
    name!: string;
}

export class Placement {
    3: number;
    2: number;
    1: number;
}

export class Placement2 {
    3: number;
    2: number;
    1: number;
}



export class Years {
    2017: 20172;
    2018: 20182;
}

export class Statistics {
    years!: Years;
}

export class Trainer {
    id!: number;
    firstName!: string;
    lastName!: string;
    shortName!: string;
    location!: string;
    birth!: number;
    homeTrack!: HomeTrack;
    license!: string;
    statistics!: Statistics;
    level!: string;
}

export class Front {
    hasShoe!: boolean;
    changed!: boolean;
}

export class Back {
    hasShoe!: boolean;
    changed!: boolean;
}

export class Shoes {
    reported!: boolean;
    front!: Front;
    back!: Back;
}

export class Sulky {
    reported!: boolean;
}

export class HomeTrack2 {
    id!: number;
    name!: string;
}

export class Owner {
    id!: number;
    name!: string;
    location!: string;
}

export class Breeder {
    id!: number;
    name!: string;
    location!: string;
}

export class Placement3 {
    3: number;
    2: number;
    1: number;
}

export class Time2 {
    minutes!: number;
    seconds!: number;
    tenths!: number;
}

export class Record2 {
    code!: string;
    startMethod!: string;
    distance!: string;
    time!: Time2;
    place!: number;
}


export class Placement4 {
    3: number;
    2: number;
    1: number;
}

export class Time3 {
    minutes!: number;
    seconds!: number;
    tenths!: number;
}

export class Record3 {
    code!: string;
    startMethod!: string;
    distance!: string;
    time!: Time3;
    place!: number;
}


export class Years2 {
    2017: 20173;
    2018: 20183;
}

export class Placement5 {
    3: number;
    2: number;
    1: number;
}

export class Time4 {
    minutes!: number;
    seconds!: number;
    tenths!: number;
}

export class Record4 {
    code!: string;
    startMethod!: string;
    distance!: string;
    time!: Time4;
    place!: number;
    year!: string;
}

export class Life {
    starts!: number;
    earnings!: number;
    placement!: Placement5;
    records!: Record4[];
    winPercentage!: number;
    placePercentage!: number;
    earningsPerStart!: number;
    startPoints!: number;
    forcedEarnings!: number;
}

export class LastFiveStarts {
    averageOdds!: number;
}

export class Statistics2 {
    years!: Years2;
    life!: Life;
    lastFiveStarts!: LastFiveStarts;
}

export class Father {
    id!: number;
    name!: string;
    nationality!: string;
}

export class Mother {
    id!: number;
    name!: string;
    nationality!: string;
}

export class Grandfather {
    id!: number;
    name!: string;
    nationality!: string;
}

export class Pedigree {
    father!: Father;
    mother!: Mother;
    grandfather!: Grandfather;
}

export class Horse {
    id!: number;
    name!: string;
    age!: number;
    sex!: string;
    record!: Record;
    trainer!: Trainer;
    shoes!: Shoes;
    sulky!: Sulky;
    money!: number;
    color!: string;
    homeTrack!: HomeTrack2;
    owner!: Owner;
    breeder!: Breeder;
    statistics!: Statistics2;
    pedigree!: Pedigree;
    nationality!: string;
    foreignOwned!: boolean;
}

export class HomeTrack3 {
    id!: number;
    name!: string;
}

export class Placement6 {
    3: number;
    2: number;
    1: number;
}

export class Placement7 {
    3: number;
    2: number;
    1: number;
}

export class Years3 {
    2017: 20174;
    2018: 20184;
}

export class Statistics3 {
    years!: Years3;
}

export class Driver {
    id!: number;
    firstName!: string;
    lastName!: string;
    shortName!: string;
    location!: string;
    birth!: number;
    homeTrack!: HomeTrack3;
    license!: string;
    silks!: string;
    statistics!: Statistics3;
    level!: string;
}

export class KmTime {
    code!: string;
    minutes!: number;
    seconds!: number;
    tenths!: number;
}

export class Result8 {
    finishOrder!: number;
    kmTime!: KmTime;
    galloped!: boolean;
    disqualified!: boolean;
    prizeMoney!: number;
    finalOdds!: number;
    startNumber!: number;
    place!: number;
}

export class Vinnare2 {
    type!: string;
    odds!: number;
    finalOdds!: number;
}

export class Plats2 {
    type!: string;
    minOdds!: number;
    maxOdds!: number;
    odds!: number;
}

export class PotentialPayout {
    value!: number;
}

export class V753 {
    type!: string;
    betDistribution!: number;
    potentialPayout!: PotentialPayout;
}

export class Pools3 {
    vinnare!: Vinnare2;
    plats!: Plats2;
    V75!: V753;
}

export class Video {
    mediaId!: string;
    timestamp!: Date;
}

