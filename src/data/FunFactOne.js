import image from '@/assets/images/funfact/why-choose-code-enter-metrics-dashboard.jpeg'
import shape from '@/assets/images/shapes/counter-border-1.png'
import shapeRtl from '@/assets/images/shapes/counter-border-1-rtl.png'

const funFactOneData = {
    image,
    shape,
    shapeRtl,
    items: [
        {
            id: 1,
            text: 'Active Support & Uptime',
            count: "24",
            suffix: "/7",
            identity: ""
        },
        {
            id: 2,
            text: 'Custom-Tailored Solutions',
            count: "100",
            suffix: "%",
            identity: "funfact-one__item--two"
        },
        {
            id: 3,
            text: 'Security & Quality Standards',
            count: "100",
            suffix: "%",
            identity: "funfact-one__item--three"
        }
    ],
    accordionData: [
        {
            id: 1,
            header: 'Why should our business choose Code Enter?',
            content: "We don’t believe in one-size-fits-all solutions. We design and develop custom software, AI solutions, and digital strategies specifically aligned with your unique business goals and workflows."
        },
        {
            id: 2,
            header: 'What are Agentic AI & Multi-Agent Systems?',
            content: "Our intelligent AI agents go far beyond ordinary chatbots. They plan, use tools, take actions, and complete complex multi-step tasks autonomously to automate critical business operations."
        },
        {
            id: 3,
            header: 'How do you ensure technology scalability?',
            content: "We build flexible, future-ready architectures that scale seamlessly as your user base, data volume, and operational demands grow — preventing costly rebuilds."
        },
        {
            id: 4,
            header: 'Can custom solutions integrate with our existing tools?',
            content: "Yes. Seamless connectivity is essential. We ensure your new solutions integrate smoothly with your existing systems, legacy platforms, and third-party APIs to create a unified ecosystem."
        },
        {
            id: 5,
            header: 'What post-launch support and maintenance do you offer?',
            content: "Our partnership continues after launch. We provide ongoing maintenance, performance optimization, proactive updates, and dedicated technical support to keep your systems evolving smoothly."
        },
    ]

}

export default funFactOneData;