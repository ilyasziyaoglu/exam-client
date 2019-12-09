import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import CommonUtils from './common.utils';
import Swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class Service {
  private httpClient: any;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
  }

  head<T>(url: string, params?: HttpParams): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/octet-stream; charset=utf-8')
      .append('Accept', 'application/octet-stream; charset=utf-8');
    return this.http.get<any>(url, {
      params,
      responseType: 'arraybuffer' as 'json',
      observe: 'response' as 'body',
      headers,
    }).pipe(map((response: any) => {
      return response;
    }));
  }

  get<T>(url: string, id?: string, params?: HttpParams): Observable<any> {
    return this.http.get<T>(url, {params}).pipe(map((response: any) => {
      return response;
    }));
  }

  post<T>(url: string, body: string): Observable<any> {
    return this.http.post<T>(url, body).pipe(map((response: any) => {
      return response;
    }));
  }

  put<T>(url: string, body: string): Observable<any> {
    return this.http.put<T>(url, body).pipe(map((response: any) => {
      return response;
    }));
  }

  delete<T>(url: string, id?: string): Observable<any> {
    return this.http.delete<T>(url + id).pipe(map((response: any) => {
      return response;
    }));
  }

  httpRequest(method, url, req?, cb?) {
    const self = this;
    self.spinner.show();
    let request;
    switch (method) {
      case 'get':
        request = this.get(url);
        break;
      case 'post':
        request = this.post(url, req);
        break;
      case 'put':
        request = this.put(url, req);
        break;
      case 'delete':
        request = this.delete(url);
        break;
    }
    request.subscribe(response => {
      if (CommonUtils.isSuccess(response.status)) {
        if (cb) {
          cb(response.result);
        }
      } else {
        self.spinner.hide();
        Swal.fire(response.message || 'Can not get object.');
      }
    }, err => {
      self.spinner.hide();
      Swal.fire('Can not get object.');
    });
  }
}
