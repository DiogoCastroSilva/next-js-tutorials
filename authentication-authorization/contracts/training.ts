interface ITraining {
  id: number;
  title: string;
  image: string;
  description: string;
}

type TTrainingList = ITraining[];

export type { ITraining, TTrainingList };
