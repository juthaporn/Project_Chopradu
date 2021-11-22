import React from 'react';
import Slider from '../components/Slider';
import axios from 'axios';

class Covid extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            confirmed : 0,
            newConfirmed : 0,
            deaths : 0
        }
    }

    componentDidMount() {
        axios.get('https://covid19.th-stat.com/api/open/today')
        .then((response) => {
            let covid_data = response.data
            this.setState({
                confirmed: covid_data.Confirmed,
                newConfirmed: covid_data.NewConfirmed,
                deaths: covid_data.Deaths
            });
        })
    }

    render(){
        return(
            <main>
                <Slider title="ตัวเลขผู้ติดเชื้อ Covid-19"/>

                <section class="popular-items latest-padding">
                    <div class="container">
                     <div class="row">
                         <div class="col-md-12 text-center">
                            <h2 class="text-warning">ติดเชื้อทั้งหมด : {this.state.confirmed} คน</h2>
                            <h2 class="text-danger">ติดเชื้อเพิ่ม : {this.state.newConfirmed} คน</h2>
                            <h3 class="text-secondary">เสียชีวิต : {this.state.deaths} คน</h3>
                         </div>
                     </div>
                     </div>
                     </section>
 
            </main>
            
        )
    }

}

export default Covid;