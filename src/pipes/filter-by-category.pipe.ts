import {Pipe, PipeTransform} from '@angular/core';
import { Course } from '../app/main-components/courses/model/course';

@Pipe({
    name: 'filterByCategory',
    standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {


    transform(courses: Course[], category:string) {

        console.log('Called transform()');

        return courses.filter(course => course.category === category);
    }

}
