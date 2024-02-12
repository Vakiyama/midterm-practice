import { Album } from './album';
import { Playlist } from './playlist';
import { Song } from './song';

export class User {
  private _username: string;
  private _password: string;
  private _playlists: Playlist[];
  private _albums: Album[];

  constructor(
    username: string,
    password: string,
    playlists: Playlist[] = [],
    albums: Album[] = []
  ) {
    this._username = username;
    this._password = password;
    this._playlists = playlists;
    this._albums = albums;
  }

  get username() {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password() {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  public addPlaylist(playlist: Playlist) {
    this._playlists.push(playlist);
  }

  public addAlbum(album: Album) {
    this._albums.push(album);
  }

  get songs() {
    const songs: Song[] = [];
    this._albums.forEach((album) =>
      album.tracks.forEach((song) => songs.push(song))
    );
    return songs;
  }

  get albums() {
    return this._albums;
  }

  get playlists() {
    return this._playlists;
  }
}
