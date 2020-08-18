import {Component, OnInit} from '@angular/core';
import {GalleryService, File} from '../../../Services/Gallery/gallery.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-face-api',
  templateUrl: './face-api.component.html',
  styleUrls: ['./face-api.component.css']
})
export class FaceApiComponent implements OnInit {
  file: File;

  constructor(private galleryService: GalleryService, private router: Router) {
  }

  ngOnInit(): void {
    this.file = this.galleryService.getFileData();
    if (this.file == null) {
      this.router.navigate(['/gallery']);
    }
  }

  delete(file: File): void {
    this.galleryService.deleteFileBD(file)
      .subscribe(() => console.log('file deleted from DB'));
    this.galleryService.deleteFileSvr(file).subscribe(() => console.log('file deleted from Svr'));
  }

}
