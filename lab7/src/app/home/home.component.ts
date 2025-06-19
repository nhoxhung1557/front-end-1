import { Component } from '@angular/core';
import {ISanpham} from '../ISanpham';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:ISanpham[] = [
    { 
    id:1, tensp:'Leaf Rake',  code: 'GDN-0011', giasp:19.95,
    mota:'Leaf rake with 48-inch wooden handle',  
    urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuEbOWZJNbIDB2i29syGx_6FuGOnYKcpDjA&s',
    ngay:'March 19, 2016', starRate:3.2
    }, 
    { 
    id:2, tensp:'Garden Cart', code: 'GDN-0023', giasp:32.99,
    mota:'15 gallon capacity rolling garden cart',
    urlImage:'https://img.websosanh.vn/v10/users/review/images/ravm5fomlvnl2/1542355060952_7926762.jpg?compress=85',
    ngay:'March 18, 2016', starRate:4.2
    }, 
    { 
    id:5, tensp:'Hammer', code: 'TBX-0048', giasp:8.9,
    mota:'Curved claw steel hammer',
    urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuEbOWZJNbIDB2i29syGx_6FuGOnYKcpDjA&s',
    ngay:'May 21, 2016', starRate:3.8
    }, 
    { 
    id:8, tensp:'Saw',  code: 'TBX-0022', giasp:11.55,
    mota:'15-inch steel blade hand saw',
    urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqo3WLm3jl1oWkHzCYbYEb_3zsIcf3tFDblPCPLbJOwg&s',
    ngay:'May 15, 2016', starRate:3.7
    }, 
    { 
    id:10, tensp:'Video Game Controller', code: 'GMG-0042', giasp:35.95,
    mota:'Standard two-button video game controller',
    urlImage:'https://img.websosanh.vn/v10/users/review/images/ravm5fomlvnl2/1542355060952_7926762.jpg?compress=85',
    ngay:'October 15, 2015', starRate:4.6
    }, 
    ]

    constructor(){}
    tukhoa:string='';
    listProduct:ISanpham[]=[];
    ngonInit(): void{
      this.listProduct=this.products;
    }
    locSP(){
      console.log(this.tukhoa);
      this.products = this.listProduct.filter( p=>p.tensp.includes(this.tukhoa))
    }

}
