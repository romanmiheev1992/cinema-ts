
export interface MenuInterface {
    alias: string,
    title: string,
}

export interface FilmListInterface {
    name: string,
    alias: string,
    description: string,
    title: string,
    age: number,
    actors: string,
    director: string,
    duration: string,
    country: string,
    image: string
    imagePoster: string,
    trailer: string,
    imageSmall: string,
    imageCard: string,
    onRental: onRentalProps[]
}

export interface TechnologiesInterface {
    src: string,
    header: string,
    text: string
}

export interface ImageListInterface {
    link: Link,
    num: number,
    big?: string,
    small?: string 
}

export interface Link {
    big?: string,
    small?: string 
}

export interface InfoListInterface {
    armchears: string,
    childHall: boolean,
    formatShow: string,
    formatSound: string,
    screen: string
    seats: number
}

export interface CinemaListsInterfase {
    title: string,
    underground: string,
    address: string,
    phone: string,
    openingHours: string,
    holls: number,
    options: CinemaListsOptionInterfase,
    image: string,
    alias: string,
    imagesList: ImageListInterface[],
    info: InfoListInterface
}

export interface CinemaListsObjInterfase {
    title: string,
    underground: string,
    address: string,
    phone: string,
    openingHours: string,
    holls: number,
    options: CinemaListsOptionInterfase,
    image: string,
    alias: string
}

export interface CinemaListsOptionInterfase {
    projector3d: boolean,
    dolbyAtmosSound: boolean,
    vipHall: boolean,
    cinenaBar: boolean,
    gameZone: boolean,
    parking: boolean,
    DBox: boolean,
}

export interface timePriseProps {
    timePrise: tpProps[]
}

export interface tpProps {
    hall: number,
    price: number,
    time: string
}

export interface onRentalProps {
    alias: string,
    name: string,
    session2D:  timePriseProps,
    session3D: timePriseProps,
    sessionDolbyAtmos: timePriseProps
}

export interface TokenInterface {
    displayName: string
    email: string
    expiresIn: string
    idToken: string
    kind: string
    localId:string
    refreshToken: string
    registered: boolean
}

export interface ContactUsPropsForm {
    name: string,
    email: string,
    textarea: string
}

export interface GetTicketProps {
    time: string,
    price: number,
    hall: number,
    name: string,
    img: string,
    link: string
}

export interface Arr {
    row: number,
    seat: number,
    ocupate: boolean
}

export interface OrderDataProps {
    email: any,
    seats: Arr[],
    name: string,
    hall: number,
    time: string
}

export interface signinProps {
    returnSecureToken?: boolean,
    email?: string,
    password?: string
}

export interface FilmsRequestProps {
    actors: string
    age: number
    country: string
    description: string
    director: string
    duration: string
    name:string
    title: string
    image: string
}
