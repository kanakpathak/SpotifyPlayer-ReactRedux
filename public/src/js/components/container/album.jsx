import React, { Component } from "react";
import DisplayAlbum from "../presentational/DisplayAlbum.jsx";
import DisplayRecommendedAlbum from "../presentational/DisplayRecommendedAlbum.jsx";
import { StoreAlbumId } from "../../../store/actions/album/album.action";
import { SearchTrack } from "../../../store/actions/track/track.action";
import { connect } from "react-redux";
class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      spotifyId: ""
    };
    this.props = props;
    // this.searchAlbumList = this.searchAlbumList.bind(this);
    this.storeAlbumId = this.storeAlbumId.bind(this);
  }

  storeAlbumId = albumId => {
    if (this.props.albumId !== albumId) {
      this.props.StoreAlbumId(albumId);
      this.props.SearchTrack();
    }
  };
  // edit 1
  // searchAlbumList = () => {
  //   this.props.SearchAlbum(this.props.spotify_id);
  // };

  // componentDidUpdate(prevProps) {
  //   console.log("update call");
  //   if (this.props.spotifyId !== prevProps.spotifyId) {
  //     this.searchAlbumList();
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log("GDSFP prevState", prevState);
    console.log("loaded", nextProps.loaded);
    console.log("loading", nextProps.loading);
    console.log("state.spotify=", prevState.spotifyId);
    console.log("nextProps.spotify=", nextProps.spotifyId);

    if (
      nextProps.loaded == true &&
      nextProps.spotifyId !== prevState.spotifyId
    ) {
      console.log("ifififififififififii");

      return {
        albums: nextProps.albums,
        spotifyId: nextProps.spotifyId
      };
    }
    return null;
  }

  render() {
    console.log("render");
    if (this.state.spotifyId != "" && this.state.albums.length != 0) {
      return (
        <DisplayAlbum
          albums={this.state.albums}
          storeAlbumId={this.storeAlbumId}
        />
      );
    }
    return <DisplayRecommendedAlbum />;
  }
}

const mapDispatchToProps = {
  StoreAlbumId: StoreAlbumId,
  SearchTrack: SearchTrack
};

const mapStateToProps = state => {
  // console.log("TCL: state.album.albums", state.album.albums);
  return {
    albums: state.album.albums,
    spotifyId: state.artist.id,
    loaded: state.album.loaded,
    loading: state.album.loading,
    albumId: state.album.albumId
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
