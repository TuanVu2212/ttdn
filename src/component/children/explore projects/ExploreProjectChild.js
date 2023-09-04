import style from './exploreProjectChild.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {arr} from './json'

export default function ExploreProjectChild() {
    const form_ = useRef(null)
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    })
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

    useEffect(() => {
        arr.forEach((data, index) => {
            if (data.nameProject === location.state) {
                setProject(data)
            }
        })
    }, [location.state])
    return (
        <>
            <div className={style.exploreProject}>
                <div className={style.navigationBar}>
                    <div className={style.navList1}>
                        <div className={style.link}>
                            <div className={style.logo}>
                                DIY
                            </div>
                            <i><FontAwesomeIcon icon={faChevronRight}/></i>
                            <div className={style.nameProject}>{project.nameProject}</div>
                        </div>
                        <ul className={style.navList2}>
                            {/*<li className={style.navItem}></li>*/}
                        </ul>
                    </div>

                </div>
                <div className={style.background}
                     style={{backgroundImage: `url(${project.illustration})`}}></div>
                <div className={style.titleProject}>
                    <div className={style.backgroundTitle}></div>
                    <div className={style.top}>
                        {project.nameProject}
                    </div>
                    <div className={style.bottom}>
                        <img alt={"line"} src={"https://universe.leagueoflegends.com/images/t1HeaderDivider.png"}/>
                    </div>
                    <div className={style.descriptionTitle}>
                        {project.description}
                    </div>
                </div>
                <div className={"grip"}>
                    <div className={`${style.container}`}>
                        <div className={style.title}>
                            <div className={style.dashLineLeft}></div>
                            <font>
                                {project.nameProject} Ideas
                            </font>
                            <div className={style.dashLineRight}></div>
                        </div>
                        <div className={style.slider}>
                            <div className={style.sliderNav}>
                                <div className={style.titleNav}>
                                    What do you want to {project.nameProject}?
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
                                        project.projects?.map((data, index) => (
                                            <div
                                                onClick={() => navigate(`/diy/howTo/${project.projects[index].name}`, {state: {nameProject: project.nameProject, childOfProject: project.projects[index].name}})}
                                                className={style.slide} key={index}>
                                                <img alt={"slide"}
                                                     src={data.srcIllustration}/>
                                                <div className={style.coating}></div>
                                                <div className={style.titleSlide}>
                                                    {data.name}
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
                                project.posts?.map((data, index) => (
                                    <div className={style.post} key={index}>
                                        <img alt={"imgPost"}
                                             src={data.illustration}/>
                                        <div className={style.content}>
                                            <div className={style.titlePost}>
                                                <font>
                                                    {data.namePost}
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
            </div>
        </>
    )
}