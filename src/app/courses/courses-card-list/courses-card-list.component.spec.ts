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

  it('should display the first course', () => {
    component.courses = setupCourses();
    fixture.detectChanges();
    const course = component.courses[0];
    const card = debugElement.query(By.css(".course-card:first-child")),
          title = card.query(By.css("mat-card-title")),
          image = card.query(By.css("img"));

    expect(card).toBeTruthy();
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    expect(image.nativeElement.src).toBe(course.iconUrl);
  })

})
