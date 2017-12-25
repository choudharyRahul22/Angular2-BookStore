import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import {AuthService} from "./authentication/auth.service";
import {AppRoutingModule} from "./app.routing.module";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { AddBookService } from './add-new-book/add-book.service';
import { UploadImageService } from './shared/services/upload-image.service';
import {BookListComponent, DialogResultExampleDialog} from './book-list/book-list.component';
import { GetBbokListService } from './book-list/get-bbok-list.service';
import { ViewBookComponent } from './book-list/view-book/view-book.component';
import { GetBookService } from './book-list/view-book/get-book.service';
import { EditBookComponent } from './book-list/edit-book/edit-book.component';
import { EditBookService } from './book-list/edit-book/edit-book.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [AuthService, AddBookService, UploadImageService, GetBbokListService, GetBookService, EditBookService],
  bootstrap: [AppComponent,DialogResultExampleDialog]
})
export class AppModule { }
