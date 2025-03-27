export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Cleyton Silva - Software Engineer
            </h1>
            <div className="mx-auto ">
              <p
                className="mb-8 text-base text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                With over 12 years of experience, I am a skilled Software Engineer focused on delivering innovative solutions across a wide range of industries, including telecommunications, automotive, and startups. I specialize in full-stack development with a strong emphasis on JavaScript, ReactJS, NodeJS, and cloud technologies such as AWS.
                <br />
                Throughout my career, I have successfully led cross-functional teams, driving projects from concept to completion while ensuring high performance, scalability, and business value. I thrive in fast-paced environments and enjoy tackling complex technical challenges to create scalable, high-performance products that solve real-world problems.
                <br />
                My passion lies in continuously learning new technologies and exploring innovative approaches that can generate commercial value. I also excel in collaborating with product teams, contributing to the management of scalable products, and ensuring alignment with business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
