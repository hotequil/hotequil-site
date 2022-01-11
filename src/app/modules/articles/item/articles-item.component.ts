import { Component, Input } from '@angular/core';

import { Article } from "../../../shared/models/articles/article";

@Component({
    selector: 'h-articles-item',
    templateUrl: './articles-item.component.html',
    styleUrls: ['./articles-item.component.scss']
})
export class ArticlesItemComponent{
    @Input() article!: Article;
}
