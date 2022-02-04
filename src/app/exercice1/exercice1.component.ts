import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  @Input() public compteur: number = 0;

  public result: number = 0;

  public addNumber(result: number) {
    this.compteur++;
    this.result++;
  }

  public delNumber(result: number) {
    this.compteur--;
    this.result--;
  }
  constructor() {}

  ngOnInit() {}
}
