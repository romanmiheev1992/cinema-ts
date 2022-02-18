import axios from "axios"
import {GetStaticProps } from "next"
import { ImageHeader } from "../components"
import { link } from "../helpers/links"
import { CinemaListsInterfase, MenuInterface } from "../interfaces/interfaces"
import { withLayout } from "../Layout/Layout"
import {CinemasList} from '../components'

const Cinemas = ({cinemas, menu, header}: CinemasProps): JSX.Element => {

    return (
      <>
        <ImageHeader/>  
        <CinemasList/> 
      </>
    )

}
export default withLayout(Cinemas)

export const getStaticProps: GetStaticProps = async () => {
  
    const {data: menu} = await axios.get<MenuInterface[]>(link.menu)
    const {data: cinemas} = await axios.get<CinemaListsInterfase[]>(link.cinemas )
    const {data: header} = await axios.get<string>(link.mainImage)
    return {
      props: {
        cinemas,
        menu,
        header
      }
    }
}
  export interface CinemasProps extends Record<string, unknown> {
    cinemas: CinemaListsInterfase[],
    menu: MenuInterface[],
    header: string
  }




