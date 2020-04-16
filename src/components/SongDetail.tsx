import React from 'react'
import {connect} from 'react-redux'


interface Props{
    song:{}
}

const SongDetail : React.FC<Props,any>=({song})=> {

    // const ts=song.map((song)=>{
    //    return <label>{song.title}</label>
    // })
    if(!song){
        return <div>Select a song:</div>;
    }
    return (
        <div>
            <div>
                
                <h3>Song Details:</h3>
                <p>
                    Title : {song.title}
                    <br/>
                    Durtion : {song.duration}
                </p>
                
            </div>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
  
    return{
        song:state.selectsng
    }
}

export default connect(mapStateToProps)(SongDetail)
