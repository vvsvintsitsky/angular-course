import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChipComponent } from './user-chip.component';

describe('UserChipComponent', () => {
  let component: UserChipComponent;
  let fixture: ComponentFixture<UserChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserChipComponent);
    component = fixture.componentInstance;
    component.user = { firstName: 'asd', lastName: 'last', id: 1 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
