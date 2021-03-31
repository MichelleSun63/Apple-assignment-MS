import React, { useEffect } from "react";
import * as actionfunc from "../../redux/actions";

import { connect } from "react-redux";
import Bottom from "../Bottom";
import List from "../List";
function MainPage(props) {
  useEffect(() => {
    props.setData();
  });

  return (
    <div>
      <List
        title="My List"
        data={props.mytitles}
        method={props.removeData}
        button="remove"
      />

      <List
        title="Recmendations"
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
    addData: (it) => dispatch(actionfunc.addItem(it)),
    removeData: (it) => dispatch(actionfunc.removeItem(it)),
    setData: () => dispatch(actionfunc.setItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
