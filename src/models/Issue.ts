export class Issue {
  title: string;
  labels: [];
  assignee: [] | null;
  commentsCount: number;

  constructor(title: string, labels: [], assignee: [], commentsCount: number) {
    this.title = title;
    this.labels = labels;
    this.assignee = assignee;
    this.commentsCount = commentsCount;
  }
}
