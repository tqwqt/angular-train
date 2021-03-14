export class GeneratorService {
  private _alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  public generateString(n: number): string {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += this._alpha.charAt(Math.floor(Math.random() * this._alpha.length));
    }
    return result;
  }
}
