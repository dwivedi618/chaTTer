import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VarifyPage } from './varify.page';

describe('VarifyPage', () => {
  let component: VarifyPage;
  let fixture: ComponentFixture<VarifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VarifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
