import React from "react";
import { connect } from "react-redux";
function Bottom(props) {
  const { mytitles } = props;

  return (
    <>
      <h4>My List is as Below</h4>
      <div className="mylist-names">
        {mytitles.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    mytitles: state.mytitles
  };
};
export default connect(mapStateToProps)(Bottom);
