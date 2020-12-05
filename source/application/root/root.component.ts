import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hotequil-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit{
    ngOnInit(): void{
        console.log('A verdadeira utopia está aí, vários prédios caindo aos pedaços, educação centralizada, documentos carimbados, falsos contratos, pagamentos involuntários, papeis positivados e apelo ao fino, até pelo que eu sei, você não nasceu com isso.');
    }
}
