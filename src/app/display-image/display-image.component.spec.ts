import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ClevelandArtReply } from '../cleveland-art-reply';
import { ClevelandArtService } from '../cleveland-art.service';
import { DisplayImageComponent } from './display-image.component';

describe('DisplayImageComponent', () => {
  let component: DisplayImageComponent;
  let fixture: ComponentFixture<DisplayImageComponent>;
  let mockArtService: jasmine.SpyObj<ClevelandArtService>;

  beforeEach(async () => {
    mockArtService = jasmine.createSpyObj('ClevelandArtService', ['getArtwork']);
    await TestBed.configureTestingModule({
      declarations: [ DisplayImageComponent ],
      providers: [ {provide: ClevelandArtService, useValue: mockArtService} ]
    })
    .compileComponents();

    // mock ClevelandArtService.getArtwork() here so it's available for the ngOnInit()
    mockArtService.getArtwork.and.returnValue(of({} as ClevelandArtReply));
    fixture = TestBed.createComponent(DisplayImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getArtwork', () => {
    const getArtworkSpy = mockArtService.getArtwork;
    expect(getArtworkSpy).toHaveBeenCalled();
  })
});
