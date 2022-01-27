import React, {PureComponent} from 'react';

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
                                Collaborateur : {post.collaborator.firstName}
                            </div>
                            <div>
                                Titre : {post.title}
                            </div>
                            <div>
                                Commentaire : {post.body}
                            </div>
                            
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