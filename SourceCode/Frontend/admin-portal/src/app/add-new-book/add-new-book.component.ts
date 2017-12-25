import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/models/book";
import {AddBookService} from "./add-book.service";
import {DatePipe} from "@angular/common";
import {UploadImageService} from "../shared/services/upload-image.service";

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  private newBook: Book = new Book();
  private bookAdded: boolean;

  constructor(private addBookService: AddBookService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.category = "Management";
    this.newBook.language = "English";
    this.newBook.format = "PaperBack";
  }

  onSubmit(){
    console.log(this.newBook);
    this.addBookService.sendBook(this.newBook).subscribe(
      response => {
          console.log(JSON.parse(JSON.parse(JSON.stringify(response))._body).id);
          this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(response))._body).id);
          this.bookAdded = true;
          this.newBook = new Book();

          this.newBook.active = true;
          this.newBook.category = "Management";
          this.newBook.language = "English";
          this.newBook.format = "PaperBack";
      },
      error => {
          console.log(error);
      }
    );
  }

}
