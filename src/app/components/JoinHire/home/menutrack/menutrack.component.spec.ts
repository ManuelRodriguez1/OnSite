import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutrackComponent } from './menutrack.component';

describe('MenutrackComponent', () => {
  let component: MenutrackComponent;
  let fixture: ComponentFixture<MenutrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
