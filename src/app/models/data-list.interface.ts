export interface DataList<T> {
    results: T[];
    info: {page: number, results: number};
}