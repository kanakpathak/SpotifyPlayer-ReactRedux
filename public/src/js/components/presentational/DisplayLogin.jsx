import React from 'react';
import Button from '@material-ui/core/Button';

const style={
    marginTop: "15%",
    marginLeft:"35%",
    marginRight: "35%",
    border: "2px",
    borderStyle: "solid",
    padding: "3%",
    
}
const DisplayLogin = ({text, handleLogin, disabled})=>{
    return(
        <div style={style}>
            <h1 style={{alignText:"center"}}>LeagueX</h1>
            <Button variant="contained" color="primary" href="http://localhost:3000/api/getAuth" onClick={handleLogin} disabled={disabled}>Login to Spotify</Button>
            <p>{text}</p>
        </div>
    );
}

export default DisplayLogin;