import React from 'react'
import { Link } from 'react-router-dom'
import { BiBong, BiChevronsRight } from 'react-icons/bi'

export function Courses () {
  return (
    <section>
      <div className='max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
          <div className='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
            <h2 className='text-3xl font-bold sm:text-4xl'>
              Encuentra recursos e información
            </h2>

            <p className='mt-4 text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio iure ipsum cupiditate? Quis, odit
              assumenda? Deleniti quasi inventore, libero reiciendis minima
              aliquid tempora. Obcaecati, autem.
            </p>

            <a
              className='mt-8 inline-flex items-center rounded border border-blue-600 hover:bg-blue-600 px-8 py-3 hover:text-white bg-transparent text-blue-600 focus:outline-none focus:ring active:text-blue-500'
              href='/get-started'
            >
              <span className='text-sm font-medium'> Get Started </span>

              <BiChevronsRight className='text-1xl' />
            </a>
          </div>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
            <CourseLink href='hola' title='inglés 1' description='recursos acerca de inglés 1' />
            <CourseLink href='ejemplo' title='inglés 2' description='recursos acerca de inglés 2' />
          </div>

        </div>
      </div>
    </section>
  )
}

const CourseLink = ({ href, title, description }) => {
  return (
    <>
      <Link to={`/course/${href}`}>
        <a
          className='block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
        >
          <span className='inline-block rounded-lg bg-gray-50 p-3'>
            <BiBong className='text-3xl' />
          </span>

          <h2 className='mt-2 font-bold'>{title}</h2>

          <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
            {description}
          </p>
        </a>
      </Link>
    </>
  )
}
