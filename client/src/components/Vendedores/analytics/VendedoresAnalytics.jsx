import Nav from '../../Nav/Nav'
import { useState, useEffect } from 'react';

const AnalyticsSealer = () => {
  const data = [
    {
      id: '876364',
      client: 'Social Media Lab',
      profesion: 'Abogado',
      nivel: 1,
      telefono: '+492563627',
      Email: 'arroragaur@gmail.com',
      status: true
    },
    {
      id: '131231',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '223456',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 2,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: true
    },
    {
      id: '242562',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '295267',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '211111',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: true
    },
    {
      id: '222222',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: true
    },
    {
      id: '244444',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: true
    },
    {
      id: '255555',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '266666',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: true
    },
    {
      id: '277777',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '288888',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '299999',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '888888',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '777777',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '666666',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '555555',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '444444',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '333333',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '111111',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '123213',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: true
    },
  ]

  const cardsPerPage = 8
  const totalPages = Math.ceil(data.length / cardsPerPage)

  const [currentPage, setCurrentPage] = useState(1)
  const [currentCards, setCurrentCards] = useState([])

  useEffect(() => {
    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const cardsToDisplay = data.slice(indexOfFirstCard, indexOfLastCard)
    setCurrentCards(cardsToDisplay)
  }, [currentPage])


  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="flex w-screen">
      <Nav />
      <div className="flex flex-col w-screen">
        <div className="flex items-center justify-between m-8">
          <h1 className="text-2xl font-bold text-white">Analytics Selers</h1>
          <select className="w-32 h-10 rounded-lg bg-purple-500 text-white text-center">
            <option className="py-1">2023</option>
          </select>
        </div>
        <div className="h-3/5">
          <div className="flex flex-col">
            <div className="w-full flex justify-center  mb-[30px] ">
              <div className="flex flex-row  w-[1500px] items-start mt-80px  space-x-52">
                <div className=" w-1/7 text-center">Invoice ID</div>
                <div className="w-1/7 text-center">Name</div>
                <div className=" w-1/7 text-center">Profession</div>
                <div className="w-1/7 text-center">Nivel</div>
                <div className="w-1/7 text-center">Email</div>
                <div className="w-1/7 text-center">Status</div>
              </div>
            </div>
            {currentCards.map((item) => (
              <div className="w-full flex justify-center mb-8 h-3/5" key={item.id}>
                <div className="flex flex-row rounded bg-[#39394B] w-[1500px] h-16 items-center mt-80px justify-center space-x-28">
                  <div className="w-1/7 text-center">{item.id}</div>
                  <div className="w-1/7 text-center">{item.client}</div>
                  <div className="w-1/7 text-center">{item.profesion}</div>
                  <div className="w-1/7 text-center">{item.nivel === 0 ?
                    <div
                      className='bg-purple-500 text-[#39394B] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'
                    >
                      0
                    </div> : item.nivel === 1 ? <div
                      className='bg-purple-500 text-[#39394B] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'
                    >
                      1
                    </div> : <div
                      className='bg-purple-500 text-[#39394B] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'
                    >
                      2
                    </div>}</div>
                  <div className="w-1/7 text-center">{item.telefono}</div>
                  <div className="w-1/7 text-center">{item.Email}</div>
                  
                  <div className="w-1/7 text-center">
                    {item.status === true ? (
                      <div className="bg-emerald-400 w-44 h-11 flex justify-center items-center text-white rounded-3xl">
                        Contactado
                      </div>
                    ) : (
                      <div className="bg-pink-500 w-44 h-11 flex justify-center items-center text-white rounded-3xl ">
                        Sin contacto
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-purple-500 text-white' : 'bg-[#39394B] text-white'
                  }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AnalyticsSealer