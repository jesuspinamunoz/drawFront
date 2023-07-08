import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivebetleaguesComponent } from './activebetleagues.component';

describe('ActivebetleaguesComponent', () => {
  let component: ActivebetleaguesComponent;
  let fixture: ComponentFixture<ActivebetleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivebetleaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivebetleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
