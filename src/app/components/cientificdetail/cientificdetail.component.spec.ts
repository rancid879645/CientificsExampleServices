import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientificDetailComponent } from './cientificdetail.component';

describe('CientificDetailComponent', () => {
  let component: CientificDetailComponent;
  let fixture: ComponentFixture<CientificDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientificDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientificDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
