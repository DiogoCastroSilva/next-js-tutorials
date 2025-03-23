interface IArchivePage {
  params: Promise<{ filters: string[] }>;
}

interface IFilteredContent {
  year: string;
}

export type { IArchivePage, IFilteredContent };
