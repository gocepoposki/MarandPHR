import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {UserModel} from "../../models/user-model";
import {setTimeout} from "timers";

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.css'],

})
export class PatientTimelineComponent implements OnInit, AfterViewInit {
  userModel: UserModel = new UserModel();


  constructor(private patientService: PatientService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
  promenliva: any;

  onTop(id) {
    if (this.promenliva){
      this.promenliva.style.zIndex = 0;
    }
      this.promenliva = id;
      id.style.zIndex = 1;
  }

  hideContent(id) {
    // console.log(id);
    id.style.transition = 500+'ms';
    id.style.opacity= 0;
    setTimeout(function(){id.hidden = true}, 500);
  }

  // document.getElementById(id).hidden = true;

  // console.log(id.srcElement.attributes.id);

  // var x = document.getElementById(id);
  // if (x.style.display === 'none') {
  //   x.style.display = 'block';
  // } else {
  //   x.style.display = 'none';
  // }

  // Colors*********************************************
  // BlodPressure
  public bloodPressureColors: Array<any> = [
    {
      backgroundColor: "rgba(221, 121, 131, 1)",
      borderColor: 'rgba(218, 68, 83,1)',
    },
    {
      backgroundColor: "rgba(238, 148, 157, 1)",
      borderColor: 'rgba(218, 68, 83,1)',

    }
  ];
  // BodyTemperature
  public bodyTemperatureColors: Array<any> = [
    {
      backgroundColor: "rgba(255, 206, 84, 1)",
      // borderColor: 'rgba(148,159,177,1)',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  // Height
  public heightColors: Array<any> = [
    {
      backgroundColor: "rgba(72, 207, 173, 1)"
    },
  ];
  // Pulse
  public pulseColors: Array<any> = [
    {
      backgroundColor: "rgba(190, 222, 156, 1)",
      borderColor: 'rgba(160, 212, 104,1)',
    }
  ];
  // Weight
  public weightColors: Array<any> = [
    {
      backgroundColor: "rgba(139, 210, 234, 1)",
      borderColor: 'rgba(79, 193, 233,1)',
    }
  ];

  // Options***************************
  // BlodPressure
  public bloodPressureOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    bezierCurve: false,
    backgroundColor: "rgba(255,153,0,1)",
    title: {
      display: false,
      text: 'Blod Pressure'
    },
    data: {
      datasets: [{
        lineTension: 0
      }]
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  // BodyTemperature
  public bodyTemperatureOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: "rgba(255,153,0,1)",
    title: {
      display: false,
      text: 'Body Temperature'
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  // Height
  public heightOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: "rgba(255,153,0,1)",
    title: {
      display: false,
      text: 'Height'
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  // Pulse
  public pulseOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    datasets: [{
      lineTension: 0,
    }],
    backgroundColor: "rgba(255,153,0,1)",
    title: {
      display: false,
      text: 'Pulse'
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
// Weight
  public weightOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: "rgba(255,153,0,1)",
    title: {
      display: false,
      text: 'Weight'
    },
    legend: {
      display: false,
    },
    // da pocnuva od 0
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };


}
