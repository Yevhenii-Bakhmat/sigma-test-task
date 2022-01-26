export class Issue {
  title: string;
  label: string;
  assignee: string | null;
  commentsCount: number;

  constructor(
    title: string,
    label: string,
    assignee: string,
    commentsCount: number
  ) {
    this.title = title;
    this.label = label;
    this.assignee = assignee;
    this.commentsCount = commentsCount;
  }
}
