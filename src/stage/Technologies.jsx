function Technologies(){
    return(
 <div>

            <h1 className="text-3xl font-bold mb-6">
              Technologies utilisées
            </h1>

        <div
          className="
            bg-white

            rounded-xl

            shadow-lg

            p-6
          "
        >

          <div className="space-y-4">

            {/* React */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>React</span>
                <span>70%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[70%] h-3 bg-blue-500 rounded-full" />
              </div>

            </div>

            {/* JavaScript */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>JavaScript</span>
                <span>85%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[85%] h-3 bg-yellow-500 rounded-full" />
              </div>

            </div>

            {/* Tailwind */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Tailwind CSS</span>
                <span>80%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[80%] h-3 bg-cyan-500 rounded-full" />
              </div>

            </div>

            {/* Java */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Java</span>
                <span>80%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[80%] h-3 bg-orange-500 rounded-full" />
              </div>

            </div>

            {/* Kotlin */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Kotlin / Compose</span>
                <span>70%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[70%] h-3 bg-purple-500 rounded-full" />
              </div>

            </div>

            {/* SQL */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>SQL</span>
                <span>80%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[80%] h-3 bg-green-500 rounded-full" />
              </div>

            </div>

            {/* MongoDB */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>MongoDB</span>
                <span>60%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[60%] h-3 bg-green-700 rounded-full" />
              </div>

            </div>

            {/* GitHub */}

            <div>

              <p className="font-semibold mb-1 flex justify-between">
                <span>Git / GitHub</span>
                <span>85%</span>
              </p>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-[85%] h-3 bg-black rounded-full" />
              </div>

            </div>

          </div>

        </div>
      </div>
    )
}
export default Technologies