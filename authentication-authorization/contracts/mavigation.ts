type TSearchParams = { [key: string]: string | string[] | undefined };

type TNavigationSearchParams = Promise<TSearchParams>;

export type { TNavigationSearchParams, TSearchParams };
