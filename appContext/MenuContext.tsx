import { createContext, PropsWithChildren, useState } from "react";
import { CinemaListsInterfase, FilmListInterface, MenuInterface, TechnologiesInterface } from "../interfaces/interfaces";

export interface IAppContext {
    menu: MenuInterface[],
    filmList: FilmListInterface[],
    technologies: TechnologiesInterface[],
    stocks: TechnologiesInterface[],
    news: TechnologiesInterface[],
    cinemas: CinemaListsInterfase[],
    header: string,
}

export const AppContext = createContext<IAppContext>({menu:[], filmList: [], technologies: [], stocks: [], news: [], cinemas: [], header: ''})


export const AppContextProvider = ({menu , children, filmList, technologies, stocks, news, cinemas, header}: PropsWithChildren<IAppContext>): JSX.Element => {

    const [ menuState, setMenuState] = useState<MenuInterface[]>(menu) 
    const filmListState: FilmListInterface[] = filmList
    const technologiesState: TechnologiesInterface[] = technologies
    const stocksState: TechnologiesInterface[] = stocks
    const newsState: TechnologiesInterface[] = news
    const cinemasState: CinemaListsInterfase[] = cinemas
    const headerState: string = header


    return <AppContext.Provider value={{ menu: menuState, filmList: filmListState, technologies: technologiesState, stocks: stocksState, news: newsState, cinemas: cinemasState, header: headerState}}>
        {children}
    </AppContext.Provider>

}
