import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FeatureListItem from './Components/Features/FeatureListItem';
import FeatureList from './Components/Features/FeatureList';
import Form from './Components/Form/Form';
import MainSummary from './Components/Summary/MainSummary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        "Operating System": {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        "Video Card": {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    const features = Object.keys(this.props.features)
      .map(key => {
        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return <FeatureListItem key={index} featureClass={featureClass} updateFeature={() => this.updateFeature(key, item)} item={item} title={key} />
        });

        return <FeatureList key={key} title={key} options={options} />
      });

    return (
      <div className="App">
        <Header />
        <main>
          <Form features={features} />
          <MainSummary selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;