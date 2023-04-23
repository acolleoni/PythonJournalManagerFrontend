import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDTO } from 'src/dto/articleDTO';
import { AuthorDTO } from 'src/dto/authorDTO';
import { ArticlesService } from 'src/services/articles.service';
import { AuthorsService } from 'src/services/authors.service';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
    private authorsService: AuthorsService,
  ){}

  articleId: number;
  singleArticle: ArticleDTO;
  authors: AuthorDTO[];

  ngOnInit(): void {
    this.getArticleById();

  }

  getArticleById(){
    this.articleId = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.articleService.getSingleArticle(this.articleId).subscribe(
      (article) => {this.singleArticle = article,
                    this.getAuthors(),
                    console.log("ciao");
                    }
    )
  }

  getAuthors(){
    this.authorsService.getAllAuthors().subscribe(
      (authors) => this.authors = authors
    )
  }
}
