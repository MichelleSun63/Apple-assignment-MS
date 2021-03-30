import React, { useEffect } from "react";
import { connect } from "react-redux";
import Bottom from "../Bottom";
import List from "../List"
function MainPage(props) {
  useEffect(() => {
    props.setData();
  });

  return (
    <div>
     
     <List title="My List"
     data={props.mytitles}
     method={props.removeData}
     button="remove"
     />

      <List title="Recmendations"
      data={props.rectitles}
      method={props.addData}
      button="add"
      />

      <Bottom />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mytitles: state.mytitles,
    rectitles: state.rectitles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (it) => dispatch({ type: "adddata", it }),
    removeData: (it) => dispatch({ type: "removedata", it }),
    setData: () =>
      dispatch((dispatch) => {
        let url = "./mock.json";
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: "setdata",
              data
            });
          });
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
