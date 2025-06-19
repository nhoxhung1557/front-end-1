import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiPassComponent } from './doi-pass.component';

describe('DoiPassComponent', () => {
  let component: DoiPassComponent;
  let fixture: ComponentFixture<DoiPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoiPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoiPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
