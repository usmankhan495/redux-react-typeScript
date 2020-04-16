import { SelectedSong } from "../actions";
import {combineReducers} from 'redux'


 const songReducer=(state=[],action:SelectedSong)=>{

    return [
        {title:'Tu Salamat Watan',duration:3.5},
        {title:'Kaif O Suroor',duration:4},
        {title:'Sawan Aye Sawan Jaye',duration:2.5},
        {title:'Aaj Jaane Ki Zid Na Karo',duration:4},
    ]

}

 const selectedSong=(selectedSong=null,action:SelectedSong)=>{

    if(action.type==='SELECT_SONG'){
        return action.song
    }
    return selectedSong;

}


export default combineReducers({
    songs:songReducer,
    selectsng:selectedSong
})