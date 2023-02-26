import React, { Component } from 'react';
import { Route, NavLink, Routes } from "react-router-dom";
import MemberChangePassword from './ChangePassword';
import MemberInfo from './Information';
import MemberList from './ListData';
import MemberVote from './VoteData';
import "../../style/member/membercss.css";


class MemberMain extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
        <div className="container mt-5 pb-xl-5 rounded" >


            <div className="row justify-content-center">    
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center ">
    
                    <div className="row gy-md-5 tab justify-content-center">
                        
                        <div className="col-md-12 col-lg-11 col-xl-10 d-none d-md-block "><img src="https://images.unsplash.com/photo-1562379825-415aea84ebcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" id="headpic" className="rounded-circle img-fluid" alt='pic'/></div>
                        
                        <div className="col-3 col-sm-3 col-md-8 col-lg-8 col-xl-9 py-md-2 py-xl-3 "><NavLink index='true' to="">會員資料</NavLink></div>
                        <div className="col-3 col-sm-3 col-md-8 col-lg-8 col-xl-9 py-md-2 py-xl-3" ><NavLink to="a" > 修改密碼</NavLink></div>
                        <div className="col-3 col-sm-3 col-md-8 col-lg-8 col-xl-9 py-md-2 py-xl-3" ><NavLink to="b">訂單記錄</NavLink></div>
                        <div className="col-3 col-sm-3 col-md-8 col-lg-8 col-xl-9 py-md-2 py-xl-3 mb-lg-3" ><NavLink to="c">投票紀錄</NavLink></div>
                    </div>
    
                </div>
    
    
                <div className="col-md-1 col-lg-1 col-xl-1  d-none d-md-block"></div>
                
                <div className="col-12 col-sm-12 col-md-8 col-lg-7 col-xl-7" id="showData">
                    <Routes>
                    <Route  index='true' element={<MemberInfo/>} />
                    <Route path='/a' element={<MemberChangePassword/>} />
                    <Route path='/b' element={<MemberList/>} />
                    <Route path='/c' element={<MemberVote/>} />
                    </Routes>
                </div>
                        
            </div>
        </div>

</React.Fragment>
        );
    }
}
 
export default MemberMain;