import { Pipe } from 'angular2/core';

/*
  # Description:

  Returns the last word

  # Usage:
  ```
  <span>{{ resume.name | last }}</div>
  ```
*/
@Pipe({ name: 'last' })
export class LastPipe {
  transform (value, args) {
    if (value) {
      value = value.split(' ');
      return value.splice((value.length - 1), 1);
    }
  }
}
