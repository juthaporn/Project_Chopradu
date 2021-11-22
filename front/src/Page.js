import React from 'react';
import './App.css';
import picT from './img.jpg';

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      c: 0,
      java: 0,
      html: 0,
      css: 0,
      cPuls: 0,
      cSharp: 0,
      php: 0,
      python: 0,
      sql: 0,
      bigData: 0,
      getReq: 0,
      ioT: 0,
      test: 0,
      algorithm: 0
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        c: 100,
        java: 80,
        html: 80,
        css: 80,
        cPuls: 50,
        cSharp: 50,
        php: 50,
        python: 50,
        sql: 70,
        bigData: 60,
        getReq: 90,
        ioT: 50,
        test: 80,
        algorithm: 90
      })
    }, 1000)
  }
  render() {
    const headP = {
      color: "white",
      backgroundColor: "#FFC0CB",
      padding: "10px",
      fontFamily: "Courier New",
      textShadow: "2px 2px 2px #000000",
      boxShadow: "5px 5px 10px grey"

    }
    const bodyP = {
      backgroundColor: "#FFFAFA",
    }
    const style = {
      color: "#483D8B",
      padding: "5px",
      marginLeft: "30px",
      fontFamily: "Lucida Console",
      // textShadow: "2px 2px 3px #000000"
    }
    const style00 = {
      color: "#483D8B",
      padding: "5px",
      marginTop: "-25px",
      marginLeft: "30px",
      fontFamily: "Lucida Console"
    }
    const style01 = {
      color: " #6495ED",
      padding: "15px",
      marginTop: "-25px",
      marginLeft: "40px",
      fontFamily: "Times New Roman"
    }
    // const style02 = {
    //   color: "#2E8B57",
    //   padding: "5px",
    //   marginTop: "-25px",
    //   fontFamily: "Lucida Console"
    // }
    // const style03 = {
    //   color: "#BC8F8F",
    //   padding: "15px",
    //   marginTop: "-25px",
    //   fontFamily: "Times New Roman"
    // }
    const style04 = {
      color: "#9370DB",
      padding: "5px",
      marginTop: "-25px",
      marginLeft: "30px",
      fontFamily: "Lucida Console"
    }
    const style05 = {
      color: "#00CED1",
      padding: "15px",
      marginTop: "-25px",
      marginLeft: "40px",
      fontFamily: "Times New Roman"
    }
    const headS = {
      color: "white",
      backgroundColor: "#f8b4c5",
      padding: "10px",
      fontFamily: "Courier New",
      fontSize: "50%",
      textShadow: "2px 2px 2px #000000",
      boxShadow: "5px 5px 10px grey"
    }
    const bodyS = {
      backgroundColor: "#FFFAFA",
    }
    const styleS1 = {
      color: "#483D8B",
      fontFamily: "Lucida Console"
    }
    const styleS2 = {
      color: " #6495ED",
      fontFamily: "Lucida Console"
    }
    const styleS3 = {
      color: "#9370DB",
      fontFamily: "Lucida Console"
    }

    return (
      <div class="container-fluid">
        <div class="card">
          <div style={headP}>
            <div class="card-body" >
              <h1 class="text-center">PROFILE</h1>
            </div>
          </div>
        </div>
        {/* <div class="card"> */}
        <div style={bodyP}>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <img src={picT} class="float-right" width="95%" height="95%" ></img>
              </div>
              <div class="col-md-6">
                <div class="lead">
                  {/* <div clss="text-monospace"> */}
                  <h5 style={style}>Name :</h5>
                  <p style={style01}>Ms.Juthaporn Pummanee</p>
                  <p style={style04}>Brithday :</p>
                  <p style={style05}> 5 November 1995</p>
                  <p style={style00}>Age :</p>
                  <p style={style01}> 25 year old</p>
                  <p style={style04}>Phone :</p>
                  <p style={style05}>+66 97 171 9806</p>
                  <p style={style00}>E-mail : </p>
                  <p style={style01}>Jutha.1995@gmail.com</p>
                  <p style={style04}>Facebook : </p>
                  <p style={style05}>Juthaporn Pummanee</p>
                  <p style={style00}>Instagram : </p>
                  <p style={style01}>Jjpumm</p>
                  <p style={style04}>Education :</p>
                  <p style={style05}>Software Engineering Major</p>
                  <p style={style05}>School of Engineering and Resources</p>
                  <p style={style05}>Walailak University</p>
                  <p style={style00}>Hobby : </p>
                  <p style={style01}>Reading cartoons and watching psychological documentaries.</p>
                  <p style={style04}>Interest : </p>
                  <p style={style05}>The read articles on primary psychological diseases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div class="card" >
          <div style={headS}>
            <div class="card-body">
              <h2 class="text-center">SKILL</h2>
            </div>
          </div>
        </div>
        <div style={bodyS}>
          <div class="card-body">
            <div class="row">
              <div class="col-2">
                <p style={styleS1}>C</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success text-white"
                    role="progressbar"
                    style={{ width: this.state.c + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.c}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS2}>Algorithm</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success text-white"
                    role="progressbar"
                    style={{ width: this.state.algorithm + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.algorithm}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS3}>Get Requirement</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success text-white"
                    role="progressbar"
                    style={{ width: this.state.getReq + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.getReq}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS1}>JAVA</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-info text-white"
                    role="progressbar"
                    style={{ width: this.state.java + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.java}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS2}>HTML</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-info text-white"
                    role="progressbar"
                    style={{ width: this.state.html + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.html}%</div>

                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS3}>CSS</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-info text-white"
                    role="progressbar"
                    style={{ width: this.state.css + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.css}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS1}>Test</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-info text-white"
                    role="progressbar"
                    style={{ width: this.state.test + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.test}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS2}>SQL</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-primary text-white"
                    role="progressbar"
                    style={{ width: this.state.sql + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.sql}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS3}>Big Data</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-primary text-white"
                    role="progressbar"
                    style={{ width: this.state.bigData + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.bigData}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS1}>C++</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning text-white"
                    role="progressbar"
                    style={{ width: this.state.cPuls + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.cPuls}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS2}>C#</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning text-white"
                    role="progressbar"
                    style={{ width: this.state.cSharp + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.cSharp}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS3}>PHP</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning text-white"
                    role="progressbar"
                    style={{ width: this.state.php + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.php}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS1}>Python</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning text-white"
                    role="progressbar"
                    style={{ width: this.state.python + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.python}%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p style={styleS2}>IOT</p>
              </div>
              <div class="col-10">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning text-white"
                    role="progressbar"
                    style={{ width: this.state.ioT + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{this.state.ioT}%</div>
                </div>
              </div>
            </div>
          </div>
        </div >
      // </div >
    )
  }
}

export default Page;