import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/components/fileupload/fileupload';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent implements OnInit {

  files: any;

  @ViewChild(FileUpload) pFileUpload: FileUpload;

  constructor() {
  }

  ngOnInit() {
  }

  myUploader() {
    // this.files = event.files;
    // console.log('event.files:::',event.files);
    console.log('this.files:::', this.pFileUpload.files);
  }

  removeFile(file) {
    console.log('deleted file:::', file);

    const index = this.pFileUpload.files.indexOf(file);
    if (index > -1) {
      this.pFileUpload.files.splice(index,1);
    }
    console.log('index:::', index);
    console.log('this.files:::', this.pFileUpload.files);
  }

  removeAllFiles() {
    this.pFileUpload.files = [];
    console.log('this.files:::', this.pFileUpload.files);
  }

  selectFiles(event) {
    this.files = event.files;
    console.log('event.files:::', event.files);
    console.log('this.files:::', this.pFileUpload.files);
  }

  checkTotalSize() {
    console.log('this.pFileUpload.maxFileSize:::', this.pFileUpload.maxFileSize)
    console.log('this.pFileUpload.file[0].size:::', this.pFileUpload.files[0].size)
  }

}
