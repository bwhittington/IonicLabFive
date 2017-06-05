import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';

import { ToolsPage } from './tools';
import { LoanCalculator } from '../../components/tools/loan-calculator/loan-calculator.component';
import { LoanCalculatorService } from '../../components/tools/shared/loan-calculator.service';
import { D3Service } from 'd3-ng2-service';

@NgModule({
    declarations: [
        ToolsPage,
        LoanCalculator
    ],
    imports: [
        IonicModule,
        IonicPageModule.forChild(ToolsPage)
    ],
    exports: [
        ToolsPage,
        LoanCalculator
    ],
    providers: [LoanCalculatorService, D3Service]
})

export class ToolsPageModule { }