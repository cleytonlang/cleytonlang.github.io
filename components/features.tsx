import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Work
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              My Experiences
            </h2>
            <p className="text-lg text-indigo-200/65">
              These are the companies and projects I've had the privilege of working on and contributing my knowledge and experience to.
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-1 md:gap-x-14 md:gap-y-16 lg:grid-cols-1">
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-indigo-200/90">
                Senior Software Enginner at Eos Loan | Dec 2022 - Present
              </h3>
              <p className="text-indigo-200/65">
                As a Senior Software Engineer, I lead a team of talented developers, ensuring high performance, speed, and quality in all deliverables. I am responsible for overseeing the product lifecycle, including task definition, prioritization, and meeting deadlines, while fostering collaboration and innovation within the team.
                <br />
                In addition to leadership, I contribute as a Full-Stack Developer:
                Backend Development: Building APIs and microservices using Node.js (Express) with integrations to third-party APIs, including Equifax, Meld, Google Maps, and others.
                Frontend Development: Developing modern, scalable applications with React and Next.js, leveraging key features like SSR and other advanced capabilities. I utilize libraries such as React Query for server state management, Context API for state management, and NextAuth for secure authentication.
                <br />
                My role combines technical expertise with leadership to deliver efficient, high-quality software solutions that meet both business goals and customer needs.
                <br /><br />
                Skills: JavaScript · Node.js · Next.js · Amazon SES · PostgreSQL · Amazon EC2 · React.js · Amazon RDS · AWS · Amazon S3 · Amplify · TypeScript · Tailwind CSS · context API · Express.js
              </p>
            </article>

            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-indigo-200/90">
                Full Stack Engineer at Devskin | Dec 2021 - Nov 2023
              </h3>
              <p className="text-indigo-200/65">
                As a Full-Stack JavaScript Developer, I worked extensively with Node.js (Express) and React, delivering scalable and high-performing web applications. On the backend, I specialized in building robust APIs and integrating third-party systems, including:
                Stripe and Kiwify for seamless payment processing.<br />
                Evolution API to enable WhatsApp integration, enhancing customer communication.
                OpenAI to develop an AI-driven customer service system where clients interacted via WhatsApp, and AI assistants resolved queries and provided sales-related feedback.
                <br />
                On the frontend, I leveraged React and key ecosystem libraries such as:
                React Query for efficient server state management.
                Zustand for lightweight and intuitive state management.
                React Flow for building dynamic and interactive flow-based interfaces.
                <br />
                This role required close collaboration with cross-functional teams to ensure seamless user experiences and robust backend integrations. My contributions helped optimize customer support workflows and improve overall platform efficiency.
                <br /><br />
                Skills: JavaScript · GitHub · React.js · Tailwind CSS · Axios · context API · Vite · Zustand · Node.js · Express.js · Stripe (Software) · Kiwify · Open AI
              </p>
            </article>

            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-indigo-200/90">
                Full Stack Engineer at Innovation Intelligence AI | Dec 2020 - Dec 2021
              </h3>
              <p className="text-indigo-200/65">
                As a Senior Full-Stack Engineer, I focused primarily on backend development with Node.js (Express), while also contributing to frontend development using React. I played a key role in building an AI-powered application, including:
                <br />
                Integrating third-party APIs such as OpenAI and IBM Watson to enhance functionality.
                Developing web crawlers to extract and enrich data from external sources, improving database quality.
                Working with both PostgreSQL and MongoDB for efficient and scalable data storage.
                <br />
                Additionally, I leveraged AWS SDK and services including EC2, S3, Amplify, SQS, and RDS to deliver secure, scalable, and high-performance cloud-based solutions. My contributions combined technical expertise and strategic implementation to ensure the success of the application.
                <br /><br />
                Skills: JavaScript · Node.js · Amazon SES · Git · PostgreSQL · GitHub · Amazon EC2 · React.js · Amazon RDS · AWS · Amazon S3 · Tailwind CSS · context API · Express.js · Vite
              </p>
            </article>

            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-indigo-200/90">
                Senior Software Developer at Oi Telecom | Feb 2017 - Nov 2020
              </h3>
              <p className="text-indigo-200/65">
                As a Senior Full-Stack Developer, I contributed to the development of a B2B software platform designed to streamline sales and business operations. Key achievements include:
                <br />
                Leading the migration of a monolithic PHP platform to a modern stack with React on the frontend and Node.js (Express) on the backend.
                Developing seamless integrations between internal systems (e-commerce) and third-party platforms such as Salesforce and SAP, creating APIs and webhooks to enable real-time sales updates.
                Ensuring end-to-end alignment of the sales process, from purchase to product delivery, improving efficiency and communication across teams.
                <br />
                I utilized SQL Server as the database to handle complex data processing and ensure reliable performance. This role required a focus on scalability, integration, and delivering high-impact solutions for B2B operations.
                As a Senior Full-Stack Developer, I contributed to the development of a B2B software platform designed to streamline sales and business operations. Key achievements include: Leading the migration of a monolithic PHP platform to a modern stack with React on the frontend and Node.js (Express) on the backend. Developing seamless integrations between internal systems (e-commerce) and third-party platforms such as Salesforce and SAP, creating APIs and webhooks to enable real-time sales updates. Ensuring end-to-end alignment of the sales process, from purchase to product delivery, improving efficiency and communication across teams. I utilized SQL Server as the database to handle complex data processing and ensure reliable performance. This role required a focus on scalability, integration, and delivering high-impact solutions for B2B operations.
                <br /><br />
                Skills: JavaScript · Node.js · WebDriver Selenium · Microsoft SQL Server · MySQL · Git · AngularJS · PostgreSQL · Selenium · React.js · Bootstrap · PHP · CodeIgniter
              </p>
            </article>

            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-indigo-200/90">
                Software Developer at Stafanini | Mar 2014 - Mar 2016
              </h3>
              <p className="text-indigo-200/65">
                As a contracted Software Developer at FIAT's automotive manufacturing plant, I specialized in process automation systems for vehicle production. My responsibilities included:
                <br />
                Working on a monolithic software system developed in PHP with the CodeIgniter Framework and powered by a PostgreSQL database.
                Developing integrations between internal APIs and SAP, ensuring seamless communication and data flow across enterprise systems.
                <br />
                This role required a deep understanding of manufacturing processes and the ability to deliver robust software solutions to optimize production workflows.
                As a contracted Software Developer at FIAT's automotive manufacturing plant, I specialized in process automation systems for vehicle production. My responsibilities included: Working on a monolithic software system developed in PHP with the CodeIgniter Framework and powered by a PostgreSQL database. Developing integrations between internal APIs and SAP, ensuring seamless communication and data flow across enterprise systems. This role required a deep understanding of manufacturing processes and the ability to deliver robust software solutions to optimize production workflows.
                <br /><br />
                Skills: PHP · Git · AngularJS · JQuery · Banco de dados Oracle · Bootstrap · CodeIgniter
              </p>
            </article>

            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-indigo-200/90">
                Software Developer at Oi Telecom | Aug 2011 - Mar 2014
              </h3>
              <p className="text-indigo-200/65">
                As a Software Developer, I worked with a legacy PHP structure and utilized EXTJS for the application interface. Key contributions included:
                <br />
                Migrating an application from C# to PHP, ensuring a smooth transition and maintaining system functionality.
                Developing integrations between internal systems to enhance operational efficiency.
                Utilizing SQL Server as the database to manage and process data effectively.
                <br />
                This role required adaptability and problem-solving skills to modernize and integrate legacy systems seamlessly.
                As a Software Developer, I worked with a legacy PHP structure and utilized EXTJS for the application interface. Key contributions included: Migrating an application from C# to PHP, ensuring a smooth transition and maintaining system functionality. Developing integrations between internal systems to enhance operational efficiency. Utilizing SQL Server as the database to manage and process data effectively. This role required adaptability and problem-solving skills to modernize and integrate legacy systems seamlessly.
                <br /><br />
                Skills: PHP · Ext JS · Microsoft SQL Server · Git · JQuery · CodeIgniter · Bootstrap
              </p>
            </article>

            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-indigo-200/90">
                PHP Developer at Newcom | Oct 2010 - Aug 2011
              </h3>
              <p className="text-indigo-200/65">
                As a contracted Software Developer for Oi Telecommunications, I contributed to multiple software solutions supporting the operations team. Key responsibilities included:
                Developing and maintaining applications using PHP, with a focus on creating efficient and reliable solutions.<br />
                Designing user interfaces with Bootstrap to deliver responsive and user-friendly experiences.
                Working extensively with Oracle databases to manage and process large-scale data.
                <br />
                This role required a combination of technical expertise and adaptability to meet the dynamic needs of the telecommunications industry.
                As a contracted Software Developer for Oi Telecommunications, I contributed to multiple software solutions supporting the operations team. Key responsibilities included: Developing and maintaining applications using PHP, with a focus on creating efficient and reliable solutions. Designing user interfaces with Bootstrap to deliver responsive and user-friendly experiences. Working extensively with Oracle databases to manage and process large-scale data. This role required a combination of technical expertise and adaptability to meet the dynamic needs of the telecommunications industry.
                <br /><br />
                Skills: PHP · Ext JS · Microsoft SQL Server · MySQL · JQuery · SQL · Bootstrap
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
