import "dracula-ui/styles/dracula-ui.css";
import { Paragraph, List, Text, Anchor, Box } from "dracula-ui";
import logo from "./assets/photo.jpg";

function App() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} title="Cleyton Silva" />
          <Box>
            <Anchor href="https://www.linkedin.com/in/cleytonbrasil/" target="_blank">Linkedin</Anchor>
          </Box>
          <Box>
            <Anchor href="https://github.com/cleytonlang" target="_blank">Github</Anchor>
          </Box>
        </div>
        <div>
          <Paragraph color="purpleCyan" weight="bold" size="lg">
            Cleyton Brasil
            <br />
            Software Enginner - cleytonb40@gmail.com | +55 31 988621156
          </Paragraph>
          <Paragraph mb="md" size="lg">
            Software developer with 12 years of experience in developing
            enterprise applications. Passionate about learning new technologies.
            I live this every day and I intend to do this for a lifetime, but I
            also have other passions. I love music, I like to play guitar and
            sing. I love to photograph.
          </Paragraph>
        </div>
      </div>

      <Box mb="md">
        <Box mb="sm">
          <Text weight="bold" color="purpleCyan" size="lg">
            Main Skills
          </Text>
        </Box>
        <Box>
          <List variant="unordered" color="purple">
            <li className="drac-text drac-text-white">
              Frontend: JavaScript, ReactJS, NextJS
            </li>
            <li className="drac-text drac-text-white">Backend: Node JS</li>
            <li className="drac-text drac-text-white">
              Databases: PostgreSQL, MySQL, SQL Server
            </li>
            <li className="drac-text drac-text-white">Github</li>
            <li className="drac-text drac-text-white">Trello, Jira</li>
            <li className="drac-text drac-text-white">
              AWS (EC2, S3, Amplify, RDS, SES, Cloudfront)
            </li>
          </List>
        </Box>
      </Box>

      <Box>
        <Box mb="sm">
          <Text weight="bold" color="purpleCyan" size="lg">
            Experiences
          </Text>
        </Box>
        <Box>
          <List variant="none" color="purple">
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                Software Engineer at Innovation Intelligence
              </Text>
              <br />
              <Text color="cyan">November/2020 - moment</Text>
              <br />
              <Paragraph>
                Responsible for the web application developed in ReactJS and
                NodeJS, using PostgreSQL. Using AWS services (EC2, S3, Amplify,
                RDS)
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                Senior Software Developer at Oi Telecommunications, S.A.
              </Text>
              <br />
              <Text color="cyan">March/2017 - November/2020</Text>
              <br />
              <Paragraph>
                Developing the Portal B2B system for the Corporate sector of Oi
                Telecomunicações. Responsible for the MAP3C module of sales for
                large companies. Programs and languages I use: NodeJS (Express,
                Sequelize), Javascript, AngularJS, Bootstrap, CSS3, HTML5, using
                SQL Server database.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                Fullstack at HS Tecnologia - Freelancer
              </Text>
              <br />
              <Text color="cyan">March/2016 - March/2020</Text>
              <br />
              <Paragraph>
                Full-stack developer of web applications using PHP CodeIgniter,
                Javascript, AngularJS, NodeJS, HTML5, CSS3. Assisting in the
                architecture of the systems requested by Customers.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                Senior Software Developer at Stefanini Business Solutions
              </Text>
              <br />
              <Text color="cyan">February/2014 - March/2016</Text>
              <br />
              <Paragraph>
                Developed and produced automated process control systems for
                vehicle production in the FIAT group, New Holland, CASE, Iveco.
                Programs and languages used: PHP, Codeigniter, AngularJS, CSS3,
                HTML5, jQuery, Bootstrap, Oracle, making integration between
                internal systems Copics and SAP.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                Pleno Software Developer at Oi Telecommunications, S.A.
              </Text>
              <br />
              <Text color="cyan">August/2011 - March/2014</Text>
              <br />
              <Paragraph>
                Developed the Web Portal Sales System which controls the sales
                made on the website www.oi.com.br Contributed in developing
                business Dashboards modules leveraging company management
                information. Programs and languages used: PHP, Codeigniter,
                Extjs, jQuery, SQL Server.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                Development Analyst at FIXTI Freelancer
              </Text>
              <br />
              <Text color="cyan">May/2011 - May/2012</Text>
              <br />
              <Paragraph>
                Developed project management, E-billing, and various other
                portals as needed for Oi Telecommunications. Each development
                project overlapped one another to satisfy a larger technology
                related project for Oi Telecommunication’s customer base, which
                comprised of creating management information portals. Programs
                and languages used: PHP, Codeigniter, JQuery, CSS, SQL Server.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                Development Analyst at Newcom
              </Text>
              <br />
              <Text color="cyan">November/2010 - August/2011</Text>
              <br />
              <Paragraph>
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
              <Text weight="bold" color="purpleCyan" size="lg">
                Business Intelligence Analyst at MD2 Business Consulting
              </Text>
              <br />
              <Text color="cyan">May/2010 - November/2010</Text>
              <br />
              <Paragraph>
                Acted as a consultant for a financial business portal, insuring
                the development of data processing for millions of records,
                making ETL, Extract, Transform, Load and creating dashboards for
                company management. IBM InfoSphere DataStage tools for
                development.
              </Paragraph>
            </li>
            <li className="drac-text drac-text-white logo">
              <Text weight="bold" color="purpleCyan" size="lg">
                PHP developer at Mario Penna Institute
              </Text>
              <br />
              <Text color="cyan">January/2010 - May/2010</Text>
              <br />
              <Paragraph>
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
    </div>
  );
}

export default App;
