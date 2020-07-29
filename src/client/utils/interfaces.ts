export interface IBlog {
    id?: number;
    title?: string;
    content?: string;
    image_url?: string;
    authorid?: number;
    created_at: Date;
    
}

export interface IAuthor {
    id?: number;
    email?: string;
    name?: string;
    password?: string;
    created_at?: Date; 
}

export interface ITag {
    id?: number;
    name?: string;
    created_at?: Date;
}


export interface IBlogtag {
    blogid?: number;
    tagid?: number;
    
}

export interface CannedResponse {
    insertId?: number;
    affectedRows?: number;
    changedRows?: number;
}