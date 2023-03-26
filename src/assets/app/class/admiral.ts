import TwineClass from "./twineClass";

interface AdmiralInterface {
    name: string;

    crew: number;
    fuel: number;
    ammunition: number;
    steel: number;
    rareEarths: number;
}

export class Admiral extends TwineClass {
    public name: string;

    public crew: number;
    public fuel: number;
    public ammunition: number;
    public steel: number;
    public rareEarths: number;

    constructor({
        name,
        crew,
        fuel,
        ammunition,
        steel,
        rareEarths,
    }: AdmiralInterface) {
        super();
        this.name = name;
        this.crew = crew;
        this.fuel = fuel;
        this.ammunition = ammunition;
        this.steel = steel;
        this.rareEarths = rareEarths;
    }
}
