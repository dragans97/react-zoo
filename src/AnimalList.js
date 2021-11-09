import React, { Component } from 'react';

export default class AnimalList extends Component {
    render() {
        const animals = [
            {type:'pas', name:'Dzeki', date: new Date('November 12, 2019')},
            {type:'macka', name:'Cico', date: new Date('December 15, 2015')},
            {type:'papagaj', name:'Sima', date: new Date('January 25, 20018')},
            {type:'konj', name:'Konjic', date: new Date('July 17, 2005')},
            {type:'svinja', name:'Dzek', date: new Date('October 1, 2015')},
        ];

        return(
          <div>
              <table class="table">
                  <thead>
                      <tr>
                          <th>Vrsta</th>
                          <th>Ime</th>
                          <th>Datum rodjenja</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          animals.map((item)=>(
                            <tr>
                                <td>{item.type}</td>
                                <td>{item.name}</td>
                                <td>{item.date.toLocaleDateString()}</td>
                            </tr>
                          ))
                      }
                      
                  </tbody>
              </table>
          </div>
        )
      }
}