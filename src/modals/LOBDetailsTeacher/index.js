import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Row, Button, Img } from "components";

const LOBDetailsTeacherModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[64%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:mb-[496px] xl:mb-[620px] 2xl:mb-[697px] 3xl:mb-[837px] lg:pt-[19px] xl:pt-[24px] 2xl:pt-[27px] 3xl:pt-[32px] lg:px-[19px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[32px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                <Text
                  className="font-semibold mb-[1px] text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Vorbereitende Inhalte
                </Text>
              </Column>
              <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                <Row className="bg-white_A700 border border-gray-300 border-solid items-center justify-between 3xl:pr-[10px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[15%]"
                    leftIcon={
                      <Img
                        src="images/img_music.svg"
                        className="mr-[4px] text-center lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                        alt="music"
                      />
                    }
                  >
                    <div className="bg-transparent font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Erkunden
                    </div>
                  </Button>
                  <Img
                    src="images/img_arrowright.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mr-[4px] w-[1%]"
                    alt="arrowright"
                  />
                </Row>
                <Row className="bg-white_A700 items-center justify-between 3xl:pr-[10px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[13%]"
                    leftIcon={
                      <Img
                        src="images/img_music.svg"
                        className="mr-[4px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="music"
                      />
                    }
                  >
                    <div className="bg-transparent font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Begriffe
                    </div>
                  </Button>
                  <Img
                    src="images/img_arrowright.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mr-[4px] w-[1%]"
                    alt="arrowright One"
                  />
                </Row>
              </Column>
            </Column>
            <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Row className="items-center justify-evenly rounded-radius6 w-[20%]">
                <Img
                  src="images/img_question.svg"
                  className="lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[16%]"
                  alt="question"
                />
                <Text
                  className="font-medium text-gray-800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Interaktive Übung
                </Text>
              </Row>
              <Row className="items-center justify-between w-[64%]">
                <Row className="border border-blue-600 border-solid items-center lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius6 w-[70%]">
                  <Img
                    src="images/img_music.svg"
                    className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[5%]"
                    alt="music"
                  />
                  <Text
                    className="mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] text-blue-600 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Als Printversion herunterladen
                  </Text>
                  <Img
                    src="images/img_music.svg"
                    className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[5%]"
                    alt="music One"
                  />
                </Row>
                <Button
                  className="flex items-center justify-center text-center w-[27%]"
                  leftIcon={
                    <Img
                      src="images/img_play.svg"
                      className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[10px]"
                      alt="play"
                    />
                  }
                  size="md"
                  variant="FillBlue700"
                >
                  <div className="bg-transparent font-semibold lg:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px]">
                    Starten
                  </div>
                </Button>
              </Row>
            </Row>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { LOBDetailsTeacherModal };
