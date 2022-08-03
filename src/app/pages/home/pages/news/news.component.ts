import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: any[] = [];
  constructor(private articleService: ArticlesService) { }
  ngOnInit(): void {
    this.articleService.getA(1, 10).subscribe((datas: any) => {
      for(let data of datas)
        this.articles.push(data);
    });
    ;
  }

  onReadMore(input: string) {
    window.open(input, '_blank');
  }

}
