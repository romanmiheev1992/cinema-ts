import { useContext, useState } from 'react'
import styles from './CinemaSection.module.css'
import { AppContext, IAppContext } from '../../appContext/MenuContext'
import { CinemaListsInterfase, ImageListInterface, } from '../../interfaces/interfaces'
import { CinemaPageProps } from './CinemaSection.props'
import { useRouter } from 'next/dist/client/router'
import Close from './icon/close.svg'
import Right from './icon/right.svg'
import Left from './icon/left.svg'
import { CinemaSectionInfo } from './CinemaSectionInfo/CinemaSectionInfo'
import cn from 'classnames'
import { Scrollable } from '../Scrollable/Scrollable'
import { FilmsCinemaList } from '../FilmsCinemaList/FilmsCinemaList'
import { CinemaOptions } from '../CinemaOptions/CinemaOptions'
import { Button } from '../Button/Button'

export const CinemaSection = ({...props}: CinemaPageProps): JSX.Element => {

    const {cinemas} = useContext<IAppContext>(AppContext)
    const route = useRouter()

    const [slideNum, setSlideNum] = useState<number>()
    const [slideLength, setSlideLength] = useState<number>()
    const [slideToggle, setSlideToggle] = useState<boolean>(false)
    const [sliderMotion, setSliderMotion] = useState<number>(0)

    const slideNext = () => {
        if(sliderMotion >= -175) {
             setSliderMotion(sliderMotion - 175)
        }
    }

    const slidePrev = () => {
        if(sliderMotion <= -175) {
            setSliderMotion(sliderMotion + 175)
        }
    }

    const BigSlider = (link: ImageListInterface, num:ImageListInterface["num"]): JSX.Element => {
        
        const increment = (num: ImageListInterface["num"]) => {
          
           if(num === slideLength) {
               return  setSlideNum(0)
           } else {
               return setSlideNum(num + 1)
           }
        }
        const decrement = (num: number) => {
            if(num === 0) {
                return setSlideNum(slideLength)
            } else {
                return setSlideNum(num - 1)
            }
        }
        return (
             <div className={styles.BigSlider}>
                <div 
                    className={styles.Slide}
                    style={{backgroundImage: `url('${link.link.big}')`}}
                >
                    <div className={styles.closeButton} onClick={() => setSlideToggle(false)}>
                        <Close/>
                    </div>
                    <div onClick={() => decrement(link.num)} className={cn(styles.prevButton, styles.button)}>
                        <Left/>
                    </div>
                    <div onClick={() => increment(link.num)} className={cn(styles.nextButton, styles.button)}>
                        <Right/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.CinemaPage} {...props}>
            
            {
             cinemas && cinemas.map((cinema: CinemaListsInterfase) => {
                if(cinema.alias === route.query.alias) {
                    return (
                        <div key={cinema.alias} >
                         <h3>{cinema.title}</h3>
                            <div className={styles.CinemaSlider}>
                            <Button className={cn(styles.SliderButton, styles.SliderButtonLeft)} onClick={() => slidePrev()}><Left/></Button>
                                <div className={styles.CinemaWrapper}>
                                    <Scrollable
                                        style={{marginLeft:`${sliderMotion}px`, width:`${cinema.imagesList.length * 175}px`}}
                                    >
                                        {    
                                            cinema.imagesList.map((image: ImageListInterface, i: number) => (
                                                <div key={i}>
                                                    <div 
                                                        className={styles.CinemaSlide}
                                                        key={i}
                                                        style={{backgroundImage: `url('${image.small}')`}}
                                                        onClick={() => {
                                                            setSlideToggle(true)
                                                            setSlideNum(i)
                                                            setSlideLength(cinema.imagesList.length - 1)
                                                        }}
                                                    >
                                                    </div>
                                                
                                                {
                                                    slideToggle && i === slideNum
                                                    ?  <BigSlider link={cinema.imagesList[slideNum]}  num={slideNum}/>
                                                    : null
                                                }
                                                </div>

                                            ))           
                                        }    
                                    </Scrollable>
                                </div>
                               
                                <Button className={cn(styles.SliderButton, styles.SliderButtonRight)} onClick={() => slideNext()}><Right/></Button>
                            </div>
                            <CinemaOptions options={cinema.options} />
                            <CinemaSectionInfo/>
                            <FilmsCinemaList />
                        </div>
                    )
                }})
            }
        </div>
    )
}

