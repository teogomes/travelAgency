import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelCellComponent } from './admin-panel-cell.component';

describe('AdminPanelCellComponent', () => {
  let component: AdminPanelCellComponent;
  let fixture: ComponentFixture<AdminPanelCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
