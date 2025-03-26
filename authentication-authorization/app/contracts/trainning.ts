interface ITraining {
  id: number;
  title: string;
  image: string;
  description: string;
}

type ITrainingList = ITraining[];

export type { ITraining, ITrainingList };
