import { Injectable } from '@angular/core';
import { take, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  file: File;
  image: string;
  path: string;

  downloadUrl: Observable<any>;
  uploadpercent: Observable<number>;


  constructor(private storage : AngularFireStorage) { }

  uploadImage(selectedFiles : FileList) {
    this.file = selectedFiles.item(0);
    this.path = `posts/${this.file.name}`;
    const uploadTask = this.storage.upload(this.path, this.file);
    const ref = this.storage.ref(this.path);
    uploadTask.snapshotChanges().pipe(
        finalize(() => {
          this.downloadUrl = ref.getDownloadURL();
          this.downloadUrl.subscribe(data => { this.image = data});
        })
     ).subscribe();
  }
}
