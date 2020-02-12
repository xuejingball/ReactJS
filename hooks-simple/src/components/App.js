import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    // deconstructor of an array
    // [currentValue, setCurrentValue] = useState('initialValue')
    const [resource, setResorce] = useState('posts');
    // for a second state element we can do
    // const [currentCount, setCount] = useState(0)

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResorce('posts')}>Posts</button>
                <button onClick={() => setResorce('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;