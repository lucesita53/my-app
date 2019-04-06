import React, { Component } from 'react';
import 'react-dropdown/style.css'
import Dropdown from 'react-dropdown';
import OPTIONS, {OPTIONS_ID} from '../Constants/utils';
import MostrarGrilla from '../Components/MostrarGrilla';

class ContentCotizaciones extends Component {
    state = {
        dropdown: OPTIONS[0]
    };

    _onSelect = ({value}) => {
        let index = OPTIONS.indexOf(value) > -1 ? OPTIONS.indexOf(value) : -1;
        this.result.updateResult(index > -1 ? OPTIONS_ID[index] : '');
        this.setState({dropdown: value})
      }

    render() {
        return (
        <div>
            <div>
                <Dropdown options={OPTIONS} onChange={this._onSelect} value={this.state.dropdown}/>
            </div>
            <div>
                <MostrarGrilla ref={component => this.result = component}/>
            </div>
        </div>
        );
    }
}

export default ContentCotizaciones;