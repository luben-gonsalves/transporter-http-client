import React from "react";
import Collection from "./collections";
import Histories from "./histories.js";
import Response from "./response";
import { InputQuery } from "./inputUrl";
import { Provider } from "react-redux";
import { myStore } from "../store/store.js";
import Navbar from "./Navbar";
import "../style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      light: false
    };
    this.checkdark = this.checkdark.bind(this);
    this.checklight = this.checklight.bind(this);
  }
  checkdark() {
    this.setState({
      dark: true,
      light: false
    });
  }

  checklight() {
    this.setState({
      dark: false,
      light: true
    });
  }
  render() {
    return (
      <Provider store={myStore}>
        <div className={this.state.dark ? "dark" : "light"}>
          <div className={`container mode`}>
            <br />
            <div className="row">
              <div className="col-md-3 sideBorder">
                <Navbar
                  checkdark={this.checkdark}
                  checklight={this.checklight}
                  dark={this.state.dark}
                  light={this.state.light}
                />
                <br />
                <ul
                  class="nav nav-pills mb-3 offset-md-2"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-history-tab"
                      data-toggle="pill"
                      href="#pills-history"
                      role="tab"
                      aria-controls="pills-history"
                      aria-selected="true"
                    >
                      History
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-collections-tab"
                      data-toggle="pill"
                      href="#pills-collections"
                      role="tab"
                      aria-controls="pills-collections"
                      aria-selected="false"
                    >
                      Collections
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-history"
                    role="tabpanel"
                    aria-labelledby="pills-history-tab"
                  >
                    <Histories
                      dark={this.state.dark}
                      light={this.state.light}
                    />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-collections"
                    role="tabpanel"
                    aria-labelledby="pills-collections-tab"
                  >
                    <Collection />
                  </div>
                </div>
              </div>
              <div className="col-md-9 ">
                <InputQuery dark={this.state.dark} light={this.state.light} />
                <Response />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
