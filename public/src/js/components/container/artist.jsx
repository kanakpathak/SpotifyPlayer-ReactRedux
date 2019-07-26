import React, { Component } from "react";
import DisplayArtist from "../presentational/DisplayArtist.jsx";
import { connect } from "react-redux";
import {
  SearchArtist,
  StoreArtistId
} from "../../../store/actions/artist/artist.action";
import {
  SearchAlbum,
  StoreAlbumId
} from "../../../store/actions/album/album.action";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      artist: []
    };
    this.props = props;
  }
  storeArtistId = spotifyId => {
    //Added if condition
    if (this.props.spotifyId !== spotifyId) {
      this.props.StoreArtistId(spotifyId);
      this.props.SearchAlbum();
    }
  };

  // componentDidUpdate() {
  //   this.props.SearchAlbumFail("");
  // }

  searchArtistName = () => {
    name = event.target.value;
    this.props.StoreArtistId("");
    this.props.StoreAlbumId("");
    this.props.SearchArtist(name);
    this.setState({ name: name, artist: this.props.artist });
  };

  render() {
    return (
      <DisplayArtist
        searchArtistName={this.searchArtistName}
        name={this.state.name}
        artist={this.props.artist}
        storeArtistId={this.storeArtistId}
      />
    );
  }
}
const mapDispatchToProps = {
  SearchArtist: SearchArtist,
  StoreArtistId: StoreArtistId,
  StoreAlbumId: StoreAlbumId,
  SearchAlbum: SearchAlbum
};

const mapStateToProps = state => {
  // console.log("Checking in mapstatetoprops: ", state.artist.artists);
  const { artists } = state.artist;
  // console.log("ARTIST: ", artists);
  return {
    artist: artists,
    spotifyId: state.artist.id
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
