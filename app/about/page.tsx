import React from 'react';
import Navbar from '@/components/common/Navbar';
import Marqueescription from './Marqueescription';
import Timeless from './Timeless';
import Beforefooter from './Beforefooter';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
const About = () => {
    return (
        <div>
            <Navbar/>
          <Link href={"/about/team"}>Allez à la page Team.</Link>
            <Marqueescription/>
            <Timeless/>
            <Beforefooter/>
            <Card></Card>
        </div>
    );
}

export default About;
