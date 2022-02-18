import axios from "axios"
import { GetStaticProps } from "next"
import { ImageHeader } from "../components"
import { NewsPage } from "../components/NewsPage/NewsPage"
import { link } from "../helpers/links"
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
    const {data: menu} = await axios.get<MenuInterface[]>(link.menu)
    const {data: news} = await axios.get<TechnologiesInterface[]>(link.news)
    const {data: header} = await axios.get<string>(link.mainImage)
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
  
  