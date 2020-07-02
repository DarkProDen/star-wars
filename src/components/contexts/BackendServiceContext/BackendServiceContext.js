import React from 'react';
import BackendService from '../../../API/BackendService';

const BackendServiceContext = React.createContext(new BackendService());

BackendServiceContext.displayName = 'BackendServiceContext';

export default BackendServiceContext;
