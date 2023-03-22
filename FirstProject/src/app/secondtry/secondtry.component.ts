import { Component } from '@angular/core';

@Component({
  selector: 'app-secondtry',
  templateUrl: './secondtry.component.html',
  styleUrls: ['./secondtry.component.css']
})
export class SecondtryComponent {

  private name = "sametcan";

  itemss = [
    "samet",
    "mehmet",
    "ahmet",
    "cevdet"
  ];

  items = [
    { id: 1, ders: "fizik", durum: "tamam"},
    { id: 2, ders: "kimya", durum: "tamam"},
    { id: 3, ders: "mat", durum: "eksik"}
  ];

  getName(){
    return this.name;
  }

}
