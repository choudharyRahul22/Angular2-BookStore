import { Component, OnInit } from '@angular/core';
import {Book} from "../../shared/models/book";
import {UploadImageService} from "../../shared/services/upload-image.service";
import {GetBookService} from "../view-book/get-book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EditBookService} from "./edit-book.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  private bookId: number;
  private book: Book = new Book();
  private bookUpdated: boolean;

  constructor(private uploadImageService: UploadImageService, private editBookService: EditBookService,
              private getBookService: GetBookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => {
        this.bookId = Number.parseInt(params["id"]);
      }
    );

    this.getBookService.getBook(this.bookId).subscribe(
      success => {
        this.book = success.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.editBookService.sendBook(this.book).subscribe(
      success => {
        this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(success))._body).id);
        this.bookUpdated = true;
      },
      error => {
        console.log(error);
      }
    );
  }

}
