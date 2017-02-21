import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-patient-composition-item',
  templateUrl: './patient-composition-item.component.html',
  styleUrls: ['./patient-composition-item.component.css']
})
export class PatientCompositionItemComponent implements OnInit {
  @Input()items;
  constructor() { }

  ngOnInit() {

  }

}
