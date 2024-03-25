import Image from "next/image";
import rsSlide from "/public/rs-slide.png";
import navbar from "/public/remove bg.png";
import next from "/public/next-div.png";
import amet from "/public/amet.png";
import filter from "/public/Filter.png";
import brand from "/public/brand.png";
import holder from "/public/div.qodef-text-holder.png";
import butique from "/public/Video-clients-img-2.png.png";
import ox from "/public/Video-clients-img-3.png.png";
import lox from "/public/Video-clients-img-5.png.png";
import flow from "/public/video-clients-image-6.png.png";
import mangentle from "/public/mangetle.png";
import elementor from "/public/elementor.png";
import blog from "/public/Read Our Blog Posts.png";
import ipsum from "/public/Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed do eiusmod..png";
import essentia from "/public/essentia.png";
import topwinner from "/public/top winner.png";
import fashion from "/public/fashion (1).png";
import communication from "/public/comm.png";
import premium from "/public/premi.png";
import consult from "/public/consult.png";
import newsletter from "/public/newsletter.png";
import main from "/public/main-home-image-4-1.jpg.png";
import divm from "/public/div.qodef-m-image.png";
import artist from "/public/Meet The Artists Behind The Corsen Maria & Sophia.png";
import lor from "/public/Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna..png";
import shop from "/public/a.qodef-shortcode.png";
import instagram from "/public/Instagram.png";
import follow from "/public/p.qodef-m-text.png";
import snow from "/public/snow.png";
import white from "/public/div.qodef-e (1).png";
import rob from "/public/div.qodef-e (2).png";
import blackman from "/public/div.qodef-e (3).png";
import shadow from "/public/shadow.png";
import delivery from "/public/div.elementor-widget-wrap.png";
import returns from "/public/div.elementor-widget-wrap (1).png";
import checkout from "/public/checkout.png";
import tracking from "/public/tracking.png";
import footer1 from "/public/logo-footer-img-1.png.png";
import footer2 from "/public/Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.png";
import footer3 from "/public/sssssss.png";
import footer4 from "/public/block10.png";
import footer5 from "/public/block11.png";
import footer6 from "/public/wp.png";
import footer7 from "/public/last.png";
import grid from "/public/grid.png";



export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Image src={rsSlide} alt="rsSlide" className="absolute inset-0 bg-transparent" />
        <Image style={{ borderBottom: '1px solid black' }} src={navbar} alt="Logo" className="relative" />
      </div>


      <div style={{ padding: '290px', width:'100%' }}>
        <Image style={{ width: '50%' }} src={amet} alt="rsSlide" />
      </div>

      <div style={{ textAlign: 'center', marginLeft: '25%' }} className="flex justify-center w-1/2 my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </div>

      <div className="ml-5" style={{ display: 'flex', gap: '50%' }}>


        <div>
          <Image style={{ width: '496px', height: '22px' }} src={next} alt="rsSlide" />
        </div>
        <div>
          <Image style={{ width: '40px', height: '16px' }} src={filter} alt="rsSlide" />
        </div>
      </div>


      <div className=" flex justify-center p-10">
        <Image src={brand} alt="rsSlide" />

      </div>

      <div className=" flex p-10">
        <div className="">

          <Image src={grid} alt="rsSlide" />


        </div>
      </div>

      <div className=" p-10">
        <Image className="" src={holder} alt="rsSlide" />
      </div>


      <div className="flex justify-center ">
        <div>
          <Image style={{ marginTop: '65px' }} className=" w-13 h-7 " src={butique} alt="rsSlide" />
        </div>
        <div>
          <Image style={{ marginTop: '65px' }} className=" w-13 h-7 " src={lox} alt="rsSlide" />
        </div>
        <div className=" ">
          <Image className=" w-13 h-13" src={mangentle} alt="rsSlide" />
        </div>
        <div>
          <Image style={{ marginTop: '65px' }} className=" w-13 h-7 " src={flow} alt="rsSlide" />
        </div>
        <div>
          <Image style={{ marginTop: '65px' }} className=" w-13 h-7" src={ox} alt="rsSlide" />
        </div>
      </div>

      <section className=" p-10">
        <Image src={elementor} alt="elementor" />
      </section>

      <div className="p-20">
        <div className="flex justify-center">
          <Image src={blog} alt="elementor" />
        </div>
        <div className="flex justify-center">
          <Image src={ipsum} alt="elementor" />
        </div>

        <div className="flex p-20 w-full">
          <div>
            <Image src={essentia} alt="elementor" />
            <Image src={topwinner} alt="elementor" />
          </div>
          <div>
            <Image src={fashion} alt="elementor" />
            <Image src={communication} alt="elementor" />
          </div>
          <div>
            <Image src={premium} alt="elementor" />
            <Image src={consult} alt="elementor" />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <Image src={newsletter} alt="elementor" />
      </div>

      <div className="flex justify-center mt-20">
        <Image style={{ width: '33.3%', height: '70vh' }} src={main} alt="elementor" />
        <Image style={{ width: '33.3%', height: '70vh' }} src={divm} alt="elementor" />
        <div className=" ml-20 mt-20" style={{ width: '33.3%', height: '70vh', }}>
          <Image className="my-5" style={{ width: '200px' }} src={artist} alt="elementor" />
          <Image className="my-5" style={{ width: '200px' }} src={lor} alt="elementor" />
          <Image style={{ width: '200px' }} src={shop} alt="elementor" />
        </div>
      </div>

      <div >
        <Image style={{ width: '100px' }} src={instagram} alt="elementor" />
        <Image src={follow} alt="elementor" />
      </div>

      <div className="flex justify-center w-full p-10 overflow-scroll">
        <Image className="mx-2" style={{ width: '170px', height: '30vh' }} src={snow} alt="elementor" />
        <Image className="mx-2" style={{ width: '170px', height: '30vh' }} src={white} alt="elementor" />
        <Image className="mx-2" style={{ width: '170px', height: '30vh' }} src={rob} alt="elementor" />
        <Image className="mx-2" style={{ width: '170px', height: '30vh' }} src={blackman} alt="elementor" />
        <Image className="mx-2" style={{ width: '170px', height: '30vh' }} src={shadow} alt="elementor" />
      </div>
      <div className="flex justify-center w-full  p-10">
        <div style={{ borderTop: '1px solid  black', borderLeft: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
          <Image style={{ width: '270px' }} src={delivery} alt="elementor" />
        </div>
        <div style={{ borderTop: '1px solid  black', borderLeft: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
          <Image style={{ width: '270px' }} src={returns} alt="elementor" />
        </div>
        <div style={{ borderTop: '1px solid  black', borderLeft: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
          <Image style={{ width: '270px' }} src={checkout} alt="elementor" />
        </div>
        <div style={{ borderTop: '1px solid  black', borderLeft: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
          <Image style={{ width: '270px' }} src={tracking} alt="elementor" />
        </div>

      </div>

      <div className="flex justify-center gap-5 w-full  p-10">
        <div>
          <div >
            <Image src={footer1} alt="elementor" />
          </div>

          <div className="my-2">
            <Image src={footer2} alt="elementor" />
          </div>

        </div>

        <div>
          <Image src={footer3} alt="elementor" />
        </div>

        <div>
          <Image src={footer4} alt="elementor" />
        </div>

        <div>
          <Image src={footer5} alt="elementor" />
        </div>

        <div>
          <Image src={footer6} alt="elementor" />
        </div>
      </div>

      <div style={{ borderTop: '1px solid  black' }}>
        <Image className="p-3 ml-7 w-sm-max" src={footer7} alt="elementor" />
      </div>

    </>
  );
};
