import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FlopService } from "./flop.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "my-flop-list",
  templateUrl: "./flop-list.component.html",
  styleUrls: ["./flop-list.component.css"]
})
export class FlopListComponent {
  flops;
  rentalList;

  constructor(
    private flopService: FlopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(qps => {
      if (qps.has("starsMax")) {
        this.flopService
          .getFlopsMaxStars(+qps.get("starsMax"))
          .subscribe(flops => {
            this.flops = flops;
          });
      } else {
        this.flopService.getFlops().subscribe(flops => {
          this.flops = flops;
        });
      }
    });

    this.flopService.getFlops().subscribe(flops => {
      this.flops = flops;
    });

    this.flopService
      .getRentalList()
      .subscribe(rentalList => (this.rentalList = rentalList));
  }

  onClick() {
    console.log("rented");
  }
}
