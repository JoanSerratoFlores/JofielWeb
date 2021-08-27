import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncioneslaboralesComponent } from './funcioneslaborales.component';

describe('FuncioneslaboralesComponent', () => {
  let component: FuncioneslaboralesComponent;
  let fixture: ComponentFixture<FuncioneslaboralesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncioneslaboralesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncioneslaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
