import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { setupCourses } from "../common/setup-test-data";
import { CoursesModule } from "../courses.module"
import { CoursesCardListComponent } from "./courses-card-list.component"

describe('CoursesCardListComponent', () => {
  // declarar todos os componentes usados no courseCardList e as diretivas
  // ou importar o modulo que ja tem importado dentro dele todos os componentes
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CoursesCardListComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
    })
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course list', () => {
    component.courses = setupCourses();
    // depois de adicionar qualquer dado ao componente, precisa notifica-lo
    // usando changeDetection
    // console.log(debugElement.nativeElement.outerHTML);
    fixture.detectChanges();
    const cards = debugElement.queryAll(By.css(".course-card"));


    expect(cards).toBeTruthy();
    expect(cards.length).toBe(12);
  });

})
