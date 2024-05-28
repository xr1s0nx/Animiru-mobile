export interface TAnime {
    id: number;
    title: {
        ru: string;
        jap: string;
    };
    description: string;
    images: {
        banner: string;
        screens: string[];
    };
}