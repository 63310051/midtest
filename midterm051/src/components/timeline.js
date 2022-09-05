import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="colorlib-services" data-section="services">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <span className="heading-meta">What I,ve lerant?</span>
                  <h2 className="colorlib-heading">
                    Here are some of subjects that i have learnt this year
                  </h2>
                  <p> ตัวอย่างรายวิชาบาส่วนที่เราได้เรียนไปในปีนี้ค่ะ </p>
                </div>
              </div>
              <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-1">
                    <span className="icon">
                      <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                      <h3>Internet Technology &amp; Services</h3>
                      <p>29036059-59 </p>
                      <p>การให้บริการ &amp; เทคโนโลยีทางอินเทอร์เน็ต</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-2">
                    <span className="icon">
                      <i className="icon-data" />
                    </span>
                    <div className="desc">
                      <h3>Database Management System</h3>
                      <p>29035059-59</p>
                      <p>ระบบจัดการฐานข้อมูล</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-3">
                    <span className="icon">
                      <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                      <h3>Web Programming</h3>
                      <p>2906159-59</p>
                      <p>การเขียนโปรแกรมบนเว็บ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <span className="heading-meta">My Specialty</span>
                  <h2 className="colorlib-heading animate-box">
                    My skills I would like to improve
                  </h2>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <p>สิ่งที่คาดหวังว่าตัวเราจะทำได้หลังจบการศึกษา</p>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="progress-wrap">
                    <h3>JavaScript</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h3>SQL</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-2"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="progress-wrap">
                    <h3>HTML5</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-3"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h3>CSS</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-4"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      >
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="progress-wrap">
                    <h3>WordPress</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-5"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "95%" }}
                      >
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-education" data-section="education">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <span className="heading-meta">Education</span>
                  <h2 className="colorlib-heading animate-box">Education</h2>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="fancy-collapse-panel">
                    <div
                      className="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingFour"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Bachelor’s degree
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFour"
                        >
                          <div className="panel-body">
                            <p>
                              I am an Undergraduate at{" "}
                              <strong> Burapha Uninersity</strong>, I am
                              studying as an Information Technology Major <br />{" "}
                              I am in my 3rd year now.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingFive"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              Senior High School
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFive"
                        >
                          <div className="panel-body">
                            <p>
                              I graduate from{" "}
                              <strong>Chonkanyanukoon school</strong>, in
                              Korea-English program
                              <br />
                              <strong> GPA : 3.70</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-experience" data-section="experience">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <span className="heading-meta">Experience</span>
                  <h2 className="colorlib-heading animate-box">
                    Work Experience
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="timeline-centered">
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-1">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <a href="#">Burapha University</a>{" "}
                            <span>2020-now</span>
                          </h2>
                          <p>Studying in Information Technology Major.</p>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInRight"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-2">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>
                            <a href="#">Chonkanyanukoon School</a>{" "}
                            <span>2014-2020</span>
                          </h2>
                          <p>
                            I graduate from{" "}
                            <strong>Chonkanyanukoon school</strong>, in
                            Korea-English program with 3.70 GPA
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
