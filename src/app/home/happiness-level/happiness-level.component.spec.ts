import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessLevelComponent } from './happiness-level.component';

describe('HappinessLevelComponent', () => {
  let component: HappinessLevelComponent;
  let fixture: ComponentFixture<HappinessLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappinessLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HappinessLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
