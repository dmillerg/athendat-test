import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalNumberComponent } from './incremental-number.component';

describe('IncrementalNumberComponent', () => {
  let component: IncrementalNumberComponent;
  let fixture: ComponentFixture<IncrementalNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementalNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
