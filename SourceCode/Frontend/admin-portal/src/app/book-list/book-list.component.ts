import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/models/book";
import {GetBbokListService} from "./get-bbok-list.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private selectedBook: Book;
  private checked: boolean;
  private bookList: Book[];
  private allChecked: boolean;
  private removeBookList: Book[] = new Array();

  constructor(private getBookListService: GetBbokListService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.getBookList();
  }

  onSelect(book: Book){
    this.selectedBook = book;
    this.router.navigate(["/viewBook", this.selectedBook.id]);
  }

  getBookList() {
    this.getBookListService.getBookList().subscribe(
      res => {
        console.log(res.json());
        this.bookList=res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialog(book: Book){
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result == "yes") {
          this.getBookListService.deleteBook(book.id).subscribe(
            res => {
              console.log(res);
              this.getBookList();
            },
            err => {
              console.log(err);
            }
          );
        }
      }
    );
  }

  updateRemoveBookList(checked: boolean, book: Book) {
    if(checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
    }
  }

  updateSelected(checked: boolean) {
    if(checked) {
      this.allChecked = true;
      this.removeBookList=this.bookList.slice();
    } else {
      this.allChecked=false;
      this.removeBookList=[];
    }
  }

  removeSelectedBooks() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          for (let book of this.removeBookList) {
            this.getBookListService.deleteBook(book.id).subscribe(
              res => {

              },
              err => {
              }
            );
          }
          location.reload();
        }
      }
    );
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}