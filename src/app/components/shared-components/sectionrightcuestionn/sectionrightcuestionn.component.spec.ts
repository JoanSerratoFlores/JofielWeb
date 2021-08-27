import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectionrightcuestionnComponent } from './sectionrightcuestionn.component';

describe('SectionrightcuestionnComponent', () => {
  let component: SectionrightcuestionnComponent;
  let fixture: ComponentFixture<SectionrightcuestionnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionrightcuestionnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionrightcuestionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
