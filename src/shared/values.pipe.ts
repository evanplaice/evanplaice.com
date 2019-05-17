import { Pipe, PipeTransform } from '@angular/core';

/*
  # Description:

  Tranlates a dictionary into an array of values.

  # Usage:
  ```
  <div *ng-for="#value of object | values"> </div>
  ```
*/
@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform{
  transform (value, args) {
    return Object.keys(value).map(key => value[key]);
  }
}
