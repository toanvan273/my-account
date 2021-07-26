import React from 'react'

export default function Dashboard (){
    return (
        <div>
            <div className="session-1 mt-2">
        <div className="container">
          <h1>
          Insight is an independent Consulting Firm based in Milan, Hamburg and Chicago.
          </h1>
          <p>
          Egestas nulla ac efficitur eleifend. Quisque fringilla semper, liberohendrerit convallis, magna augue vulputate nibh ucibus enim eros eget arcu scelerisque. Maecenas semper sapien sit amet tortor.
          </p>
          <div className="btn-group gap-2" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">Left</button>
          
            <button type="button" class="btn btn-primary">Right</button>
          </div>
        </div>
      </div>

      <div className="session-2 mt-3">
        <div className="container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <Image src={img1} alt="img1" className="d-block w-100"/> */}
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              {/* <Image src={img2} alt="img1" className="d-block w-100"/> */}

              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              {/* <Image src={img3} alt="img1" className="d-block w-100"/> */}

              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>

      <div className="session-3 mt-3">
        <div className="container">
          <div className="title-wrap">
            <div className="sub-heading">
              <span>OUR SERVICES.</span>
            </div>
            <h2>
            15+ years of experience in Financial Services & Business.
            </h2>
          </div>
        </div>
      </div>

      <div className="session-4 mt-3">
        <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-3" style={{minHeight: '344px'}}>
                <div className="img-icon">
                  {/* <Image src={icon1} alt="icon1" /> */}
                </div>
                <h4>Corporate Management</h4>
                <p>In hac habitasse platea dictumst dapibus eros ac leo blandit, ligula sit amet posuere turpis lementum at eu mattis.</p>
              </div>
              <div className="col-sm-6 col-md-3" style={{minHeight: '344px'}}>
                <div className="img-icon">
                {/* <Image src={icon2} alt="icon2" /> */}
                </div>
                <h4>Legal Solutions</h4>
                <p>Donec eget est quis metus ligula enenatis interdum vitae condi mentum sem, condi mentum ortor estibum laoreet sem.</p>
              </div>
              <div className="col-sm-6 col-md-3" style={{minHeight: '344px'}}>
                <div className="img-icon">
                {/* <Image src={icon3} alt="icon2" /> */}
                </div>
                <h4>Legal Solutions</h4>
                <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. Suspendisse pulvinar commodo tellus, vitae pellentesque augue euismod non.</p>
              </div>
              <div className="col-sm-6 col-md-3" style={{minHeight: '344px'}}>
              <div className="img-icon">
                {/* <Image src={icon4} alt="icon2" /> */}
                </div>
                <h4>Legal Solutions</h4>
                <p>Proin lacinia commodo orci, quis leo dignissim ac. Nulla nec, nec dolo malesuada eros mauris id lectus ante iverra pharetra.</p>
              </div>
          </div>
        </div>
      </div>
        </div>
    )
}