import { Component } from '@angular/core';
import { FirstItem } from '../firstitem';
import { SecondItem } from '../seconditem';

@Component({
  selector: 'app-secondtry',
  templateUrl: './secondtry.component.html',
  styleUrls: ['./secondtry.component.css']
})
export class SecondtryComponent {

  // private name = "sametcan";

  // itemss = [
  //   "samet",
  //   "mehmet",
  //   "ahmet",
  //   "cevdet"
  // ];

  // items: FirstItem[] = [
  //   {id: 1, ders: "fizik", durum: "tamam"},
  //   {id: 2, ders: "mat", durum: "tamam"},
  //   {id: 3, ders: "kimya", durum: "eksik"}
  //   // new FirstItem(1,"fizik","tamam"),
  //   // new FirstItem(2,"mat","tamam"),
  //   // new FirstItem(3,"kimya","eksik")
  // ];

  si = new SecondItem();
  
  getName(){
    return this.si.name;
  }

  getItems(){
    return this.si.firstItem;
  }

  itemEkle(girdi: any){
    if(girdi.value!=""){
      this.si.firstItem.push({id: 4, ders: girdi.value, durum: "eksik"});
    }
    else{
      alert("bilgi gir");
    }
    
  }

}
