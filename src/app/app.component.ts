import { Component } from '@angular/core';
import { SuppliesService } from './shared/services/supplies.service';
import { Supply } from './shared/models/supply';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private supplies: SuppliesService) {}

  public ngOnInit() {
    var supply = new Supply();
    supply.name = 'Nachos';
    supply.count = 1;
    supply.obtained = true;

    this.supplies.create(supply).subscribe();

    this.supplies.getAll().subscribe((supplies) => {
      console.log(supplies)
    })
  }

}
