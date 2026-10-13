import Error404 from '@/components/Error404/Error404';
import Footer from '@/components/Footer/Footer';
import HeaderSingle from '@/components/Header/HeaderSingle';
import HeaderSingleCloned from '@/components/Header/HeaderSingleCloned';
import TopBar from '@/components/TopBar/TopBar';
import Layout from '@/components/Layout/Layout';
import React from 'react';

const page = () => {
    return (
        <Layout>
            <TopBar />
            <HeaderSingle />
            <HeaderSingleCloned />
            <Error404 />
            <Footer />
        </Layout>
    );
};

export default page;