import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  //fecha:any;
  fecha: string;

  constructor() {
      this.fecha = moment().format('25-06-2019');
  }

  ngOnInit() {
  }
}
