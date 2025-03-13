import React from 'react';
import Navbar from '@/components/common/Navbar';
import Marqueescription from './Marqueescription';
import Timeless from './Timeless';
import Beforefooter from './Beforefooter';
import Link from 'next/link';
const About = () => {
    return (
        <div>
            <Navbar/>
          <Link href={"/about/team"}>Allez à la page Team.</Link>
            <Marqueescription/>
            <Timeless/>
            <Beforefooter/>
        </div>
    );
}

export default About;
