import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import CommonUtils from '../shared/common.utils';
import Swal from 'sweetalert2';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
  ) {
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

  httpRequest(method: string, url: string, req?: any, cb?: any) {
    const self = this;
    url = environment.baseServerUrl + url;
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
      self.spinner.hide();
      if (CommonUtils.isSuccess(response.status)) {
        if (cb) {
          cb(response.result);
        }
      } else {
        Swal.fire(response.message || 'Can not get object.');
      }
    }, err => {
      Swal.fire('Can not get object.');
    });
  }
}
