import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Input, Space, Button, Modal } from 'antd';

import 'antd/dist/antd.css';
import SingInUp from '../SingInUp/SingInUp';
const { Search } = Input;

type Props = {}

const onSearch = (value: string) => console.log(value);
const content = (
  <div >
    <Space direction="vertical">

      <Search placeholder="input search text" onSearch={onSearch} enterButton />

    </Space>
  </div>

);
const cart = (
  <div>
    Chưa có gì trong giỏ hàng
  </div>
)
const dropdown = (
  <>
    <li className="w-48 p-3  hover:bg-[#DCDCDC]"><Link to=''>Classic</Link></li>
    <li className="w-48 p-3  hover:bg-[#DCDCDC]"><Link to=''>Classic</Link></li>
    <li className="w-48 p-3  hover:bg-[#DCDCDC]"><Link to=''>Classic</Link></li>
    <li className="w-48 p-3  hover:bg-[#DCDCDC]"><Link to=''>Classic</Link></li>
  </>
)

const Header = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>

      <section className="bg-black">

        <div className="flex flex-row max-w-7xl mx-auto   text-white">
          <div className="w-[25%]  font-bold text-sm leading-[84px]"><button onClick={showModal} >ĐĂNG NHẬP /  ĐĂNG KÝ</button></div>
          <div className="w-[50%] grid justify-items-center "><Link to="#"><img className="w-[200px]" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/logo-mona.png" alt="" /></Link></div>
          <div className="w-[25%]  font-bold text-sm leading-[84px]  text-white flex">
            <Popover placement="bottom" content={content} trigger="click">
              <svg className="h-6 w-6 text-white mt-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
            </Popover>
            <Popover className='pl-3' placement="bottom" content={cart} trigger="click">
              GIỎ HÀNG/0 đ
            </Popover>
            <div><Link to='/cart'><svg className="h-6 w-6 text-white mt-7 ml-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg></Link></div>
          </div>
        </div>



        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width="870px">
          <SingInUp />
        </Modal>


      </section>
      <section className='bg-[#DCDCDC]'>
        <nav className="max-w-6xl mx-auto">
          <ul className="p-3 text-center">
            <li className="inline-block p-3"><Link to="">Trang chu</Link></li>
            <li className="inline-block p-3"><Link to="">Trang chu</Link></li>
            <li className="inline-block p-3"><Link to="">Trang chu</Link></li>
            <li className="inline-block p-3">
              <Link to="">
                <Popover className='pl-3' placement="bottom" content={dropdown} trigger="hover">
                  GIỎ HÀNG/0 đ
                </Popover>
              </Link>
            </li>
            <li className="inline-block p-3"><Link to="">Trang chu</Link></li>
            <li className="inline-block p-3"><Link to="">Trang chu</Link></li>
            <li className="inline-block p-3"><Link to="">Trang chu</Link></li>
            <li className="inline-block p-3"><Link to="">Trang chu</Link></li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Header