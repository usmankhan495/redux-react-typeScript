export interface SelectedSong{
    type:string;
    song:string;

}

export const selectSong=(sng:any)=>{
    let  song:SelectedSong={
        type:'SELECT_SONG',
        song:sng
    }

    return song;
}