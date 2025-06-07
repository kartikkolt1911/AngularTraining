import { Component, Inject, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared-components/header-component/header-component.component';
import { SideNavComponent } from './shared-components/side-nav-component/side-nav-component.component';
import { CourseCardComponent } from './main-components/courses/course-card/course-card.component';
import { CourseImageComponent } from './main-components/courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';
import {COURSES} from '../app/db-data';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Course } from './main-components/courses/model/course';
import { CoursesService } from './main-components/courses/service/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SideNavComponent,CourseCardComponent,
    CourseImageComponent,
    NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  courses: Course[] = COURSES;

  coursesTotal = this.courses.length;

  constructor(
      private coursesService: CoursesService,
      @Inject(CONFIG_TOKEN) private config: AppConfig,
      private injector: Injector) {

  }

  ngOnInit() {

      //const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

      //customElements.define('course-title', htmlElement);

  }

  onEditCourse() {

          this.courses[1].category = 'ADVANCED';

  }

  save(course: Course) {
      this.coursesService.saveCourse(course)
          .subscribe(
              () => console.log('Course Saved!')
          );
  }

}
