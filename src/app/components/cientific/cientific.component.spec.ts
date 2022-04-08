import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientificComponent } from './cientific.component';

describe('CientificComponent', () => {
  let component: CientificComponent;
  let fixture: ComponentFixture<CientificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
