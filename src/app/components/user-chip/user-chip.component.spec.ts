import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChipComponent } from './user-chip.component';

describe('UserChipComponent', () => {
  let component: UserChipComponent;
  let fixture: ComponentFixture<UserChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
