import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APODCompactComponent } from './apodcompact.component';

describe('APODCompactComponent', () => {
  let component: APODCompactComponent;
  let fixture: ComponentFixture<APODCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APODCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APODCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
