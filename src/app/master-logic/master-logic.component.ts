import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Color } from './model/color';
import { Game } from './model/game';

@Component({
  selector: 'master-logic',
  templateUrl: './master-logic.component.html',
  styleUrls: ['./master-logic.component.css']
})
export class MasterLogicComponent implements OnInit{
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;  
  game: Game = new Game();
  private ctx!: CanvasRenderingContext2D;
  private canvasWidth : number = 600;
  @Input() matTabGroupWidth!: number;

  ngOnInit(): void {
    const canvasContext  = this.canvas.nativeElement.getContext('2d');
    if (!canvasContext || !(canvasContext instanceof CanvasRenderingContext2D)){
      throw new Error("Fail to get 2D context");
    }
    this.ctx = canvasContext;
    
    this.createPuppetBuckets();

  }

  createPuppetBuckets(){
    let bucketWidth = 20;
    let bucketDiff = this.canvasWidth/this.game.activeColors.length;
    let bucketXPosition = bucketDiff/2;
    let bucketYPosition = 50;
    this.game.activeColors.forEach(color => {
      this.ctx.beginPath()
      this.ctx.fillStyle = Color[color];
      this.ctx.arc(bucketXPosition,bucketYPosition,bucketWidth,0,2*Math.PI,false);
      this.ctx.fill();
      bucketXPosition+=bucketDiff;

    });
  }
  animate(): void {}
  getWidth(): number{
    return window.innerWidth;
  }
}
