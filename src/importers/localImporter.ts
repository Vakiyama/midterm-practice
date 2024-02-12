import { Playlist } from '../playlist';
import { Song } from '../song';
import { IImportable } from './playlistImporter';

type LocalPlaylist = {
  albums: [{ name: string; tracks: string[] }];
};

export class LocalImporter implements IImportable {
  private _name: string;

  constructor(path: string) {
    this._name = path;
  }

  private async getPlaylistFromFilesystem() {
    const playlistBlob = Bun.file(`playlists/${this._name}.json`);
    if (playlistBlob.size === 0) {
      throw new Error('ENOENT: Invalid playlist name');
    }
    return (await playlistBlob.json()) as LocalPlaylist;
  }

  public async loadPlaylist(): Promise<Playlist> {
    console.log(`Importing saved playlist: ${this._name}`);
    const playlistJSON = await this.getPlaylistFromFilesystem();
    const songs: Song[] = [];
    playlistJSON.albums.forEach((album) =>
      album.tracks.forEach((track) => songs.push(new Song(track)))
    );

    return new Playlist(this._name, songs);
  }
}
