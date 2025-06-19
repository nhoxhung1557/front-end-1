import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISanpham } from '../sanpham';
import { MCPService } from '../services/mcp.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnChanges {
  @Input() products: ISanpham[] = [];
  @Output() viewDetail = new EventEmitter<number>();
  
  errorMessage: string | null = null;
  loading = false;

  constructor(private mcpService: MCPService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.readProducts();
    }
  }

  readProducts(): void {
    try {
      this.loading = true;
      this.errorMessage = null;
      this.mcpService.setContext('product-list');
      
      if (!this.mcpService.executeAction('read', this.products)) {
        this.errorMessage = 'Không có quyền đọc danh sách sản phẩm';
      }
    } catch (error) {
      this.errorMessage = 'Đã xảy ra lỗi khi tải danh sách sản phẩm';
      console.error('Error loading products:', error);
    } finally {
      this.loading = false;
    }
  }

  onViewDetail(productId: number): void {
    this.viewDetail.emit(productId);
  }

  getStarRating(rating: number): { filled: boolean }[] {
    return Array(5).fill(0).map((_, i) => ({
      filled: i < Math.floor(rating)
    }));
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('vi-VN') + ' ₫';
  }

  trackByProductId(index: number, product: ISanpham): number {
    return product.id;
  }
}