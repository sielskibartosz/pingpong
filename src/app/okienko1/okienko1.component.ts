import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-okienko1',
  templateUrl: './okienko1.component.html',
  styleUrls: ['./okienko1.component.scss']
})
export class Okienko1Component implements OnInit {
onclick() {
console.log("dupa-dupa!!")
}

  constructor() { }

  ngOnInit(): void {
  }

}
