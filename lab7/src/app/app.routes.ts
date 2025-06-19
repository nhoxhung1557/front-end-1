import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { DownLoadComponent } from './down-load/down-load.component';
import { baoveGuard } from './baove.guard';
export const routes: Routes = [
    { path:'', component:HomeComponent},
  { path:'dangnhap', component:DangNhapComponent},
  { path:'dangky', component:DangKyComponent},
  { path:'doipass', component:DoiPassComponent, 
    canActivate:[baoveGuard], },  
  { path:'download', component:DownLoadComponent, 
    canActivate:[baoveGuard], }, 
];
