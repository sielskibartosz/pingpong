import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Player } from './models/player';
import { PlayerModalComponent } from './player-modal/player-modal.component';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ping-pong-app';
  player = new Player("","",0)

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<PlayerModalComponent, any> | undefined;

  constructor(public matDialog: MatDialog, private playerService: PlayerService) { }

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.modalDialog?.close()
          }
      }
  }
  openModal() {
    this.dialogConfig.id = "projects-modal-component";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    this.modalDialog = this.matDialog.open(PlayerModalComponent, this.dialogConfig);

    this.modalDialog.afterClosed().subscribe(result => {
      this.playerService.createPlayer(result).subscribe(response => console.log(response));
      this.player = result
    });
  }
}