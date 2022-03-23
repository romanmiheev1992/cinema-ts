import axios from "axios"
import { GetStaticProps } from "next"
import { Form } from "../components"
import { Link } from "../helpers/links"
import { MenuInterface } from "../interfaces/interfaces"
import { withLayout } from "../Layout/Layout"


const Sign = ({menu, header}: SignProps):JSX.Element => {
    
    return (
        <>
            <Form/>
        </>
    )
}

export default withLayout(Sign)

export const getStaticProps: GetStaticProps = async () => {
    const {data: menu} = await axios.get<MenuInterface[]>(Link.menu)
    const {data: header} = await axios.get<string>(Link.mainImage)
    return {
        props: {
            menu,
            header
        }
    }
}

export interface SignProps extends Record<string, unknown>{
    menu: MenuInterface[],
    header: string
}