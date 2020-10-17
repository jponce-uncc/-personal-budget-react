import React from 'react';
import axios from 'axios';

export default class Server extends React.Component{
    state={
        budget:[]
    };

    componentDidMount() {
        axios.get(`http://localhost:3000/budget`)
          .then(res => {
            const budget = res.data;
            this.setState({ budget });

          });
      }
      render() {
        return (
          <div></div>
        )
      }
} 