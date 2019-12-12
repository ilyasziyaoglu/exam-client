/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils';

@Component({
  selector: 'ngx-app',
  template: `
      <router-outlet>
          <ngx-spinner
                  bdOpacity=0.2
                  bdColor="#333"
                  size="large"
                  color="#fff"
                  type="triangle-skew-spin"
                  [fullScreen]="true">
              <p style="color: white"> Loading... </p>
          </ngx-spinner>
      </router-outlet>`,
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
