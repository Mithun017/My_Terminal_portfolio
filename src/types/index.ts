export interface Project {
    id: string;
    title: string;
    description: string;
    details: string;
}

export interface FileSystemItem {
    type: 'text' | 'list' | 'system';
    content?: string;
    items?: Project[];
}

export interface FileSystem {
    [key: string]: FileSystemItem;
}
