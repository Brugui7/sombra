import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsDialogComponent } from './sensors-dialog.component';

describe('SensorsDialogComponent', () => {
  let component: SensorsDialogComponent;
  let fixture: ComponentFixture<SensorsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
