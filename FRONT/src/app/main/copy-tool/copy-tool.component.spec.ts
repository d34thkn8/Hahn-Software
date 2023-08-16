import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyToolComponent } from './copy-tool.component';

describe('CopyToolComponent', () => {
  let component: CopyToolComponent;
  let fixture: ComponentFixture<CopyToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
