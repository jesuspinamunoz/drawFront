import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureinfoComponent } from './fixtureinfo.component';

describe('FixtureinfoComponent', () => {
  let component: FixtureinfoComponent;
  let fixture: ComponentFixture<FixtureinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
