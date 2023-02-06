import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppsComponent;
  let fixture: ComponentFixture<AppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
