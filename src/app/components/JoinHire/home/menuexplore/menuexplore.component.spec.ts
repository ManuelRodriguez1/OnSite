import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuexploreComponent } from './menuexplore.component';

describe('MenuexploreComponent', () => {
  let component: MenuexploreComponent;
  let fixture: ComponentFixture<MenuexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuexploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
