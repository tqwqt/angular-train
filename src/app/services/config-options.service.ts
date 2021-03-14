export interface IConfigOptions {
  id: number;
  login: string;
  email: string;
}

export class ConfigOptionsService {
  private _id: number;

  private _login: string;

  private _email: string;

  public getOptions(): IConfigOptions {
    return {
      id: this._id,
      login: this._login,
      email: this._email,
    };
  }

  public setOptions(options: IConfigOptions): void {
    this._id = options.id;
    this._login = options.login;
    this._email = options.email;
  }
}
