import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstatusComponent } from './addstatus.component';

describe('AddstatusComponent', () => {
  let component: AddstatusComponent;
  let fixture: ComponentFixture<AddstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
