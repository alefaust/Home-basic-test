import React from 'react';

import TimeImage from '../../assets/images/time.svg'
import AudioImage from '../../assets/images/audio.svg'
import lineImage from '../../assets/images/line.svg'
import QualityImage from '../../assets/images/quality.svg'

import './style.css'

function ListItens() {
    return (
        <div className="container-itens">
            <div className="container-itens-chield">
                <img
                    src={TimeImage}
                    alt="Time"
                />
                <div>
                    <strong>Spend time smart</strong>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                </div>
            </div>
            <div className="container-itens-chield">
                <img
                    src={AudioImage}
                    alt="Audio"
                />
                <div>
                    <strong>Audio podcast</strong>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                </div>
            </div>
            <div className="container-itens-chield">    
                <img
                    src={lineImage}
                    alt="Line"
                />
                <div>
                    <strong>Line-chart</strong>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                </div>
            </div>
            <div className="container-itens-chield">    
                <img
                    src={QualityImage}
                    alt="Quality"
                />
                <div>
                    <strong>Quality</strong>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                </div>
            </div>

        </div>
    );
}

export default ListItens;