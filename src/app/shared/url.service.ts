import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  openInNewTab(url: string) {
    window.open(url, '_blank')?.focus();
  }
}
