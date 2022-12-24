import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSaveComponent } from './select-save.component';

describe('FreeSelectSaveComponent', () => {
  let component: SelectSaveComponent;
  let fixture: ComponentFixture<SelectSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
