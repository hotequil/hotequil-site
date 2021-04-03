export interface Btn{
    txt: string;
    ariaLabel: string;
    tooltip: string;
    click(...args: never[]|any[]): any;
    active(): boolean;
}
