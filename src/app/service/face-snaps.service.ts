import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/facesnap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
        {  id : 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        { id:2,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 6,
          location: 'la montagne'
        },
        {id:3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      
  ];

 constructor(private http: HttpClient) {}
 
    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  
}


  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
}
    /*const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }*/
  
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    //snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}


unsnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
        faceSnap.snaps--;
    } else {
        throw new Error('FaceSnap not found!');
    }
}

}