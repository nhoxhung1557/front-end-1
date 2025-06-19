import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanphamService } from '../sanpham.service';
import { ISanpham } from '../ISanpham';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private spService:SanphamService
  )
{}
idSP: number = Number(this.route.snapshot.params['id']);
sp = <ISanpham>{}; 
ngOnInit(): void {
if (this.idSP<0) return;
let kq = this.spService.getMotSamPham (this.idSP);
if (kq==null) { this.sp={} as ISanpham; }
else { this.sp= kq as ISanpham; }
}}
