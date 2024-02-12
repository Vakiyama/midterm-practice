import { Album } from './album';

export class Artist {
  private _name: string;
  private _albums: Album[];

  constructor(name: string, albums: Album[] = []) {
    this._name = name;
    this._albums = albums;
  }

  public addAlbum(album: Album) {
    this._albums.push(album);
  }

  get name() {
    return this._name;
  }
}
