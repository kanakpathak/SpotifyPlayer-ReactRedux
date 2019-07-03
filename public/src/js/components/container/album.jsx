import React, { Component } from "react";
import DisplayAlbum from "../presentational/DisplayAlbum.jsx";
import { SearchAlbum } from "../../../store/actions/album/album.action";
import { connect } from "react-redux";
class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      accessToken: "Not known"
    };
    this.params = this.props.match.params;
    this.spotify_id = this.params.id;
    this.props = props;
    this.searchAlbumList = this.searchAlbumList.bind(this);
  }

  searchAlbumList = () => {
    console.log("Here in search album list function");
    this.props.SearchAlbum(this.spotify_id);
    this.setState({ albums: this.props.albums });
  };
  componentDidMount() {
    this.searchAlbumList();
  }

  render() {
    console.log("Yes you are reaching here");
    console.log(this.params);
    return (
      <DisplayAlbum
        spotify_id={this.spotify_id}
        accessToken={this.props.accessToken}
      />
    );
  }
}

const mapDispatchToProps = {
  SearchAlbum: SearchAlbum
};

const mapStateToProps = state => {
  console.log(`Checking in mapStateToProps in albums ${state}`);
  // const { albums } = state.albums;
  return {
    albums: state.albums,
    accessToken: state.token.accessToken
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
