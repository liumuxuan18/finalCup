function Footer(){
    return(
        <footer>
        <div className="container">
            <div className="row footerRow">
                <div className="col-lg-4 col-md-12 footerRwd_wrap-1">
                    <div className="socialWrap">
                        <img src="./img/index/footerLogo.svg" />
                        <ul className="socialList">

                            <li className="socialList_item ico-ig">
                                <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li className="socialList_item ico-fb">
                                <a href="">
                                    <i className="fab fa-facebook-f"></i></a>
                            </li>

                        </ul>
                    </div>
                    <div className="copyrightBox">
                        ©︎2023 環唄！Huanbai
                    </div>

                </div>
                <div className="col-lg-8 col-md-12 footerRwd_wrap-2">
                    <ul className="footerNav">
                        <li className="footerNav_item">
                            <a href="#">關於我們</a>
                        </li>
                        <li className="footerNav_item">
                            <a href="#">循環地圖</a>
                        </li>
                        <li className="footerNav_item">
                            <a href="#">什麼是循環杯</a>
                        </li>
                        <li className="footerNav_item">
                            <a href="#">循環懶人包</a>
                        </li>
                        <li className="footerNav_item">
                            <a href="#">相關消息</a>
                        </li>
                        <li className="footerNav_item">
                            <a href="#">登入 | 註冊</a>
                        </li>
                    </ul>
                    <div className="termsBox">
                        <div className="termsBox_item ft_copyrightBox">
                            ©︎2023 環唄！Huanbai
                        </div>
                        <div className="termsBox_item">
                            <a href="#">隱私政策</a>
                        </div>
                        <div className="termsBox_item">
                            <a href="#">服務條款</a>
                        </div>
                        <div className="termsBox_item">
                            <a href="#">Cookie政策</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>


         </footer>
    );
    };
    
    export default Footer;