import { TestBed, inject } from '@angular/core/testing';

import { TodoAppService } from './todo-app.service';

describe('TodoAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoAppService]
    });
  });

  it('should be created', inject([TodoAppService], (service: TodoAppService) => {
    expect(service).toBeTruthy();
  }));
});
