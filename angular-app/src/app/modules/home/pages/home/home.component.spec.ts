import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DataService } from '../../services';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([DataService], (dataService: DataService) => {
    expect(component).toBeTruthy();
  }));

  it('should call dataService', inject([HttpClientTestingModule], (httpClient: HttpClientTestingModule) => {
    const dataService = fixture.debugElement.injector.get(DataService);
    const dataServiceSpy = spyOn(dataService, 'getData').and.callThrough();
    component.fetchData();
    expect(dataServiceSpy).toHaveBeenCalledTimes(1);
  }));
});
