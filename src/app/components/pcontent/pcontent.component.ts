import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; // 动态路由传值

import { CommonService } from '../../services/common.service'; // 公共的http服务

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {

  public domain: string = '';
  public cateInfo: any = {};

  constructor(public route: ActivatedRoute, public common: CommonService) {
    this.domain = common.domain;
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.requestContent(data.id);
    });
  }

  requestContent(id: any): void {
    /* 根据home页传递过来的id值，查找相应的页面信息 */
    const api: string = 'api/productcontent?id=' + id;
    this.common.get(api).then((response) => {
      this.cateInfo = response.result[0];
      console.log(this.cateInfo);
    });
  }



}
