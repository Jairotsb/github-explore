import React from 'react';
import '../src/styles/global.scss'
import { Counter } from './components/Counter';
import { RespositoryList } from './components/RepositoryList';

export function App() {
    return (
        <>
            <RespositoryList />
            <Counter />
        </>
    )

}