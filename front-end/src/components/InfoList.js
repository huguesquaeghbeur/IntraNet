import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import '../styles/infolist.css';

import {getAllInfos} from '../services/infoData';


class InfoList extends PureComponent{
    constructor(props){
        super(props)
        this.state ={
            posts:[]
        }
    }
    componentDidMount(){
        getAllInfos().then(res =>{
            this.setState({
                posts: res.data
            })
            console.log(res.data);
        })
    }

    render(){
        const{posts} = this.state
        return(
            <div>
                <div className="flex flex-col justify-around">
                    {posts.map(post =>
                        <div key={post.id} className="border">
                            <div className="flex justify-end">
                                # {post.id}
                            </div>
                            <div>
                                Collaborateur : {post.firstName}
                            </div>
                            <div>
                                Titre : {post.title}
                            </div>
                            <div>
                                Commentaire : {post.body}
                            </div>
                            <Link to={`/infos/${post.id}`} key={this.title}
                            firstName={this.firstname}>
                            <button >Répondre</button>
                            </Link>
                        </div>
                    )}
                      
                    
                </div>
            </div>
        );
    }
}
/* const mapStateToProps = (state) =>{
    console.log(state.info.infos);
    return{
        infos: state.info.infos
    }
}
export default connect(mapStateToProps, null)(InfoList); */
export default InfoList;