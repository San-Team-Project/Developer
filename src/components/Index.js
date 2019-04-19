import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg" class="d-block w-100" alt="..." height="500px" />
    </div>
    <div class="carousel-item">
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1519849372.jpg" class="d-block w-100" alt="..." height="500px" />
    </div>
    <div class="carousel-item">
      <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_560,q_50,w_1400/v1/clients/jamaica/20171122_0431_084f5adc-2ddf-42aa-bacc-a0371396358c.jpg" class="d-block w-100" alt="..."  height="500px"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
    )
  }
}

export default Index
