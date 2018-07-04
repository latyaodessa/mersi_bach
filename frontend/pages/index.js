import React from 'react'
import {connect} from 'react-redux'
import Grid from '../src/components/home/components/grid-pictures'
import MainLayoutWithNavigation from '../src/components/layouts/MainLayoutWithNavigation'
import meta from '../src/components/home/components/homeMetaGenerator'
import VegaChart from '../src/components/charts/VegaChart'

class Index extends React.Component {
    static async getInitialProps({store, isServer}) {

        return {isServer}
    }

    constructor(props) {
        super(props);
        this.state = {
            randomise: false,
            charts: 4
        };

    }

    changeRandomise = (changeTo) =>{
        this.setState({randomise: changeTo})
    };



    render() {
        return (
            <MainLayoutWithNavigation meta={meta()}>
                <div className="child-container">
                    <div style={{width: "100%"}}>
                        <div className="pure-g">
                            <div className="pure-u-1-4">
                                <a onClick={this.changeRandomise.bind(this, true)} className="pure-button pure-button-primary" href="#">
                                    Randomise</a>
                            </div>
                            <div className="pure-u-1-4">
                                <a className="pure-button pure-button-primary" href="#">Change Colors</a>
                            </div>
                            <div className="pure-u-1-4">
                                <a className="pure-button pure-button-primary" href="#">A
                                    Fetch Stock data</a>
                            </div>
                            <div className="pure-u-1-4">
                                <a className="pure-button pure-button-primary" href="#">A
                                    Change Charts Type</a>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                        <div style={styles.oneLine}><VegaChart randomise={this.state.randomise} changeRandomise={this.changeRandomise}/></div>
                    </div>
                </div>
            </MainLayoutWithNavigation>
        )
    }
}

const styles = {
    oneLine: {
        float: 'left'
    }
};

export default connect()(Index)
