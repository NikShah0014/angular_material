import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPaginationComponent } from './server-pagination.component';

describe('ServerPaginationComponentComponent', () => {
  let component: ServerPaginationComponent;
  let fixture: ComponentFixture<ServerPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
