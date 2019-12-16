import React, { Component } from "react";
import { isAuthenticated } from "../Api/Auth";
import { Redirect, Link } from "react-router-dom";
import { Spin } from "antd";
import { read } from "../Api/Http";
import DefaultProfile from "../Assets/default.png";
import Error from "../Error/Error.jsx";
import {Button} from "antd";
import Moment from "react-moment";
// import { ResponsiveCalendar } from '@nivo/calendar'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      open: true,
      error: false
    };
  }
  init = userId => {
    read(userId).then(data => {
      if (data.error) {
        console.log(data.error)
        this.setState({error:true})
      } else {
        this.setState({ user: data });
      }
      this.setState({open: false})
    });
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  componentWillReceiveProps(props) {
    const userId = props.match.params.userId;
    this.init(userId);
  }

  render() {
    const { redirectToSignin, user,open,error } = this.state;
    console.log(typeof user)
    const photoUrl = user._id
        ? `${process.env.REACT_APP_API_URL}/user/photo/${user._id}?${new Date().getTime()}` 
        : DefaultProfile
    const avatarBolean = user.avatar
      
    return (
      <div className="postisitonRelativeSmeni">
        {error ?(<Error/>):(null)}
        {open ? (
          <><Spin size="large"/></>
        ):(
          <>
           <div className="">
          <h2 className="">Профиль сотрудника </h2>
          <div className="">
            <div className="">
            <img 
                style={{height: "200px", width:"auto"}}
                className="img-thumbnail"
                onError={i => (i.target.src = `${DefaultProfile}`)}
                src={photoUrl} />

              <div className="">
                <p>Имя: {user.name}</p>
                <p>Должность: {user.role}</p>
                <p>Дата рождения: {user.Date_of_Birth}</p>
                <p>Телефон: {user.phone}</p>
                <p>Email: {user.email}</p>
                <Moment  locale="ru" format="D MMM YYYY">
                  {user.created}
                </Moment>
                
              </div>
            </div>
          </div>
        </div>
          </>
        )}
      </div>
    );
  }
}
export default Profile;
