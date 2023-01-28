import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaheaderComponent } from './megaheader.component';

describe('MegaheaderComponent', () => {
  let component: MegaheaderComponent;
  let fixture: ComponentFixture<MegaheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
