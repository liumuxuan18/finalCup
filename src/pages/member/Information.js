import React, { Component } from 'react';
import axios from "axios";
class MemberInfo extends Component {
    state = { 
            memberdata:{
                id:"a",
                account:"假資料人",
                userEmail:"fake@email.cpm",
                userTelephone:"09999999",
                userAddress:"這是假的地址",
                userGender:2.,
                userBirth:20160808
            }
     } 
    render() { 
        return (
            <React.Fragment>
            <div className="row">
          <div className="col-12 text-center">
            <p>會員資料</p>
          </div>
        </div>

        
        <form >
                        <div className="row mb-4 mb-md-3 mb-xl-4">
                            <div className="col-12 col-sm-12 col-md-11">
                                <label>姓名</label>
                                <input type="text"  className="form-control" name="account" value={this.state.memberdata.account}  onChange={this.nameChange}/>
                            </div>
                        </div>
                    
                        
                    
                        <div className="row mb-4 mb-md-3 mb-xl-4">
                            <div className="col-12 col-sm-12 col-md-11">
                                <label>電子信箱</label>
                                <input type="text" className="form-control"  name="useremail" value={this.state.memberdata.userEmail} onChange={this.emailChange}/>
                            </div>
                        </div>
                    
                        
                    
                        <div className="row mb-4 mb-md-3 mb-xl-2">
                            <div className="col-5 col-sm-5 col-md-4">
                                <label>性別</label>
                                <div className="col-md-12">
                                    <label>男性</label>
                                    <input type="radio" name="userGender" value={(this.state.memberdata.userGender===1)?"1": ""} checked={(this.state.memberdata.userGender===1)?"checked":""} onChange={this.sexChange}/>
                                    <label>女性</label>
                                    <input type="radio" name='userGender' value={(this.state.memberdata.userGender===2)?"2":''} checked={(this.state.memberdata.userGender===2)?"checked":""} onChange={this.sexChange}/>
                                </div>
                            </div>
                            <div className="col-7 col-sm-7 col-md-7">
                                <label>生日</label>
                                <input type="date" className="form-control" />{/* date last too difficult */}
                            </div>
                        </div>
                        
                        <div className="row mb-4 mb-md-3 mb-xl-4">
                            <div className="col-12 col-sm-12 col-md-11">
                                <label >電話</label>
                                <input type="number" className="form-control" value={this.state.memberdata.userTelephone} onChange={this.telephoneChange}/>
                            </div>
                        </div>
                        <div className="row mb-4 mb-md-3 mb-xl-4">
                            <div className="col-12 col-sm-12 col-md-11">
                                <label>地址</label>
                                <input type="text" className="form-control" name="userAddress" value={this.state.memberdata.userAddress} onChange={this.addressChange}/>
                            </div>
                        </div>
                        
                        <div className="row pb-3 justify-content-center">
                                <button className="btn btn-danger col-10 col-sm-6 col-md-3" onClick={this.okclick}>送出</button>        
                        </div>
            </form>
        </React.Fragment>
        );
    }
    nameChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.account=e.target.value;
        this.setState(newState);
    }
    emailChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userEmail=e.target.value;
        this.setState(newState);
    }
    sexChange=(e)=>{
        if(e.target.checked){
            let newState ={...this.state};
            newState.memberdata.userGender = e.target.value;
            console.log(newState);
            this.setState(newState);
            }else{
                return;
            }
    }
    telephoneChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userTelephone=e.target.value;
        this.setState(newState);
    }
    addressChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userAddress=e.target.value;
        this.setState(newState);
    }

    okclick=async()=>{
        await axios.put("http://localhost:3344/member/memberData",this.state.memberdata,{withCredentials:true});
        window.location="/";
    }
    componentDidMount=async()=>{
        var serverData = await axios.get('http://localhost:3344/member/memberData',{withCredentials:true});
        var newState = {...this.state};
        newState.memberdata = serverData.data;
        this.setState(newState);
    }
}
 
export default MemberInfo;