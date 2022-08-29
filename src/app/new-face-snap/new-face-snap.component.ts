import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from '../models/facesnap.model';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
snapForm!: FormGroup;
faceSnapPreview$!: Observable<FaceSnap>;
constructor(private formBuilder: FormBuilder,
  private faceSnapsService: FaceSnapsService,
  private router: Router) { }
  onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
        tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();}

ngOnInit(): void {
  this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
  });
  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
    }))
);

}

}