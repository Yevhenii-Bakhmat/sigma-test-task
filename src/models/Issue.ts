export class Issue {
  id: number;
  title: string;
  labels: [];
  assignee: [] | null;
  commentsCount: number;

  constructor(
    id: number,
    title: string,
    labels: [],
    assignee: [],
    commentsCount: number
  ) {
    this.id = id;
    this.title = title;
    this.labels = labels;
    this.assignee = assignee;
    this.commentsCount = commentsCount;
  }
}
