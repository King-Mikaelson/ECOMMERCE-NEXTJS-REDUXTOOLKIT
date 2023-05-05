interface Include {
    quantity: number;
    item:     string;
}

 interface Image {
    mobile:  string;
    tablet:  string;
    desktop: string;
}

 interface Other {
    slug:      string;
    name:      string;
    image:     Image;
    cartname?: string;
}

 interface Gallery {
    first:  Image;
    second: Image;
    third:  Image;
}

export interface Product {
    id:          number;
    slug:        string;
    name:        string;
    quantity?:    number;
    cartname:    string;
    image:       Image;
    category:    string;
    new:         boolean;
    price:       number;
    description: string;
    features:    string;
    includes:    Include[];
    gallery:     Gallery;
    others:      Other[];
}




export interface shopProduct {
    id:          number;
    quantity:    number;
    slug:        string;
    name:        string;
    cartname:    string;
    image:       Image;
    category:    string;
    new:         boolean;
    price:       number;
    description: string;
    features:    string;
    includes:    Include[];
    gallery:     Gallery;
    others:      Other[];
}





