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
    document.getElementById('selam').ondragenter = function (drag) {
      document.getElementById('selam').ondragend = function (drop) {
        const elem = document.getElementById('selam');
        const top = Number.parseInt(elem.style.top, 10);
        const left = Number.parseInt(elem.style.left, 10);
        elem.style.top = ( top ? top : 0 ) + (drop.offsetY - drag.offsetY) + 'px';
        elem.style.left = ( left ? left : 0 ) + (drop.offsetX - drag.offsetX) + 'px';
      };
    };
  }
}
