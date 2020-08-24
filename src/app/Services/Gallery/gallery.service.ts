import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


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
    return this.http.get<File[]>(`http://192.168.0.14:8080/api/index/${id}`);
  }

  deleteFileBD(fx: string): Observable<{}> {
    const url = `http://192.168.0.14:8080/api/delete/${fx}`;
    return this.http.delete(url);
  }

  deleteFileSvr(f: string): Observable<{}> {
    const url = `http://192.168.0.14:8080/api/deleteimg/${f}`;
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
