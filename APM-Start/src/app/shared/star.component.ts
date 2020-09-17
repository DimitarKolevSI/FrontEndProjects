import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core' 

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();
    ngOnChanges(changes: SimpleChanges): void {
        //multiply by 75 because this the width of the style in .html file
        this.starWidth = this.rating * 75 / 5;
    }
    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}