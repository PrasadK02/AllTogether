import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkpediaComponent } from './pkpedia.component';

describe('PkpediaComponent', () => {
  let component: PkpediaComponent;
  let fixture: ComponentFixture<PkpediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PkpediaComponent]
    });
    fixture = TestBed.createComponent(PkpediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
