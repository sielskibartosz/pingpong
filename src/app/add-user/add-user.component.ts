import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  player = new Player(1,"Name", "Dummy",0)
  
  constructor() { 
  }

  getValue(dupa:string, dupa2:any){
    console.warn(dupa, dupa2)
  }

  ngOnInit(): void {
  }

}
