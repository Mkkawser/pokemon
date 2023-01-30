import Image from "next/image";
import style from "./about.module.css";

import brush from "../../public/Img/Brush.png";

export default function About() {
  return (
    <>
      <div className={`${style["about"]}`}>
        <div className={`${style["side"]} ${style["left"]}`}></div>
        <div className={`${style["center"]}`}>
          <div className={`${style["about-head"]}`}>
            <Image src={brush} alt="brush" />
            <p className={`${style["about-head-text"]}`}>
              Ash & Pikachu Arrive in Pokémon Universe
            </p>
          </div>
          <div className={`${style["about-text-area"]}`}>
            <div className={`${style["text-left-wrap"]}`}>
              <div className={`${style["text-left"]}`}>
                <div className={`${style["text-left-sideA"]}`}>
                  <p className={`${style["text1"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                    elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                    tempor facilisi tempus risus nunc. Proin quis morbi posuere
                    nisl etiam scelerisque. Proin pretium gravida semper ut erat
                    nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames
                    felis leo. Vitae pulvinar sed viverra sit pretium lorem
                    elementum. Iaculis sit maecenas sodales mi convallis justo
                    aliquam. Tincidunt semper ut ornare vivamus lectus.
                  </p>
                  <div className={`${style["text-left-sideA1"]}`}>
                    <p className={`${style["text2"]}`}>
                      Lorem ipsum dolor sit amet consectetur. Turpis integer
                      massa consectetur sed enim quis viverra. Vestibulum eu
                      nibh dolor semper. Nisl feugiat quis nec odio pulvinar
                      feugiat velit. Nulla massa sit morbi morbi. Tortor viverra
                      eget lacus feugiat. Tempus vitae vitae orci at ultrices
                      nisi diamfaucibus. feugiat. Tempus vitae vitae orci at
                      ultrices nisi diam faucibus.
                    </p>
                    <Image
                      className={`${style["text6"]}`}
                      src="/Img/Image04.png"
                      height={200}
                      width={250}
                    />
                  </div>

                  <p className={`${style["text3"]}`}>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                    tortor non volutpat quisque facilisis. Ultricies consequat
                    sed vitae ac. Nisl eu nam id lectus tellus sit egestas. Orci
                    iaculis et vehicula nisi facilisi neque lorem. In vulputate
                    feugiat lobortis eros viverra. Turpis viverra vel fames enim
                    tortor. Scelerisque dictumst aliquam gravida eget ut
                    accumsan.
                  </p>
                </div>
                <div className={`${style["text-left-sideB"]}`}>
                  <Image
                    className={`${style["text5"]}`}
                    src="/Img/Image03.png"
                    height={200}
                    width={250}
                  />

                  <Image
                    className={`${style["text7"]}`}
                    src="/Img/Image02.png"
                    height={200}
                    width={250}
                  />
                </div>
              </div>
              <p className={`${style["text4"]}`}>
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                curabitur urna mauris in. Ut dui odio sagittis ut imperdiet
                ultricies mauris ac. A sit id etiam vitae non posuere tristique.
                Morbi sit mi sed nam amet tristique tellus. Sed quam aliquam
                pharetra nunc ipsum mattis. Volutpat pellentesque cras euismod
                habitant sit nibh. Dictum odio at aliquam sed. Orci odio lacinia
                id sem sed suspendisse mi fringilla purus. Quis sed ultricies ac
                nullam odio. Gravida sollicitudin viverra ornare pretium etiam
                tortor imperdiet tellus. Id purus etiam nunc hendrerit quam in.
                Dui netus lectus nulla cursus ultrices nulla. Morbi sit in
                gravida fermentum. Non sed lobortis amet eget sed donec.At a
                enim parturient id. Suspendisse ullamcorper fermentum accumsan
                diam tellus. Nibh pretium ultrices scelerisque dolor at etiam
                lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                curabitur urna mauris in. Ut dui odio sagittis ut imperdiet
                ultricies mauris ac. A sit id etiam vitae non posuere tristique.
                Morbi sit mi sed nam amet tristique tellus. Sed quam aliquam
                pharetra nunc ipsum mattis. Volutpat pellentesque cras euismod
                habitant sit nibh. Dictum odio at aliquam sed. Orci odio lacinia
                id sem.
              </p>
            </div>
            <div className={`${style["text-right"]}`}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiaexpedita veniam sapiente hic quam similique in quaerat
                inciduntminima delectus, vel, labore explicabo amet fugit quos
                delenitiquo assumenda soluta?Officiaexpedita veniam sapiente
                hicquam similique in quaerat inciduntminima delectus, vel
              </p>
              <div className={`${style["text-right-page"]}`}>
                <Image
                  className={`${style["text5"]}`}
                  src="/Img/Image04.png"
                  height={200}
                  width={250}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia expedita veniam sapiente hic quam similique in
                  quaeratincidunt minima delectus, vel, labore explicabo amet
                  fugitquos deleniti quo assumenda soluta?Officia expedita
                  veniam sapiente hic quam similique in quaeratincidunt minima
                  delectusveniam sapiente hic quam minima delectus
                </p>
              </div>
              <div className={`${style["text-right-page"]}`}>
                <Image
                  className={`${style["text6"]}`}
                  src="/Img/Image01.png"
                  height={200}
                  width={250}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia expedita veniam sapiente hic quam similique in
                  quaeratincidunt minima delectus, vel, labore explicabo amet
                  fugitquos deleniti quo assumenda soluta?Officia expedita
                  veniam sapiente hic quam similique in quaeratincidunt minima
                  delectusveniam sapiente hic quam minima delectus
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiaexpedita veniam sapiente hic quam similique in quaerat
                inciduntminima delectus, vel, labore explicabo amet fugit quos
                delenitiquo assumenda soluta?Officiaexpedita veniam sapiente
                hicquam similique in quaerat inciduntminima delectus, vel
                inciduntminima delectus, vel, labore explicabo amet fugit quos
                delenitiquo assumenda soluta?Officiaexpedita veniam sapiente
                hicquam similique in quaerat inciduntminima delectus, vel
                inciduntminima delectus, vel, labore explicabo amet fugit quos
                delenitiquo assumenda soluta?Officiaexpedita veniam sapiente
                hicquam similique in quaerat inciduntminima delectus, vel
              </p>
            </div>
          </div>
        </div>
        <div className={`${style["side"]} ${style["right"]}`}></div>
      </div>
    </>
  );
}
