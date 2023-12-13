import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Commands</h4>
              <p className="p-color">
                We have all major server commands included in this bot..
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ ER:LC Intergration </h4>
              <p className="p-color">
                We can intercept your ER:LC - Discord webhook in order to have 
                unique features such as automatic VC Checkingl
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Customization</h4>
              <p className="p-color">
                Enable or disable every section as you desire.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">17k+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">94k+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">375k+</h4>
            <p className="p-color">Total Commands Ran</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
