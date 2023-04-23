import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ArticleDTO } from 'src/dto/articleDTO';
import { AuthorDTO } from 'src/dto/authorDTO';
import { CategoryDTO } from 'src/dto/categoryDTO';
import { IssueDTO } from 'src/dto/issueDTO';
import { ArticlesService } from 'src/services/articles.service';
import { AuthorsService } from 'src/services/authors.service';
import { CategoriesService } from 'src/services/categories.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  @Input() issue: IssueDTO;
  constructor(
    private articleService: ArticlesService,
    private categoriesService: CategoriesService,
    private authorsService: AuthorsService,
  ) { }

  articles: ArticleDTO[];
  categorieSet: Set<number> = new Set();
  categories: CategoryDTO[];
  authors: AuthorDTO[];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getArticleByIssue(this.issue.id);
  }

  getArticleByIssue(id: number) {
    this.articleService.getArticleByIssue(id).subscribe(
      (article) => this.articles = article,
      (e) => console.log(e),
      () => {this.getCategories(),
             this.getAuthors()}
    );
  }

  getCategories() {
    this.articles.forEach((article) => {
      this.categorieSet.add(article.category)
    });

    this.categoriesService.getAllCategories().subscribe(
      (category) => this.categories = category,
      (e) => console.log(e),
      () => {
        this.categories = this.categories.filter(
          (category) => this.categorieSet.has(category.id))
      });
  }

  getAuthors(){
    this.authorsService.getAllAuthors().subscribe(
      (authors) => this.authors = authors
    )
  }

}
