import { Pipe } from '@angular/core'

@Pipe({
    name: 'orderby'
})

export class OrderByPipe {
    transform(array: any, arg: string): any {
        array.sort((a: any, b: any) => {
            if (a[arg] < b[arg]) return -1;
            if (a[arg] > b[arg]) return 1;
            return 0;
        })
        return array;
    }
}