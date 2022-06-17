import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardflipComponent } from './cardflip.component';

describe('CardflipComponent', () => {
  let component: CardflipComponent;
  let fixture: ComponentFixture<CardflipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardflipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardflipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
