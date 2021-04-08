import React from 'react';
import ExecutiveBoard from './../components/executiveBoard';
import Committees from './../components/committees';
import { BrowserRouter as Route} from 'react-router-dom';

function CommitteeFrame(){
    return(
        <div>
            <ExecutiveBoard />
            <Committees />
        </div>
    );
}

export default CommitteeFrame;
