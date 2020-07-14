import { TestBed } from '@angular/core/testing';

import { GuiaCaixaService } from './guia-caixa.service';

describe('GuiaCaixaService', () => {
  let service: GuiaCaixaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuiaCaixaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
