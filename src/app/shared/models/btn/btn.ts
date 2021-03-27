export interface Btn{
    txt: string;
    ariaLabel: string;
    click(...args: never[]|any[]): any;
    active(): boolean;
}
