import React, { Component } from "react";
import DisplayHome from "../presentational/DisplayHome.jsx";
import { connect } from "react-redux";
import { SearchArtist } from "../../../store/actions/artist/artist.action";
import {
  storeTokenSuccess,
  storeTokenFail
} from "../../../store/actions/home/home.action.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.tokens = props.location.hash.split("#access_token=")[1];
    // this.accessToken = this.tokens.split("&refresh_token=")[0];
    // this.refreshToken = this.tokens.split("&refresh_token=")[1];

    this.state = {
      artists: [],
      albums: [],
      tracks: [],
      currentlyPlaying: "",
      accessToken: this.tokens.split("&refresh_token=")[0],
      refreshToken: this.tokens.split("&refresh_token=")[1]
    };
  }
  componentDidMount() {
    //dispatch action to store access token and refresh token into store.
    if (this.state.accessToken !== "") {
      console.log("Store Token Success", this.state.accessToken);
      this.props.storeTokenSuccess(
        this.state.accessToken,
        this.state.refreshToken
      );
    } else {
      console.log("Store Token fail");
      this.props.storeTokenFail();
    }
  }
  render() {
    return <DisplayHome />;
  }
}
const mapDispatchToProps = {
  storeTokenSuccess: storeTokenSuccess,
  storeTokenFail: storeTokenFail
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
