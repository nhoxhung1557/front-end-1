import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISanpham } from '../sanpham';
import { MCPService } from '../services/mcp.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: ISanpham | null = null;
  @Output() closeDetail = new EventEmitter<void>();
  @Output() editProduct = new EventEmitter<ISanpham>();
  @Output() deleteRequest = new EventEmitter<number>();

  constructor(private mcpService: MCPService) {}

  onClose(): void {
    this.closeDetail.emit();
  }

  onEdit(): void {
    if (this.product) {
      this.editProduct.emit(this.product);
    }
  }

  onDelete(): void {
    if (this.product && confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${this.product.tensp}"?`)) {
      if (this.mcpService.executeAction('delete', this.product.id)) {
        this.deleteRequest.emit(this.product.id);
      }
    }
  }
}