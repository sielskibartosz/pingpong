import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  getValue(dupa:string, dupa2:any){
    console.warn(dupa, dupa2)
  }

  ngOnInit(): void {
  }

}
