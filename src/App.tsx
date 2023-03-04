import "dracula-ui/styles/dracula-ui.css";
import { motion } from "framer-motion"
import { Paragraph, List, Text, Anchor, Box } from "dracula-ui";
import logo from "./assets/logo.fw.png";
import photo from "./assets/profile.jpg";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      <div className="header">
        <motion.div
          animate={{
            x: [0, 10, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="logo">
          <img src={logo} title="Cleyton Silva" />
          <Box>
            <Anchor color="purple" href="https://www.linkedin.com/in/cleytonbrasil/" target="_blank">Linkedin</Anchor>
          </Box>
          <Box>
            <Anchor color="purple" href="https://github.com/cleytonlang" target="_blank">Github</Anchor>
          </Box>
        </motion.div>
        <div>

          <Paragraph color="purpleCyan" weight="bold" size="lg">
            Software Enginner - cleytonb40@gmail.com | +55 31 988621156
          </Paragraph>
          <Paragraph mb="md" size="lg" color="blackSecondary">
            Software developer with over 12 years of experience in enterprise application development.
            Passionate about learning new technologies.
            I live this every day and intend to do this for the rest of my life, but I also have other passions.
            I love music, I like to play the guitar and sing. Also I like to photograph and I love dogs.
          </Paragraph>
        </div>
      </div>

      <Box mb="md">
        <Box className="skills-photo">
          <div>
            <Box mb="sm">
              <Text color="blackSecondary" weight="bold" size="lg" as="span" className="name">
                Cleyton Silva
              </Text>
            </Box>
            <Text weight="bold" color="blackSecondary" size="lg">
              Main Skills
            </Text>
            <List variant="unordered" color="purple">
              <li className="drac-text drac-text-blackSecondary">
                Frontend: JavaScript, ReactJS, NextJS
              </li>
              <li className="drac-text drac-text-blackSecondary">Backend: Node JS</li>
              <li className="drac-text drac-text-blackSecondary">
                Databases: PostgreSQL, MySQL, SQL Server
              </li>
              <li className="drac-text drac-text-blackSecondary">Github, Gitlab, Bitbucket</li>
              <li className="drac-text drac-text-blackSecondary">Trello, Jira</li>
              <li className="drac-text drac-text-blackSecondary">
                AWS (EC2, S3, Amplify, RDS, SES, Cloudfront)
              </li>
            </List>
          </div>
          <div>
            <img src={photo} className="photo" title="Cleyton Silva" />
          </div>
        </Box>
      </Box>

      <Box>
        <Box mb="sm">
          <Text weight="bold" color="blackSecondary" size="lg">
            Experiences
          </Text>
        </Box>
        <Box>
          <List variant="none" color="purple">
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Tech Leader at Quikdev
              </Text>
              <br />
              <Text color="purple">Dezembro/2022 - moment</Text>
              <br />
              <Paragraph color="blackSecondary">
                Technical leader of software development team frontend (NextJS, React), backend (NodeJs, NestJS) and QA.
                Participation in definitions and discussions with the requesting client of demands.<br />
                Mapping and planning the evolution of software development projects.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Sr. Software Enginner - Part-time at Devskin
              </Text>
              <br />
              <Text color="purple">Dezembro/2021 - moment</Text>
              <br />
              <Paragraph color="blackSecondary">
                Frontend development and design in React according to the layout created in Figma
                Participation in technology roadmap discussions.
                <br />
                Technologies: · Javascript · React.js · Node.js · AWS ECS · AWS S3 · AWS RDS · GitHub · PostgreSQL · Jira
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Software Engineer at Innovation Intelligence
              </Text>
              <br />
              <Text color="purple">Dezembro/2020 - Dezembro/2021</Text>
              <br />
              <Paragraph color="blackSecondary">
                Responsible for the web application developed in ReactJS and
                NodeJS, using PostgreSQL. Using AWS services (EC2, S3, Amplify,
                RDS)
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Senior Software Developer at Oi Telecommunications, S.A.
              </Text>
              <br />
              <Text color="purple">March/2017 - November/2020</Text>
              <br />
              <Paragraph color="blackSecondary">
                Developing the Portal B2B system for the Corporate sector of Oi
                Telecomunicações. Responsible for the MAP3C module of sales for
                large companies. Programs and languages I use: NodeJS (Express,
                Sequelize), Javascript, AngularJS, Bootstrap, CSS3, HTML5, using
                SQL Server database.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Fullstack at HS Tecnologia - Freelancer
              </Text>
              <br />
              <Text color="purple">March/2016 - March/2020</Text>
              <br />
              <Paragraph color="blackSecondary">
                Full-stack developer of web applications using PHP CodeIgniter,
                Javascript, AngularJS, NodeJS, HTML5, CSS3. Assisting in the
                architecture of the systems requested by Customers.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Senior Software Developer at Stefanini Business Solutions
              </Text>
              <br />
              <Text color="purple">February/2014 - March/2016</Text>
              <br />
              <Paragraph color="blackSecondary">
                Developed and produced automated process control systems for
                vehicle production in the FIAT group, New Holland, CASE, Iveco.
                Programs and languages used: PHP, Codeigniter, AngularJS, CSS3,
                HTML5, jQuery, Bootstrap, Oracle, making integration between
                internal systems Copics and SAP.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Pleno Software Developer at Oi Telecommunications, S.A.
              </Text>
              <br />
              <Text color="purple">August/2011 - March/2014</Text>
              <br />
              <Paragraph color="blackSecondary">
                Developed the Web Portal Sales System which controls the sales
                made on the website www.oi.com.br Contributed in developing
                business Dashboards modules leveraging company management
                information. Programs and languages used: PHP, Codeigniter,
                Extjs, jQuery, SQL Server.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Development Analyst at FIXTI Freelancer
              </Text>
              <br />
              <Text color="purple">May/2011 - May/2012</Text>
              <br />
              <Paragraph color="blackSecondary">
                Developed project management, E-billing, and various other
                portals as needed for Oi Telecommunications. Each development
                project overlapped one another to satisfy a larger technology
                related project for Oi Telecommunication’s customer base, which
                comprised of creating management information portals. Programs
                and languages used: PHP, Codeigniter, JQuery, CSS, SQL Server.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Development Analyst at Newcom
              </Text>
              <br />
              <Text color="purple">November/2010 - August/2011</Text>
              <br />
              <Paragraph color="blackSecondary">
                Developed a tracking portal for projects, control portal GPS and
                an ARS troubleshooting automated portal for Oi
                Telecommunications. I developed a tracking portal to track all
                changes made in server environments and changes in Oracle
                databases. This project aimed to save expenditures by focusing
                on one IT solution instead of using several other software
                programs and consulting for monitoring and to send the necessary
                documentation for audit. Programs and languages used: PHP,
                Extjs, Javascript, JQuery, JQuery UI.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                Business Intelligence Analyst at MD2 Business Consulting
              </Text>
              <br />
              <Text color="purple">May/2010 - November/2010</Text>
              <br />
              <Paragraph color="blackSecondary">
                Acted as a consultant for a financial business portal, insuring
                the development of data processing for millions of records,
                making ETL, Extract, Transform, Load and creating dashboards for
                company management. IBM InfoSphere DataStage tools for
                development.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="blackSecondary" size="lg">
                PHP developer at Mario Penna Institute
              </Text>
              <br />
              <Text color="purple">January/2010 - May/2010</Text>
              <br />
              <Paragraph color="blackSecondary">
                I developed web systems for the hospital ward area and
                surgeries. This included developing a consultation and
                examination control system, which is responsible for controlling
                patient processes. Programs and languages used: PHP, JQuery, CSS
                and SQLSERVER
              </Paragraph>
            </li>
          </List>
        </Box>
      </Box>
    </motion.div>
  );
}

export default App;
