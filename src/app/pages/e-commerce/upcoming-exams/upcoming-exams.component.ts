import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
    selector: 'ngx-upcoming-exams',
    templateUrl: './upcoming-exams.component.html',
    styleUrls: ['./upcoming-exams.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingExamsComponent implements OnInit, AfterViewInit {

    url: string;
    urls: any[] = [];
    counter: number;

    constructor(private ref: ChangeDetectorRef) {
        this.counter = 0;

        this.urls = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpgW' +
            'MT55mzWI3TFkrlsBLXkrViyZEvUKfvYxsIpwTQqgoi0QsG',

            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AA' +
            'Nd9GcRUdglmiU2ymGZ-dsLLZgcQXEA3KMS0ybHhXVh5wxNV8M7lQqCa',
        ];
    }

    ngOnInit() {
    }

    change() {
        this.url = this.urls[this.counter % 2];
        this.counter++;
    }

    ngAfterViewInit() {
        this.ref.detectChanges();
        this.url = this.urls[1];
    }

}
