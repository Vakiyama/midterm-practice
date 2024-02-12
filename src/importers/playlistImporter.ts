import { Playlist } from '../playlist';

export interface IImportable {
  loadPlaylist(): Promise<Playlist>;
}

export class PlaylistImporter {
  private _importer: IImportable;

  constructor(importer: IImportable) {
    this._importer = importer;
  }

  public async importPlaylist(): Promise<Playlist> {
    return await this._importer.loadPlaylist();
  }
}
