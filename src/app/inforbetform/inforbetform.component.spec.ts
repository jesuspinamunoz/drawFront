import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforbetformComponent } from './inforbetform.component';

describe('InforbetformComponent', () => {
  let component: InforbetformComponent;
  let fixture: ComponentFixture<InforbetformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforbetformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforbetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
