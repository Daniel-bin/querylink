import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  view = "actors";
  starsVal: number;

  constructor() {}

  ngOnInit() {}

  setStarFilter(event) {
    this.starsVal = event.target.value;
    console.log("val: " + this.starsVal);
  }
}
