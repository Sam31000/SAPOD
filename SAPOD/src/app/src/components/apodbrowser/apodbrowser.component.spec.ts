import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APODBrowserComponent } from './apodbrowser.component';

describe('APODBrowserComponent', () => {
  let component: APODBrowserComponent;
  let fixture: ComponentFixture<APODBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APODBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APODBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
