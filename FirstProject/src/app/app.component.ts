import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:'<h1>samet</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // burada default public tanımlanır ama private verilerek 
  // oge html tarafından saklanabilir
  // asagıdaki gibi get kullanılabilir

  title = 'First Project';
  private deneme = "yapacaz";

  item = {
    aciklama: "bisiler",
    sayi: 5
  }

  getTitle() {
    return this.deneme;
  }
}
