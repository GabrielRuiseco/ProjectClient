import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private file: File;

  constructor(private http: HttpClient) {
  }

  setFileData(filex: File) {
    this.file = filex;
  }

  getFileData() {
    return this.file;
  }

  getFile(id: number): Observable<File[]> {
    return this.http.get<File[]>(`${environment.api}/api/index/${id}`);
  }

  getOpen(): Observable<any> {
    return this.http.get<File[]>(`${environment.api}/api/open/1`);
  }

  getClose(): Observable<any> {
    return this.http.get<File[]>(`${environment.api}/api/open/0`);
  }

  deleteFileBD(fx: string): Observable<{}> {
    const url = `${environment.api} api/delete/${fx}`;
    return this.http.delete(url);
  }

  deleteFileSvr(f: string): Observable<{}> {
    const url = `${environment.api}/api/deleteimg/${f}`;
    return this.http.delete(url);
  }

  // downloadFile(file: File): Observable<any> {
  //   return this.http.put('api/downloadimg', file);
  // }
}

export interface File {
  _id: string;
  fileName: string;
  filePath: string;
  uid: string;
}
