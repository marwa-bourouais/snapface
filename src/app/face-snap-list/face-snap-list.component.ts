import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/facesnap.model';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>;
  constructor(private faceSnapsService: FaceSnapsService) { }
  //faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    //this.faceSnaps = this.faceSnapsService.faceSnaps;
      this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  
}
}
