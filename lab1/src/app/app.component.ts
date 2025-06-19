import { Component, OnInit } from '@angular/core';
import { Nhakhoahoc } from './nhakhoahoc';
import { ISanpham } from './sanpham';
import { RouterOutlet } from '@angular/router';
import { MCPService } from './services/mcp.service';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    ProductlistComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  listSP:ISanpham[] = [
    { 
    id:1, tensp:'Xiaomi Redmi Note 11', code: 'GDN-0011', giasp:5490000,
    mota:'Xiaomi Redmi Note 11 được xem như chiếc smartphone có giá tầm trung ấn tượng, với 1 cấu hình mạnh, cụm camera xịn sò, pin khỏe, sạc nhanh mà giá lại rất phải chăng.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/245261/Xiaomi-redmi-note-11-blue-600x600.jpg',
    ngay:'2022-04-01', starRate:3.2
    }, 
    { id:2, tensp:'Phone 13 Pro Max 128GB ', code: 'GDN-0015', giasp:33490000,
    mota:'Máy thiết kế không mấy đột phá khi so với người tiền nhiệm, màn hình siêu đẹp, tần số quét nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg',
    ngay:'2022-04-02', starRate:3.5
    }, 
    { 
    id:3, tensp:'Vivo Y33s', code: 'GDN-0018', giasp:6990000,
    mota:'Vivo Y33s thiết kế trẻ trung với màu đen tráng gương và xanh mộng mơ. Phiên bản màu đen được phủ lớp tráng gương sáng bóng, có thể trở thành chiếc gương tiện lợi',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/249102/Vivo-y33s-yellow-thumb-600x600.jpg',
    ngay:'2022-04-03', starRate:3.5
    }, 
    { 
    id:4, tensp:'OPPO Reno7 Z 5G', code: 'GDN-0020', giasp:10490000,
    mota:'Sản phẩm có thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép, có cấu hình mạnh mẽ và đạt chứng nhận xếp hạng A về độ mượt.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-1-1-600x600.jpg',
    ngay:'2022-04-04', starRate:3.3
    },
    { 
    id:5, tensp:'Samsung Galaxy A03 3GB', code: 'GDN-0022', giasp:2990000,
    mota:'Là điện thoại Galaxy A đầu tiên của nhà Samsung trong năm 2022 tại VN. Sản phẩm có giá dễ tiếp cận, camera chính đến 48 MP, pin 5000 mAh thoải mái sử dụng cả ngày.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/251856/samsung-galaxy-a03-xanh-thumb-600x600.jpg',
    ngay:'2022-04-02', starRate:3.2
    }, 
    { 
    id:6, tensp:'Samsung Galaxy A52s 5G 128GB', code: 'GDN-0023', giasp:10990000,
    mota:'Điện thoại Galaxy A52s 5G là phiên bản nâng cấp của Galaxy A52 5G, với ngoại hình không đổi nhưng được nâng cấp đáng kể về thông số cấu hình bên trong.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/247507/samsung-galaxy-a52s-5g-mint-600x600.jpg',
    ngay:'2022-04-03', starRate:3.8
    },
    ];

  listNhaKH:Nhakhoahoc[] = [
{id:1, ho:'NguyenVu', ten:'Anh', sinh:1931, mat:1992, tuoi:59},
    {id:2, ho:'Le Tran', ten:'Huy', sinh:1961, mat:2005, tuoi:60},
    {id:3, ho:'Nguyen Thi', ten:'Truc Anh', sinh:1988, mat:2024, tuoi:60},
    {id:4, ho:'Vo Thi', ten:'Tuyet', sinh:1989, mat:2024, tuoi:60},
    {id:5, ho:'Hoang Van', ten:'Tien', sinh:1978, mat:2015, tuoi:60},
  ]
  
  title = 'bai1';
  student = {
    hoten: 'Nguyễn Văn Hùng',
    gioitinh: 'Nam',
    ngaysinh: '2004-18-10',
    hinh: 'anh.jpg',
    diem: 9
  }

  selectedProduct: ISanpham | null = null;

  constructor(private mcpService: MCPService) {}

  ngOnInit() {
    this.render();
  }

  viewProductDetail(productId: number) {
    try {
      this.mcpService.setContext('product-detail');
      const product = this.listSP.find(p => p.id === productId);
      
      if (!product) {
        console.error(`Product with ID ${productId} not found`);
        return;
      }
      
      if (this.mcpService.executeAction('read', product)) {
        this.selectedProduct = product;
      } else {
        console.error('Permission denied: Cannot view product details');
      }
    } catch (error) {
      console.error('Error viewing product details:', error);
    }
  }

  closeProductDetail() {
    this.selectedProduct = null;
  }

  show(codehtml: string) {
    const kq = document.querySelector('#ds') as HTMLElement;
    if (kq) {
      kq.innerHTML = codehtml;
    } else {
      console.error('Element with id "ds" not found');
    }
  }

  render() {
    try {
      const codehtml = this.listNhaKH.map(nkh => {
        return `
          <p> ${nkh.id}.  ${nkh.ho}  ${nkh.ten}  (${nkh.sinh} - ${nkh.mat}) ${nkh.tuoi} </p>    
        `;
      }).join('');
      this.show(codehtml);
    } catch (error) {
      console.error('Error rendering scientists:', error);
    }
  }

  addProduct(product: ISanpham) {
    try {
      if (this.mcpService.executeAction('create', product)) {
        if (!product.id) {
          product.id = Math.max(...this.listSP.map(p => p.id), 0) + 1;
        }
        this.listSP = [...this.listSP, product];
      } else {
        console.error('Permission denied: Cannot add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  updateProduct(product: ISanpham) {
    try {
      if (this.mcpService.executeAction('update', product)) {
        const index = this.listSP.findIndex(p => p.id === product.id);
        if (index !== -1) {
          this.listSP = [
            ...this.listSP.slice(0, index),
            product,
            ...this.listSP.slice(index + 1)
          ];
          this.selectedProduct = null;
        } else {
          console.error(`Product with ID ${product.id} not found`);
        }
      } else {
        console.error('Permission denied: Cannot update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }

  deleteProduct(id: number) {
    try {
      if (this.mcpService.executeAction('delete', id)) {
        this.listSP = this.listSP.filter(p => p.id !== id);
        this.selectedProduct = null;
      } else {
        console.error('Permission denied: Cannot delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
}