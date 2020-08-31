import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationToastersComponent } from './notification-toasters.component';

describe('NotificationToastersComponent', () => {
  let component: NotificationToastersComponent;
  let fixture: ComponentFixture<NotificationToastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationToastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationToastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
