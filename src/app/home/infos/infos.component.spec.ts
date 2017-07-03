import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosComponent } from './infos.component';

describe('InfoComponent', () => {
  let component: InfosComponent;
  let fixture: ComponentFixture<InfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
