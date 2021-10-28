import React, { useState, useEffect } from 'react'

function exampleHook_1() {
    const [userId, setUser] = useState('');

    const newUser = () => {
        const userId = !userId ? 0 : 1;
    };

    useEffect(() => {
        newUser();
        setUser(userId);
      }, [userId]);
}