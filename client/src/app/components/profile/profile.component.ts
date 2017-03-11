import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-map-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers : [  ]
})
export class ProfileComponent implements OnInit {

  chart : highcharts.ChartObject;
  @ViewChild('profile') profile : ElementRef;
  @Input('data') data;

  constructor() {
  }

  ngOnChanges(changes){
    if(changes['data'] && this.chart){
      console.log('changes dataaa')
      this.chart.series[0].remove();
      this.chart.addSeries(
        { name : 'Perfil', data : this.data }
      )
    }
  }

  ngOnInit() {
    this.chart = highcharts.chart(this.profile.nativeElement, {
        chart: {
            zoomType: 'x',
            events: {
                load: function () {
                    var self = this;
                    setTimeout (function () {
                        self.reflow ();
                    }, 100)
                }
            }
        },
        series: [
          {name: 'Perfil', data: this.data, type : 'line'}
        ]
    });

    /*this.chart.addSeries(
      {name: 'Poids', data: [75,75,75,76,77,78,77,77,78,75,75,77,77,76,75,76,77,76,78,75,77,75,78,77,77,78,77,78,76,75]}
    );
    this.chart.series[0].remove();*/

  }

}
