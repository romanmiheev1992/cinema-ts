
import { GetStaticProps } from "next";
import { Link } from "../helpers/links";
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
  const {data: menu} = await axios.get<MenuInterface[]>(Link.menu)
  const {data: filmList} = await axios.get<FilmListInterface[]>(Link.filmList)
  const {data: technologies} = await axios.get<TechnologiesInterface[]>(Link.tecnologies)
  const {data: stocks} = await axios.get<TechnologiesInterface[]>(Link.stocks)
  const {data: news} = await axios.get<TechnologiesInterface[]>(Link.news)
  const {data: header} = await axios.get<string>(Link.mainImage)
  
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



