export interface ClevelandArtReply {
    data: Datum[];
}

export interface Datum {
    id:         number;
    title:      string;
    url:        string;
    images:     ImageTypes;
    updated_at: Date;
}

export interface ImageTypes {
    web:   ImageMetadata;
    print: ImageMetadata;
    full:  ImageMetadata;
}

export interface ImageMetadata {
    url:      string;
    width:    string;
    height:   string;
    filename: string;
    filesize: string;
}
