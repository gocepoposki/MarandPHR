import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-patient-presentation-item',
  templateUrl: './patient-presentation-item.component.html',
  styleUrls: ['./patient-presentation-item.component.css']
})
export class PatientPresentationItemComponent implements OnInit {
  @Input()item;
  constructor() { }

  ngOnInit() {
    // console.log(this.item, "??????")
  }

}
