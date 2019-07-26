import React, { Component } from "react";
import DisplayTrack from "../presentational/DisplayTrack.jsx";
import { connect } from "react-redux";
import { SearchTrack } from "../../../store/actions/track/track.action";
import DisplayRecommendedTrack from "../presentational/DisplayRecommendedTrack.jsx";
class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: "",
      tracks: []
    };
    this.props = props;
    // this.searchTrack = this.searchTrack.bind(this);
  }
  //edit 2
  // searchTrack = albumId => {
  //   this.props.SearchTrack(albumId);
  // };
  //edit 2
  // componentDidUpdate(prevProps) {
  //   if (this.props.albumId != "" && this.props.albumId !== prevProps.albumId) {
  //     this.searchTrack(this.props.albumId);
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loaded == true && nextProps.albumId !== prevState.albumId) {
      return {
        tracks: nextProps.tracks,
        albumId: nextProps.albumId
      };
    }
    return null;
  }

  render() {
    if (this.state.albumId != "" && this.state.tracks.length != 0) {
      // while (this.props.loaded != true) {
      //   return (
      //     <>
      //       <div className="spinner-border text-primary" role="status">
      //         <span className="sr-only">Loading...</span>
      //       </div>
      //     </>
      //   );
      // }
      return (
        <DisplayTrack tracks={this.state.tracks} albumId={this.state.albumId} />
      );
    }
    return <DisplayRecommendedTrack />;
  }
}

const mapDispatchToProps = {
  SearchTrack: SearchTrack
};

const mapStateToProps = state => {
  return {
    tracks: state.track.tracks,
    loaded: state.track.loaded,
    albumId: state.album.albumId
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
