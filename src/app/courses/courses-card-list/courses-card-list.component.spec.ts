import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { CoursesModule } from "../courses.module"
import { CoursesCardListComponent } from "./courses-card-list.component"

describe('CoursesCardListComponent', () => {
  // declarar todos os componentes usados no courseCardList e as diretivas
  // ou importar o modulo que ja tem importado dentro dele todos os componentes
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CoursesCardListComponent);
      component = fixture.componentInstance;
    })
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course list', () => {
  });

})
