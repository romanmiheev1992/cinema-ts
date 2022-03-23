import axios from "axios"
import { GetStaticProps } from "next"
import { ImageHeader } from "../components"
import { NewsPage } from "../components"
import { Link } from "../helpers/links"
import { MenuInterface, TechnologiesInterface } from "../interfaces/interfaces"
import { withLayout } from "../Layout/Layout"

const News = ({menu, header, news}) => {

    return (
        <>
          <ImageHeader/>
          <NewsPage/>
        </>
    )
}

export default withLayout(News)


export const getStaticProps: GetStaticProps = async () => {
    const {data: menu} = await axios.get<MenuInterface[]>(Link.menu)
    const {data: news} = await axios.get<TechnologiesInterface[]>(Link.news)
    const {data: header} = await axios.get<string>(Link.mainImage)
    return {
      props: {
        menu,
        news,
        header
      }
    }
  }
  
  export interface StoksProps extends Record<string, unknown> {
    menu: MenuInterface[],
    stocks: TechnologiesInterface[],
    news: TechnologiesInterface[]
  }
  
  