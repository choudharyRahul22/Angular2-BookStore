import { Component, OnInit } from '@angular/core';
import {Book} from "../../shared/models/book";
import {GetBookService} from "./get-book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  private book: Book = new Book();
  private bookId: number;

  constructor(private bookService: GetBookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => {
        this.bookId = Number.parseInt(params["id"]);
      }
    );

    this.bookService.getBook(this.bookId).subscribe(
      success => {
        console.log(success.json());
        this.book = success.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelect(book:Book) {
    this.router.navigate(['/editBook', this.book.id])
    // .then(s => location.reload())
    ;
  }

}
