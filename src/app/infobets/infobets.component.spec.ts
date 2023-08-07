import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobetsComponent } from './infobets.component';

describe('InfobetsComponent', () => {
  let component: InfobetsComponent;
  let fixture: ComponentFixture<InfobetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
