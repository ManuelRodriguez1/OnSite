import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprojectsComponent } from './menuprojects.component';

describe('MenuprojectsComponent', () => {
  let component: MenuprojectsComponent;
  let fixture: ComponentFixture<MenuprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
