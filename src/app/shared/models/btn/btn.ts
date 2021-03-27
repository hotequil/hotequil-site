export interface Btn{
    txt: string;
    ariaLabel: string;
    click(...args: any[]): any;
    active(): boolean;
}
