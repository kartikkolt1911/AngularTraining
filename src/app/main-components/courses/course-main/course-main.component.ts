import { Component, Inject, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseImageComponent } from '../course-image/course-image.component';
import { NgForOf } from '@angular/common';
import { COURSES } from '../../../db-data';

import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service'
import { AppConfig, CONFIG_TOKEN } from '../../../config';
import { FilterByCategoryPipe } from '../../../../pipes/filter-by-category.pipe';


@Component({
  selector: 'app-course-main',
  standalone: true,
  imports: [CourseCardComponent,
    CourseImageComponent, NgForOf,FilterByCategoryPipe],
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.scss'
})

export class CourseMainComponent {
  courses: Course[] = COURSES;
  selectedCourseChild: number;
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

    this.courses[2].category = 'ADVANCED';

  }

  save(course: Course) {
    // this.coursesService.saveCourse(course)
    //     .subscribe(
    //         () => console.log('Course Saved!')
    //     );
    this.selectedCourseChild = course.id;
  }

}
