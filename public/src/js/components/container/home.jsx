import React, { Component } from "react";
import DisplayHome from "../presentational/DisplayHome.jsx";
import { connect } from "react-redux";
import { SearchArtist } from "../../../store/actions/artist/artist.action";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            artist:[]
        }
        this.props = props;
        this.tokens = props.location.hash.split("#access_token=")[1];
        this.accessToken = this.tokens.split('&refresh_token=')[0];
        this.refreshToken = this.tokens.split('&refresh_token=')[1];
        
        
        
    }
    searchArtistName = ()=>{

        console.log('here');
        name = event.target.value;  
        console.log(name);
        this.props.SearchArtist(name, this.accessToken);
        console.log('Checking props: ',this.props.artist)
        this.setState({name:name, artist:this.props.artist});
        // console.log(this.state.artist)            
    }

    
    render(){
        return(
            <DisplayHome 
            accessToken={this.accessToken}
            searchArtistName={this.searchArtistName}
            name={this.state.name}
            artist={this.props.artist}
            
            />
            );
        }
    }
    const mapDispatchToProps = {
        SearchArtist: SearchArtist
    }

    const mapStateToProps = (state)=>{
        console.log('Checking in mapstatetoprops: ',state.artist.data)
        const {data} = state.artist;
        console.log('ARTIST: ', data)
        return {
            artist: data
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Home);