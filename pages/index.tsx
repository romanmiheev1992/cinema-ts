
import { GetStaticProps } from "next";
import { link } from "../helpers/links";
import { withLayout } from "../Layout/Layout";
import { FilmsList, News, Stoсks, ImageHeader, Technologies} from "../components";
import { FilmListInterface, MenuInterface, TechnologiesInterface } from "../interfaces/interfaces";
import { ContactUs } from "../components/ContactUs/ContactUs";
import axios from "axios";

const Home = ({menu, filmList, technologies, stocks, news, header}: HomeProps): JSX.Element => {

  return (
    <>
      <ImageHeader/>
      <FilmsList path="movie/"/>
      <Technologies/>
      <Stoсks/>
      <News/>
      <ContactUs/>
    </>
  );
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  const {data: menu} = await axios.get<MenuInterface[]>(link.menu)
  const {data: filmList} = await axios.get<FilmListInterface[]>(link.filmList)
  const {data: technologies} = await axios.get<TechnologiesInterface[]>(link.tecnologies)
  const {data: stocks} = await axios.get<TechnologiesInterface[]>(link.stocks)
  const {data: news} = await axios.get<TechnologiesInterface[]>(link.news)
  const {data: header} = await axios.get<string>(link.mainImage)
  
  return {
    props: {
      menu,
      filmList,
      technologies,
      stocks,
      news,
      header,
    }
  }
}

export interface HomeProps extends Record<string, unknown> {
  menu: MenuInterface[],
  filmList: FilmListInterface[],
  technologies: TechnologiesInterface[],
  stocks: TechnologiesInterface[],
  news: TechnologiesInterface[],
  header: string,
}



