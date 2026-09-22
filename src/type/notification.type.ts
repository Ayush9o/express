export interface notification {
  _id: string;
  recipient: string;
  type: string;
  message: string;
  isRead: boolean;
  relatedTask?: string;
  createdAt: string;
}
