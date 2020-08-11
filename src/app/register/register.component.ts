import { Component, OnInit } from '@angular/core';
import { EmpserviceService} from '../empservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  order = [];

  model: any = {};

  constructor(private _empser: EmpserviceService) { }

  change(){
    this._empser.saveData(this.model).subscribe();
    this.model={};
  }

  ngOnInit() {
  }

}
