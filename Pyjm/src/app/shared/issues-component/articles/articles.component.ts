import { Component, Input, OnInit } from '@angular/core';
import { ArticleDTO } from 'src/dto/articleDTO';
import { CategoryDTO } from 'src/dto/categoryDTO';
import { IssueDTO } from 'src/dto/issueDTO';
import { ArticlesService } from 'src/services/articles.service';
import { CategoriesService } from 'src/services/categories.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() issue: IssueDTO;
  constructor(
    private articleService: ArticlesService,
    private categoriesService: CategoriesService
  ) { }

  articles: ArticleDTO[];
  categorieSet: Set<number> = new Set();
  categories: CategoryDTO[];

  ngOnInit(): void {
    this.getArticleByIssue(this.issue.id)
  }

  getArticleByIssue(id: number) {
    this.articleService.getArticleByIssue(id).subscribe(
      (article) => this.articles = article,
      (e) => console.log(e),
      () => this.getCategories()
    );
  }

  getCategories() {
    this.articles.forEach((article) => {
      this.categorieSet.add(article.category)
    })

    this.categoriesService.getAllCategories().subscribe(
      (category) => this.categories = category,
      (e) => console.log(e),
      () => {
        this.categories = this.categories.filter(
          (category) => this.categorieSet.has(category.id)
        )
      }
    );

  }


}
