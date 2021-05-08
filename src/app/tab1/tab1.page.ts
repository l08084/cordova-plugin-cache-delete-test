import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var CacheDelete: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private platform: Platform) {}

  public ngOnInit(): void {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        CacheDelete.deleteCache(this.successCallback, this.errorCallback);
      }
    });
  }

  public delete(): void {
    CacheDelete.deleteCache(this.successCallback, this.errorCallback);
  }

  private successCallback(): void {
    console.log('success');
  }

  private errorCallback(): void {
    console.log('error');
  }
}
