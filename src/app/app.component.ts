import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { FaceSnap } from './models/facesnap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  interval$!: Observable<number>;

  ngOnInit() {
    this.interval$ = interval(1000);
  }
    
    }
