import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyweightComponent } from './heavyweight.component';

describe('HeavyweightComponent', () => {
  let component: HeavyweightComponent;
  let fixture: ComponentFixture<HeavyweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeavyweightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
