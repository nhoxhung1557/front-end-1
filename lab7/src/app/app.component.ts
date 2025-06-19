import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab7';
  constructor( private auth:AuthService){}
  thoat(){ this.auth.thoat();  }
  daDangNhap() { return this.auth.daDangNhap()}
}
