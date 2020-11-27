import { Component, OnInit } from '@angular/core';
import { VData } from '../../models';
import { DataService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoadingResults = true;
  dataSource: VData;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    await this.dataService.getJSON().then(x => {
      setTimeout(() => {
        this.isLoadingResults = false;
        this.dataSource = x;
        console.log(x);
      }, 2000);
    });
  }
}
