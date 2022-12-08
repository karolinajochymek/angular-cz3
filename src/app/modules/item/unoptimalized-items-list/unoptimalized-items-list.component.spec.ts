import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoptimalizedItemsListComponent } from './unoptimalized-items-list.component';

describe('UnoptimalizedItemsListComponent', () => {
  let component: UnoptimalizedItemsListComponent;
  let fixture: ComponentFixture<UnoptimalizedItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnoptimalizedItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnoptimalizedItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
