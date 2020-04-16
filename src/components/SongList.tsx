import * as React from "react";
import { connect } from "react-redux";
import {selectSong} from '../actions'

interface Props {
    name: string
    songs: [{}]
    selectSong:(song:string)=>{}
}

const renderList = (songs,selectSong) => {
    return songs.map((song) => {
        return (
            <div className='item' key={song.title}>
                <div className='right floated content'>
                    <button 
                    onClick={()=>selectSong(song)}
                    className='ui button primary'>
                        Search
            </button>
                </div>
                <div className='contnet'>
                    {song.title}
                </div>
            </div>
        )
    })
}


const SongList: React.FC<Props> = ({selectSong, name, songs }) => {

    return (
        <div className='ui divided list'>
            {renderList(songs,selectSong)}
        </div>
    )
}
const mapStateToProps = (state) => {
    
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps,{
    selectSong
})(SongList)


