export interface Pelicula {
    title: string;
    episode_id: number;
    opening_crawl?: string;
    director?: string;
    producer?: string;
    release_date?: Date;
    species?: Array<any>;
    startships?: Array<any>;
    vehicles?: Array<any>;
    characters?: Array<any>;
    url?: string;
    created?: String;
    edited?: String;
}