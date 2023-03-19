import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private readonly HEADERS_FORM_DATA = {
    'enctype': 'multipart/form-data'
  };

  // Http Options
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) {
  }


  public get<T>(
    endPoint: string,host?:string,
    httpParams?: HttpParams | { [param: string]: string | string[] })
    : Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(endPoint,host), { params: httpParams });
  }


  public getCustomer<T>(
    endPoint: string,
    httpParams?: HttpParams | { [param: string]: string | string[] })
    : Observable<T> {
    return this.httpClient.get<T>(this.buildUrlCustomer(endPoint), { params: httpParams });
  }

  public post<T>(endPoint: string, body: any,host?:string): Observable<T> {
    return this.httpClient.post<T>(this.buildUrl(endPoint,host), body, this.httpOptions);
  }

  public postCustomer<T>(endPoint: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.buildUrlCustomer(endPoint), body, this.httpOptions);
  }

  public postFormData(endPoint: string, formData: FormData): Observable<any> {
    return this.httpClient.post(
      this.buildUrl(endPoint), formData,
      { headers: this.HEADERS_FORM_DATA }
    );
  }

  public postFormDataProgress(endPoint: string, formData: FormData): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', this.buildUrl(endPoint), formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.httpClient.request(req);
  }

  public put<T>(endPoint: string, body: any,host?:string): Observable<T> {
    return this.httpClient.put<T>(this.buildUrl(endPoint,host), body, this.httpOptions);
  }

  public putFormData(endPoint: string, formData: FormData): Observable<any> {
    return this.httpClient.put(
      this.buildUrl(endPoint), formData,
      { headers: this.HEADERS_FORM_DATA }
    );
  }

  public patch<T>(endPoint: string, body?: any): Observable<T> {
    return this.httpClient.patch<T>(this.buildUrl(endPoint), body);
  }

  public delete<T>(endPoint: string,host?:string): Observable<T> {
    return this.httpClient.delete<T>(this.buildUrl(endPoint,host));
  }

  public getByteArray<T>(
    endPoint: string
  ): Observable<T> {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.httpClient.get<T>(this.buildUrl(endPoint), httpOptions);
  }

  public getBlob<T>(
    endPoint: string
  ): Observable<T> {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    return this.httpClient.get<T>(this.buildUrl(endPoint), httpOptions);
  }

  private buildUrl(endPoint: string, host:string=environment.environment.host): string {
    return `${host}${endPoint}`;

  }

  private buildUrlCustomer(endPoint: string): string {
    return `${environment.environment.hostLocal}${endPoint}`;

  }



}
