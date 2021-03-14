export class LocalStorageService {
  public getItem(key: string): string {
    return window.localStorage.getItem(key);
  }

  public setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}
