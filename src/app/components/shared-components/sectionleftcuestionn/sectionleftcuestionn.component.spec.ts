import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectionleftcuestionnComponent } from './sectionleftcuestionn.component';

describe('SectionleftcuestionnComponent', () => {
  let component: SectionleftcuestionnComponent;
  let fixture: ComponentFixture<SectionleftcuestionnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionleftcuestionnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionleftcuestionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
