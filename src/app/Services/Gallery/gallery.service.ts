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
    return this.http.post<File[]>('api/index/', id);
  }

  deleteFileBD(file: File): Observable<{}> {
    const url = `api/delete/${file.id}`;
    return this.http.delete(url);
  }

  deleteFileSvr(file: File): Observable<{}> {
    return this.http.put('api/deleteimg', file.fileName);
  }

  // downloadFile(file: File): Observable<any> {
  //   return this.http.put('api/downloadimg', file);
  // }
}

export interface File {
  id: string;
  fileName: string;
  filePath: string;
  uid: string;
}
