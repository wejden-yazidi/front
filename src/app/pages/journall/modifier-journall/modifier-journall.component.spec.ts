import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierJournallComponent } from './modifier-journall.component';

describe('ModifierJournallComponent', () => {
  let component: ModifierJournallComponent;
  let fixture: ComponentFixture<ModifierJournallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierJournallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierJournallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
