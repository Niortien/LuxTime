import React from 'react';
import Navbar from '@/components/common/Navbar';
import Marqueescription from './Marqueescription';
import Timeless from './Timeless';
import Beforefooter from './Beforefooter';
const About = () => {
    return (
        <div>
            <Navbar/>
            <Marqueescription/>
            <Timeless/>
            <Beforefooter/>
        </div>
    );
}

export default About;
