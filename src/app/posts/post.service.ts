import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { PostModel } from 'app/Models/postModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

postCollection: AngularFirestoreCollection<PostModel>;
postSelected: AngularFirestoreDocument<PostModel>;

  constructor( private afst:  AngularFirestore) {
    this.postCollection = this.afst.collection('posts', post => post.orderBy('published', 'desc'));
  }


  getPosts(): PostModel[] {
    var posts= new Array<PostModel>();
    this.postCollection.snapshotChanges().forEach(element => {
      element.map( a => {
        const data = a.payload.doc.data() as PostModel;
        data.id = a.payload.doc.id;
        posts.push(data);
        return data;})
    });
    return posts;
 
  }

  getPost(id: string){
    this.postSelected = this.afst.doc<PostModel>(`posts/${id}`)
    return this.postSelected.valueChanges();
  }


  createPost(post: PostModel) {
    this.postCollection.add(post);
  }

  deletePost(id: string) {
    this.afst.doc<PostModel>(`posts/${id}`).delete();
  }

  updatePost(id: string , post: PostModel){
    this.afst.doc<PostModel>(`posts/${id}`).update(post);
  }

}
