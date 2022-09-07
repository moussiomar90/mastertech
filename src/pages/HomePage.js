import React  from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 
import Header from '../component/Header/Header';
export default function HomePage() {
   
   
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (<>
     <Header />


  

    <div id="main" role="main"  >

      <div className="slider" style={{ marginTop: "50px" }}>
        <Slider {...settings}>
          <div>
            <img src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/f289cd5f11714ae108623c0f0d9fb77677f75e6a_msiiiii-optix-mag251rx.jpg-999.jpg"
              width="1580" height="460" alt="" class="img-responsive center-block" />
          </div>
          <div>
            <img src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/461de1841d157735952413af665ead0719b17a22_P50-pro-Web-banner.jpg" width="1580" height="466" alt="" class="img-responsive center-block" />
          </div>
          <div>
            <img src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/d058563cd5d22a6c407ac42dbef43ea26b8e8b70_banner tunisianet afrique assistance_Plan de travail 1.png" width="1580" height="460" alt="" class="img-responsive center-block" />
          </div>
        </Slider>
      </div>

      <div className="topproduit">

        <div style={{ height: "300px" }} ><img
          src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/b65fb99f26f73ebbc58ba085eadf6ef1ca0c203f_HP-X360.jpg"
          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>
        <div style={{ height: "300px" }} ><img
          src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/a8795c520fe766677c5932ddfbab66f120379d11_Ecran-LG.jpg"
          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>
        <div style={{ height: "300px" }} ><img
          src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/868dcb1dc8f762c744fd3b486920fede73a178d5_msi-all-in-one-square%20(1).jpg"
          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>
        <div style={{ height: "300px" }} ><img
          src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/13e7370510bbebb88bbfbb44ce8937eb7022cd2b_Sans-titre-3.jpg"
          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>
        <div style={{ height: "300px" }} ><img
          src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/868dcb1dc8f762c744fd3b486920fede73a178d5_msi-all-in-one-square%20(1).jpg"
          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>

        <div style={{ height: "300px" }} ><img src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/a8795c520fe766677c5932ddfbab66f120379d11_Ecran-LG.jpg"

          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>

        <div style={{ height: "300px" }} ><img
          src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/a8795c520fe766677c5932ddfbab66f120379d11_Ecran-LG.jpg"
          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>

        <div style={{ height: "300px" }} ><img
          src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/a8795c520fe766677c5932ddfbab66f120379d11_Ecran-LG.jpg"
          style={{ maxHeight: "100%", minWidth: "100%" }} /></div>




      </div>

      <div style={{ margin: "0", padding: "0", width: "100%" }}>

        <section className="card  ">
          <header style={{ background: "#B5DE93" }} >
            <div className="title ">
              <h3 style={{ margin: "0" }}>Essentiels supérette<span> | Jusqu'à -60%</span></h3>
            </div>

            <div>
              <a style={{ margin: "0", padding: "0", color: "black", fontWeight: "bold" }} >Voir plus </a></div>
          </header>

          <div className="produit">

            <div className="item">
              <article className="itm " style={{ display: "grid", justifyContent: "center" }}>
                <a className="core" data-track-onclick-bound="true"><img
                  src="./image/computer_pc_PNG17489.png"
                  className="img" width="185" height="185" alt="Coca-cola Coca-cola Boîte - 24Cl" />
                  <div className="name">Coca-cola Coca-cola Boîte - 24Cl</div>
                  <div className="prc">0.98 TND</div>
                </a>
              </article>
              <article className="itm " style={{ display: "grid", justifyContent: "center" }}>
                <a className="core" data-track-onclick-bound="true"><img
                  src="./image/Desktop-Computer-PNG-File.png"
                  className="img" width="185" height="185" alt="Coca-cola Coca-cola Boîte - 24Cl" />
                  <div className="name">Coca-cola Coca-cola Boîte - 24Cl</div>
                  <div className="prc">0.98 TND</div>
                </a>
              </article>
              <article className="itm " style={{ display: "grid", justifyContent: "center" }}>
                <a className="core" data-track-onclick-bound="true"><img
                  src="./image/Desktop-Computer-PNG-Pic.png"
                  className="img" width="185" height="185" alt="Coca-cola Coca-cola Boîte - 24Cl" />
                  <div className="name">Coca-cola Coca-cola Boîte - 24Cl</div>
                  <div className="prc">0.98 TND</div>
                </a>
              </article>

              <article className="itm " style={{ display: "grid", justifyContent: "center" }}>
                <a className="core" data-track-onclick-bound="true"><img
                  src="./image/Desktop-Computer-PNG-HD.png"
                  className="img" width="185" height="185" alt="Coca-cola Coca-cola Boîte - 24Cl" />
                  <div className="name">Coca-cola Coca-cola Boîte - 24Cl</div>
                  <div className="prc">0.98 TND</div>
                </a>
              </article>




            </div>

          </div>
        </section>
      </div>


    </div>
  </>
  )
}
