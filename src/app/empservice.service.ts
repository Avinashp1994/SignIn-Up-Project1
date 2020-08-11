import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private ht: HttpClient) { }



  

  saveData(x) {
    return this.ht.post("http://localhost/Blueb/Register", x);
  }

  // getOrder(): any[] {


  //   return this.getOrder = JSON.parse(localStorage.getItem('efg'));
  // }

}
