import { Scan } from "lucide-react";
import { InformationComplementary, InformationPairing, InformationPoints } from "../components/contain-detail/information";
import Map from "../components/contain-detail/map";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/dialog";

export default function ContentDetailDataScreen() {
  return (
    <div className="space-y-12 bg-blue-50">

      {/* titile and header */}
      <div className="bg-blue-50 md:px-8 px-6 py-24">
        <div className="flex flex-col gap-y-5 items-center">
          <h1 className="font-semibold md:max-w-175 text-center text-3xl max-w-[80vw]">
            Adipisicing proident eu enim incididunt excepteur.
          </h1>
          <h2 className="md:max-w-200 max-w-[90vw] text-center text-gray-500">
            Commodo esse irure veniam occaecat consectetur sit est in aliqua nostrud commodo est.
            Culpa in consectetur ex est esse pariatur nulla ipsum laboris id sint Lorem laborum.
            Ea Lorem et occaecat sint laboris nisi reprehenderit non mollit tempor occaecat mollit.
          </h2>
        </div>
      </div>
      {/* titile and header */}

      {/* main information */}
      <div className="flex xl:flex-row flex-col py-3 justify-center items-center gap-10 p-10">
        <div className="w-full xl:w-[60%] p-5 rounded-sm bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <h1 className="text-3xl py-5">Information Title</h1>
          <InformationPairing
            title="Aliqua ipsum"
            conten="Dolor duis fugiat reprehenderit et dolor aliquip ullamco occaecat eu pariatur minim cillum."
          />
          <InformationPairing
            title="Aliqua ipsum"
            conten="Dolor duis fugiat reprehenderit et dolor aliquip ullamco occaecat eu pariatur minim cillum."
          />
          <InformationPairing
            title="Aliqua ipsum"
            conten="Dolor duis fugiat reprehenderit et dolor aliquip ullamco occaecat eu pariatur minim cillum."
          />
        </div>
        <div className="
            w-full xl:w-[40%]
            bg-white/80 rounded-sm
            pt-4 pb-5 px-8 space-y-2
            transition-all duration-300
            hover:shadow-lg hover:-translate-y-0.5
          ">
          <div className="w-full flex justify-end items-start">
            <Dialog>
              <DialogTrigger asChild>
                <button><Scan className="cursor-pointer" /></button>
              </DialogTrigger>
              <DialogContent className="xl:w-200 w-150">
                <DialogHeader>
                  <DialogTitle>Detail Daerah Terdekat</DialogTitle>
                  <DialogDescription>
                    Daerah Terdekat dari titik 10.32, 109.0021
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center">
                  <div className="w-full xl:h-100 h-50">
                    <Map />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* MAP WRAPPER */}
          <div className="w-full h-80 xl:h-90 rounded-md overflow-hidden">
            <Map />
          </div>
        </div>

      </div>
      {/* main information */}

      {/* additional information */}
      <div className="flex md:flex-row flex-col py-3 justify-center items-center gap-10 p-10">
        <div className="w-full p-5 rounded-sm bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <h1 className="text-3xl py-5">Information Title</h1>
          <p className="text-sm text-gray-500">Commodo officia id adipisicing laboris qui.</p>
          <div className="py-5 space-y-4">
            <InformationPoints
              title="Non elit nostrud consectetur"
              conten="Id duis voluptate ullamco eiusmod veniam id ullamco nostrud tempor."
              additionalInfo="Dolor amet"
            />
            <InformationPoints
              title="Non elit nostrud consectetur"
              conten="Id duis voluptate ullamco eiusmod veniam id ullamco nostrud tempor."
              additionalInfo="Dolor amet"
            />
            <InformationPoints
              title="Non elit nostrud consectetur"
              conten="Id duis voluptate ullamco eiusmod veniam id ullamco nostrud tempor."
              additionalInfo="Dolor amet"
            />
          </div>
        </div>
      </div>
      {/* additional information */}

      {/* complementary information */}
      <div className="flex md:flex-row flex-col py-3 justify-center items-center gap-10 p-10">
        <div className="w-full p-5 rounded-sm bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <h1 className="text-3xl py-5">Information Title</h1>
          <p className="text-sm text-gray-500">Commodo officia id adipisicing laboris qui.</p>
          <div className="py-5 space-y-4">
            <InformationComplementary
              title="Reprehenderit laboris"
              description="Fugiat est labore quis aliqua magna eiusmod anim duis commodo non aute ipsum."
            />
            <InformationComplementary
              title="Reprehenderit laboris"
              description="Fugiat est labore quis aliqua magna eiusmod anim duis commodo non aute ipsum."
            />
            <InformationComplementary
              title="Reprehenderit laboris"
              description="Fugiat est labore quis aliqua magna eiusmod anim duis commodo non aute ipsum."
            />
            <InformationComplementary
              title="Reprehenderit laboris"
              description="Fugiat est labore quis aliqua magna eiusmod anim duis commodo non aute ipsum."
            />
          </div>
        </div>
      </div>
      {/* complementary information */}

    </div>
  );
}
