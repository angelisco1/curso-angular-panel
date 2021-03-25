import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  URL: string = 'https://ejemplos-dc1c1.firebaseio.com/memes-angular/angel';

  constructor(private http: HttpClient) { }

  crearMeme(meme) {
    return this.http.post(this.URL + '.json', JSON.stringify(meme));
  }

  getMemes() {
    return this.http.get(this.URL + '.json')
      .pipe(
        map(datos => {
          const arrayMemes = [];
          for (let id in datos) {
            const meme = { id: id, ...datos[id] }
            arrayMemes.push(meme);
          }
          return arrayMemes;
        })
      );
  }

  eliminarMeme(id) {
    return this.http.delete(`${this.URL}/${id}.json`);
  }

  updateLikes(id, numLikes) {
    return this.http.patch(`${this.URL}/${id}.json`, { likes: numLikes });
  }

}
