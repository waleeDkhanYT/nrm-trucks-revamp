import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';

const ServiceDetails = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data);

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <Layout>
            <PageHeader
                title="Our Services"
                description="Comprehensive transport and logistics solutions tailored to your needs."
            />

            <section className="section-padding bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className='grid grid-cols-1 lg:grid-cols-2 text-start'>
                            <div className='p-4'>
                                <h1 className='text-3xl md:text-4xl font-bold mb-2'>{data?.title}</h1>
                                {
                                    data?.description?.map((desc: string, index: number)=>(
                                        <p key={index} className='mb-4'>{desc}</p>
                                    ))
                                }
                            </div>
                            <div className='w-full'>
                                <img src={data?.img} alt={data?.title} className='w-full' />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}

export default ServiceDetails;