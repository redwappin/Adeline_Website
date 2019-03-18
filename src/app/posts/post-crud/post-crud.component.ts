import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { PostService } from '../post.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.scss']
})
export class PostCrudComponent implements OnInit {
  title: string;
  image: string = null;
  content: string;
  description: string;

  downloadUrl: Observable<string>;
  uploadpercent: Observable<number>;

  constructor(private authService: AuthService, private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  createPost(){
    const data = {
      author: this.authService.authState.displayName,
      description: this.description,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    console.log(data);
    this.postService.createPost(data);
    this.title="";
    this.description="";
    this.content="";
  }

  uploadImage(event){
    // const file = event.target.files[0];
    // const path = `posts/${file.name}`;
    // if (file.type.split('/')[0] !== 'image'){
    //   return alert('Juste des fichiers image')
    // }
    // else{
    //   const ref = this.storage.ref(path);
    //   const task = this.storage.upload(path, file);
      
    //   ref.put(file).then(
    //     test=> { console.log(ref.getDownloadURL()
    //    )}
    //   );

    //   console.log('Image chargée avec succès');
      
      // const ref = this.storage.ref(path);

      // this.downloadUrl = ref.getDownloadURL();
      // console.log()
      // this.downloadUrl.subscribe( url => this.image = url);
    }
  }
  

