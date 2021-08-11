import { Model } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  message = '';

  inputText:any='';

  model = new Model();

  displayAll: boolean = false;//Hepsini Göster

  //name
  getName() {
    return this.model.name;
  }

  //items
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter((item) => !item.action);
    }
  }

  //Listeye eleman ekleme 1.YOL
  // getAdd(value: any) {
  //   if (value != '') {
  //     this.model.items.push({ id: value, description: value, action: true });
  //   } else {
  //     alert('Bilgi giriniz.');
  //   }
  //   //message
  //   this.message = value;
  //   //consol
  //   console.log(value);
  // }


   //Listeye eleman ekleme 2.YOL
  getAdd() {
    if (this.inputText!='') {
      this.model.items.push({ id:this.inputText, description:this.inputText, action: true });
      this.inputText='';
    } else {
      alert('Bilgi giriniz.');
    }
  }

  getBtnClasses(){
    return {
      'disabled':this.inputText.legth==0,
      'btn-secondary':this.inputText.length==0,
      'btn-success':this.inputText.length>0
    }
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

  ngOnInit(): void {}
}
