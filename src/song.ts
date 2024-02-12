export class Song {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
}
