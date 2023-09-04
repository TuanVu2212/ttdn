import style from './bannerSlider.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function BannerSlider() {

    const slides_ = useRef(null)
    const sliderButtons_ = useRef(null)
    const navigate = useNavigate();

    const handleNextSlide = () => {
        const slides = document.querySelectorAll(`.slide`)
        const polygons = document.querySelectorAll(`.${style.polygon}`)
        const mid = document.querySelector(`.${style.polygon}:nth-child(3)`)
        const right = document.querySelector(`.${style.polygon}:nth-child(4)`)
        slides.forEach(slide => {
            slides_.current.appendChild(slides[0])
        })
        polygons.forEach(polygon => {
            sliderButtons_.current.appendChild(polygons[0])
        })
        if (mid.children[0].id === "canvas") {
            const canvas = document.querySelectorAll("#canvas")
            const context = canvas[0].getContext('2d')
            context.clearRect(0, 0, canvas[0].width, canvas[0].height);

            mid.children[0].id = "canvas1"
            mid.children[0].removeAttribute("width");
            mid.children[0].removeAttribute("height");
            mid.children[0].classList.add(`${style.canvas1}`)
            const canvas1 = document.querySelectorAll("#canvas1")
            drawCanvas1(canvas1)
        }
        if (right.children[0].id === "canvas1") {
            const canvas1 = document.querySelectorAll("#canvas1")
            const context = canvas1[2].getContext('2d')
            context.clearRect(0, 0, canvas1[2].width, canvas1[2].height);
            right.children[0].id = "canvas"
            right.children[0].setAttribute("width", "552");
            right.children[0].setAttribute("height", "290");
            right.children[0].classList.remove(`${style.canvas1}`)
            const canvas = document.querySelectorAll("#canvas")
            drawCanvas(canvas)
        }
    }
    const handlePrevSlide = () => {
        const slides = document.querySelectorAll(`.slide`)
        const polygons = document.querySelectorAll(`.${style.polygon}`)
        const head = document.querySelector(`.${style.polygon}:nth-child(1)`)
        const left = document.querySelector(`.${style.polygon}:nth-child(2)`)
        const mid = document.querySelector(`.${style.polygon}:nth-child(3)`)

        slides.forEach(slide => {
            slides_.current.prepend(slides[slides.length - 1])
        })
        polygons.forEach(polygon => {
            sliderButtons_.current.prepend(polygons[polygons.length - 1])
        })

        if (mid.children[0].id === "canvas") {
            const canvas = document.querySelectorAll("#canvas")
            const context = canvas[0].getContext('2d')
            context.clearRect(0, 0, canvas[0].width, canvas[0].height);

            mid.children[0].id = "canvas1"
            mid.children[0].removeAttribute("width");
            mid.children[0].removeAttribute("height");
            mid.children[0].classList.add(`${style.canvas1}`)
            const canvas1 = document.querySelectorAll("#canvas1")
            drawCanvas1(canvas1)
        }
        if (left.children[0].id === "canvas1") {
            const canvas1 = document.querySelectorAll("#canvas1")
            const context = canvas1[1].getContext('2d')
            context.clearRect(0, 0, canvas1[1].width, canvas1[1].height);
            left.children[0].id = "canvas"
            left.children[0].setAttribute("width", "552");
            left.children[0].setAttribute("height", "290");
            left.children[0].classList.remove(`${style.canvas1}`)
            const canvas = document.querySelectorAll("#canvas")
            drawCanvas(canvas)
        }
        if (head.children[0].id === 'canvas1') {
            const canvas1 = document.querySelectorAll("#canvas1")
            drawCanvas1(canvas1)
        }
    }
    const handleOpenSlide = () => {
        const name = sliderButtons_.current?.children[2].children[1].children[1].textContent
        navigate(`/diy/${name}`, {state: name})
    }

    const drawCanvas = (canvas) => {
        if (canvas) {
            for (let i = 0; i < canvas.length; i++) {
                const ctx = canvas[i].getContext("2d");
                canvas[i].style.transition = "0.8s"
                ctx.beginPath();
                ctx.lineTo(0, 31)
                ctx.lineTo(276, 6);
                ctx.lineTo(552, 31);
                ctx.strokeStyle = "#937341"
                ctx.lineWidth = 4.5;
                ctx.stroke()
                ctx.closePath()

                ctx.beginPath();
                ctx.fillStyle = "#232020"
                ctx.lineTo(276, 8);
                ctx.lineTo(0, 32);
                ctx.lineTo(0, 258);
                ctx.lineTo(276, 290);
                ctx.lineTo(552, 258);
                ctx.lineTo(552, 32);
                ctx.lineTo(276, 8);
                ctx.fill();
                ctx.closePath()

                ctx.beginPath();
                ctx.moveTo(276, 24);
                ctx.lineTo(24, 48);
                ctx.lineTo(24, 242);
                ctx.lineTo(276, 274);
                ctx.lineTo(528, 242);
                ctx.lineTo(528, 48);
                ctx.lineTo(276, 24);
                ctx.fillStyle = "#937341"
                ctx.lineWidth = 0.3;
                ctx.stroke();
                ctx.closePath()
            }
        } else {
            return;
        }
    }

    const drawCanvas1 = (canvas1) => {
        if (canvas1) {
            for (let i = 0; i < canvas1.length; i++) {

                const ctx = canvas1[i].getContext('2d');
                ctx.beginPath()
                ctx.fillStyle = "#232020"
                ctx.rect(0, 0, 552, 210)
                ctx.fill()
                ctx.closePath()

                ctx.beginPath()
                ctx.moveTo(0, 0)
                ctx.lineTo(552, 0)
                ctx.strokeStyle = "#937341"
                ctx.lineWidth = 4;
                ctx.stroke()
                ctx.closePath()
            }
        } else {
            return;
        }

    }

    useEffect(() => {
        const canvas = document.querySelectorAll("#canvas")
        const canvas1 = document.querySelectorAll("#canvas1")
        drawCanvas(canvas)
        drawCanvas1(canvas1)
    })

    const SLIDES = [
        {
            id: 1,
            name: "organize",
            src: "https://static.wixstatic.com/media/68b82084ddfa4987aa7ffe3e1d0847f0.jpg/v1/fill/w_1519,h_682,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/68b82084ddfa4987aa7ffe3e1d0847f0.jpg"
        },
        {
            id: 2,
            name: "repair",
            src: "https://quincyroofing.com/wp-content/uploads/2017/11/residential-header-1.jpg"
        },
        {
            id: 3,
            name: "decorate",
            src: "https://thescentsupplyco.g.shopcadacdn.com/sites/files/thescentsupplyco/blogcoverimage/considering-candle-making-workshops-for-team-building.jpg"
        },
        {
            id: 4,
            name: "craft",
            src: "https://www.winiary.pl/sites/default/files/styles/maggi_desktop_image_style/public/9.-min_2.jpg?h=06ac0d8c&itok=48UmZtED"
        },
        {
            id: 5,
            name: "home office",
            src: "https://vietabinhdinh.edu.vn/wp-content/uploads/1677458298_159_Hinh-anh-nhung-goc-lam-viec-dep-nhat.jpg"
        },
        {
            id: 6,
            name: "clean",
            src: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/73RUvJWtDtgQCaJycEfeUk/89ac12dc2dad27bf77d03cf514484462/cGhvbmctdHJhbmgtYmVuaC10YXktY2hhbi1taWVuZy1iYW5nLWNhY2gtdmUtc2luaC1uaGEtY3VhLXNhY2gtc2UuanBn/720w-480h/c%C3%A1ch-ph%C3%B2ng-tr%C3%A1nh-b%E1%BB%87nh-tay-ch%C3%A2n-mi%E1%BB%87ng-b%E1%BA%B1ng-c%C3%A1ch-d%E1%BB%8Dn-d%E1%BA%B9p-nh%C3%A0-c%E1%BB%ADa-s%E1%BA%A1ch-s%E1%BA%BD.avif"
        },
        {
            id: 7,
            name: "laundry room",
            src: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/70db5c80eae0ed81a86e186fb696ef4c/f16364dab871c47e61e137ed3fba7600/aHR0cHNfX193d3cuY2xlYW5pcGVkaWEuY29tX2NvbnRlbnRfZGFtX3VuaWxldmVyX2NsZWFuaXBlZGlhX2luZGlhX2dlbmVyYWxfaW1hZ2Vfc2h1dHRlcnN0b2NrXzEzNDg3OTgwMzQtMjAwMjMxNC1qcGcuanBn/990w-660h/ti%E1%BA%BFt-ki%E1%BB%87m-%C4%91i%E1%BB%87n.avif"
        },
        {
            id: 8,
            name: "craft room",
            src: "https://www.athomecolorado.com/wp-content/uploads/2023/08/Flex-space-craft-room-980x695.jpeg"
        },
        {
            id: 9,
            name: "kitchen & dining",
            src: "https://pross247.com/wp-content/uploads/2021/07/cach-chon-toa-hung-huong-cat-khi-dat-bep-de-hop-phong-thuy-huong-dan-chon-toa-hung-huong-cat-khi-dat-bep-bep-3-1024x768-1.jpg"
        },
        {
            id: 10,
            name: "bedroom",
            src: "https://forestrytimber.com/wp-content/uploads/2020/10/Cotopaxi-European-Oak-floors-Antique-Collection.jpg"
        },
    ]
    return (
        <>
            <div>
                <div className={style.backgroundSlider}></div>
                <div className={style.slider}>
                    <div className={style.slides} id={style.slides} ref={slides_}>
                        {
                            SLIDES.map((data, index) => (
                                <div key={index} className={`${style.slide} slide`} id={"item1"}
                                     style={{backgroundImage: `url(${data.src})`}}>
                                </div>
                            ))
                        }
                    </div>
                    <div className={style.sliderButtons} ref={sliderButtons_}>
                        {
                            SLIDES.map((data, index) => (
                                <div className={style.polygon} key={index}>
                                    <canvas id={index !== 2 ? "canvas1" : "canvas"}
                                            className={index !== 2 ? style.canvas1 : ""}
                                            width={index === 2 ? "552" : ""} height={index === 2 ? "290" : ""}/>
                                    <div className={style.content}>
                                        <div className={style.title}>explore project</div>
                                        <div className={style.description}>{data.name}</div>
                                        <div className={style.note}>Note {data.id}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className={style.buttons}>
                        <button className={style.btnPrev} onClick={handlePrevSlide}>
                            <i><FontAwesomeIcon icon={faArrowLeft}/></i>
                        </button>
                        <button className={style.btnNext} onClick={handleNextSlide}>
                            <i><FontAwesomeIcon icon={faArrowRight}/></i>
                        </button>
                    </div>
                    <div className={style.buttons1}>
                        <button className={style.btnPrev1} onClick={handlePrevSlide}></button>
                        <div className={style.boxBtnMid}>
                            <button className={style.btnMid} onClick={handleOpenSlide}></button>
                        </div>
                        <button className={style.btnNext1} onClick={handleNextSlide}></button>
                    </div>
                </div>
            </div>
        </>
    )
}