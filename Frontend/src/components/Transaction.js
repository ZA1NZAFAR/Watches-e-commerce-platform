import React, { useState } from 'react';
import '../styles/Transaction.css';
import Card from './Card';

// Transaction card which used in unordered list to display thansaction informations
const Transaction = ({ watch, client, quantity }) => {
    
    // Formats price to the given currency and region. Used to nicely format price of real estates
    const formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    });

    return(
        <>
            <div className='transaction'>
                <div className='transaction-watch'>
                    <div className='transaction-watch-image'>
                        <img src={ watch.Image } alt='Watch'></img>
                    </div>
                    <div className='transaction-watch-details'>
                        <div className='transaction-watch-details-info'>
                            <h2 className='transaction-watch-details-info-name'>{ watch.Name }</h2>
                            <h3 className='transaction-watch-details-info-brand'><span>{ watch.Brand }</span></h3>
                            <p className='transaction-watch-details-info-description'>{ watch.Description }</p>
                            <h3 className='transaction-watch-details-info-price'>{ formatter.format(watch.Price) }</h3>
                        </div>
                    </div>
                </div>
                <div className='transaction-client'>
                    <p className='transaction-client-firstName'>{ client.FirstName }</p>
                    <p className='transaction-client-lastName'>{ client.LastName }</p>
                    <p className='transaction-client-email'>{ client.email }</p>
                </div>
                <h2 className='transaction-quantity'>{ quantity }</h2>
            </div>
        </>
    );
}

export default Transaction;