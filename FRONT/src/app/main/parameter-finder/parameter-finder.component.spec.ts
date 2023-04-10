import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterFinderComponent } from './parameter-finder.component';

describe('ParameterFinderComponent', () => {
  let component: ParameterFinderComponent;
  let fixture: ComponentFixture<ParameterFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
