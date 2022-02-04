import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number = 0;

  @Output() private upCompteur: EventEmitter<number> = new EventEmitter();

  @Output() private downCompteur: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addNumber() {
    this.upCompteur.emit(this.compteur);
    this.compteur++;
  }
  delNumber() {
    this.downCompteur.emit(this.compteur);
    this.compteur--;
  }
}
