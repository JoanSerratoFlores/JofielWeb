import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCargararchivocvComponent } from './modal-cargararchivocv.component';

describe('ModalCargararchivocvComponent', () => {
  let component: ModalCargararchivocvComponent;
  let fixture: ComponentFixture<ModalCargararchivocvComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCargararchivocvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCargararchivocvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
