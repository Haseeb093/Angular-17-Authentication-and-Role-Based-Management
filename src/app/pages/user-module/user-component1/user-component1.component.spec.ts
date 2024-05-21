import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent1Component } from './user-component1.component';

describe('UserComponent1Component', () => {
  let component: UserComponent1Component;
  let fixture: ComponentFixture<UserComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
