import React from 'react';
import {withBookstoreServiceConsumer} from '../book-service-context';

const withBookstoreService = () => (Wrapped) => {


    return (props) => {
        return (
            <withBookstoreServiceConsumer>
              {
                    (bookstoreService) => {
                      return (
                        <Wrapped {...props} 
                        bookstoreService= {bookstoreService} />
                      );
                    }
              }
            </withBookstoreServiceConsumer>
        );
    }
};

export default withBookstoreService;