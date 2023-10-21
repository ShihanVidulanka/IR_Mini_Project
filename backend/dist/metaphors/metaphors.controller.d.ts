import { MetaphorsService } from './metaphors.service';
export declare class MetaphorsController {
    private readonly metaphorsService;
    constructor(metaphorsService: MetaphorsService);
    getMetaphors(searchParams: {
        searchPhrase: string;
        poetry: boolean;
        poet: boolean;
        title: boolean;
        metaphor: boolean;
    }): any;
}
