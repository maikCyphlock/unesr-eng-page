import React from 'react'

export function LandingPage () {
  return (
    <section className='bg-gray-900 text-white '>
      <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
        <div className='mx-auto max-w-5xl text-center'>
          <h1 className='bg-gradient-to-b  from-cyan-600 via-cyan-400 to-cyan-800 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl p-4'>
            Universidad Simón Rodriguez
            <span className='sm:block '> Docencia en Inglés </span>
          </h1>

          <p className='mx-auto mt-8 max-w-xl sm:text-xl sm:leading-relaxed'>
            Sitio informativo para los estudiantes de la docencia en inglés y
            recursos para el estudio
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <a
              className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
              href='/get-started'
            >
              Get Started
            </a>

            <a
              className='block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'
              href='/about'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
