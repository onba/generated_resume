import { Color } from "./color";
import { GameMode } from "./game-mode";
export class Game{
    constructor(){
        this.activeColors.push(Color.blue);
        this.activeColors.push(Color.orange);
        this.activeColors.push(Color.yellow);
        this.activeColors.push(Color.white);
        this.activeColors.push(Color.black);
        this.activeColors.push(Color.red);
        this.holeNumber = 4;
    }
    activeColors: Color[] =[];
    holeNumber: number = 4;
    gameMode: GameMode = GameMode.Human_Human;
    solution: Map<number, Color> = new Map();

    addPuppetToSolution(place: number, puppet: Color){
        this.solution.set(place, puppet);
    }
}
    