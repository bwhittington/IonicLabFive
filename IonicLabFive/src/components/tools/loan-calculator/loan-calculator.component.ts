import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { PercentageValidator } from '../../../validators/percentage';
import { LoanCalculatorService } from '../shared/loan-calculator.service';
import { PaymentAmortizationModel } from '../shared/payment-amortization.model';
import { D3Service, D3, RGBColor, Selection } from 'd3-ng2-service';

@Component({
    selector: 'loan-calculator',
    templateUrl: 'loan-calculator.html'
})

export class LoanCalculator {

    @ViewChild('loanCalculatorSlider') public loanCalculatorSlider: any;

    public slideCalculatorForm: FormGroup;
    public submitAttempt: boolean = false;

    public navCtrl: NavController;
    public formBuilder: FormBuilder;
    public loanCalculatorService: LoanCalculatorService;
    public amortizationSchedule: Array<PaymentAmortizationModel> = new Array<PaymentAmortizationModel>();

    private d3: D3;

    constructor(navCtrl: NavController, formBuilder: FormBuilder, loanCalculatorService: LoanCalculatorService, d3Service: D3Service) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loanCalculatorService = loanCalculatorService;

        this.d3 = d3Service.getD3();

        this.slideCalculatorForm = this.formBuilder.group({
            principal: ['', Validators.required],
            annualInterestRate: ['', PercentageValidator.isValid],
            loanLength: ['', Validators.required],
        });
    }

    public next(): void {
        this.loanCalculatorSlider.slideNext();
    }

    public prev(): void {
        this.loanCalculatorSlider.slidePrev();
    }

    public submit(): void {
        this.submitAttempt = true;

        if (!this.slideCalculatorForm.valid) {
            this.loanCalculatorSlider.slideTo(0);
        }
        else {
            console.log(this.slideCalculatorForm.value);
            this.submitAttempt = false;

            this.amortizationSchedule = this.loanCalculatorService.calculateCompoundInterest(
                this.slideCalculatorForm.controls.principal.value,
                this.slideCalculatorForm.controls.annualInterestRate.value,
                this.slideCalculatorForm.controls.loanLength.value);
            this.loanCalculatorSlider.slideTo(1);

            let totalPrincipal: number = 0;
            let totalInterest: number = 0;
            let data: Array<number> = new Array<number>();
            for (let i: number = 0; i < this.amortizationSchedule.length; i++) {
                totalPrincipal += this.amortizationSchedule[i].principleForMonth;
                totalInterest += this.amortizationSchedule[i].interestForMonth;
            }
            data.push(Math.floor(totalPrincipal));
            data.push(Math.floor(totalInterest));

            let svg: any = this.d3.select('svg'),
                width = svg.attr('width'),
                height = svg.attr('height'),
                radius = Math.min(width, height) / 2,
                g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

            let color: any = this.d3.scaleOrdinal(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

            let pie: any = this.d3.pie()
                .sort(null)
                .value(data[0] + data[1]);

            let path: any = this.d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            let label: any = this.d3.arc()
                .outerRadius(radius - 40)
                .innerRadius(radius - 40);

            let arc: any = g.selectAll('.arc')
                .data(pie(data))
                .enter().append('g')
                .attr('class', 'arc');

            arc.append('path')
                .attr('d', path)
                .attr("fill", (datum, index) => {
                    return color(`${index}`);
                });

            arc.append('text')
                .attr('transform', function (d) { return 'translate(' + label.centroid(d) + ')'; })
                .attr('dy', '0.35em')
                .text((datum, index) => data[index])
                .style("text-anchor", "middle");
        }
    }
}