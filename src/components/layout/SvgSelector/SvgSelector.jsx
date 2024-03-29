import React from 'react';
import PropTypes from 'prop-types'

const SvgSelector = ({ id, svgColor, className }) => {
    switch(id) {
        default:
            return
        case 'ok':
            return (
                <svg className={className} width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.30163 1.61188L4 7.49994L1.33918 5.10412" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        case 'thanks':
            return (
                <svg className={className} width="134" height="135" viewBox="0 0 134 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1_371" fill="white">
                        <path d="M134 67.5C134 104.503 104.003 134.5 67 134.5C29.9969 134.5 0 104.503 0 67.5C0 30.4969 29.9969 0.5 67 0.5C104.003 0.5 134 30.4969 134 67.5Z"/>
                    </mask>
                    <path d="M59.333 90.8258L56.6204 93.7655L59.5601 96.4781L62.2727 93.5384L59.333 90.8258ZM43.6728 70.9322C42.0493 69.434 39.5187 69.5356 38.0205 71.1592C36.5224 72.7827 36.624 75.3133 38.2475 76.8115L43.6728 70.9322ZM98.1002 42.9159L56.3934 88.1132L62.2727 93.5384L103.98 48.3412L98.1002 42.9159ZM62.0457 87.8861L43.6728 70.9322L38.2475 76.8115L56.6204 93.7655L62.0457 87.8861ZM126 67.5C126 100.085 99.5848 126.5 67 126.5V142.5C108.421 142.5 142 108.921 142 67.5H126ZM67 126.5C34.4152 126.5 8 100.085 8 67.5H-8C-8 108.921 25.5786 142.5 67 142.5V126.5ZM8 67.5C8 34.9152 34.4152 8.5 67 8.5V-7.5C25.5786 -7.5 -8 26.0786 -8 67.5H8ZM67 8.5C99.5848 8.5 126 34.9152 126 67.5H142C142 26.0786 108.421 -7.5 67 -7.5V8.5Z" fill="#3B82F6" mask="url(#path-1-inside-1_1_371)"/>
                </svg>
            )
    }
}

SvgSelector.propTypes = {
    id: PropTypes.string,
    svgColor: PropTypes.string
}

SvgSelector.defaultProps = {
    id: 'ok',
    svgColor: '#6F767E'
}

export default SvgSelector
