import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hotequil-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit{
    subject = 'The real utopia is there, several buildings falling apart, centralized education, stamped documents, false contracts, involuntary payments, positive papers and appeal to the fine, even as far as I know, you were not born with it.';
    word = 'Freedom.';

    ngOnInit(): void{
        console.log(this.word);
    }
}
