
export interface Snippet {
    id: number;
    title: string;
    tags: string;
    description:string;
    makePublic:boolean;
    snippet: string;
    language: string;
    createdAt: Date;
    updatedAt: Date;
}
