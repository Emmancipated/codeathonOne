"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/app/img/logoTie.svg";
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight2,
  Bank,
  Box,
  Category,
  Command,
  Courthouse,
  Data,
  DocumentFilter,
  DocumentText,
  EmptyWalletTick,
  ExportCurve,
  House,
  Logout,
  MoneyArchive,
  Notification,
  People,
  SearchNormal1,
  ShoppingBag,
  SidebarLeft,
  TextalignRight,
} from "iconsax-react";
import { gothic1 } from "@/app/fonts";
import { Button } from "@nextui-org/react";
import scarlet from "@/public/assets/images/scarlet.png";
import leo from "@/public/assets/images/Tobi.png";
import bale from "@/public/assets/images/Bale.png";
import tobey from "@/public/assets/images/Tobey.png";
import brad from "@/public/assets/images/Brad.png";
import kevin from "@/public/assets/images/Kevin.png";
import arrowRight from "@/public/assets/images/arrowRight.svg";
import downRight from "@/public/assets/images/arrowDown.svg";
import { TabBar } from "./components/TabBar";

const CreateEvent = () => {
  const [openSmallDrop, setOpenSmallDrop] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(true);
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setOpenSideBar;
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("small");
        setOpenSideBar(false);
      }
    };

    // Initial call to set screen size on component mount
    handleResize();

    // Event listener to update screen size on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="relative min-h-dvh">
      <div className=" flex overflow-hidden sm:overflow-auto">
        <div
          className={`relative bg-fm-slate-800 p-2 flex flex-col justify-between ${
            openSideBar ? "min-w-[272px]" : "w-[17px] overflow-hidden"
          } transition-all`}
        >
          <div>
            <Image
              src={logo}
              alt="logo"
              width={64}
              height={64}
              className="px-4 mt-4 mb-6 mx-auto"
            />
            <div className=" px-5">
              <div>
                <p className=" text-[9px] text-[#FFFFFFA1]">Bem-vindo,</p>
                <p className=" text-[13px] text-[#F2F2F7] font-medium">
                  Luan Bani
                </p>
                <div className="flex mt-[9px] justify-between relative">
                  <div>
                    <div className="flex items-center gap-x-2 py-2">
                      <div className=" rounded-full w-1 h-1 bg-[#00000033]"></div>
                      <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                        Home
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2 py-2">
                      <div className=" rounded-full w-1 h-1 bg-[#00000033]"></div>
                      <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                        Cadastros
                      </p>
                    </div>
                  </div>
                  <TextalignRight
                    size="14"
                    color="#FFFFFF"
                    className={` cursor-pointer ${openSideBar ? "" : "hidden"}`}
                    onClick={() => setOpenSideBar(!openSideBar)}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-normal text-[#FFFFFF66] pl-2 mb-2">
                Dashboards
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <House size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Home
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <ShoppingBag size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Cadastro
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <Category size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Categoria
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className=" group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <MoneyArchive size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Produtos
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <People size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Usuários
                  </p>
                </div>
              </div>
              <div className=" flex gap-x-3 text-center py-1 mb-1 rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px] group">
                <div className=" w-[3px] rounded-[3px] group-hover:bg-[#C6C6C67D]"></div>
                <div className=" flex gap-x-2">
                  <Courthouse size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Estabelecimentos
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <DocumentText size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Home
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <Data size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Cadastro
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <EmptyWalletTick size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Categoria
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className=" group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <Bank size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Produtos
                  </p>
                </div>
              </div>
              <div className="group flex gap-x-3 text-center py-1 mb-1 hover:bg-[#0000000D] rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px]">
                <div className="group-hover:bg-[#C6C6C67D] w-[3px] rounded-[3px]"></div>
                <div className=" flex gap-x-2">
                  <DocumentText size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Usuários
                  </p>
                </div>
              </div>
              <div className=" flex gap-x-3 text-center py-1 mb-1 rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px] group">
                <div className=" w-[3px] rounded-[3px] group-hover:bg-[#C6C6C67D]"></div>
                <div className=" flex gap-x-2">
                  <DocumentFilter size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Estabelecimentos
                  </p>
                </div>
              </div>
              <div className=" flex gap-x-3 text-center py-1 mb-1 rounded cursor-pointer text-[#F2F2F7] hover:text-fm-slate-50 mr-[30px] group">
                <div className=" w-[3px] rounded-[3px] group-hover:bg-[#C6C6C67D]"></div>
                <div className=" flex gap-x-2">
                  <Box size="14" color="#F2F2F7" />
                  <p className=" text-[10px] font-semibold text-[#F2F2F7]">
                    Estabelecimentos
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex items-center px-5 gap-x-3">
              <Box size="14" color="#F2F2F7" />
              <h2
                className={` text-[32px] font-normal text-[#F2F2F7] ${gothic1.className}`}
              >
                RedTie
              </h2>
            </div>
          </div>
          <TextalignRight
            size="14"
            color="#FFFFFF"
            className={` top-[121px] left-[1px] cursor-pointer absolute  ${
              openSideBar ? "hidden" : ""
            }`}
            onClick={() => setOpenSideBar(!openSideBar)}
          />
        </div>

        <div className=" flex-1">
          <div className=" py-3 flex sm:items-center justify-between bg-[#F1F1F1]  px-3 sm:px-9 shadow-1xl flex-col sm:flex-row">
            <div className=" flex items-center gap-x-3">
              <label htmlFor="searchInput">
                <SidebarLeft size="14" color="#000000" />
              </label>
              <p className=" text-[10px] font-normal text-[#00000066]">
                Usuários /
              </p>
              <p className=" text-[10px] font-normal text-[#1C1C1C]">
                Gestão de Pessoas
              </p>
            </div>

            <div>
              <h2 className="font-bold"> McDonald &#39;s </h2>
            </div>

            <div className="flex justify-between items-center gap-x-2">
              <div className=" flex items-center gap-x-2 rounded-md bg-[#0000000D] px-2 py-1">
                <label htmlFor="searchInput">
                  <div>
                    <SearchNormal1 size="14" color="#00000033" />
                  </div>
                </label>
                <input
                  type="text"
                  className="  bg-[transparent] h-[20px] outline-none placeholder:text-fm-slate-500 text-[10px]"
                  id="searchInput"
                  placeholder="Search"
                />
                <div>
                  <Command size="14" color="#00000033" />
                </div>
              </div>
              <div className=" flex gap-x-3">
                <Notification size="14" color="#000000" />
                <Logout size="14" color="#000000" />
              </div>
            </div>
          </div>

          <div className=" px-3 sm:px-9 relative overflow-y-scroll">
            <div className=" flex items-center gap-x-2 cursor-pointer">
              <h3 className=" text-[10px] font-semibold py-4">
                Search filters
              </h3>
              <ArrowDown2
                size="14"
                color="#000000"
                onClick={() => setOpenSmallDrop(!openSmallDrop)}
              />
            </div>

            <div className=" flex justify-between items-end sm:justify-end">
              <div
                className={` shadow-2xl w-fit p-[10px] rounded-[5px] ${
                  openSmallDrop ? "" : "hidden"
                } absolute bg-white top-[40px] left-10`}
              >
                <div className="flex items-center gap-x-1 py-1">
                  <div className=" rounded-full w-1 h-1 bg-[#D1D1D6]"></div>
                  <p className=" text-[10px] font-medium text-[#00000085]">
                    Estabelecimento
                  </p>
                </div>
                <div className="flex items-center gap-x-1 py-1">
                  <div className=" rounded-full w-1 h-1 bg-[#D1D1D6]"></div>
                  <p className=" text-[10px] font-medium text-[#00000085]">
                    Tipo De Usuário
                  </p>
                </div>
                <div className="flex items-center gap-x-1 py-1">
                  <div className=" rounded-full w-1 h-1 bg-[#D1D1D6]"></div>
                  <p className=" text-[10px] font-medium text-[#00000085]">
                    Status
                  </p>
                </div>
              </div>

              <div className=" block sm:flex gap-x-3">
                <input
                  type="text"
                  name=""
                  id=""
                  className=" rounded-[5px] border border-[#3A35414A] outline-none text-[10px] text-[#3A354161] px-3 mb-1 h-10 sm:mb-0"
                  placeholder="Procurar Usuários"
                />
                <Button className=" bg-[#2684FF] text-white rounded-[5px] text-[10px] mb-1 block sm:inline-block sm:mb-0">
                  ADD USER
                </Button>
                <Button
                  color="default"
                  variant="bordered"
                  startContent={<ExportCurve size="16" color="#8A8D93" />}
                  className="rounded-[2px] border text-[#8A8D93] text-[8px]"
                >
                  EXPORTTAR
                </Button>
              </div>
            </div>

            <div className=" sm:grid grid-cols-18 justify-center border border-[#3A35411F] py-3 px-3 my-2 shadow-1xl hidden">
              <input
                type="checkbox"
                name=""
                id=""
                className=" w-[13px] h-[13px]"
              />
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                Nome
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                E-Mail
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                Data de Cadastro
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                status
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                Contato
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                Tipo
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                Ativo
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                Gênero
              </h3>
              <h3 className=" text-[8px] font-semibold text-[#3A3541DE] uppercase text-center">
                Editar
              </h3>
            </div>

            <TabBar
              imageSrc={scarlet}
              name="Scarlett Johansson"
              email="scarlettjohansson@gmail.com"
              date="17/06/2020"
              status={75}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="FEMININO"
            />
            <TabBar
              imageSrc={kevin}
              name="Patrick Bateman"
              email="patrickbateman@gmail.com"
              date="17/06/2020"
              status={60}
              contact="11222233333"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={bale}
              name="Tobey Maguire"
              email="tobeymaguire@gmail.com"
              date="17/06/2020"
              status={75}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={leo}
              name="Leonardo DiCaprio"
              email="leonardodicaprio@gmail.com"
              date="15/06/2023"
              status={20}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={bale}
              name="Patrick Bateman"
              email="patrickbateman@gmail.com"
              date="17/06/2020"
              status={60}
              contact="11222233333"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={tobey}
              name="Tobey Maguire"
              email="tobeymaguire@gmail.com"
              date="17/06/2020"
              status={75}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={leo}
              name="Leonardo DiCaprio"
              email="leonardodicaprio@gmail.com"
              date="15/06/2023"
              status={20}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />

            <div className=" text-[8px] font-semibold text-[#3A3541DE] shadow-1xl border border-[#3A35411F] px-3 py-2 my-3">
              More
            </div>
            <TabBar
              imageSrc={brad}
              name="Scarlett Johansson"
              email="scarlettjohansson@gmail.com"
              date="17/06/2020"
              status={30}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={scarlet}
              name="Leonardo DiCaprio"
              email="leonardodicaprio@gmail.com"
              date="15/06/2023"
              status={20}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={kevin}
              name="Patrick Bateman"
              email="patrickbateman@gmail.com"
              date="17/06/2020"
              status={60}
              contact="11222233333"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={bale}
              name="Tobey Maguire"
              email="tobeymaguire@gmail.com"
              date="17/06/2020"
              status={75}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={leo}
              name="Leonardo DiCaprio"
              email="leonardodicaprio@gmail.com"
              date="15/06/2023"
              status={20}
              contact="Não informado"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <TabBar
              imageSrc={kevin}
              name="Patrick Bateman"
              email="patrickbateman@gmail.com"
              date="17/06/2020"
              status={60}
              contact="11222233333"
              role="CONSUMIDORA"
              active="SIM"
              gender="Masculino"
            />
            <div className=" text-[8px] font-semibold text-[#3A3541DE] shadow-1xl border border-[#3A35411F] px-3 py-2 my-3 flex items-center gap-x-2">
              More{" "}
              <Image
                src={arrowRight}
                alt="logo"
                width={7}
                height={3}
                className="w-[9px] h-[8px]"
              />
            </div>

            <div className=" flex justify-end items-center">
              <div className="flex items-center gap-x-4">
                <div className=" text-[10px] font-normal text-[#3A3541AD]">
                  Linhas por página: 5
                </div>
                <div className="flex items-center text-[10px] font-normal text-[#3A3541AD]">
                  <Image
                    src={downRight}
                    alt="logo"
                    width={7}
                    height={3}
                    className="w-[9px] h-[8px]"
                  />{" "}
                  1-5 de 50
                </div>
                <div className=" flex gap-x-3">
                  <ArrowLeft2 size="14" color="#000000" />
                  <ArrowRight2 size="14" color="#000000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateEvent;
