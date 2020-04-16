import * as React from "react";
import SongList from "./SongList";
import SongDetail  from "./SongDetail";

interface Props {
    name: string

}

const App: React.FC<Props> = ({ name }) => {

    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList name='usman' />
                </div>
                <div className='column eight wide'>
                <SongDetail/>
                </div>
            </div>

        </div>
    )
}


export default App;