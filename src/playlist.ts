import { Album } from './album';
import { Song } from './song';

export class Playlist {
  private _name: string;
  private _songs: Song[];

  constructor(name: string, songs: Song[] = []) {
    this._name = name;
    this._songs = songs;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get songs() {
    return this._songs;
  }

  set songs(songs: Song[]) {
    this._songs = songs;
  }

  addAlbum(album: Album) {
    this._songs = [...this._songs, ...album.tracks];
  }
}
