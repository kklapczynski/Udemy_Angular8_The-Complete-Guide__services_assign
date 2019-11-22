import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    // subscribe to active/inactive change click
    this.counterService.onChange.subscribe(
      (change: string) => {
        switch(change) {
          case 'toInactive':
            console.log('toInactive');
            this.counterService.addToInactiveChangeNumber();
            break;
          case 'toActive':
            console.log('toActive');
            this.counterService.addToActiveChangeNumber();
            break;
          default:
            console.log('to Active or toInactive ? ');
        }
      }
    )
  }

  

}
