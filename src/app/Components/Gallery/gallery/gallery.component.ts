import {Component, OnInit} from '@angular/core';
import {GalleryService, File} from '../../../Services/Gallery/gallery.service';
import {HttpClient} from '@angular/common/http';
import {AuthserviceService} from '../../../Services/Auth/authservice.service';
import {Router} from '@angular/router';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  providers: [GalleryService],
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  files: File[];

  constructor(private galleryService: GalleryService, private http: HttpClient, private auth: AuthserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.getFiles();
    this.galleryVoid();
  }

  galleryVoid() {
    return this.files !== undefined && this.files[0] !== undefined;
  }

  getFiles(): void {
    this.auth.getUserDetails().subscribe(data => (
      this.galleryService.getFile(data.id).subscribe(files => (this.files = files))));
  }

  delete(index: number): void {
    const fileName = this.files[index].fileName;
    const _id = this.files[index]._id;
    this.files = this.files.filter(h => h !== this.files[index]);
    this.galleryService.deleteFileSvr(fileName).subscribe(() => console.log('file deleted from Svr'));
    this.galleryService.deleteFileBD(_id).subscribe(() => console.log('file deleted from DB'));
  }

  deletebd(index: number) {
    const file = this.files[index];
    console.log(file);
  }

  async fileMenu(idx: number) {
    await this.galleryService.setFileData(this.files[idx]);
    await this.router.navigate(['/faceApi']);
  }

  open(index: number) {
    console.log(index);
    console.log(this.files[index]);
    console.log(this.files[index].fileName);
  }

  redirect() {
    this.router.navigate(['/profile']);
  }
}
