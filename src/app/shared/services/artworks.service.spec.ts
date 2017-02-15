/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtworksService } from './artworks.service';

describe('ArtworksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtworksService]
    });
  });

  it('should ...', inject([ArtworksService], (service: ArtworksService) => {
    expect(service).toBeTruthy();
  }));
});
