import style from './howToChild.module.css'
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {arrOfHowTo} from './json'
import {arr} from '../explore projects/json'

export default function HowToChild(callback, deps) {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const form_ = useRef(null)
    const navigate = useNavigate()
    const handlePrev = () => {
        const getWidth = document.querySelector(`.${style.slide}`).offsetWidth;
        form_.current.scrollLeft -= (getWidth + 16) * 5
    }
    const handleNext = () => {
        const getWidth = document.querySelector(`.${style.slide}`).offsetWidth;
        form_.current.scrollLeft += (getWidth + 16) * 5
    }

    const location = useLocation()
    const [project, setProject] = useState([])
    const [slides, setSlides] = useState([])
    useEffect(() => {
        arrOfHowTo.forEach((data, index) => {
            if (data.nameProject === location.state.childOfProject) {
                setProject(data)
            }
        })

        arr.forEach((data, index) => {
            if (data.nameProject === location.state.nameProject) {
                let tempArr = []
                data.projects.forEach((data, index) => {
                    if (data.name === location.state.childOfProject) {
                        return
                    } else {
                        tempArr.push(data)
                        setSlides(tempArr)
                    }
                })
            }
        })
    }, [location.state])
    return (
        <>
            <div className={style.howTo}>
                <ul className={style.navBar}>
                    <li>
                        Home
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faChevronRight}/></i>
                    </li>
                    <li>
                        How to
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faChevronRight}/></i>
                    </li>
                    <li>
                        {location.state.nameProject}
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faChevronRight}/></i>
                    </li>
                    <li>
                        {location.state.childOfProject}
                    </li>
                </ul>
                <div className={style.titleHowTo}>
                    {project.title}
                </div>
                <div className={style.descriptionHowTo}>
                    {project.description}
                </div>
                <div className={style.bannerTutorial}>
                    <div className={style.bannerImg}>
                        <img alt={"banner"}
                             src={project.illustration}/>
                        <div className={style.coatingBanner}>
                            <div className={style.nameProject}>
                                {
                                    location.state.childOfProject
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style.tutorial}>
                        <div className={style.titleTutorial}>
                            {project.stage?.title}
                        </div>
                        <ul>
                            {
                                project.stage?.steps?.map((data, index) => (
                                    <li key={index}>
                                        <span>{index + 1}</span>
                                        <div className={style.itemTutorial}>
                                            <div className={style.itemTitle}>
                                                {data.titleStep}
                                            </div>
                                            <div className={style.itemContent}>
                                                {data.content}
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={style.slider}>
                    <div className={style.sliderNav}>
                        <div className={style.titleNav}>
                            What do you want to decorate?
                        </div>
                        <div className={style.navDashLine}></div>
                        <div className={style.buttons}>
                            <button className={style.prev} onClick={handlePrev}>
                                <i><FontAwesomeIcon icon={faArrowLeft}/></i>
                            </button>
                            <button className={style.next} onClick={handleNext}>
                                <i><FontAwesomeIcon icon={faArrowRight}/></i>
                            </button>
                        </div>
                    </div>
                    <div className={style.form} ref={form_}>
                        <div className={style.slides}>
                            {
                                slides.map((data, index) => (
                                    <div onClick={() => navigate(`/diy/howTo/${data.name}`, {
                                        state: {
                                            nameProject: location.state.nameProject,
                                            childOfProject: data.name
                                        }
                                    })} className={style.slide}
                                         key={index}>
                                        <img alt={"slide"}
                                             src={data.srcIllustration}/>
                                        <div className={style.coating}></div>
                                        <div className={style.titleSlide}>
                                            {
                                                data.name
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={style.title}>
                    <div className={style.dashLineLeft}></div>
                    <font>
                        posts
                    </font>
                    <div className={style.dashLineRight}></div>
                </div>
                <div className={style.posts}>
                    {
                        project.posts?.map((data, index)=>(
                            <div className={style.post} key={index}>
                                <img alt={"imgPost"}
                                     src={data.srcImg}/>
                                <div className={style.content}>
                                    <div className={style.titlePost}>
                                        <font>
                                            {data.titlePost}
                                        </font>
                                    </div>
                                    <div className={style.infPost}>
                                        <img alt={"avatar"}
                                             src={data.avatar}/>
                                        <font>{data.nameUser}</font>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className={style.paging}>
                    <ul className={style.list}>
                        <li className={`${style.item} ${style.active}`}>1</li>
                        <li className={style.item}>2</li>
                        <li className={style.item}>3</li>
                        <li className={style.item}>4</li>
                        <li className={style.item}>5</li>
                        <li className={style.item}>6</li>
                        <li className={style.item}>7</li>
                        <li className={style.item}>8</li>
                    </ul>
                </div>
            </div>
        </>
    )
}