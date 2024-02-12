import { Playlist } from '../playlist';
import { Song } from '../song';
import { Album } from '../album';
import { IImportable } from './playlistImporter';
import { Artist } from '../artist';

export class CloudImporter implements IImportable {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  private generateFakePlaylist() {
    const fakePlaylist = new Playlist('Super cool breakcore mix of DOOM');
    const artist = new Artist('Megadeth');
    const favAlbum = new Album('Rust In Peace', artist, 1990);
    favAlbum.addTrack(new Song('Holy wars... The Punishement Due'));
    favAlbum.addTrack(new Song('Rust In Peace'));
    favAlbum.addTrack(new Song('Lucretia'));
    favAlbum.addTrack(new Song('Hangar 18'));
    fakePlaylist.addAlbum(favAlbum);
    return fakePlaylist;
  }

  async loadPlaylist(): Promise<Playlist> {
    console.log(`Importing playlist from ${this._url}`);
    return this.generateFakePlaylist();
  }
}
