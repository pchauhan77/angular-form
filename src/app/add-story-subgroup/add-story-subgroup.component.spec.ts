import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStorySubgroupComponent } from './add-story-subgroup.component';

describe('AddStorySubgroupComponent', () => {
  let component: AddStorySubgroupComponent;
  let fixture: ComponentFixture<AddStorySubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStorySubgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStorySubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
