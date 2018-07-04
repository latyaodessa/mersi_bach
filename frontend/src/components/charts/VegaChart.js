import React from "react";
import Vega from 'react-vega';


let spec = {
    "$schema": "https://vega.github.io/schema/vega/v3.0.json",
    "width": 500,
    "height": 200,
    // "padding": {left: 5, right: 5, top: 5, bottom: 5},

    "data": [],

    "signals": [
        {
            "name": "tooltip",
            "value": {},
            "on": [
                {"events": "rect:mouseover", "update": "datum"},
                {"events": "rect:mouseout", "update": "{}"}
            ]
        }
    ],

    "scales": [
        {
            "name": "xscale",
            "type": "band",
            "domain": {"data": "table", "field": "category"},
            "range": "width"
        },
        {
            "name": "yscale",
            "domain": {"data": "table", "field": "amount"},
            "nice": true,
            "range": "height"
        }
    ],

    "axes": [
        {"orient": "bottom", "scale": "xscale"},
        {"orient": "left", "scale": "yscale"}
    ],

    "marks": [
        {
            "type": "rect",
            "from": {"data": "table"},
            "encode": {
                "enter": {
                    "x": {"scale": "xscale", "field": "category", "offset": 10},
                    "width": {"scale": "xscale", "band": 0.5, "offset": -1},
                    "y": {"scale": "yscale", "field": "amount"},
                    "y2": {"scale": "yscale", "value": 0}
                },
                "update": {
                    "fill": {"value": "green"}
                },
                "hover": {
                    "fill": {"value": "yellow"}
                }
            }
        },
        {
            "type": "text",
            "encode": {
                "enter": {
                    "align": {"value": "center"},
                    "baseline": {"value": "bottom"},
                    "fill": {"value": "#333"}
                },
                "update": {
                    "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
                    "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -2},
                    "text": {"signal": "tooltip.amount"},
                    "fillOpacity": [
                        {"test": "datum === tooltip", "value": 0},
                        {"value": 1}
                    ]
                }
            }
        }
    ]
};

class VegaChart extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            spec: ''
        };
        console.log(spec);
    }

    componentDidMount() {
        this.generateData().then(data => {
            spec.data = data;
            this.setState({spec: spec})
        });
    }
    componentWillUpdate() {
        // console.log(this.props);
        // if(this.props.randomise){
        //     // this.props.changeRandomise(false);
        //     this.generateData().then(data => {
        //         spec.data = data;
        //         this.setState({spec: spec})
        //     });
        // }
    }
    // componentWillReceiveProps(){
    //     console.log(this.props);
    //
    // }


    generateData = async () => {
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let table = [];
        for (let i = 0; i < 20; i++) {
            table.push({"category": possible.charAt(i), "amount": Math.floor(Math.random() * 100) + 10});
        }
        return [{
            "name": "table",
            "values": table
        }];
    };

    handleHover = (...args) => {
        console.log("aaaaa");
        console.log(args);
    };


    render() {
        return (
            <div>
                {this.state.spec && <Vega spec={this.state.spec}/>}
            </div>
        )
            ;


    };
}

export default VegaChart;
