import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) {
    store.subscribe(s => console.log(s.storeData));
   }

  ngOnInit() {
  }

}
