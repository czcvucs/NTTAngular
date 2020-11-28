import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLoadingComponent } from './mat-loading.component';

describe('MatLoadingComponent', () => {
  let component: MatLoadingComponent;
  let fixture: ComponentFixture<MatLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatLoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain mat-spinner', () => {
    const matSpinner = fixture.debugElement.nativeElement.querySelector('spinner');
    expect(matSpinner).toBeDefined();
  });
});
