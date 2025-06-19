import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import moment  from 'moment';
@Component({
  selector: 'app-dang-nhap',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dang-nhap.component.html',
  styleUrl: './dang-nhap.component.css'
})
export class DangNhapComponent {
  constructor( 
    private auth:AuthService, 
    private router: Router) { }
    xulyDN(data:any){    
      console.log(data, data.un , data.pw);
      this.auth.login( data.un, data.pw).subscribe( 
        res =>{          
            var d = JSON.parse(res);
            console.log("Đăng nhập thành công ", res);          
            const expiresAt = moment().add(d.expiresIn,'second');
             localStorage.setItem('id_token', d.idToken);
             localStorage.setItem("expires_at", 
                 JSON.stringify(expiresAt.valueOf()) );
             this.router.navigateByUrl('/');
        },
        error => {
          console.log('oops', error);
          this.router.navigateByUrl('/dangnhap');
        }
      )
  }
}
