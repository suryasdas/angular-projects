import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { switchMap,filter,map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.updates.available.pipe(
      switchMap(() => this.snackbar.open('A new version is available.','Update Now').afterDismissed()),
      filter(result => result.dismissedByAction),
      map(()=>this.updates.activateUpdate().then(()=>
      location.reload()))
    ).subscribe();
  }
  title = 'weather-app';
  constructor(private updates: SwUpdate, private snackbar: MatSnackBar){
  }
}
