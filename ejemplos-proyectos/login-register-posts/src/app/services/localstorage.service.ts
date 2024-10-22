import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any | null {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}