import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../shared/http.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(
    private service: HttpService,
  ) {
  }

  ngOnInit() {
  }

  sendRequest() {
    this.service.httpRequest('get', environment.baseServerUrl + 'exam/1', (res) => {
    });
  }
}
