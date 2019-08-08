import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APODDetailComponent } from './apoddetail.component';

describe('APODDetailComponent', () => {
  let component: APODDetailComponent;
  let fixture: ComponentFixture<APODDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APODDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APODDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
