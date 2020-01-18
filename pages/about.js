import styles from "../styles/about.scss"

const About = () => {
    return (
        <div className="about-section">
            <div className="skills-section">
                <div className="skill-container">
                    <svg className="skill-bar" viewBox="0 0 64 64">
                        <defs>
                            <clipPath id="progress__mask">
                                <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#progress__mask)">
                            <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                            <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                        </g>

                    </svg>
                    <div className="skill-content">
                        <div className="skill__value"><span>%</span> <span className="percent">90</span></div>
                        <div className="skill__text">HTML & CSS</div>
                    </div>
                </div>
                <div className="skill-container">
                    <svg className="skill-bar" viewBox="0 0 64 64">
                        <defs>
                            <clipPath id="progress__mask">
                                <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#progress__mask)">
                            <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                            <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                        </g>

                    </svg>
                    <div className="skill-content">
                        <div className="skill__value"><span>%</span> <span className="percent">75</span></div>
                        <div className="skill__text">WEB DESİGN</div>
                    </div>
                </div>
                <div className="skill-container">
                    <svg className="skill-bar" viewBox="0 0 64 64">
                        <defs>
                            <clipPath id="progress__mask">
                                <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#progress__mask)">
                            <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                            <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                        </g>

                    </svg>
                    <div className="skill-content">
                        <div className="skill__value"><span>%</span> <span className="percent">70</span></div>
                        <div className="skill__text">REACT JS</div>
                    </div>
                </div>
                <div className="skill-container">
                    <svg className="skill-bar" viewBox="0 0 64 64">
                        <defs>
                            <clipPath id="progress__mask">
                                <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#progress__mask)">
                            <circle className="skill__track" cx="50%" cy="50%" r="30px"></circle>
                            <circle className="skill__thumb" cx="50%" cy="50%" r="30px"></circle>
                        </g>

                    </svg>
                    <div className="skill-content">
                        <div className="skill__value"><span>%</span> <span className="percent">80</span></div>
                        <div className="skill__text">FLUTTER</div>
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default About;