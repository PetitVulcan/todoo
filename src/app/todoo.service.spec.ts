import { TestBed } from '@angular/core/testing';

import { TodooService } from './todoo.service';

describe('TodooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodooService = TestBed.get(TodooService);
    expect(service).toBeTruthy();
  });
});
