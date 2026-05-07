import Shovel950E from '@/assets/Shovel950E.jpg';
// import fleet1 from '@/assets/fleet-1.png';
// import fleet2 from '@/assets/fleet-2.png';
// import fleet3 from '@/assets/fleet-3.png';
import service1 from '@/assets/service-1.webp';
import service2 from '@/assets/service-2.webp';
import service3 from '@/assets/service-3.webp';
import { Truck, Shield, Clock, CheckCircle } from "lucide-react";

export const nrmServices = [
    // {
    //     id: "shovel950E",
    //     title: "Shovel-950E",
    //     content: "Shovel-950E at Dubai General Land Transport is a powerful and versatile piece of heavy machinery essential for a wide range of construction and earthmoving tasks. The 950E model is a front-end loader equipped with a large bucket ideal",
    //     description: [
    //         "Shovel-950E at Dubai General Land Transport is a powerful and versatile piece of heavy machinery essential for a wide range of construction and earthmoving tasks. The 950E model is a front-end loader equipped with a large bucket ideal for digging, lifting, and transporting materials such as soil, sand, gravel, and debris on construction sites.",
    //         "The Shovel-950E is known for its robust performance. It provides high breakout force and excellent lifting capacity, making it a reliable choice for heavy-duty operations. Its advanced hydraulic system ensures smooth and efficient operation, allowing for precise control and increased productivity in various tasks, from excavation to material handling.",
    //         "This machine is particularly useful in large-scale projects where quick and efficient material movement is required. Its durable construction and powerful engine enable it to operate effectively in challenging terrain and under demanding conditions. The Shovel-950E plays a crucial role in streamlining operations on construction sites, contributing to faster project completion and enhanced overall efficiency."
    //     ],
    //     img: Shovel950E,
    //     readmore: "/services/shovel950E"
    // },
        {
        id: "tipper-trailer",
        title: "Tipper Trailer Services",
        content: "Our Tipper Trailer Services are designed for the efficient bulk transport of loose materials such as sand, gravel, aggregate, and construction debris. Essential for construction logistics.",
        description: [
            "Our Tipper Trailer Services are designed for the efficient bulk transport of loose materials such as sand, gravel, aggregate, and construction debris. They are an essential component of earthmoving and construction logistics.",
            "Constructed with heavy-duty materials, our tipper trailers are built to withstand the rigors of heavy loading and off-road site conditions. The hydraulic tipping mechanism ensures rapid and safe unloading of materials exactly where they are needed.",
            "We support a wide range of industries including construction, mining, and agriculture. Our commitment to vehicle maintenance and driver safety ensures that your bulk materials are transported with the highest level of reliability and operational efficiency."
        ],
        img: service3,
        readmore: "/services/tipper-trailer"
    },
    
    {
        id: "flatbed-truck",
        title: "Flatbed Truck Service",
        content: "Our Flatbed Truck Services are ideal for transporting oversized, bulky, or irregularly shaped cargo that cannot be loaded into standard enclosed trailers. We ensure safe and reliable movement of heavy machinery.",
        description: [
            "Our Flatbed Truck Services are ideal for transporting oversized, bulky, or irregularly shaped cargo that cannot be loaded into standard enclosed trailers. From construction materials to large machinery, we have the capacity to move it safely.",
            "Our fleet includes a variety of flatbed configurations, including standard flatbeds, step decks, and lowboys, enabling us to accommodate heavy hauls and over-dimensional loads. Each flatbed is equipped with state-of-the-art securement equipment.",
            "Our experienced team handles all aspects of flatbed transportation, including route planning, permitting for oversized loads, and specialized escort services when required. We are committed to delivering your specialized freight on time and in perfect condition."
        ],
        img: service2,
        readmore: "/services/flatbed-truck"
    },
    {
        id: "container-truck",
        title: "Container Truck Service",
        content: "Our Container Truck Services provide secure and efficient transportation for standard and specialized shipping containers across the region. We ensure timely delivery from ports to your project sites.",
        description: [
            "Our Container Truck Services provide secure and efficient transportation for standard and specialized shipping containers across the region. We ensure timely delivery of your cargo from ports to warehouses or directly to your project sites.",
            "Equipped with a modern fleet of well-maintained container chassis and prime movers, we can handle various container sizes including 20ft, 40ft, and high-cube containers. Our drivers are highly trained in safe container handling and securement protocols.",
            "We offer advanced tracking and logistics support, allowing you to monitor your shipments in real-time. Whether it's port drayage, long-haul transport, or dedicated contract carriage, our container services are designed to optimize your supply chain."
        ],
        img: service1,
        readmore: "/services/container-truck"
    }
];

export const whyChooseUs = [
    { icon: Clock, text: "24/7 Service Availability" },
    { icon: Shield, text: "Fully Insured Operations" },
    { icon: CheckCircle, text: "ISO Certified Processes" },
    { icon: Truck, text: "Modern Fleet" },
];