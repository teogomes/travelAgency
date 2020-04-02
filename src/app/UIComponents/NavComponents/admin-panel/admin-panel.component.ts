import { Component, OnInit } from '@angular/core';
import { AdminPanelCellComponent } from '../../admin-panel-cell/admin-panel-cell.component'
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {


  ngOnInit() {

  }
  constructor() {}
}
