import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentSearchPipe'
})
export class DocumentSearchPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    if (!value || value.length == 0) return items;
    // partial search filter
    if (field === 'search') {
      return items.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    } else {
      // category filter
      return items.filter(item =>
        item[field].toLowerCase().indexOf(value.toLowerCase()) != -1);
    }
  }

}
