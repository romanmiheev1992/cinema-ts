import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { FilmSection } from "../../components/FilmSection/FilmSection"
import { link } from "../../helpers/links"
import { CinemaListsInterfase, FilmListInterface, MenuInterface, TokenInterface } from "../../interfaces/interfaces"
import { withLayout } from "../../Layout/Layout"


const Film = ({menu, header, cinemas, filmList}: FilmPageProps): JSX.Element => {
    return (
        <>
            <FilmSection/>
        </>
    )
}

export default withLayout(Film)

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: string[] = []
    const {data: filmList} = await axios.get<FilmListInterface[]>(link.filmList)
    filmList.map(film => {
        return paths.push(`/movie/${film.alias}`)
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const {data: menu} = await axios.get<MenuInterface[]>(link.menu)
    const {data: header} = await axios.get<string>(link.mainImage)
    const {data: cinemas} = await axios.get<CinemaListsInterfase[]>(`${link.cinemas}`)
    const {data: filmList} = await axios.get<FilmListInterface[]>(link.filmList)
    return {
        props: {
            menu,
            header,
            cinemas,
            filmList,

        }
    }
}

export interface FilmPageProps extends Record<string, unknown> {
    menu: MenuInterface[],
    cinemas: CinemaListsInterfase[],
    header: string,
    filmList: FilmListInterface[],
}
  
  