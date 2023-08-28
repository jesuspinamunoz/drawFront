import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingshopdataformComponent } from './bettingshopdataform.component';

describe('BettingshopdataformComponent', () => {
  let component: BettingshopdataformComponent;
  let fixture: ComponentFixture<BettingshopdataformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingshopdataformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingshopdataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
