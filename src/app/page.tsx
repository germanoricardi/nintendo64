import Image from "next/image";

export default function Home() {
  return <div className="ml-72">
    <div className="w-full h-[35vh] bg-orange-400 flex-center">
      <h1>Germano</h1>
    </div>

    <div className="container mx-auto my-6">
      <div className="grid grid-cols-4 gap-4 h-[35vh]">
        <div className="flex-center bg-indigo-500">01</div>
        <div className="flex-center bg-indigo-600">02</div>
        <div className="flex-center bg-indigo-700">03</div>
        <div className="flex-center bg-indigo-800">04</div>
      </div>
    </div>

    <div className="container mx-auto my-6">
      <div className="grid grid-cols-12 gap-4">
        
        <div className="col-span-8 flex flex-col gap-4">
          {/* Item */}
          <div className="flex gap-4 bg-purple-500 rounded-md">
            <div>
              <img src="https://placehold.co/600x400" alt="Descrição" className="w-auto h-[200px]" />
            </div>
            
            <div className="flex flex-col gap-2 py-4">
              <h2 className="text-3xl">Título aqui</h2>
              <p className="flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Ler mais</button>
            </div>
          </div>
          {/* /Item */}

          {/* Item */}
          <div className="flex gap-4 bg-purple-500 rounded-md">
            <div>
              <img src="https://placehold.co/600x400" alt="Descrição" className="w-auto h-[200px]" />
            </div>
            
            <div className="flex flex-col gap-2 py-4">
              <h2 className="text-3xl">Título aqui</h2>
              <p className="flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Ler mais</button>
            </div>
          </div>
          {/* /Item */}
        </div>

        <div className="col-span-4 bg-indigo-700 rounded-md flex-center">banner</div>
      </div>
    </div>
  </div>;
}
