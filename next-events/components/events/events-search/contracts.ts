interface ISearchTerms {
  year?: string;
  month?: string;
}

interface IEventsSearch {
  onSearch: (searchTerms: ISearchTerms) => void;
}

export type { IEventsSearch, ISearchTerms };
