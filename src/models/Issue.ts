export class Issue {
  id: number;
  title: string;
  labels: [];
  assignee: [] | null;
  commentsCount: number;
  status: string;
  body: string;

  constructor(
    id: number,
    title: string,
    labels: [],
    assignee: [],
    commentsCount: number,
    status: string,
    body: string
  ) {
    this.id = id;
    this.title = title;
    this.labels = labels;
    this.assignee = assignee;
    this.commentsCount = commentsCount;
    this.status = status;
    this.body = body;
  }
}
