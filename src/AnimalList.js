import React, { Component, useState} from 'react';

function AnimalList() {
        // kada postavljas ovu vrednost, incijalna vrednost promenljive ide u useState([])
           const [animals, setAnimals] = useState([
            {id:1, type:'pas', name:'Dzeki', date: new Date('November 12, 2019')},
            {id:2, type:'macka', name:'Cico', date: new Date('December 15, 2015')},
            {id:3, type:'papagaj', name:'Sima', date: null},
            {id:4, type:'konj', name:'Konjic', date: new Date('July 17, 2005')},
            {id:5, type:'svinja', name:'Dzek', date: null},
        ]);
        

        const removeElement = (elem) => {
            // kako bi obrisali element, potrebno je da napravimo novi niz i njega prosledimo setAnimals
            // i time postavimo novu vrednost niza odnosno isfiltriranu vrednost
            const newAnimalsArr = animals.filter((animal) => animal.id !== elem.id);
            setAnimals(newAnimalsArr);
        };

        const moveToTop = (elem) => {
            // #4 kreiram novi niz bez njega i nadodam njega na pocetak preko unshift()
            const newAnimalsArr = animals.filter((animal) => animal.id !== elem.id);
            newAnimalsArr.unshift(elem);
            setAnimals(newAnimalsArr);
        }

       
        return(
          <div>
              <table class="table">
                  <thead>
                      <tr>
                          <th>Vrsta</th>
                          <th>Ime</th>
                          <th>Datum rodjenja</th>
                          <th>Akcija</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          animals.map((item)=>(
                            <tr>
                                <td>{item.type}</td>
                                <td>{item.name}</td>
                                {/* #2 - ako nema datuma ispisi da je nepoznat   */}
                                <td>{item.date ? item.date.toLocaleDateString() : 'Nepoznat'}</td>
                                <td>
                                    {/* kako bih pozvao removeElement neophodno je da je pozovem preko callbacka */}
                                    <button onClick={() => removeElement(item)} >Obrisi</button>
                                    <button onClick={() => moveToTop(item)}>Premesti na vrh</button>
                                </td>
                            </tr>
                          ))
                      }
                      
                  </tbody>
              </table>
          </div>
        )
      
}

export default AnimalList