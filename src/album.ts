import { Artist } from './artist';
import { Song } from './song';

export class Album {
  private _title: string;
  private _artist: Artist;
  private _year: number;
  private _tracks: Song[];

  constructor(
    title: string,
    artist: Artist,
    year: number,
    tracks: Song[] = []
  ) {
    this._title = title;
    this._artist = artist;
    this._year = year;
    this._tracks = tracks;
  }

  public addTrack(song: Song) {
    this._tracks.push(song);
  }

  get title() {
    return this._title;
  }

  get artist() {
    return this._artist;
  }

  get year() {
    return this._year;
  }

  get tracks() {
    return this._tracks;
  }
}
