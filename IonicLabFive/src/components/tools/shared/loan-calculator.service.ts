import { Injectable } from '@angular/core';

import { PaymentAmortizationModel } from '../shared/payment-amortization.model';

@Injectable()
export class LoanCalculatorService {

    public calculateCompoundInterest(principle: number, interestRate: number, loanLength: number): any {
        let balance: number = principle;
        let periods: number = loanLength * 12;
        let monthlyRate: number = interestRate / 100 / 12;
        let monthlyPayment: number = (monthlyRate / (1 - (Math.pow((1 + monthlyRate), -(periods))))) * balance;
        let schedule: Array<PaymentAmortizationModel> = new Array<PaymentAmortizationModel>();
        let scheduleItem: PaymentAmortizationModel;

        for (let i: number = 0; i < periods; i++) {
            let interestForMonth: number = balance * monthlyRate;
            let principalForMonth: number = monthlyPayment - interestForMonth;
            balance -= principalForMonth;
            scheduleItem = {
                id: i,
                interestForMonth: this.parse(interestForMonth),
                principleForMonth: this.parse(principalForMonth),
                endOfMonthBalance: this.parse(balance)
            };
            schedule.push(scheduleItem);
        }

        return schedule;
    }

    public parse(numberToParse: number): number {
        let parsedNumber: number;
        parsedNumber = Math.round(numberToParse * Math.pow(10, 2)) / Math.pow(10, 2);
        return parsedNumber;
    };
}
