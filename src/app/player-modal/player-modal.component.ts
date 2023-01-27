import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {bounceInDownAnimation} from  'angular-animations';

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

  constructor(public dialogRef: MatDialogRef<PlayerModalComponent>) { 
    this.animationState = false
  }
  ngOnInit(): void {
    this.animate()
  }
  
  closeModal() {
    this.dialogRef.close();
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }
}
