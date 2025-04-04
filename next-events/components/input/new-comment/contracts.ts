interface INewCommentValues {
  email: string;
  name: string;
  text: string;
}

interface INewComment {
  onAddComment: (values: INewCommentValues) => void;
}

export type { INewComment, INewCommentValues };
