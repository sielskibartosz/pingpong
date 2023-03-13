import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {bounceInDownAnimation} from  'angular-animations';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.scss'],
  animations: [
    bounceInDownAnimation()
  ]
})
export class PlayerModalComponent implements OnInit {
  
  animationState: boolean;
  @Input() player = new Player("Name", "Dummy", 0)

  constructor(public dialogRef: MatDialogRef<PlayerModalComponent>) { 
    this.animationState = false
  }

  ngOnInit(): void {
    this.animate()
  }

  closeModal() {
    this.dialogRef.close(this.player)
  }

  closeCancel(){
    this.dialogRef.close();
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }
}
