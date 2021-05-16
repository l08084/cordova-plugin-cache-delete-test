import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

// Ambient Declarations
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
        // delete cache
        CacheDelete.deleteCache()
          .then(() => console.log('delete cache success!!'))
          .catch((error) => console.error(error));
      }
    });
  }

  public delete(): void {
    CacheDelete.deleteCache()
      .then(() => console.log('delete cache success!!'))
      .catch((error) => console.error(error));
  }
}
