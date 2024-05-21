import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent2Component } from './user-component2.component';

describe('UserComponent2Component', () => {
  let component: UserComponent2Component;
  let fixture: ComponentFixture<UserComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
