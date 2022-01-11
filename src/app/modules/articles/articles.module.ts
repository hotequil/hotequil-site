import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';
import { ArticlesItemComponent } from './item/articles-item.component';

@NgModule({
    declarations: [ArticlesComponent, ArticlesItemComponent],
    imports: [CommonModule],
    exports: [ArticlesComponent]
})
export class ArticlesModule{}
