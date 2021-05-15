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
        CacheDelete.deleteCache(this.successCallback, this.errorCallback);
      }
    });
  }

  /**
   * success callback
   *
   * @private
   * @memberof Tab1Page
   */
  private successCallback(): void {
    console.log('success');
  }

  /**
   * error callback
   *
   * @private
   * @memberof Tab1Page
   */
  private errorCallback(): void {
    console.log('error');
  }
}
