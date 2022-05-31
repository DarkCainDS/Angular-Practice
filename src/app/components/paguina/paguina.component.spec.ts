import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaguinaComponent } from './paguina.component';

describe('PaguinaComponent', () => {
  let component: PaguinaComponent;
  let fixture: ComponentFixture<PaguinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaguinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaguinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
