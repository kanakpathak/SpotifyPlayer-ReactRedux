import React, { Component } from "react";
import DisplayArtist from "../presentational/DisplayArtist.jsx";
import { connect } from "react-redux";
import { SearchArtist } from "../../../store/actions/artist/artist.action";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      artist: []
    };
    this.props = props;
  }
  searchArtistName = () => {
    console.log("here");
    name = event.target.value;
    console.log(name);
    this.props.SearchArtist(name);
    console.log("Checking props: ", this.props.artist);
    this.setState({ name: name, artist: this.props.artist });
  };

  render() {
    return (
      <DisplayArtist
        searchArtistName={this.searchArtistName}
        name={this.state.name}
        artist={this.props.artist}
      />
    );
  }
}
const mapDispatchToProps = {
  SearchArtist: SearchArtist
};

const mapStateToProps = state => {
  console.log("Checking in mapstatetoprops: ", state.artist.artists);
  const { artists } = state.artist;
  console.log("ARTIST: ", artists);
  return {
    artist: artists
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
