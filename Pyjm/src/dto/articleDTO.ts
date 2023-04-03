import { AuthorDTO } from "./authorDTO"
import { CategoryDTO } from "./categoryDTO"
import { IssueDTO } from "./issueDTO"

export class ArticleDTO {
  id: number
  title: string;
  abstract: string;
  imgUrl: string
  pdf: string;
  issue: number;
  author: number[];
  category: number[];

}
