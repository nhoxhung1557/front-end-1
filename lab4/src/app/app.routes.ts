import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';

export const routes: Routes = [
    { path: ' ', component:HomeComponent, title:"Trang chu"},
    { path: 'sanpham', component:ProductlistComponent, title:"Danh sach san pham"},
    { path: 'sanpham/:id', component:ProductdetailComponent, title:"Chi tiet san pham"},
    { path: 'lienhe', component:LienheComponent, title:"Lien he"},
    { path: 'dangnhap', component:DangnhapComponent, title:"Dang nhap"}
];
