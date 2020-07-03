import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cateList: any[] = []; // 菜品列表
  public domain: string = ''; // 服务器的域名

  constructor(public common: CommonService) {
    this.domain = common.domain;
  }

  async ngOnInit(): Promise<any> {

    const api = 'api/productlist';
    await this.common.get(api).then(data => {
      this.cateList = data.result;
      console.log(this.cateList);
    });

    console.log(this.cateList);
  }

}
