import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtryComponent } from './secondtry.component';

describe('SecondtryComponent', () => {
  let component: SecondtryComponent;
  let fixture: ComponentFixture<SecondtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondtryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
