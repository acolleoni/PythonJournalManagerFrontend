import { Component } from '@angular/core';
import { ArticleDTO } from 'src/dto/articleDTO';
import { CategoryDTO } from 'src/dto/categoryDTO';
import { IssueDTO } from 'src/dto/issueDTO';
import { ArticlesService } from 'src/services/articles.service';
import { IssuesService } from 'src/services/issues.service';

@Component({
  selector: 'app-last-issue',
  templateUrl: './last-issue.component.html',
  styleUrls: ['./last-issue.component.css']
})
export class LastIssueComponent {

  constructor(private issuesService: IssuesService, private articleService: ArticlesService) {
  }

  numeri: IssueDTO[];
  lastIssue: IssueDTO;
  articles: ArticleDTO[];
  categories: Set<number> = new Set();

  ngOnInit(): void {

    this.getLastIssueArticle();

  }

  getLastIssueArticle() {
    this.issuesService.getall().subscribe(
      numeri => {
        this.numeri = numeri
        this.lastIssue = numeri[numeri.length - 1]
      },
      (e) => console.log(e),
      () => this.getArticleByIssue(this.lastIssue.id)
    );
  }

  getArticleByIssue(id: number) {
    this.articleService.getArticleByIssue(id).subscribe(article => this.articles = article, (e) => console.log(e), () =>{this.getCategories();
    });
  }

  getCategories() {
    this.articles.forEach((article) => {
      article.category.forEach((category) =>{
        this.categories.add(category);

      })
    })
  }

}
