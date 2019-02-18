export interface EnergyResponse {
    Results: Results[];
}

export interface Results {
    Series: Series[],
    Messages: string,

}

export interface Series {
    name: string,
    columns: string[],
    values: any[][],
}