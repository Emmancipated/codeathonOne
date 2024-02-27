import Image, { StaticImageData } from "next/image";
import scarlet from "@/public/assets/images/scarlet.png";
import dottedLine from "@/public/assets/images/dottedLine.svg";
import { Progress } from "@nextui-org/react";
import { roboto } from "../fonts";

type TabBarProp = {
  // value: number;
  imageSrc: StaticImageData;
  name: string;
  email: string;
  date: string;
  status: number;
  contact: string;
  role: string;
  active: string;
  gender: string;
};
export const TabBar = ({
  imageSrc,
  name,
  email,
  date,
  status,
  contact,
  role,
  active,
  gender,
}: TabBarProp) => {
  return (
    <>
      <div className="border border-[#3A35411F] shadow-1xl py-3 px-3 my-2 sm:hidden smallScreen">
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            Nome
          </h3>
          <div className=" flex gap-x-2 items-center flex-1">
            <Image
              src={imageSrc}
              alt="scarlet"
              className=" w-[25px] h-[25px]"
            />
            <h3 className=" text-[8px] font-medium text-[#3A3541DE]">{name}</h3>
          </div>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            E-Mail
          </h3>
          <h3 className=" text-[8px] font-medium text-[#0047FF6E] flex-1">
            {email}
          </h3>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            Data de Cadastro
          </h3>
          <h3 className=" text-[8px] font-medium text-[#00000082] flex-1">
            {date}
          </h3>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            status
          </h3>
          <div className=" flex gap-x-2 items-center flex-1">
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: `${
                  status < 49
                    ? "bg-gradient-to-r from-[#FF8A00] to-[#FF8A00]"
                    : status <= 69
                    ? "bg-gradient-to-r from-[#FFE600] to-[#FFE600]"
                    : " bg-gradient-to-r from-[#00D92F] to-[#00D92F]"
                }`,
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              value={status}
            />
            <p className="text-[10px] font-medium text-[#00000082]">
              {status}%
            </p>
          </div>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            Contato
          </h3>
          <h3 className=" text-[8px] font-medium text-[#00000082] flex-1">
            {contact}
          </h3>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            Tipo
          </h3>
          <h3
            className={` text-[8px] font-semibold text-[#3A354196] uppercase ${roboto.className} flex-1`}
          >
            {role}
          </h3>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            ATIVO
          </h3>
          <h3
            className={` text-[8px] font-semibold text-[#3A354196] uppercase ${roboto.className} flex-1`}
          >
            {active}
          </h3>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase flex-1">
            Gênero
          </h3>
          <h3
            className={` text-[8px] font-semibold text-[#3A354196] uppercase ${roboto.className} flex-1`}
          >
            {gender}
          </h3>
        </div>
        <div className=" flex min-h-[25px] items-center">
          <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase ">
            Editar
          </h3>
          <Image src={dottedLine} alt="dottedLine" className="mx-auto " />
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-18 items-center justify-center px-3 mb-2">
        <div className=" w-5">
          <input type="checkbox" name="" id="" className=" w-[13px] h-[13px]" />
        </div>

        <div className=" flex gap-x-2 items-center">
          <Image src={imageSrc} alt="scarlet" className=" w-[25px] h-[25px]" />
          <h3 className=" text-[8px] font-medium text-[#3A3541DE]">{name}</h3>
        </div>

        <h3 className=" text-[8px] font-medium text-[#0047FF6E] text-center">
          {email}
        </h3>
        <h3 className=" text-[8px] font-medium text-[#00000082] text-center">
          {date}
        </h3>
        <div className=" flex gap-x-2 items-center">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: `${
                status < 49
                  ? "bg-gradient-to-r from-[#FF8A00] to-[#FF8A00]"
                  : status <= 69
                  ? "bg-gradient-to-r from-[#FFE600] to-[#FFE600]"
                  : " bg-gradient-to-r from-[#00D92F] to-[#00D92F]"
              }`,
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            value={status}
          />
          <p className="text-[10px] font-medium text-[#3A3541AD]">{status}%</p>
        </div>
        <h3 className=" text-[8px] font-semibold text-[#00000078] uppercase text-center">
          {contact}
        </h3>
        <h3
          className={` text-[8px] font-semibold text-[#3A354196] uppercase text-center ${roboto.className}`}
        >
          {role}
        </h3>
        <h3
          className={` text-[8px] font-semibold text-[#3A354196] uppercase text-center ${roboto.className}`}
        >
          {active}
        </h3>
        <h3
          className={` text-[8px] font-semibold text-[#3A354196] uppercase  text-center ${roboto.className}`}
        >
          {gender}
        </h3>
        <div>
          <Image src={dottedLine} alt="dottedLine" className="mx-auto" />
        </div>
      </div>
    </>
  );
};
