import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from "./authentication/login/login.component";
import {AddNewBookComponent} from "./add-new-book/add-new-book.component";
import {GetBbokListService} from "./book-list/get-bbok-list.service";
import {BookListComponent} from "./book-list/book-list.component";
import {ViewBookComponent} from "./book-list/view-book/view-book.component";
import {EditBookComponent} from "./book-list/edit-book/edit-book.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'addBook', component: AddNewBookComponent},
  { path: 'viewBookList', component: BookListComponent},
  { path: 'viewBook/:id', component: ViewBookComponent},
  { path: 'editBook/:id', component: EditBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
