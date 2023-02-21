

function NavBar(){
    
return(
    <div className="headerWrap_top">
        <div className="row">
        <div className="col-lg-3 navMenu_box">
            <div className="header_logo">
                <img src="./img/index/headerLogo.svg" alt="" />
            </div>
            {/* <!-- RWD漢堡選單 --> */}

            <div className="ico-navMenu_wrap">
                <div id="ico-navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className="rwd_navMenu_box">
                <img className="rwd_navMenu_logo" src="./img/index/footerLogo.svg" alt="" />
                <ul className="rwd_navMenu">
                    <li className="rwd_navMenu_item">
                        <a href="#">關於我們</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-2</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-3</a></li>
                        </ul>
                    </li>
                    <li className="rwd_navMenu_item">
                        <a href="#">循環地圖</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-2</a></li>
                        </ul>

                    </li>
                    <li className="rwd_navMenu_item">
                        <a href="#">什麼是循環杯</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-2</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-3</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-3</a></li>
                        </ul>
                    </li>
                    <li className="rwd_navMenu_item">
                        <a href="#">循環懶人包</a>

                    </li>
                    <li className="rwd_navMenu_item">
                        <a href="#">相關消息</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-2</a></li>
                            <li className="rwd_navMenu_sub_item"><a href="#">測試頁面-3</a></li>
                        </ul>
                    </li>
                    <li className="rwd_navMenu_item">
                        <a href="#">登入 | 註冊</a>

                    </li>
                </ul>
            </nav>
            {/* <!--//////////////////////--> */}

        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-7 navBarRow">
            <nav className="navBar_box">
                <ul className="navBar">
                    <li className="navBar_item">
                        <a href="#">關於我們</a>
                        <ul className="drop-menu">
                            <li className="drop-menu_item"><a href="#">測試頁面-1</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-2</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-3</a></li>

                        </ul>
                    </li>
                    <li className="navBar_item">
                        <a href="#">循環地圖</a>
                        <ul className="drop-menu">
                            <li className="drop-menu_item"><a href="#">測試頁面-1</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-2</a></li>
                        </ul>
                    </li>
                    <li className="navBar_item">
                        <a href="#">什麼是循環杯</a>
                        <ul className="drop-menu">
                            <li className="drop-menu_item"><a href="#">測試頁面-1</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-2</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-3</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-4</a></li>
                        </ul>
                    </li>
                    <li className="navBar_item"><a href="#">循環懶人包</a></li>
                    <li className="navBar_item">
                        <a href="#">相關消息</a>
                        <ul className="drop-menu">
                            <li className="drop-menu_item"><a href="#">測試頁面-1</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-2</a></li>
                            <li className="drop-menu_item"><a href="#">測試頁面-3</a></li>

                        </ul>
                    </li>
                    <li className="navBar_item"><a href="#">登入 | 註冊</a></li>
                </ul>
            </nav>
        </div>

        </div>
    </div>


)
};

export default NavBar;