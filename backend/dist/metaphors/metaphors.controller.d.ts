import { MetaphorsService } from './metaphors.service';
export declare class MetaphorsController {
    private readonly metaphorsService;
    constructor(metaphorsService: MetaphorsService);
    getMetaphors(searchParams: {
        poetry: string;
        poet: string;
        title: string;
        metaphor: string;
    }): any;
}
