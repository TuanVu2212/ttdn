import style from './login.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const inputUsername = useRef(null)
    const inputPassword = useRef(null)
    const labelUsername = useRef(null)
    const labelPassword = useRef(null)
    const boxPassword = useRef(null)
    const iconUnlockPass = useRef(null)
    const iconLockPass = useRef(null)
    const [isEmpty, setIsEmpty] = useState(true)

    const handleUnlockPass = (evt) => {
        evt.preventDefault();
        iconLockPass.current.style.display = "none"
        iconUnlockPass.current.style.display = "block"
        inputPassword.current.type = "text"
    }
    const handleLockPass = (evt) => {
        evt.preventDefault();
        iconLockPass.current.style.display = "block"
        iconUnlockPass.current.style.display = "none"
        inputPassword.current.type = "password"
    }
    const handleFocusUsername = () => {
        labelUsername.current.style.top = "4px"
        labelUsername.current.style.left = "8px"
    }
    const handleFocusOutUsername = () => {
        if (username === '') {
            labelUsername.current.style.top = "20px"
            labelUsername.current.style.left = "24px"
        } else {
            labelUsername.current.style.top = "4px"
            labelUsername.current.style.left = "8px"
        }
    }
    const handleFocusPass = () => {
        labelPassword.current.style.top = "4px"
        labelPassword.current.style.left = "8px"
        iconLockPass.current.style.display = "block"
    }
    const handleFocusOutPass = () => {
        if (password === '') {
            labelPassword.current.style.top = "20px"
            labelPassword.current.style.left = "24px"
        } else {
            labelPassword.current.style.top = "4px"
            labelPassword.current.style.left = "8px"
        }
        iconLockPass.current.style.display = "none"
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        if (username === "" || password === "") {
            setIsEmpty(true)
        } else if (username !== "" && password !== "") {
            setIsEmpty(false)
        }
    }, [username, password])

    return (
        <>
            <div className={style.login}>
                <div className={style.background} style={{backgroundImage: `url(/background/background13.jpg)`}}></div>
                <div className={style.boxLogin}>
                    <div className={style.boxLogo}>
                        <div className={style.box} onClick={() => navigate('/')}>
                            <div className={style.logo}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="league" width="32" height="32"
                                     viewBox="0 0 30 32" fill="none">
                                    <g>
                                        <path
                                            d="M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z"
                                            fill="#C28F2C"></path>
                                        <path
                                            d="M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z"
                                            fill="#C28F2C"></path>
                                        <path
                                            d="M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z"
                                            fill="#C28F2C"></path>
                                        <path
                                            d="M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z"
                                            fill="#C28F2C"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className={style.nameWeb}>D.I.Y</div>
                        </div>
                    </div>
                    <div className={style.form}>
                        <div className={style.titleForm}>
                            Đăng nhập
                        </div>
                        <div className={style.username}>
                            <input onChange={e => setUsername(e.target.value)} value={username} ref={inputUsername}
                                   onFocus={handleFocusUsername} onBlur={handleFocusOutUsername}
                                   type={"text"} name={"inputUsername"} id={"inputUsername"}/>
                            <label htmlFor={"inputUsername"} className={style.titleUsername} ref={labelUsername}>
                                Tên người dùng
                            </label>
                        </div>
                        <div className={style.password} ref={boxPassword}>
                            <i className={style.lockPass} ref={iconLockPass} onMouseDown={handleUnlockPass}>
                                <FontAwesomeIcon icon={faEyeSlash}/>
                            </i>
                            <i className={style.unlockPass} ref={iconUnlockPass} onMouseDown={handleLockPass}>
                                <FontAwesomeIcon icon={faEye}/>
                            </i>
                            <input onChange={e => setPassword(e.target.value)} value={password} type={"password"}
                                   onFocus={handleFocusPass} onBlur={handleFocusOutPass}
                                   ref={inputPassword} name={"inputPassword"} id={"inputPassword"}/>
                            <label htmlFor={"inputPassword"} className={style.titlePassword} ref={labelPassword}>
                                Mật khẩu
                            </label>
                        </div>
                        <div className={style.saveLogin}>
                            <input type={"checkbox"} id={"saveLogin"}/><label htmlFor={"saveLogin"}>
                            Lưu đăng nhập</label>
                        </div>
                        <div className={style.btn}>
                            <button className={isEmpty ? style.notActive : style.active}
                                    disabled={isEmpty ? false : true}>
                                <i>
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </i>
                            </button>
                        </div>
                        <div className={style.haveTrouble}>
                            <div className={style.cantLogin}>Không thể đăng nhập?</div>
                            <div className={style.register}
                                 onClick={() => navigate('/register/email', {state: {step: 1}})}>
                                Tạo tài khoản
                            </div>
                        </div>
                    </div>
                    <ul className={style.footer}>
                        <li className={style.item}>Hỗ trợ</li>
                        <li className={style.item}>Chính sách quyền riêng tư</li>
                        <li className={style.item}>Điều khoản sử dụng</li>
                        <li className={style.item}>Tùy chọn cookie</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
