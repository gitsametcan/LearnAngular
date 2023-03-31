import { Component } from '@angular/core';
import { FirstItem } from '../firstitem';
import { SecondItem } from '../seconditem';

@Component({
  selector: 'app-secondtry',
  templateUrl: './secondtry.component.html',
  styleUrls: ['./secondtry.component.css']
})
export class SecondtryComponent {

  hepsiniGoster: boolean = false;
  aramaYeri: string = "";
  // private name = "sametscan";

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

  constructor(){
    this.si.firstItem = this.itemleriLSgetir();
  }
  si = new SecondItem();
  
  getName(){
    return this.si.name;
  }

  getItems(){
    if(this.hepsiniGoster){
      return this.si.firstItem;
    }
    return this.si.firstItem.filter(firstItem => firstItem.durum ==false  );
  }

  itemEkle(){
    if(this.aramaYeri!=""){
      let data = {id: 4, ders: this.aramaYeri, durum: false};
      this.si.firstItem.push(data);

      let items = this.itemleriLSgetir();
      items.push(data);
      localStorage.setItem("firstItem",JSON.stringify(items));
      this.aramaYeri="";
    }
    else{
      alert("bilgi gir");
    }
    
  }

  itemleriLSgetir(){
    let items: FirstItem[]= [];

    let value = localStorage.getItem("firstItem");

    if(value != null){
      items = JSON.parse(value);

    }

    return items;
  }

  onActionChanged(item: FirstItem){
    console.log(item);
    let items = this.itemleriLSgetir();

    localStorage.clear();

    items.forEach(i =>{
      if(i.ders == item.ders){
        i.durum = item.durum;
      }
    });

    localStorage.setItem("firstItem",JSON.stringify(items));
  }

  elemanSayisi(){
    return this.si.firstItem.filter(i=>i.durum).length;
  }

}
