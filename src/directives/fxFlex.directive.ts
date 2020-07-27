import { Directive } from '@angular/core';
import { FlexDirective } from '@angular/flex-layout';

const SELECTOR = '[fxFlex.sd]';
const INPUTS = ['fxFlex.sd'];

@Directive({selector:SELECTOR,inputs:INPUTS})
export class fxFlexSD extends FlexDirective {
    protected inputs = INPUTS
}