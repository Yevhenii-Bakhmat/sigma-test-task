export class Issue {
  title: string;
  labels: string | [];
  assignee: string | [] | null;
  commentsCount: number;

  constructor(
    title: string,
    labels: string,
    assignee: string,
    commentsCount: number
  ) {
    this.title = title;
    this.labels = labels;
    this.assignee = assignee;
    this.commentsCount = commentsCount;
  }
}
