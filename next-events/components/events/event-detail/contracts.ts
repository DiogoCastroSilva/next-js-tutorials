import { ReactNode } from 'react';

interface IEventLogistics {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

interface IEventSummary {
  title: string;
}

interface ILogisticsItem {
  icon: ReactNode;
}

export type { IEventLogistics, IEventSummary, ILogisticsItem };
