import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css'
import { Sidebar } from "./Sidebar/Sidebar";
import { FunctionComponent } from "react";
import { IAppContext, AppContextProvider } from "../appContext/MenuContext";
import { Footer } from "./Footer/Footer";


export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={styles.Layout}>
            <Sidebar/>
            <div className={styles.Body}>
                {children}
            </div>   
            <Footer/>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent (props: T): JSX.Element {
        return (
            <AppContextProvider header={props.header} menu={props.menu} filmList={props.filmList} technologies={props.technologies} stocks={props.stocks} news={props.news} cinemas={props.cinemas}>
                <Layout>
                    <Component {...props} />
                </Layout>  
            </AppContextProvider>
            
        )
    }
}