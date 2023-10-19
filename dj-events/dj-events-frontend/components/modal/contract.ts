interface IModal {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export type { IModal };
