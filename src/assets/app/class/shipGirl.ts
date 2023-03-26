import TwineClass from "./twineClass";

interface ShipGirlInterface {
    level: number;
    name: string;
    faction: string;
    type: string;
    luck: number;
    armor: string;
    speed: number;

    health: number;
    firepower: number;
    antiAir: number;
    torpedo: number;
    evasion: number;
    aviation: number;
    oilConsumption: number;
    reload: number;
    antiSubmarine: number;
    oxygen: number; //submarine only
    ammunition: number; //submarine only
    accuracy: number;
}

// Parse data from here in the future
// Wiki Stats
// https://azurlane.koumakan.jp/wiki/List_of_Ships_by_Stats
export class ShipGirl extends TwineClass {
    public level: number;
    public name: string;
    public faction: string;
    public type: string;
    public luck: number;
    public armor: string;
    public speed: number;

    public health: number;
    public firepower: number;
    public antiAir: number;
    public torpedo: number;
    public evasion: number;
    public aviation: number;
    public oilConsumption: number;
    public reload: number;
    public antiSubmarine: number;
    public oxygen: number; //submarine only
    public ammunition: number; //submarine only
    public accuracy: number;

    constructor({
        level,
        name,
        faction,
        type,
        luck,
        armor,
        speed,
        health,
        firepower,
        antiAir,
        torpedo,
        evasion,
        aviation,
        oilConsumption,
        reload,
        antiSubmarine,
        oxygen,
        ammunition,
        accuracy,
    }: ShipGirlInterface) {
        super();
        this.level = level;
        this.name = name;
        this.faction = faction;
        this.type = type;
        this.luck = luck;
        this.armor = armor;
        this.speed = speed;
        this.health = health;
        this.firepower = firepower;
        this.antiAir = antiAir;
        this.torpedo = torpedo;
        this.evasion = evasion;
        this.aviation = aviation;
        this.oilConsumption = oilConsumption;
        this.reload = reload;
        this.antiSubmarine = antiSubmarine;
        this.oxygen = oxygen;
        this.ammunition = ammunition;
        this.accuracy = accuracy;
    }
}
