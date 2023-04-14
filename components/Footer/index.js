import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">BogorShoesCare.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              {/* LET&apos;S WORK */}
              STEP UP YOUR  SHOE
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
             GAME WITH OUR CARE
            </h1>
            {/* <Button onClick={() => window.open("https://api.whatsapp.com/send?phone=%6285156500368%5D&text=Halo%20BogorShoesCare,%20request%20pick%20up%20dong")} type="primary">Schedule for Pick Up</Button> */}
             <Button
                    onClick={() => window.open("https://api.whatsapp.com/send?phone=%6285156500368%5D&text=Halo%20BogorShoesCare,%20Request%20Pick%20up%20dong")}
                    type="primary">Schedule for Pick Up</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        <Link href="https://www.instagram.com/temboksosial/">
          <a className="underline underline-offset-1">Tembok Sosial Digital</a>
        </Link> 
        {" "}  x {" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
