import React, { Component } from 'react'
import ReactTags from 'react-tag-autocomplete'
import {GetAgentProfile,list,AddManageForAgent} from '../Api/Http'
import { Button,Descriptions } from 'antd';
export default class AgentProfile extends Component {
    constructor(){
        super()
        this.state = {
            id:"",
            tags:[],
            user:"",
            company:"",
            name:"",
            full_name:"",
            phone:"",
            INN:"",
            general_director:"",
            OGRN:"",
            email:"",
            worker: [],
            any:"",
            legal_address:"",
            actual_address:"",
            payment_account:"",
            redirectTo:false
        }
    }

    componentDidMount(){

        const agentId = this.props.match.params.agentId
        GetAgentProfile(agentId).then(data => {
            if(data.error){
                this.setState({redirectToProfile: true})
            }else{
                this.setState({ 
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    company:data.company,
                    full_name: data.full_name,
                    phone: data.phone,
                    INN: data.INN,
                    general_director: data.general_director,
                    OGRN: data.OGRN,
                    tags:data.tags,
                    any:data.any,
                    legal_address:data.legal_address,
                    actual_address:data.actual_address,
                    payment_account:data.payment_account
                })
            }
        })
        list().then(data =>{
            if(data.error){
                console.log(data.error)
            }else{
                this.setState({worker:data})
            }
        })
    }
    handleDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
      }
    
      handleAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
      }
      handleChange = date => {
        this.setState({
          startDate: date
        })
      }
      handleAction = name => event => {
        this.setState({ error: "" })
        this.setState({ [name]: event.target.value })
      }
      clickSubmit =  event =>{
        event.preventDefault()
        this.setState({loading: true})
        const {tags,id} = this.state
        AddManageForAgent(tags,id).then(data =>{
          if(data.error){
              console.log(data.error)
          }else{
            this.forceUpdate()
          }
      })
      }

      forceUpdate(){
        const agentId = this.props.match.params.agentId
        GetAgentProfile(agentId).then(data => {
            if(data.error){
                this.setState({redirectToProfile: true})
            }else{
                this.setState({ 
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    company:data.company,
                    full_name: data.full_name,
                    phone: data.phone,
                    INN: data.INN,
                    general_director: data.general_director,
                    OGRN: data.OGRN,
                    tags:data.tags,
                    any:data.any,
                    legal_address:data.legal_address,
                    actual_address:data.actual_address,
                    payment_account:data.payment_account
                })
            }
        })
        list().then(data =>{
            if(data.error){
                console.log(data.error)
            }else{
                this.setState({worker:data})
            }
        })
    }
    render() {
        const {email,OGRN,general_director,INN,phone,full_name,name,company,worker, any,legal_address,actual_address,payment_account} =  this.state
        return (
            <div>
                <div className="postisitonRelativeSmeni">
                <div className="" >
                <Descriptions title="Корпаративная  информация" layout="vertical">
    <Descriptions.Item label="Имя компании"><p>{name}</p></Descriptions.Item>
    <Descriptions.Item label="Телефон">{phone}</Descriptions.Item>
    <Descriptions.Item label="Компания">{company}</Descriptions.Item>
    <Descriptions.Item label="Адрес" span={2}>
      {legal_address}
    </Descriptions.Item>
    <Descriptions.Item label="Генеральный директор">{general_director}</Descriptions.Item>
  </Descriptions>,
<div className="Tags">
    <ReactTags
        tags={this.state.tags}
        suggestions={worker}
        handleDelete={this.handleDelete.bind(this)}
        handleAddition={this.handleAddition.bind(this)} />
    </div>
    <div style={{padding:"5px"}}></div>
    <Button onClick={this.clickSubmit }>Назначить</Button>
    <div style={{padding:"5px"}}></div>
    <Button type="danger">Удалить менеджеров</Button>
                </div>
                </div>
                
            </div>

        )
    }
}