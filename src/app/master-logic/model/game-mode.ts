import { Color } from "./color";
export class GameMode{
    GameMode(holeNumber : number){
        this.activeColors.push(Color.blue);
        this.activeColors.push(Color.orange);
        this.activeColors.push(Color.yellow);
        this.activeColors.push(Color.white);
        this.activeColors.push(Color.black);
        this.activeColors.push(Color.blue);
        this.holeNumber = holeNumber;
    }
    activeColors: Color[] = [];
    holeNumber: number = 4;
}