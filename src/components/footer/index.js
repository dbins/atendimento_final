import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="dark">
        <div id="copyrights">
          <div className="container clearfix">
            <div className="col_half">
              Copyright © 2019 - Sistema de Atendimento Online
              <br />
            </div>
            <div className="col_half col_last tright">
              <div className="clear" />
              <i className="icon-envelope2" /> central_atendimento@dbins.com.br{" "}
              <span className="middot">·</span>{" "}
              <i className="icon-headphones" /> +55-11-1234-5678{" "}
              <span className="middot">·</span> <i className="icon-skype2" />{" "}
              BINS
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
