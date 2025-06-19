import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../sanpham.service';
import { ISanpham } from '../ISanpham';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit  {
  constructor (private spService:SanphamService) { }
  listSP:ISanpham[] =[];
  ngOnInit(): void{
    this.listSP=this.spService.getSanPham();
  }

}
