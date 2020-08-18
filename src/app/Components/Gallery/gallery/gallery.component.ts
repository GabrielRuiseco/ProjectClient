import {Component, OnInit} from '@angular/core';
import {GalleryService, File} from '../../../Services/Gallery/gallery.service';
import {HttpClient} from '@angular/common/http';
import {AuthserviceService} from '../../../Services/Auth/authservice.service';
import {Router} from '@angular/router';

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
  }

  getFiles(): void {
    this.auth.getUserDetails().subscribe(data => (
      this.galleryService.getFile(data.id).subscribe(files => (this.files = files))));
  }

  delete(file: File): void {
    this.files = this.files.filter(h => h !== file);
    this.galleryService.deleteFileBD(file)
      .subscribe(() => console.log('file deleted from DB'));
    this.galleryService.deleteFileSvr(file).subscribe(() => console.log('file deleted from Svr'));
  }

  returnFile(idx: number) {
    return this.files[idx];
  }

  async fileMenu(idx: number) {
    await this.galleryService.setFileData(this.files[idx]);
    await this.router.navigate(['/faceApi']);
  }
}
