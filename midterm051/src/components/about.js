import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who am I ?</h2>
                      <p>
                        <strong>สวัสดีค่ะท่านผู้อ่าน</strong> เรามีชื่อว่า ณหทัย
                        เชิญรุ่งโรจน์ ชื่อเล่น 'ต้นหลิว' อายุ 21 ปี{" "}
                      </p>
                      <p>
                        ปัจจุบันศึกษาอยู่ที่ มหาวิทยาลัย บูรพา
                        วิทยาเขตจันทบุรีค่ะ
                      </p>
                    </div>
                  </div>
                </div>
               
                <div className="row">
                  <div
                    className="col-md-12 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="hire">
                      <h2>
                        This Page is for my Midterm exam <br />
                        Hope you like it !
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
