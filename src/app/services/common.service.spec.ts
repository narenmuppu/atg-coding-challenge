import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CommonService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });



  // expect(request.request.body).toBe('GET');

  it('should retrieve game type from API via GET', () => {
    service.getGameTypeData('V4').subscribe((data: any) => {
      expect(data.betType).toBe('V4');
    });
    const request = httpTestingController.expectOne(`${service.gameTypeAPI}V4`);
    expect(request.request.method).toBe('GET');
  });
});
